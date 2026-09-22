'use strict';
/**
 * Shared detection for "did work happen that no journal entry covers?"
 *
 * Deliberately derives everything from what is ON DISK — file mtimes versus the
 * journal's last write — so it works no matter how the previous session ended.
 * No state file, nothing to go stale, nothing that depends on a hook having run.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

/** The workspace this hook is running in. Claude Code sets CLAUDE_PROJECT_DIR
 *  to the folder holding .claude/, which is the workspace root by definition.
 *  The original hardcoded one machine's path, which does not survive being
 *  copied into anyone else's install. */
const OS_DIR = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const STUB_MARK = '⚙ Unjournaled work at session end';

// Files that ARE the ritual — changing them isn't "work that needs journalling".
const RITUAL = [/^loops\.md$/i, /^journal\//i, /^\.claude\/hooks\//i];
const SKIP_DIR = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.astro', 'archive', '.vite', 'coverage']);
const WORK_EXT = /\.(md|json|js|jsx|ts|tsx|py|css|scss|html|sql|yml|yaml|php)$/i;

const norm = (p) => String(p || '').trim().replace(/\\/g, '/')
  .replace(/^\/([a-zA-Z])\//, (_, d) => d + ':/').toLowerCase().replace(/\/+$/, '');

function todayStamp(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

const journalPathFor = (day) => path.join(OS_DIR, 'journal', `${day}.md`);

function isRitual(rel) { return RITUAL.some((re) => re.test(rel)); }

function gitChanged() {
  try {
    const out = execFileSync('git', ['-C', OS_DIR, 'status', '--porcelain', '--untracked-files=normal'],
      { encoding: 'utf8', timeout: 8000, stdio: ['ignore', 'pipe', 'ignore'] });
    return out.split(/\r?\n/)
      .map((l) => l.slice(3).trim().replace(/^"|"$/g, ''))
      .filter((p) => p && !p.endsWith('/') && !isRitual(p));
  } catch { return []; }
}

/** projects/ is gitignored, so walk it shallowly (depth <= 3). */
function projectsChanged(since, cap) {
  const hits = [];
  const walk = (dir, depth, rel) => {
    if (depth > 3 || hits.length >= cap) return;
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (hits.length >= cap) return;
      if (e.name.startsWith('.') || SKIP_DIR.has(e.name)) continue;
      const full = path.join(dir, e.name);
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) { walk(full, depth + 1, r); continue; }
      if (!WORK_EXT.test(e.name)) continue;
      try { if (fs.statSync(full).mtimeMs > since) hits.push(`projects/${r}`); } catch { /* ignore */ }
    }
  };
  walk(path.join(OS_DIR, 'projects'), 0, '');
  return hits;
}

/**
 * @returns {{ day:string, files:string[], stubDay:string|null }}
 *   files   - work changed since the journal was last written
 *   stubDay - a journal day still carrying an unfolded machine stub, if any
 */
function findUnjournaled({ cap = 40, lookBackDays = 3 } = {}) {
  const day = todayStamp();

  let journalMtime = 0;
  try { journalMtime = fs.statSync(journalPathFor(day)).mtimeMs; } catch { /* none today */ }

  // Fall back to an 18h window when there's no journal for today at all.
  const since = journalMtime || (Date.now() - 18 * 3600 * 1000);

  const files = [];
  for (const rel of gitChanged()) {
    if (files.length >= cap) break;
    try { if (fs.statSync(path.join(OS_DIR, rel)).mtimeMs > since) files.push(rel); }
    catch { /* deleted — ignore */ }
  }
  if (files.length < cap) files.push(...projectsChanged(since, cap - files.length));

  // A stub left behind by session-close.js that nobody folded into prose yet.
  let stubDay = null;
  for (let i = 0; i < lookBackDays; i += 1) {
    const d = todayStamp(new Date(Date.now() - i * 86400000));
    try {
      if (fs.readFileSync(journalPathFor(d), 'utf8').includes(STUB_MARK)) { stubDay = d; break; }
    } catch { /* no journal that day */ }
  }

  return { day, files, stubDay };
}

/**
 * Has the learning loop actually been running?
 *
 * CLAUDE.md says a session records what it learns about the person as it goes, no
 * skill required. Measured 2026-09-20, that instruction was half-obeyed:
 * innkeeper/learnings.md grew five times in ten days as part of ordinary
 * working commits, while the me/ files had not moved
 * in six days of heavy work containing several explicit corrections.
 *
 * The asymmetry is worth naming, because it says why more instruction would
 * not have helped: the keeper's own mistakes are vivid at the moment they
 * happen, and a preference someone states in passing feels like conversation rather
 * than data. So this does not remind anyone to be diligent. It does what the
 * journal check already does — looks at the evidence on disk and reports an
 * absence, which is the only part a session cannot talk itself out of.
 *
 * @returns { behind: boolean, days: number, commits: number, staged: number }
 */
function findUnlearned({ quietDays = 4, quietCommits = 4, stagedCap = 25 } = {}) {
  const git = (...a) => {
    try {
      return execFileSync('git', ['-C', OS_DIR, ...a],
        { encoding: 'utf8', timeout: 6000, stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    } catch { return ''; }
  };

  const lastISO = git('log', '-1', '--format=%cI', '--', 'me/');
  if (!lastISO) return { behind: false };                 // no history to judge

  const since = Date.parse(lastISO);
  const days = Math.floor((Date.now() - since) / 86400000);
  const commits = git('log', '--oneline', `--since=${lastISO}`).split(/\r?\n/).filter(Boolean).length;

  // How much is staged in me/learnings.md awaiting promotion. A long staging
  // area is the other half of the same loop: observations recorded but never
  // promoted or dropped.
  let staged = 0;
  try {
    staged = fs.readFileSync(path.join(OS_DIR, 'me', 'learnings.md'), 'utf8')
      .split(/\r?\n/).filter((l) => /^-\s+\d{4}-\d{2}-\d{2}/.test(l)).length;
  } catch { /* no file yet */ }

  const behind = (days >= quietDays && commits >= quietCommits);
  return { behind, days, commits, staged, overStaged: staged >= stagedCap };
}

module.exports = { findUnjournaled, findUnlearned, journalPathFor, todayStamp, norm, STUB_MARK, OS_DIR };

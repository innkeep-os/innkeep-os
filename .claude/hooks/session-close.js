#!/usr/bin/env node
'use strict';
/**
 * SessionEnd: best-effort. Append a factual stub to today's journal when a
 * session ends with work that no entry covers.
 *
 * This is a CONVENIENCE, not the safety net. SessionEnd hooks share a ~1.5s
 * budget and may not run at all when a terminal tab is closed or the process is
 * killed — so session-open.js re-derives the same answer from disk and is the
 * thing actually guaranteeing nothing is lost. If this runs, the next session
 * gets a head start; if it doesn't, nothing breaks.
 *
 * Fails silently on any error: a broken hook must never cost anyone a session.
 */

const fs = require('fs');

try {
  let input = {};
  try { input = JSON.parse(fs.readFileSync(0, 'utf8')); } catch { /* keep defaults */ }

  const { findUnjournaled, journalPathFor, norm, STUB_MARK } = require('./lib-worklog.js');

  // No path guard. This hook runs only where a workspace wires it in its own
  // .claude/settings.json, which is exactly when it should — the original
  // checked for one hardcoded folder, which does not survive being copied.
  const cwd = norm(input.cwd || process.cwd());
  if (!cwd) process.exit(0);

  // `clear` and `resume` aren't real endings — don't write a stub for them.
  if (input.reason === 'clear' || input.reason === 'resume') process.exit(0);

  const { day, files, stubDay } = findUnjournaled({ cap: 25 });
  if (files.length === 0) process.exit(0);
  if (stubDay === day) process.exit(0); // today already has an unfolded stub

  const stamp = new Date().toTimeString().slice(0, 5);
  const stub =
    `\n---\n\n### ${STUB_MARK} (${stamp})\n\n` +
    `_Written by the SessionEnd hook: a session ended with these files changed and no entry ` +
    `covering them. The next session should fold this into real prose above and delete this block._\n\n` +
    files.map((f) => `- \`${f}\``).join('\n') + '\n';

  const target = journalPathFor(day);
  fs.mkdirSync(require('path').dirname(target), { recursive: true });
  if (!fs.existsSync(target)) fs.writeFileSync(target, `# ${day}\n`, 'utf8');
  fs.appendFileSync(target, stub, 'utf8');
} catch { /* never fail a session close */ }

process.exit(0);

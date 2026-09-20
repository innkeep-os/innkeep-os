#!/usr/bin/env node
'use strict';
/**
 * SessionStart: notice work the last session never journalled.
 *
 * Works out the answer from disk every time rather than trusting a marker,
 * so it is correct whether the previous session exited cleanly, crashed, or
 * had its terminal tab closed mid-sentence.
 *
 * Silent when there's nothing to report. Fails open, always.
 */

const fs = require('fs');

try {
  let input = {};
  try { input = JSON.parse(fs.readFileSync(0, 'utf8')); } catch { /* keep defaults */ }

  const { findUnjournaled, norm, STUB_MARK } = require('./lib-worklog.js');

  // No path guard. This hook runs only where a workspace wires it in its own
  // .claude/settings.json, which is exactly when it should — the original
  // checked for one hardcoded folder, which does not survive being copied.
  const cwd = norm(input.cwd || process.cwd());
  if (!cwd) process.exit(0);

  const { day, files, stubDay } = findUnjournaled();
  if (files.length === 0 && !stubDay) process.exit(0);

  const parts = [];

  if (stubDay) {
    parts.push(
      `journal/${stubDay}.md carries an unfolded machine stub marked "${STUB_MARK}" — ` +
      `a previous session ended without writing a real entry.`
    );
  }

  if (files.length > 0) {
    const shown = files.slice(0, 25).map((f) => `  - ${f}`).join('\n');
    const more = files.length > 25 ? `\n  - …and ${files.length - 25} more` : '';
    parts.push(
      `These files changed after journal/${day}.md was last written, so no entry covers them yet:\n` +
      `${shown}${more}`
    );
  }

  const context =
    `Unjournalled work from a previous session:\n\n${parts.join('\n\n')}\n\n` +
    `If the user's request this session relates to that work, fold it into real prose in the ` +
    `journal (what was done, what's open) and delete any stub block. If it's unrelated, mention ` +
    `it ONCE as a casual one-line heads-up and then drop it — do not derail the user's actual ` +
    `request, do not re-raise it later, and do not treat it as a task list.`;

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: context },
  }));
} catch { /* never block a session from starting */ }

process.exit(0);

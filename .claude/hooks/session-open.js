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

  const { findUnjournaled, findUnlearned, norm, STUB_MARK } = require('./lib-worklog.js');

  // No path guard. This hook runs only where a workspace wires it in its own
  // .claude/settings.json, which is exactly when it should — the original
  // checked for one hardcoded folder, which does not survive being copied.
  const cwd = norm(input.cwd || process.cwd());
  if (!cwd) process.exit(0);

  const { day, files, stubDay } = findUnjournaled();
  const learn = findUnlearned();

  // Either gap is worth one line. Neither is worth a second one.
  if (files.length === 0 && !stubDay && !learn.behind && !learn.overStaged) process.exit(0);

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

  if (learn.behind) {
    parts.push(
      `me/ has not been written in ${learn.days} days, across ${learn.commits} commits. ` +
      `CLAUDE.md says a session records what it learns about the person AS IT GOES — a stated ` +
      `preference to me/preferences.md, an observation to me/learnings.md — and that has ` +
      `not been happening. Measured 2026-09-20: the keeper's own learnings grew five times ` +
      `in ten days while the person-facing ones did not move at all, so this is the half that gets skipped.`
    );
  }

  if (learn.overStaged) {
    parts.push(
      `me/learnings.md holds ${learn.staged} dated observations waiting to be promoted or ` +
      `dropped. That is what /reflect is for, and nothing runs it on a schedule.`
    );
  }

  const context =
    `Loose ends from previous sessions:\n\n${parts.join('\n\n')}\n\n` +
    `Unjournalled work: if this session's request relates to it, fold it into real prose in the ` +
    `journal and delete any stub block. A learning gap is different — it is not a task to do now, ` +
    `it is a warning about how THIS session will behave: record what you learn as you go, in the ` +
    `turn you learn it, rather than leaving it for the end where it gets dropped. ` +
    `Either way, mention it to the user ONCE as a casual one-line heads-up and then drop it — ` +
    `do not derail their actual request, do not re-raise it later, and do not treat it as a list.`;

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: context },
  }));
} catch { /* never block a session from starting */ }

process.exit(0);

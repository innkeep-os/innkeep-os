---
name: check-in
description: The Clean up switch (the organize switch) — the OS's single manual hygiene verb, OS-wide scope. Grooms the keeper's notes + learnings, reconciles each project's list and outline against reality (gated diffs), promotes confirmed learnings, sweeps stale items + pile leftovers. Never generative, never scheduled; everything lands gated. Use when you say "clean up the OS" / "run a clean-up" or Innkeep's Clean up lever fires. (Folder keeps its historical name; the verb is "Clean up" — never "check-in".)
---

# Clean up — the organize switch

You are the OS's **single manual hygiene verb**, OS-wide scope (the whole-OS sibling of `/organize <target>`). You run only when you (or the Clean up lever) asks — **never on a schedule, never as a standing background rhythm**. You are **never generative**: no new notes, no research, no drafting your Focus, no papers, no recommendations of your own. You tidy what the live discipline already wrote. Everything you produce lands **gated** — a proposal you apply or dismiss.

## Ground rules

- **You run in a shadow worktree.** Edits to workspace files (innkeeper/, pile/, notes/, me/, ideas/, loops.md, CLAUDE.md) are gated proposals — safe to make, reviewed later. Repo-bearing subtrees under `projects/`/`work/` are shadowed per-repo (gated per-repo proposals); loose non-repo files there are refused by the server chokepoint. **Never `git push` anywhere.**
- Auto-apply is not yours to invoke or assume: even writes in the additive-verified class should simply be made normally — the server classes hunks itself.
- `innkeeper/charter.md` is never yours to rewrite wholesale; propose charter edits only as ordinary gated diffs (it is excluded from every auto-apply class).
- Be self-contained: rely only on the repo's files and git. Get the date from the machine clock (`date +%F`), never your own sense of today.
- Naming: the verb is **"Clean up"** — "check-in" is dead as copy. Recommendations are "recommendations" (never "Tray"); plans are "plans" (never "stacks").

## The sweep, in order (skip any section with nothing to do — absence is the reward)

1. **Groom the notebook.** `innkeeper/notes/`: consolidate overlapping notes, prune superseded ones (move dead material to `archive/`, don't delete), keep it a small readable set — "small number of well-tended files" applies to the keeper's files too. Never invent notes; only tend what sessions wrote.
2. **Groom the keeper's files.** `innkeeper/notes/` (drop notes about parked/retired surfaces; merge duplicates) and `innkeeper/learnings.md` (same, plus promote settled lessons into a `practices.md` if it has passed ~15 entries). `charter.md` and `state.md` were archived 2026-09-09 — the Kitchen injected the first and the companion app derives the second.
3. **The reconcile sweep (K15 safety net).** For each active project: diff its own list (`projects/X/loops.md`) and `outline.md` against the journal and README. Propose rewrites as gated diffs — strike what evidence says is done, flag supersession-by-direction-change, re-order to match reality. The primary mechanism is the live session rule (sessions reconcile as they work); you are the safety net that catches drift, not the owner of freshness.
4. **Promote what is confirmed.** If `me/learnings.md` has grown long, move observations seen twice into `profile.md`/`preferences.md` with both dates and the evidence, and delete the staged line — as gated diffs. (Promotion belongs to the session that has the evidence; this is only the safety net for what that missed.)
5. **Stale sweeps.** Flag tasks untouched 3+ weeks (append ` — stale since YYYY-MM-DD?`, never delete), projects with old Status: lines, dead links anywhere in the workspace. Minimal edits, casual tone, once.
6. **Pile leftovers.** Anything sitting in `pile/` gets filed per the `/process-pile` routing (its rules apply verbatim, including the vault/notes boundary). Deletion of an emptied capture is allowed there and only there.
7. **Sweep aged counter lines.** Stale, long-untouched lines on `counter.md` (the ones the shell renders faded) move whole to the daily archive (`counter/YYYY-MM-DD.md`, clips and receipts included; create/append). Never rewrite a line's text; moving whole lines is the only allowed mutation.
8. **Journal the sweep.** Append a short dense entry to today's `journal/YYYY-MM-DD.md`: what was groomed, reconciled, swept, and anything left for your review.

## Self-improve
Read `learnings.md` in this skill's folder at the START if it exists (past sweep lessons — e.g. a project whose outline always drifts a certain way, a note class that keeps re-accumulating, something safe-looking that must be left alone), and at the END append a dated one-line lesson ONLY when a run taught something non-obvious about grooming this OS better — grounded in what actually happened, never restating a rule already above, created lazily on the first real lesson. Lands gated like everything else this skill produces. Per CLAUDE.md's learning loop; same don't-rationalize guard as the promotion pass in step 4.

## What this skill never does (dead by Kitchen v3 ruling, 2026-07-17)

- No drafting tomorrow's Focus/Now — Now upkeep rides the live session rule.
- No morning paper, no `journal/paper-*.md` — the paper is dead; the live-now view ("Now") replaced it.
- No research, pre-research, or note-writing — generative work rides the live discipline in real sessions.
- No scheduled or nightly anything — if nobody pressed the lever, this never ran.

## Tone

Organised, but laid-back. Mention stale things once, casually; no productivity guilt. If everything is already tidy, say so in two lines and stop — a short clean-up is the system working.

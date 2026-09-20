---
name: organize
description: Tidy one target — a project's docs (/organize <project>), the idea shelf (/organize ideas), notes, or any OS folder/file. Dedupe, enforce current-state-only, propose splits/archives. NEVER restructures without your explicit approval. Use when you say "organize <thing>", "tidy <thing>", "clean up <thing>", or a doc/section is getting crowded. Supersedes /organize-ideas.
---

# Organize

Tidy exactly one target, named in the invocation (`/organize <project>`, `/organize ideas`, `/organize notes`). Always takes a target — never a whole-OS sweep.

**Hard rule: propose first, restructure only after you approve. Never silently.**

## Steps
1. Resolve the target: a project name → `projects/<name>/`; "ideas" → `ideas/`; "notes" → `notes/`; "home" → `HOME.md`; "tasks" → `tasks/` (the tasks place: `outline.md` + `conversations/`); otherwise treat as a path. Read everything in it.
2. Safe to do without asking (nothing deleted, nothing lost):
   - Dedupe repeated information — one home per fact, links everywhere else
   - **Route mis-filed items to their proper home** — an idea hiding in tasks → ideas shelf, reference material → notes, a person detail → people/; cross-folder moves of individual items are normal tidying (leave a pointer where one helps)
   - **Current-state-only:** superseded designs/decisions move to the target's `archive/` (create if needed) or stay only in the journal; docs describe what IS
   - Fix stale Status/State lines and broken links; tighten wording without changing meaning
   - Split run-on list items into one-line entries
3. Assess structure against the grow-on-demand rule: sections with ~15+ items or files covering several distinct topics → candidates for their own file/folder; near-empty files → candidates for merging back. **Structure changes (splitting/merging/renaming files and folders) are what need approval — item-level moves don't.**
4. Present restructure proposals as a short menu: what moves where, what merges, what looks dead (his call to prune). Only execute after approval, leaving a link behind at each old location.
5. Sweep: update HOME.md and any other live references if the shape changed.
6. Report what changed in a few lines.

## Target-specific rules
- **ideas/** — dedupe near-identical entries; graduation = strikethrough + pointer to where it went; section with ~15+ items → propose own file (e.g. `ideas/<that-area>.md`).
- **projects/<name>/** — README keeps its **Status:** line and a current State section; design docs stay canon-only (superseded → `archive/` with a one-line reason, the pattern mechanics/archive/ set); journals are never touched.
- **tasks** — keep Now 1–3 items; sweep checked items to Done; route out anything that isn't actually a task (idea → ideas, reference → notes); group by project.
- **home** — pointer integrity: every link resolves, every line is one sentence + link (no regrown history dumps), Recently pruned to ~10 lines, Commands table matches `.claude/skills/`.
- **me/** — content changes here are `/reflect` territory; only fix structure/links.
- **pile/** — not an /organize target: that's `/process-pile`, which files each capture's *contents* where they belong and then deletes the leftover capture file (the one place deletion is allowed — the content lives on where it was filed). /organize moves mis-filed exceptions and deletes nothing.

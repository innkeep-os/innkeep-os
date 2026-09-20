# Your AI OS — operating rules

This folder is your personal AI OS: a plain-markdown workspace that Claude reads
and maintains across sessions. These rules are how it behaves. Edit them — they
are yours now, and the ones below are a starting point that has survived real
use, not a specification.

## Sessions

Open many short-lived sessions — one per chunk of work — rather than one long
one. **Sessions are disposable; the files are the continuity.** That is why the
end-of-session ritual matters: it is what makes closing a session free. Never
assume another session's in-conversation context. If it mattered, it is in a file.

## Start here

- At the start of every session, read **`HOME.md`** first. It is the dashboard
  and index for everything else.
- Also read **`open-loops.md`** — the session handoff ledger. Anything in it is
  work a previous session left in flight.
- After doing meaningful work, update `HOME.md` so the next session starts
  current.
- **The live reconcile rule (hard contract):** any session that did meaningful
  project work reconciles that project's own `tasks.md` — and its `outline.md`,
  where one exists — **before journaling**, live, as part of the work. The
  session that created the drift has the context to fix it in sixty seconds; no
  scheduled pass ever owns this.
- Before ending a session: update `open-loops.md` — add anything you are leaving
  unfinished or unverified (one line: date, area, what is dangling → next step),
  and **delete** lines you closed. Keep it small; empty is the goal state.
  (Loops ≠ tasks: tasks are things you chose; loops are things waiting on you
  whether you chose them or not.)
- **Write the day's letter.** If `journal/letters/<today>.md` does not exist and
  this session did real work, write it before you finish: what happened, what
  you noticed, what you would like to do, and what you could not tell. Judgments
  are welcome — it is the one place they belong — but date them and say what
  they rest on. Innkeep renders it; nothing else in the app is allowed to guess.

## Structure

- **`HOME.md`** — the overview: quick links, active projects, recent activity.
- **`me/`** — the model of you. `profile.md` (who you are), `preferences.md`
  (how you like things done), `learnings.md` (unconfirmed observations, a
  staging area).
- **`innkeeper/`** — the model of the keeper, mirroring `me/`:
  `learnings.md` (how Claude should work — concrete operating corrections) and
  `notes/` (findings about the world, your projects, your tools — one topic per
  file). Kept current live, as sessions work; never on a schedule.
- **`pile/`** — unprocessed captures. Anything new lands here first, any file
  type. Processing means moving the file whole if it *is* the artefact, or
  dissolving its content into the right files and deleting the emptied capture.
- **`tasks/`** — loose to-dos belonging to no project. Per-project agendas live
  in each project's own `tasks.md`, never restated here.
- **`ideas/`** — one file per idea, `ideas/<slug>.md`, indexed by
  `ideas/outline.md`. No commitment implied.
- **`projects/`** — one folder per active project, each with its own
  `README.md`. See "Projects are their own repos" below.
- **`notes/`** — single-topic reference you consult while working.
- **`journal/`** — dated logs, `YYYY-MM-DD.md`, append-only. **Written for
  Claude, not for you** — dense detail is good here; it is the cross-session
  memory. Corollary: project docs stay current-state only, and superseded
  material moves to the journal rather than piling up in the doc.
  `journal/letters/` holds the letters.
- **`people/`** — one file per person worth remembering context about.
- **`archive/`** — finished projects and stale material. Move, never delete.

## Projects are their own repos

This workspace is a repo. So is each project inside it, and `/projects/` is
gitignored here on purpose — **the OS does not contain your projects, it
references them.** Each project keeps its own `README.md`, `loops.md`,
`tasks.md` and `outline.md`, so its ledgers travel with the work.

A session opened on a project repo should attach this one and read it first —
`CLAUDE.md`, `HOME.md`, `open-loops.md`, `me/learnings.md`,
`innkeeper/learnings.md`. Put those instructions in each project's own
`CLAUDE.md`; a session that skips them starts blind and re-solves what was
already paid for.

## Marks — the margin

Innkeep lets you red-pen a document, and a mark is an **HTML comment at the line
it is about**:

```markdown
On a failed save the threshold inverts.
<!-- you 2026-01-15: Flip this. Inversion should be the default. -->
```

**Before editing any file, read its marks.** They sit inline, at the line they
concern, so you cannot miss one while working in that paragraph. **They are
direction**, written when someone was looking at that exact line. When you act
on a mark, **remove it in the same commit that acts on it** — nothing is lost,
because the mark is itself a commit.

You may leave marks too. Put the reason with the proposal and **land on a
recommendation**: Innkeep has no buttons and runs nothing, so a mark that hands
the choice back is just an unanswered question sitting in a file.

## Conventions

- Everything is markdown. No databases, no proprietary formats.
- Filenames kebab-case; dates `YYYY-MM-DD`.
- **Dates in content are always absolute** — write the date, never "today" or
  "next week". **Get it from the machine's local clock** (`date +%F`), never
  from the assistant's own sense of today; the harness clock can run ahead of
  yours and has misdated journals.
- **The memory routing rule** — four destinations, one home per fact:
  observations about **you** → `me/learnings.md` · lessons about **how Claude
  should work** → `innkeeper/learnings.md` · findings about the **world, your
  projects, your tools** → `innkeeper/notes/` · **what happened** → `journal/`.
- **The outline/tasks boundary:** the outline is the focus, `tasks.md` is the
  ledger. Tasks never restate outline steps. A near-empty `tasks.md` during a
  focused phase is healthy — never manufacture tasks from steps.
- **The loops/tasks boundary:** `tasks.md` is work you chose; `loops.md` is what
  is waiting on **you** — things you glanced by, missed, or never resolved.
  *A task is something you chose; a loop is something waiting on you whether you
  chose it or not.* `loops.md` is the one file under a correctness contract, so
  reconcile it live, never on a schedule.
- Every project `README.md` opens with a **Status:** line (active / waiting /
  someday / done) and a **Next:** line. Projects with an `outline.md` point
  Next: at it rather than maintaining both.
- Prefer editing existing files over creating new ones. A small number of
  well-tended files beats sprawl.
- **Structure grows on demand.** When a section gets crowded (~15+ items) or an
  item grows sub-content, propose graduating it to its own file or folder. Empty
  folders and one-item files are the enemy.
- **Renames sweep everything.** Any rename — folder, skill, section — means
  grepping the whole workspace and updating every live reference. Journals stay
  as written; they are history.
- **Parallel sessions exist.** Before creating or editing machinery (skills,
  `CLAUDE.md`, `HOME.md` structure), re-read the current state fresh — another
  session may have changed it since this one started.

## The learning loop (always on)

This workspace is a second brain; it must get smarter with every session.

- **Before acting**, read `me/preferences.md`, `me/profile.md` and
  `innkeeper/learnings.md`. All three are short by design.
- **During a session**, when a fact, preference or correction appears — or you
  observe a pattern — record it. Stated explicitly → `me/profile.md` or
  `me/preferences.md`, dated. Inferred → `me/learnings.md` as
  `- YYYY-MM-DD [confidence] observation`. Never interrupt the task to do it;
  fold it in and mention it at the end.
- **Corrections are gold.** If you are corrected on *how* you did something,
  capture it in `me/preferences.md` with the why.
- **Skills live here too**, in `.claude/skills/<name>/SKILL.md`. When the same
  multi-step thing happens twice, propose turning it into one. A skill that runs
  often may keep its own `learnings.md` — read it at the start of a run, and
  append a dated one-line lesson at the end **only** when that run taught
  something non-obvious. Never vague self-praise; never a rule already in the
  skill. Create the file lazily, on the first real lesson.

## Tone

Organised, but laid-back. The OS does the tidying *for* you — it never nags.
Mention a stale task or a full pile once, casually, and let it go. No
productivity guilt, no urgency theatre, no "3 days overdue!".

## What Claude should NOT do

- **Don't delete files** — move them to `archive/`.
- **Don't restructure folders without asking.**
- **Don't duplicate information across files.** Link instead. Each thing has one
  home; if a status line starts accumulating past events, move them to the
  journal.
- **Don't invent activity.** A count, a date and a filename cannot go stale. A
  noticing can — so it belongs in a dated letter, never pinned into the
  furniture as though it were a fact.

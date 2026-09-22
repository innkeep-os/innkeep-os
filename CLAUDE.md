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

- At the start of every session, read **this file** first — it is the rules and
  the index in one. There is no separate dashboard to keep current.
- Also read **`loops.md`** — the one list for everything open that belongs to no
  project, including whatever a previous session left in flight.
- After doing meaningful work, **journal it**. That is the record; nothing else
  needs updating to leave things current.
- **The live reconcile rule (hard contract):** any session that did meaningful
  project work reconciles that project's own `loops.md` — and its `outline.md`
  — **before journaling**, live, as part of the work. The
  session that created the drift has the context to fix it in sixty seconds; no
  scheduled pass ever owns this.
- Before ending a session: reconcile the list of whatever you worked in. Add
  anything you are leaving unfinished or unverified, and **tick** what you
  closed rather than deleting it — a settled line stays, because the file is the
  archive. Anything dangling that belongs to a project goes in **that project's**
  `loops.md`, not at the root.
  (Loops ≠ tasks: tasks are things you chose; loops are things waiting on you
  whether you chose them or not.)

## Structure

- **`loops.md`** — **the workspace's own list**: everything open that belongs to
  no project, loose to-dos included. One list per place, and this is the root's.
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
- **`projects/`** — one folder per project, and **gitignored on purpose**: this
  workspace does not contain your projects, it references them. Each project is
  its own repo with its own `README.md`, `loops.md`, `outline.md` and
  `CLAUDE.md`, so its ledger travels with the work. The folder starts empty.
- **`ideas/`** — one file per idea, `ideas/<slug>.md`, indexed by
  `ideas/outline.md`. No commitment implied.
- **`projects/`** — one folder per active project, each with its own
  `README.md`. See "Projects are their own repos" below.
- **`notes/`** — single-topic reference you consult while working.
- **`journal/`** — dated logs, `YYYY-MM-DD.md`, append-only. **Written for
  Claude, not for you** — dense detail is good here; it is the cross-session
  memory. Corollary: project docs stay current-state only, and superseded
  material moves to the journal rather than piling up in the doc.
- **`people/`** — one file per person worth remembering context about.
- **`archive/`** — finished projects and stale material. Move, never delete.

## Projects are their own repos

This workspace is a repo. So is each project inside it, and `/projects/` is
gitignored here on purpose — **the OS does not contain your projects, it
references them.** Each project keeps its own `README.md`, `loops.md`
and `outline.md`, so its ledger travels with the work.

A session opened on a project repo should attach this one and read it first —
`CLAUDE.md`, `loops.md`, `me/learnings.md`, `innkeeper/learnings.md`. Put those instructions in each project's own
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
- **One list per place:** every place keeps **one** ledger, `loops.md`, holding
  everything open there in one pass — calls waiting on **you** (things you
  glanced by, missed, or never resolved) and work waiting on whoever picks it
  up. It is the one file under a correctness contract, so reconcile it live,
  never on a schedule. **Settled lines (`- [x]`) stay** — the file is the
  archive. Headings inside it are free; they organise one pass, they do not
  make a second list.
- **The outline/list boundary:** `outline.md` is the **zoomed-out view** — the
  shape of the work, three to seven numbered steps each with an honest one-line
  `why:`. `loops.md` is the detail under it and never restates its steps. A
  near-empty list during a focused phase is healthy — never manufacture list
  items from steps. A step retired from the outline moves to an `## Archive`
  heading at the foot of that file rather than being deleted.
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
  `CLAUDE.md`, the folder shape), re-read the current state fresh — another
  session may have changed it since this one started.

## The learning loop (always on)

This workspace is a second brain; it must get smarter with every session.

- **Before acting**, read `me/preferences.md`, `me/profile.md` and
  `innkeeper/learnings.md`. All three are short by design.
- **During a session**, when a fact, preference or correction appears — or you
  observe a pattern — record it **in the turn it happens**, not at the end where
  it gets dropped. Stated explicitly → `me/profile.md` or `me/preferences.md`,
  dated. Inferred → `me/learnings.md` as `- YYYY-MM-DD [confidence] observation`.
  Never interrupt the task to do it; fold it in and mention it at the end.
- **Promote on the SECOND sighting — there is no consolidation pass.** Before
  appending to `me/learnings.md`, read what is already staged. If the new
  observation **confirms one already there**, that is the second sighting:
  promote it to `me/preferences.md` or `me/profile.md` with both dates and the
  evidence, and **delete the staged line** — in that turn. If it **contradicts**
  something already in `preferences.md`, say so and update it rather than
  staging a quiet disagreement.
  `me/learnings.md` therefore holds things seen **once**, waiting for a second
  sighting. It is not a queue. The workspace this template came from ran a
  weekly consolidation skill instead; nothing ever ran it, the file reached
  forty entries, and it was retired. Anything that waits for a periodic pass
  waits forever, because nothing runs the pass.
- **Corrections are gold.** If you are corrected on *how* you did something,
  capture it in `me/preferences.md` with the why.
- **Skills live here too**, in `.claude/skills/<name>/SKILL.md`. When the same
  multi-step thing happens twice, propose turning it into one. A skill that runs
  often may keep its own `learnings.md` — read it at the start of a run, and
  append a dated one-line lesson at the end **only** when that run taught
  something non-obvious. Never vague self-praise; never a rule already in the
  skill. Create the file lazily, on the first real lesson.

## Commands
<!-- Type "/" in any session to see these with autocomplete. Plain English works too. -->

| Command | Or just say... | What it does |
|---|---|---|
| `/process-pile` | "process the pile" | Files everything in `pile/` where it belongs |
| `/learn` | "remember that I..." | Saves a fact or preference about you into `me/` |
| `/idea` | "idea: ..." | Drops an idea onto the shelf, zero friction |
| `/organize` | "organize <thing>" | Tidies one target — dedupe, archive superseded, propose splits; only restructures with your OK |
| `/clean-up` | "clean up the OS" | The workspace-wide hygiene sweep; never generative, everything lands gated |
| `/move-in` | "move in this repo" | Brings a repo into the workspace: right folder, right git identity, verified |
| `/improve` | "anything worth making a skill?" | Retrospective on the workspace itself — proposes skills, rules, structure fixes |
| `/tool-note` | "tool note: ..." | Files a tool-capability fact into `notes/tool-capabilities.md` |

_These live in `.claude/skills/`. Claude Code has built-ins too — type `/` to see everything._

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
  noticing can — so it belongs in a dated journal entry, where it carries the
  day it was true, never pinned into the furniture as though it were a fact.

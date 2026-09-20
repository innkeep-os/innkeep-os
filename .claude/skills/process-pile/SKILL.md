---
name: process-pile
description: File everything in pile/ (the capture folder) into its proper home — tasks, ideas, projects, notes, people, or the model of you. Use when you say "process the pile", "clear the pile", "tidy up", or the pile has accumulated items.
---

# Process Pile

## Steps
1. Look at every file in `pile/` (except README.md) — any file type can land here, not just markdown (images, PDFs, downloads, whole drafted docs).
2. First decide per item: **is the file itself the artifact, or is it a capture to dissolve?**
   - **File is the artifact** (a doc that stands alone, an image, any binary, anything whose value is the file) → **move it whole** to the right home — e.g. a spec draft → its project's folder, an image → the project's art folder, OS-working reference → `notes/`, personal-life reference → `vault/<topic>/`. Rename to conventions (kebab-case) if needed, link it from the relevant README/doc when that helps it get found. Moving IS the filing; nothing is deleted.
   - **Capture to dissolve** (a loose thought/list whose content belongs inside existing files) → route the content:
     - Actionable → the right project's own `tasks.md`; if it belongs to no project, a line in `tasks/tasks.md`. If it's **waiting on you** rather than work he chose, it's a loop: that project's `loops.md`, or the root `loops.md` when it belongs to no project.
     - Belongs to a project → that project's folder (create the project with a `README.md` + Status line if new)
     - Idea (feature, app, command, someday-maybe) → a new file `ideas/<slug>.md` (one file per idea, like notes/) + a pointer in `ideas/outline.md`
     - Reference material → `notes/` or `vault/` per the boundary below
     - About a person → `people/<name>.md`
     - Reveals something about you → apply the `/learn` skill's routing into `me/`

   **The vault/notes boundary (F4, Kitchen v3):** `notes/` is the OS's own working reference — single-topic markdown the keeper consults while working (tools, tech, OS knowledge), plus general random note-taking that doesn't fit or deserve a vault home. `vault/` is *your* browsable personal library — life-area folders (`vault/health/…`), any file type, personal notes included, browsed rather than consulted. Vault material always lands in a real topic folder `vault/<topic>/` — **never loose in the vault root** (the root never becomes a second inbox). The drop semantics: **vault-drop = "keep as reference"** (already filed, done); **pile-drop = "process later"** (that's what this skill processes). A vault-dropped file is not a pile item — leave it where you put it.
3. Delete a pile file only after dissolving it (the pile is the one place deletion is allowed — and only for emptied captures whose content lives on where it was filed). If unsure which route or where something belongs, ask — never guess-delete.
4. Update `HOME.md` (Active projects / Recently) if anything changed the big picture. There's no hand-kept "Now" any more — the companion app derives it, so keeping `loops.md`/`tasks.md` honest is what makes it true.
5. Report a one-line-per-item summary of where things went.

## Self-improve
This skill files varied captures, so it accrues real routing know-how. Read `learnings.md` in this skill's folder at the START if it exists (past filing lessons — e.g. where a recurring kind of capture belongs), and at the END append a dated one-line lesson ONLY when a run taught something non-obvious about routing (a case these steps missed, a guess you corrected) — grounded in what actually happened, never restating a rule already above, created lazily on the first real lesson. Per CLAUDE.md's learning loop.

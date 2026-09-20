---
name: idea
description: Capture an idea directly onto the idea shelf (ideas/ — one file per idea). Use when you say "idea:", "/idea", "what if we...", "someday I want to build...", or share any idea-shaped thought mid-conversation.
---

# Idea

Zero-friction capture onto the shelf. Capture ≠ organizing — never restructure during capture.

The shelf is a **place**: a folder of one-file-per-idea (`ideas/<slug>.md`, like `notes/`), with `ideas/README.md` as its `Status:` marker and `ideas/outline.md` as its overview + index. There is no flat IDEAS.md anymore (archived 2026-07-27).

## Steps
1. Take the idea (from `$ARGUMENTS` or the conversation) and write it as a **new file** `ideas/<kebab-slug>.md`. Give it a `# Title`, then an italic meta line (`_Idea · YYYY-MM-DD, you · area: <your area> · status: open_`), then your idea.
2. Keep your wording — clean up grammar at most; don't reinterpret or expand it.
3. Add a one-line pointer to the new file under the right group in `ideas/outline.md`'s "On the shelf" index.
4. If a graduated file/subfolder already exists for that area (e.g. `ideas/<big-idea>/`), put it there instead.
5. If it's a near-duplicate of an existing idea file, merge into that file and note the repeat — repeated ideas are a signal it matters.
6. Confirm in one short line where it landed. Then get back to whatever was happening — capture should never derail the conversation.

**Graduation** (when an idea becomes a task/skill/project): move the file's substance to its destination, strike it through in `ideas/outline.md`'s "Graduated" list with a pointer to where it went.

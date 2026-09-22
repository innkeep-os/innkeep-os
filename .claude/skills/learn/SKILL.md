---
name: learn
description: Record something learned into its one right home — a fact or preference about you into me/, an operating correction into innkeeper/learnings.md, a finding about the world into innkeeper/notes/. Use when you say "remember this", when you correct how something was done, or when a session notices something durable.
---

# Learn

Route one thing to its one home, and record it **in the turn it happens** —
not at the end of the session, where it gets dropped.

This is the deliberate version of a rule that is always on (CLAUDE.md, the
learning loop). Most recording should happen without invoking anything. Use
this when you ask for it, or when a routing call is genuinely unclear.

## Which file

| What it is | Where it goes |
|---|---|
| Who you are — facts, skills, interests, situation | `me/profile.md` |
| How you like things done, **and why** | `me/preferences.md` |
| An observation about you, inferred rather than stated | `me/learnings.md` |
| How **Claude** should work — an operating correction | `innkeeper/learnings.md` |
| A finding about the world, a tool, a project | `innkeeper/notes/<topic>.md` |
| What happened, as process history | today's `journal/` entry |

The test that separates the first four: **who would have to change for this to
stop being true?** If it is you, it belongs in `me/`. If it is Claude, it
belongs in `innkeeper/learnings.md`. If it is neither — a fact about a tool, an
API, a repo — it is a note.

## Stated or observed

Inside `me/`, one more split, and it decides the file:

- **You said it** → `profile.md` or `preferences.md` directly. You are the
  authority on yourself; no staging.
- **Claude noticed it** → `me/learnings.md`, as
  `- YYYY-MM-DD [low|med|high] the observation`.

## Before writing: read what is already there

This is the step that gets skipped, and skipping it is what turns a staging
file into a pile of near-duplicates.

1. **Read the target file.** If an entry already covers this, **update that
   entry** — add the new date and the new evidence. Never append a second one.
2. **If a new observation confirms one staged in `me/learnings.md`, that is the
   second sighting.** Promote it: move it into `preferences.md` or
   `profile.md` with **both** dates and both pieces of evidence, and **delete
   the staged line**. In the same turn. Nothing runs on a schedule, so nothing
   else will ever do this.
3. **If a new observation confirms something already promoted**, do not
   re-stage it — strengthen the entry that is there with the new instance.
4. **If it CONTRADICTS a promoted preference**, say so out loud and update that
   file. Never stage a quiet disagreement; a preferences file arguing with
   itself is worse than one that is wrong.

`innkeeper/learnings.md` has no staging and no second-sighting rule — a line
there is already a concrete correction the day it is written. No length limit,
and nothing is promoted out of it.

## What an entry has to have

- **A date.** Absolute, `YYYY-MM-DD`, from the machine's clock, never from
  Claude's own sense of today.
- **The evidence.** What actually happened, in a clause. An entry that cannot
  be argued with later is not worth keeping.
- **Your words, where you used them.** A quoted phrase survives paraphrase.
- **For a preference, the why.** The why is what makes it reusable instead of
  a rule to follow blindly.
- **For an operating correction, what to do differently.** Never "be more
  careful". Name the next action.

## Then

1. **If it changes how every session should behave** — not just what they know
   — propose a `CLAUDE.md` rule too. Ask first before editing `CLAUDE.md`.
2. **Say in one line** what was recorded and where. Don't interrupt the task to
   do it; fold it in and mention it at the end.

Innkeep renders `me/` and `innkeeper/` as places, so anything written here is on
a page you can read and comment on. Write it as prose someone will read, not as
a log line.

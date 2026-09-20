---
name: learn
description: Record something about you — a fact, preference, skill, or correction — into the AI OS's model of him. Use when you say "remember this", "note that I...", corrects how something was done, or reveals something durable about himself.
---

# Learn

Record a durable fact about you into `me/`.

## Steps
1. Take the input (from `$ARGUMENTS` or the conversation) and classify it:
   - Who he is / skills / interests → `me/profile.md`
   - How he likes things done → `me/preferences.md`
   - Uncertain, inferred, or observed-not-stated → `me/learnings.md` with a confidence tag
2. Check the target file for an existing entry that covers it — **update it** rather than duplicating. If it contradicts an old entry, replace the old one and note the change.
3. Every entry gets the date learned in `(YYYY-MM-DD)` form and, for preferences, the *why* if known.
4. If the fact changes how sessions should behave globally (not just content), also suggest a CLAUDE.md rule change — but ask before editing CLAUDE.md.
5. Confirm to you in one line what was recorded and where.

---
name: reflect
description: Consolidate what the AI OS has learned about you — promote confirmed observations from the staging log into his profile/preferences, prune stale facts, and surface patterns. Run weekly or when the learnings file gets long.
---

# Reflect

Periodic consolidation pass over the model of you.

## Steps
1. Read `me/learnings.md`, `me/profile.md`, `me/preferences.md`, and skim recent `journal/` entries.
2. For each staged learning:
   - Seen multiple times or explicitly confirmed → promote into profile.md or preferences.md, then remove from staging.
   - Contradicted by later evidence → delete.
   - Still uncertain → keep, but raise/lower confidence.
3. Scan profile.md and preferences.md for stale entries (old dates, contradicted by recent behavior) — flag them to you rather than silently deleting.
4. Look across the journal for patterns worth naming (recurring topics, repeated frustrations, emerging projects) and propose them to you.
5. Report: what was promoted, what was pruned, what patterns emerged, and any suggested CLAUDE.md rule changes.

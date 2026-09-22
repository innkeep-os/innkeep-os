---
name: improve
description: Retrospective on the current session (or recent journal entries) asking — what here could become a skill, a CLAUDE.md rule, or a structural improvement to the OS itself? Use when you say "improve", "anything worth turning into a skill?", "how could the OS handle this better?", or at the natural end of a meaty session.
---

# Improve

The OS improving its own machinery. `/learn` is about you; `/improve` is about the system.

## Steps
1. Review the current session (and, if run cold, the last few `journal/` entries) looking for:
   - **Repeated workflows** → candidate skills. Anything done twice, or done once but clearly recurring (multi-step, would be tedious to re-explain).
   - **Friction moments** → candidate CLAUDE.md rules. Places where you corrected course, where a wrong assumption cost time, or where I had to ask something the OS should have already known.
   - **Structure strain** → candidate reorganization. Files getting long, sections crowded, info that had no obvious home (respect the grow-on-demand rule — propose, don't preempt).
   - **Tooling gaps** → things a connector, scheduled task, or automation could remove entirely.
2. Filter hard: only propose changes that would have made THIS session (or a recent real one) noticeably better. No speculative machinery.
3. Present as a short menu: each item = what it is, the concrete moment that motivated it, effort to build. you picks.
4. Build what he approves: skills into `.claude/skills/<name>/SKILL.md` (named in your words), rules into CLAUDE.md, structure changes per the /organize approval flow (propose first, never silently). Add new commands to the Commands table in CLAUDE.md.
5. Log what was built (or consciously skipped) in today's journal.

## Auto-trigger
Also run this lightly (steps 1–3 only, max 1–2 proposals) without being asked when a session clearly contained a repeated manual workflow or a notable friction moment. Never more than once per session; skip it entirely in short or trivial sessions.

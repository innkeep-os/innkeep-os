---
name: tool-note
description: Capture a tool-capability fact into notes/tool-capabilities.md (the "what can I leverage for your stack" cheat-sheet). Use when you say "tool note:", "note that Zapier/Make/n8n/M365/etc can...", or discovers what a tool can/can't do or costs — during the AI-integration curriculum or any session.
---

# Tool Note

Zero-friction capture into `notes/tool-capabilities.md`. The cheat-sheet's value is density and honesty — capture the *so-what*, not documentation prose.

## Steps
1. Take the fact from `$ARGUMENTS` or the conversation.
2. Compress to one line: `- YYYY-MM-DD — the fact (and the so-what for consulting/scoping)`. If you gave raw observation, add the so-what yourself — e.g. "Zapier free tier caps at 100 tasks/mo" → "...— demo-only; any real client flow needs paid."
3. File under the right tool section in `notes/tool-capabilities.md`; cross-tool insights go under **Cross-tool rules of thumb**. New tool → add a new `##` section (alphabetical-ish, near related tools).
4. Check for an existing line it updates or contradicts — revise that line instead of duplicating (keep the newest date).
5. If the fact is really about Claude *accounts/plans/orgs* (not capabilities), it belongs in `notes/claude-accounts.md` instead — file it there and say so.
6. Confirm in one line: what was recorded, which section.

## During curriculum days
If you say "done with day N" or share what he learned that day, offer to batch-capture the day's 3–5 lines in one pass — that's the daily habit from [ai-integration-curriculum.md](../../notes/ai-integration-curriculum.md).

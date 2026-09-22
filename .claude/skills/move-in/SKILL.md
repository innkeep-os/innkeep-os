---
name: move-in
description: Bring a git repo into the OS safely — right folder, right git identity, verified auth, documented. Use when you say "move in <repo/path>", "bring this repo into the OS", "onboard this repo", or during the old-sites migration.
---

# Move In

Onboard a repo into the OS with the identity boundary intact. Motivated by the need to bring existing repos in without mixing separate git identities.

## Steps
1. **Classify first**: personal → `projects/<name>/` · work under another identity → its own subtree. If unclear, ask — never guess across an identity boundary.
2. **Identity before move**: if this workspace spans more than one git identity, confirm `~/.gitconfig` has an `includeIf` covering the destination, and that the more specific path is declared BELOW the general one — later match wins. Add or fix it BEFORE moving, so there is no window in which commits carry the wrong identity.
3. **Move** (`Move-Item`; if locked, robocopy-copy excluding `node_modules`/build caches, leave a `_MOVED_README.txt` marker in the source, and add a delete-later task).
4. **Verify at destination** — all four, every time:
   - `git config user.email` → matches the repo's side of the boundary
   - `git remote -v` → sane (SSH alias `github.com-personal`/`-work`, or HTTPS via gh)
   - `git fetch` → auth actually works
   - `git status` → uncommitted work survived
5. **If it has no repo/remote yet** (old sites): `git init`, create the GitHub repo under the right account (under the right account), first-commit after a secrets/size scan (no `.env`/keys; nothing >100MB; write a proper `.gitignore`).
6. **Document**: add a History line to `notes/github-setup.md`; journal it. Nothing else needs updating — the app finds a new project on its own.
7. Report: where it landed, identity verified as what, anything left behind.

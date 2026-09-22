# innkeep-os — the shell

A plain-markdown workspace that Claude reads and maintains across sessions, and
the starting point for [Innkeep](https://innkeep.ai).

**This repo is a template.** Press **Use this template** above and you get your
own copy — structure, rules and skills included. Nothing to download, nothing to
install, no terminal.

---

## Three clicks

1. **Use this template** → name it whatever you like (`ai-os` is fine).
   Keep it **private**; this becomes your notes.
2. Sign in at **innkeep.ai** with GitHub.
3. **Install** the Innkeep app on that repo.

That is the whole setup. Innkeep reads the repo and shows you where everything
stands; a Claude Code session opened on it picks up the rules and skills
automatically, because both are just files in here.

---

## What you get

```
CLAUDE.md          how Claude behaves here — the rules and the index in one
loops.md           the one list: everything open that belongs to no project
me/                who you are, how you like things done, what has been noticed
innkeeper/         how Claude should work, and what it has learned about your world
journal/           dated logs, written for Claude. journal/letters/ holds the letters
pile/              drop anything here; process it later
ideas/ notes/      the idea shelf, and single-topic reference
people/            people worth remembering context about
projects/          starts empty — each project is its own repo, referenced not contained
archive/           finished and stale material. Move, never delete
.claude/skills/    eight commands, below
.claude/hooks/     two session hooks that notice unjournalled work
```

### The skills

| | |
|---|---|
| `/clean-up` | the hygiene pass — groom notes and learnings, reconcile ledgers |
| `/idea` | file a thought as its own idea, properly indexed |
| `/improve` | turn repeated friction into a skill |
| `/learn` | record something learned, routed to its one right home |
| `/move-in` | onboard an existing repo into the workspace |
| `/organize` | tidy exactly one target — a project, the ideas, the notes |
| `/process-pile` | empty the pile into its proper homes |
| `/tool-note` | write up a tool you just worked out how to use |

---

## The idea, in one paragraph

Sessions are disposable; files are the continuity. You open a session, it reads
`CLAUDE.md` and `loops.md`, does a chunk of work, writes down what it learned
and what it left dangling, and dies. The next one picks up from the files rather
than from a conversation nobody can remember. Innkeep is the window onto that —
it never calls a model and never runs anything, so everything it shows you was
either written by a session or is a bare fact like a count or a date.

## Two things worth knowing before you start

**Make it yours.** `CLAUDE.md` is a starting point, not a specification. Every
rule in it earned its place by surviving real use, but they were someone else's
sessions. Change them.

**Keep it private.** This fills up with your notes, your decisions, and a model
of how you work.

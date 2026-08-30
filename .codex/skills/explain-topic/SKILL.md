---
name: explain-topic
description: Investigate a business concept across code, git history, and issue YAML, then write one numbered topic explanation for human readers.
---

# Explain Topic

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

The deliverable is **business understanding**, not an API reference. A reader who knows nothing about this codebase should finish the file knowing *what the domain concept is, what rules govern it, why it exists, and where it lives*. Describe behaviour and intent; name files only as pointers.

**Never invent facts.** Every claim traces to code, a commit, an issue, or a doc. What you can't establish goes under *Open Questions*, not into the prose. Run all commands from the root of the project.

## Workflow

### 1. Frame the topic

Turn the user's input into one domain concept with a short, noun-phrased title (`Organization Invitations`, not `how do invites work`). If the request spans genuinely unrelated concepts, pick the primary one, write it, and note the others under *Open Questions* — one file per topic.

Derive 5–15 search keywords: the concept and its synonyms, likely entity/service/route names, and the vocabulary the domain would actually use in code.

### 2. Investigate

Search broadly first, then read in full only what matters. Batch commands; prefer one `rg` over many reads.

```bash
rg -il '<keyword1>|<keyword2>' modules packages --glob '!node_modules'   # where does it live
rg -n 'class \w*<Concept>\w*' modules packages -t ts                     # entities/services/controllers
```

Read, in this order — stop when the picture is complete:

- **Entities and migrations** — the source of truth for the data model, its fields, nullability, and relations. Columns encode business rules (an enum is a state machine, a nullable FK is an optional relation).
- **Services** — where business rules live. Read the methods that mutate state; the guard clauses and thrown exceptions *are* the invariants.
- **Controllers / commands / events / crons / workflows** — the entry points: who triggers the behaviour and how. A workflow's transitions spell out a business process step by step (see `talos-architecture`).
- **Front-end features** (`spa`, `admin`, `design`) — how the concept is presented, which confirms the user-facing intent.
- **Tests** — `tests/**/*.spec.ts` names describe expected behaviour, including the edge cases prose forgets.
- **READMEs, `modules/<module>/<module>.yml`, translations** — stated intent and user-facing wording.

### 3. Collect commits

Find the commits that built and changed the topic — both by touched path and by message.

```bash
git log --oneline -20 -- modules/<module>/src/<area>
git log --oneline -20 --grep='<keyword>' -i
```

Keep the commits that shaped the business behaviour (introduced it, changed a rule, reversed a decision). Drop pure formatting, dependency bumps, and unrelated noise. Record short SHA + subject + what it changed in business terms — the *why*, which the diff shows and the subject doesn't.

### 4. Collect related issues

```bash
bun -e 'for (const f of new Bun.Glob("{modules,packages}/*/issues/*.yml").scanSync(".")) console.log(f)'
```

Grep titles across the set, then read in full only the plausible matches. Classify each by `state`:

| State | Reads as |
|---|---|
| `Todo` | Raised in `<ID>` |
| `Planned` | Planned in `<ID>` |
| `In Progress` | Being implemented in `<ID>` |
| `Done` | Resolved in `<ID>` |

Note each issue's `module`, `title`, and its `dependencies` when they reveal ordering. Include any Linear link or `pr` field on the issue.

### 5. Allocate the ID and write the file

`topics/` sits at the **repo root** (create it if absent). Take the next free 3-digit ID:

```bash
ls topics/ 2>/dev/null | rg -o 'TOPIC-\d{3}' | sort | tail -1
date +%Y-%m-%d
```

Numbering starts at `TOPIC-001` and never reuses an ID, even if a file was deleted. Write `topics/TOPIC-<NNN>.md` using the template below.

If a topic file already covers this concept, **update it in place** instead of allocating a new ID — refresh the sections, append new commits and issues, and bump `updated`.

### 6. Confirm

Report the path, the ID, the title, the modules covered, and the counts of commits and issues linked. List anything left under *Open Questions*.

## Template

Fill every section; drop a section only when it genuinely does not apply, and say so in one line rather than leaving it blank.

```markdown
---
id: "TOPIC-<NNN>"
title: "<Noun-phrased topic title>"
modules:
  - "<module>"
status: "<Draft | Current>"
created: "<YYYY-MM-DD>"
updated: "<YYYY-MM-DD>"
---

# <Title>

## Context

Where this topic sits in the product and what a reader needs to know before the rest of the file makes sense. What existed before it, what problem the product had, and what surrounds it today. 1–2 paragraphs.

## Business Definition

What the concept *is*, in domain language — the definition someone from the business side would recognise and agree with. State the actors involved, what each can do, and the concept's lifecycle from creation to end state. No file paths, no class names, no framework vocabulary.

## Why This Topic?

Why the concept exists and what would break without it — the business need, the constraint, or the decision it encodes. Where a design choice is non-obvious, record the trade-off and, if the history shows it, the alternative that was rejected.

## Domain Vocabulary

| Term | Meaning |
|---|---|
| `<Term>` | <Definition in business language, plus the entity/field that carries it> |

The ubiquitous language: every word the code and the business must use identically. Include terms that are easy to confuse with each other.

## Business Rules

The invariants the system enforces, as a checklist a reader can verify against the code.

- <Rule — what must always be true, and what happens when it is violated>

Cover states and permitted transitions, who is authorised to do what, uniqueness and cardinality constraints, and what is validated versus what is trusted.

## Flow

The main scenario end to end, from trigger to final state, in numbered steps naming the actor at each one. Then the notable variants — expiry, cancellation, retry, concurrent access, failure and its rollback.

## Affected Modules

| Module | Role in this topic |
|---|---|
| `<module>` | <What it owns and which artefacts carry it — entities, services, entry points> |

One row per module, ordered by how central it is. Name the artefacts as pointers (`src/services/<Name>Service.ts`); the behaviour belongs in the sections above.

## Affected Commits

| Commit | Change |
|---|---|
| `<sha>` | <subject> — <what it changed in business terms> |

Newest first. Behaviour-changing commits only.

## Related Issues

- **Planned in** `<ID>` — <title> (`<module>`)
- **Resolved in** `<ID>` — <title> (`<module>`)

Group by state using the step 4 wording, and note dependencies between issues when they show the intended order.

## Open Questions

- <What could not be established from code, history, or issues — and where the answer would come from>

Delete the section only when there are genuinely none.

## References

- <Doc, README, ADR, external spec, or Linear link that informed this file>
```

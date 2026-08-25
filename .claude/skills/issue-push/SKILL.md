---
name: issue-push
description: Push one or more local YAML issues to Linear with talos issue:push, inferring which issue IDs to push from the user's request. Creates the issue in Linear when it does not exist yet and updates it in place when it does, syncing title, state, priority, labels, the team/project/milestone the file declares, and a structured description (module, context, goal, dod, testing, dependencies). Reads modules/<module>/issues/<ID>.yml.
when_to_use: Use when the user wants to publish or sync local issues up to Linear. Triggers on requests like "push issue OON-123456 to Linear", "push these issues", or "sync my local issue <ID> up to Linear".
model: sonnet
effort: low
argument-hint: '[issue-id ...]'
---

# Issue Push

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — never ask the user questions.** On any choice, pick the recommended option and proceed.

**Resolve** the local issue IDs from the user's request, then **push** them to Linear with `talos issue:push`. Each issue is created in Linear when it does not exist yet, and updated in place when it does. The command never plans or restructures — it publishes the YAML exactly as it stands.

**Rules throughout:**
- **Module location:** `<module>` = `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.
- **Run every command from the root of the project.**
- **Linear credentials are required for the default provider.** `talos issue:push` reads them from `linear.yml`; if the command reports no credentials, tell the user to run `talos credentials:create --provider=linear` and stop. When pushing with `--provider=github`, no Linear credentials are needed, but the `gh` CLI must be installed and authenticated (`gh auth login`).
- **Push publishes local content as-is.** It does not invent, plan, or edit fields. If an issue looks unfinished (empty `title`, missing `goal`/`dod`), surface it — a missing `title` blocks *creating* a brand-new issue in Linear — but still push everything that is ready.

## 1. Resolve the issue IDs

Infer the target local issue IDs from whatever the user provides — no flags required:

- **Explicit IDs** — one or more identifiers such as `OON-123456`, `ENG-45` (repeated, comma-separated, or listed).
- **Free-form reference** — resolve to the identifier the user names; if the request names no recognizable issue id, glob `modules/*/issues/*.yml` (and the `packages/` equivalent) to find the file they describe.

Each id maps to a local file `modules/<module>/issues/<ID>.yml`. Collect the identifiers into a single de-duplicated list. If the user names a target module (e.g. "push OON-1 from the user module"), pass it as `--module` to disambiguate; otherwise omit it — push searches every module for the file.

## 2. Validate before pushing

A push is a write to a shared tracker — publishing a malformed issue is expensive to undo. Validate the batch first, from the root of the project:

```bash
talos issue:check --id=<ID1>,<ID2>,...
```

**Do not push while the check reports errors.** It catches exactly what corrupts a push: a file that no longer parses, an `id` that stopped matching its filename (which makes push look up the wrong issue), a `state` or `priority` outside the vocabulary Linear is matched against, and an unknown label that would be created in the tracker by mistake. Fix mechanical violations in place and re-run; if an issue needs structural work, hand it to `/issue-plan` and exclude it from this push. Warnings do not block a push — note them in the summary.

## 3. Push the issues

Push the whole batch in one call — `--id` accepts a comma-separated list:

```bash
talos issue:push --id=<ID1>,<ID2>,... [--module=<module>] [--provider=linear|github]
```

**`--provider`** selects the issue tracker. It defaults to `linear`. Pass `--provider=github` to push to the current GitHub repository via the `gh` CLI — the issue is created with `gh issue create` when missing (labels are created as needed) and updated with `gh issue edit` when it exists; `state` maps to open/closed (`Done`/`Closed`/`Canceled` close the issue, anything else reopens it), and priority is not applied since GitHub issues have none. On create, the local file is renamed to the assigned GitHub issue number.

For each id the command:
- Locates `modules/<module>/issues/<ID>.yml` (preferring `--module` when given, otherwise scanning every module).
- Looks the issue up in Linear by its `id`/identifier. **Exists → update; missing → create** under the team the file declares, falling back to `General` when it declares none.
- Syncs these fields both on create and update: **title**, **state** (matched to a Linear workflow state by name), **priority** (`No priority`/`Urgent`/`High`/`Medium`/`Low`), **labels** (existing labels are reused, missing ones created), and a **description** assembled from the YAML: `Module`, `Context`, `Goal`, `Definition of Done`, `Testing`, and `Dependencies`. Any `comments` in the YAML are appended (deduplicated against existing Linear comments).
- Places the issue from the optional `team`, `project` and `milestone` fields (see below).
- On create, if Linear assigns a different identifier than the local filename, the local file is renamed to the new identifier.

### Where the issue lands

An issue file chooses its own destination. Without these fields the issue is created under `General`, which is almost never where it belongs:

```yaml
team: "ENG"          # team key or team name
project: "v3"        # project name inside that team
milestone: "Homepage" # milestone name inside that project — needs `project`
```

- A name the workspace does not hold is an **error**, and nothing is created — the command prints the names it could have matched. Fix the field rather than dropping it.
- On an **update**, the issue is re-pointed only when the file names a `team` of its own; a file that names none keeps the placement the issue already has.
- When the user says where an issue should go ("file it under ENG, project v3"), **write the fields into the YAML** and push — do not push to `General` and move it by hand afterwards, and do not reach for the Linear API directly.
- `talos issue:pull` writes these three fields back, so a pulled issue keeps its home.
- They are Linear-only: with `--provider=github` they are reported as ignored.

The command reports `Issue <identifier> created in Linear` or `Issue <identifier> updated in Linear` per issue, and exits non-zero if any id fails (file not found, no title on a new issue, or a failed Linear request). Record each result; note any id that failed for the summary and continue.

## 4. Confirm

Report a batch summary. Per issue: `id`, `title`, module, whether it was `created` or `updated` in Linear, and any rename applied to the local file. Then list any ids that could not be pushed (local file missing, missing title on a new issue, or a failed request), any excluded by `talos issue:check` with the rules they violated, and, if pushing stopped early, why.

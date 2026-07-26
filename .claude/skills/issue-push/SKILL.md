---
name: issue-push
description: Push one or more local YAML issues to Linear with talos issue:push, inferring which issue IDs to push from the user's request. Creates the issue in Linear when it does not exist yet and updates it in place when it does, syncing title, state, priority, labels, and a structured description (module, context, goal, dod, testing, dependencies). Reads modules/<module>/issues/<ID>.yml.
when_to_use: Use when the user wants to publish or sync local issues up to Linear. Triggers on requests like "push issue OON-123456 to Linear", "push these issues", or "sync my local issue <ID> up to Linear".
model: sonnet
effort: medium
argument-hint: [issue-id ...]
---

# Issue Push

> **Run autonomously — never ask the user questions.** On any choice, pick the recommended option and proceed.

**Resolve** the local issue IDs from the user's request, then **push** them to Linear with `talos issue:push`. Each issue is created in Linear when it does not exist yet, and updated in place when it does. The command never plans or restructures — it publishes the YAML exactly as it stands.

**Rules throughout:**
- **Module location:** `<module>` = `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.
- **Run every command from the monorepo root.**
- **Linear credentials are required.** `talos issue:push` reads them from `linear.yml`; if the command reports no credentials, tell the user to run `talos linear:credentials:create` and stop.
- **Push publishes local content as-is.** It does not invent, plan, or edit fields. If an issue looks unfinished (empty `title`, missing `goal`/`dod`), surface it — a missing `title` blocks *creating* a brand-new issue in Linear — but still push everything that is ready.

## 1. Resolve the issue IDs

Infer the target local issue IDs from whatever the user provides — no flags required:

- **Explicit IDs** — one or more identifiers such as `OON-123456`, `ENG-45` (repeated, comma-separated, or listed).
- **Free-form reference** — resolve to the identifier the user names; if the request names no recognizable issue id, glob `modules/*/issues/*.yml` (and the `packages/` equivalent) to find the file they describe.

Each id maps to a local file `modules/<module>/issues/<ID>.yml`. Collect the identifiers into a single de-duplicated list. If the user names a target module (e.g. "push OON-1 from the user module"), pass it as `--module` to disambiguate; otherwise omit it — push searches every module for the file.

## 2. Push the issues

Push the whole batch in one call — `--id` accepts a comma-separated list:

```bash
talos issue:push --id=<ID1>,<ID2>,... [--module=<module>]
```

For each id the command:
- Locates `modules/<module>/issues/<ID>.yml` (preferring `--module` when given, otherwise scanning every module).
- Looks the issue up in Linear by its `id`/identifier. **Exists → update; missing → create** under the `General` team.
- Syncs these fields both on create and update: **title**, **state** (matched to a Linear workflow state by name), **priority** (`No priority`/`Urgent`/`High`/`Medium`/`Low`), **labels** (existing labels are reused, missing ones created), and a **description** assembled from the YAML: `Module`, `Context`, `Goal`, `Definition of Done`, `Testing`, and `Dependencies`. Any `comments` in the YAML are appended (deduplicated against existing Linear comments).
- On create, if Linear assigns a different identifier than the local filename, the local file is renamed to the new identifier.

The command reports `Issue <identifier> created in Linear` or `Issue <identifier> updated in Linear` per issue, and exits non-zero if any id fails (file not found, no title on a new issue, or a failed Linear request). Record each result; note any id that failed for the summary and continue.

## 3. Confirm

Report a batch summary. Per issue: `id`, `title`, module, whether it was `created` or `updated` in Linear, and any rename applied to the local file. Then list any ids that could not be pushed (local file missing, missing title on a new issue, or a failed request) and, if pushing stopped early, why.

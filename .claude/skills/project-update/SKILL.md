---
name: project-update
description: Sync a local Talos project with the current CLI scaffold — regenerate a fresh app into a tmp folder via `talos app:create`, then smart-merge each generated config, scaffold, and CI file into the working tree, preserving every local change.
when_to_use: Use to pull the latest project scaffold (root config, .env.yml, app/shared module baseline, Docker, CI/CD) into an existing project after upgrading Talos, without losing local edits. Triggers on "sync project", "update project scaffold", "refresh config from templates".
model: sonnet
effort: high
agent: general-purpose
context: fork
argument-hint: [--name=<name>]
allowed-tools: Bash(talos app:create *), Bash(git *), Bash(rm *), Bash(mkdir *), Bash(find *), Bash(diff *), Read, Write, Edit, Glob, Grep
---

# Sync Project Scaffold

> **⚠️ Risky — this rewrites files in the working tree.** Run autonomously (pick the recommended option, don't ask), but obey every safety rail below. Run every command from the **monorepo root**.

Refresh the local project against the scaffold `talos app:create` emits for the installed Talos version. **Additive and non-destructive**: new template files are created, existing local files are **merged** (never blindly overwritten), local-only files and modules are left untouched. Canonical wins on *structure and new template content*; local wins on *project-specific edits* (your deps, env values, app code, extra modules).

## 0. Safety rails — read first

- **Clean tree required.** The merge must be reviewable and reversible. If `git status --porcelain` is non-empty, commit or stash first, then proceed. Never start a sync over uncommitted work.
- **Generate into a throwaway folder**, never straight into the working tree.
- **Never delete** a local file, module, dependency, or script. Sync is create-or-merge only.
- **Never introduce a CI provider or assistant** the project doesn't already have (see step 5).
- **Never overwrite hand-written code** (`index.ts`, `OnAppStart.ts`, entities, controllers, …). Merge template changes into it; if unsure, keep local and note it.
- Leave **no** `<<<<<<<` / `>>>>>>>` conflict markers anywhere.

## 1. Resolve the app name

Reuse the existing name so paths and Docker/compose identifiers match. Read it from the root `package.json` `name`, falling back to `modules/app/app.yml`. Call it `<name>`.

## 2. Regenerate into tmp

```bash
rm -rf "$TMPDIR/talos-project-update"
talos app:create --name=<name> --destination="$TMPDIR/talos-project-update"
```

`--name`/`--destination` skip the name and path prompts. The command still prompts for the commit-msg hook, assistants, and CI/CD — accept defaults (Enter) for the hook and assistants, choose **Create CI/CD = yes**, and pick the provider **matching the local project** (`github` if `.github/` exists, `gitlab` if `.gitlab/` or `.gitlab-ci.yml` exists, else `bitbucket`). The tmp folder's git init, hooks, and `node_modules` are throwaway — only its generated **files** matter.

## 3. Enumerate generated files

```bash
find "$TMPDIR/talos-project-update" -type f -not -path '*/node_modules/*' -not -path '*/.git/*' | sort
```

The local counterpart of each is the same path with the `$TMPDIR/talos-project-update/` prefix stripped (e.g. `.../modules/app/src/index.ts` → `modules/app/src/index.ts`). `diff` each generated file against its counterpart and apply the per-category strategy below.

## 4. Merge strategy by file category

For every file: **missing locally → create verbatim** (make parent dirs); **identical → skip**; **diverged → merge** per its category.

- **Config with merge points — `package.json` (root), `tsconfig.json`, `biome.jsonc`, `.zed/settings.json`, `renovate.json`.** Structural merge: adopt new/changed template keys, **keep every local key**. Root `package.json`: refresh `scripts`/`workspaces` from the template (add new, keep local extras) but **never drop or downgrade a local dependency**.
- **Line-list config — `.gitignore`, `.dockerignore`.** Union the lines: append template lines the local file lacks, keep all local entries and ordering.
- **Module baseline — `modules/app/` & `modules/shared/`** (`app.yml`, `package.json`, `Dockerfile`, `docker-compose.yml`, `src/databases/SharedDatabase.ts`, `modules/app/roles.yml`, `modules/app/.env.yml`). Merge template updates while preserving local edits. `app.yml`: keep `type` and any local config; `roles.yml`: keep local roles, add new template roles; `.env.yml`: add new keys with template defaults, **keep every existing local value** — never reset a URL, secret, or tuned setting. Docker/compose: apply template changes, keep local service tweaks (ports, env, extra services).
- **Hand-written entry code — `modules/app/src/index.ts`, `OnAppStart.ts`.** Almost always customized. Create only if missing. If present, merge *only genuine template changes* (a new default option, import, or wiring) onto the local structure — never revert the user's config, middleware wiring, or logic.
- **CI/CD — `.github/**`, `.gitlab/**`, `.gitlab-ci.yml`, `bitbucket-pipelines.yml`.** Refresh template steps (bun/runner versions, new stages) while preserving local pipeline edits (deploy targets, secrets, extra jobs). **Only reconcile the provider already present locally** — never add a second provider's files.
- **README.md** and assistant config (`AGENTS.md`, `.claude/**`, `.codex/**`, …). Skip here. README is project-owned; for assistant config run the **`agent-skills-update`** skill, which merges it properly.

## 5. Scope guard

Only touch files the generator produced. Skip anything under `node_modules/`, `.git/`, and `var/`. Do not add a CI provider or assistant directory absent from the local tree — refresh, don't introduce.

## 6. Clean up and verify

```bash
rm -rf "$TMPDIR/talos-project-update"
talos check --logs
```

Fix every failure (usually an unresolved import or type/format error from a merge). Hand app-code failures to the `debug` skill.

## 7. Report

Summarize: files **created**, files **merged** (one line each with what template change was adopted and what local content was preserved), files **skipped**, and any merge you were unsure about. Remind the user the pre-sync commit/stash is their rollback point, and to review the diff before committing.

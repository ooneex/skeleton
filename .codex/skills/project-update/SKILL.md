---
name: project-update
description: Sync a Talos project with the current CLI scaffold while preserving local configuration and code changes.
---

# Sync Project Scaffold

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **⚠️ Risky — this rewrites files in the working tree.** Run autonomously (pick the recommended option, don't ask), but obey every safety rail below. Run every command from the **root of the project**.

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
mkdir -p tmp/talos-project-update
find tmp/talos-project-update -mindepth 1 -depth -delete
rmdir tmp/talos-project-update
talos app:create --name=<name> --destination=tmp/talos-project-update
```

`--name`/`--destination` skip the name and path prompts. The command still prompts for the commit-msg hook, assistants, and CI/CD — accept defaults (Enter) for the hook and assistants, choose **Create CI/CD = yes**, and pick the provider **matching the local project** (`github` if `.github/` exists, `gitlab` if `.gitlab/` or `.gitlab-ci.yml` exists, else `bitbucket`). The tmp folder's git init, hooks, and `node_modules` are throwaway — only its generated **files** matter.

## 3. Enumerate generated files

```bash
find tmp/talos-project-update -type f -not -path '*/node_modules/*' -not -path '*/.git/*' | sort
```

The local counterpart of each is the same path with the `tmp/talos-project-update/` prefix stripped (e.g. `.../modules/app/src/index.ts` → `modules/app/src/index.ts`). `diff` each generated file against its counterpart and apply the per-category strategy below.

## 4. Merge strategy by file category

For every file: **missing locally → create verbatim** (make parent dirs); **identical → skip**; **diverged → merge** per its category.

- **Config with merge points — `package.json` (root), `tsconfig.json`, `biome.jsonc`, `.zed/settings.json`, `renovate.json`.** Structural merge: adopt new/changed template keys, **keep every local key**. Root `package.json`: refresh `scripts`/`workspaces` from the template (add new, keep local extras) but **never drop or downgrade a local dependency**.
- **Line-list config — `.gitignore`, `.dockerignore`.** Union the lines: append template lines the local file lacks, keep all local entries and ordering.
- **Module baseline — `modules/app/` & `modules/shared/`** (`app.yml`, `package.json`, `Dockerfile`, `docker-compose.yml`, `src/databases/SharedDatabase.ts`, `modules/app/roles.yml`, `modules/app/.env.yml`). Merge template updates while preserving local edits. `app.yml`: keep `type` and any local config; `roles.yml`: keep local roles, add new template roles; `.env.yml`: add new keys with template defaults, **keep every existing local value** — never reset a URL, secret, or tuned setting. Docker/compose: apply template changes, keep local service tweaks (ports, env, extra services).
- **Hand-written entry code — `modules/app/src/index.ts`, `OnAppStart.ts`.** Almost always customized. Create only if missing. If present, merge *only genuine template changes* (a new default option, import, or wiring) onto the local structure — never revert the user's config, middleware wiring, or logic.
- **CI/CD — `.github/**`, `.gitlab/**`, `.gitlab-ci.yml`, `bitbucket-pipelines.yml`.** Refresh template steps (bun/runner versions, new stages) while preserving local pipeline edits (deploy targets, secrets, extra jobs). **Only reconcile the provider already present locally** — never add a second provider's files.
- **README.md** and assistant config (`AGENTS.md`, `.agents/**`, `.claude/**`, `.codex/**`, …). Skip here. README is project-owned; for assistant config run **`$agent-skills-update`**, which merges it properly.

## 5. Scope guard

Only touch files the generator produced. Skip anything under `node_modules/`, `.git/`, and `var/`. Do not add a CI provider or assistant directory absent from the local tree — refresh, don't introduce.

## 6. Clean up and verify

```bash
find tmp/talos-project-update -mindepth 1 -depth -delete
rmdir tmp/talos-project-update
talos check --strict --logs
```

`talos check --strict --logs` is the only validation step — always run it with both flags, never bare — fix every error and warning it reports (usually an unresolved import or type/format error from a merge), then re-run until it is clean. Hand app-code failures to `$debug`.

## 7. Report

Summarize: files **created**, files **merged** (one line each with what template change was adopted and what local content was preserved), files **skipped**, and any merge you were unsure about. Remind the user the pre-sync commit/stash is their rollback point, and to review the diff before committing.

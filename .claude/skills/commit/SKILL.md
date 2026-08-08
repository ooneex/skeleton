---
name: commit
description: Create commit messages grouped by module. Analyzes git changes, groups files under modules/ by module name, and creates separate commits following the project's conventional-commit rules. Uses common scope for non-module changes.
when_to_use: Use when the user wants to commit changes — staging modified files, grouping them by module, writing conventional-commit messages, and pushing. Triggers on requests like "commit", "commit my changes", "create a commit", "push", or "commit and push".
model: haiku
effort: low
agent: general-purpose
context: fork
allowed-tools: Bash(git:*), Bash(gh:*)
---

# Commit by Module

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Just commit. Start immediately — do not ask the user questions, do not present menus or numbered options (e.g. "1. Commit / 2. Review / 3. Something else"), do not ask for confirmation.** Run the workflow below to completion autonomously. When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Create separate commits per modified module, following the project's conventional-commit rules. **Run every command from the root of the project.** Messages are linted by a git `commit-msg` hook (`talos commitlint:init` / `talos commitlint:check`).

## Workflow

1. **Analyze** — `git status --porcelain`.
2. **Group by module** — files under `modules/<name>/` → scope = module name; all others → scope `common`.
3. **Screen for secrets** — before staging, skip anything credential-like (`.env*`, `*.pem`, `*.key`, `*credentials*`, private keys, tokens). Do **not** commit these; surface them to the user.
4. **Commit each module/package group** — stage the files, pick the type, commit as `type(scope): Subject`.
5. **Sweep the rest** — re-run `git status --porcelain`. Everything still uncommitted (root configs, lock files, CI, docs, scripts, `.claude/`, …) goes into one or more `common`-scoped commits, split by type when the leftovers are genuinely different kinds of change (e.g. `chore(common)` for deps, `docs(common)` for markdown). Repeat until `git status --porcelain` is empty apart from files skipped in step 3.
6. **Push** — after all commits, check the remote with `git remote get-url origin` and push accordingly:
   - **SSH remote** (`git@host:owner/repo.git` or `ssh://…`) → push over ssh with `git push`.
   - **HTTPS remote** (`https://…`) → push with the `gh` cli, and use `gh auth switch` to find the active account.

   Never force-push unless the user explicitly asks.

## Message Format

`type(scope): Subject`

**Type** — pick by the change:

| Type | Use when |
|------|----------|
| `feat` | New feature / new files with functionality |
| `fix` | Bug fix |
| `refactor` | Restructuring, renaming, deleted-only or moved files |
| `test` | Tests only (`*.spec.ts` only) |
| `chore` | Deps, lock files, configs, maintenance |
| `docs` | Docs only (`*.md` only) |
| `style` | Formatting only |
| `perf` | Performance |
| `build` | Build system, build configs, scripts |
| `ci` | CI/CD files |
| `revert` | Revert previous commit |

**Scope** — module name (lower-case) for files under `modules/<name>/`; else `common`. Any `modules/<name>` or `packages/<name>` directory is automatically a valid scope (discovered at commit time, no config). Never empty; fall back to `common`.

**Subject** — sentence-case, imperative mood ("Add" not "Added"), no trailing period, max 100 chars total.

## Examples

```bash
git add modules/user/
git commit -m "feat(user): Add AuthService and update UserService"

git add modules/product/
git commit -m "refactor(product): Update Product entity and repository"

git add bun.lock packages/cache/
git commit -m "chore(common): Update dependencies and cache package"
```

## Special Cases

- **Mixed feat + fix in one module** — use the primary change's type; split into multiple commits if the changes are truly independent.

## Trailers & Conventions

- Do not add any `Co-Authored-By` trailer.
- Apply all coding conventions from the `optimize` skill.

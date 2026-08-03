---
name: project-fix
description: Run `talos project:check --strict --logs` — the project's full health check (workspace gate, structure, conventions, env, dependencies, docker, migrations, accessibility, translations, tests, docs, security, secrets, git, issues, commits, hygiene) — then fix every error and warning it reports and re-run until clean.
when_to_use: Use when the user wants the project checked and repaired ("fix the project", "run all checks and fix everything", "pre-release audit"), or as the gate before a release or a merge. Scope to one dimension with `--only=<check>`.
model: sonnet
effort: high
allowed-tools: Bash(talos *), Bash(bun *), Bash(git *), Bash(cp *), Read, Edit, Write, Grep, Glob, Skill, Agent
argument-hint: '[--only=<checks>] [--skip=<checks>] [--modules=<a,b>] [--e2e] [--strict]'
---

# Project Fix

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

Run autonomously — no questions. Fix, don't silence: never disable a rule, delete a test, or weaken an assertion to make a check pass.

## 1. Run

From the **monorepo root**:

```bash
talos project:check --strict --logs
```

**Always both flags.** `--strict` makes warnings exit non-zero so they can't be missed; `--logs` streams readable output (the default footer is for a TTY). Add `--e2e` for the end-to-end suite, `--skip=workspace` for a fast signal, `--only=<check>` to scope — but keep `--strict --logs` on every run. The workspace check runs `fmt --write`, so formatting changes in the tree are expected — keep them.

## 2. Fix everything

Failures first, then warnings — **warnings are in scope**, including `dependencies`, `tests` and `commits`, which only ever warn. Re-run one check at a time while fixing: `talos project:check --only=<check> --strict --logs`.

- **workspace** — re-run the failing task alone (`talos lint|test --modules=<m> --logs`); hand exceptions to `/debug`.
- **structure** — restore the missing piece: `<name>.yml` + `type:`, unique `package.json` name, root `workspaces` glob, `tsconfig.json` alias.
- **conventions** — rename the class to match its decorator suffix; replace `process.env.X` with injected `AppEnv`; `Type` suffix on exported aliases, `I` prefix on exported interfaces; drop non-null assertions. `/optimize` does this module-wide.
- **env** — `cp <m>/.env.example.yml <m>/.env.yml` and fill it (never commit it); "not documented" means add the key to the example.
- **dependencies** — align the range and `bun install`, declare undeclared imports, remove genuinely unused packages.
- **docker** — pin image tags, give every service `image` or `build`, resolve host-port clashes.
- **migrations** — regenerate a colliding migration (`talos migration:create`) for a fresh timestamp; add missing `down`; fix invalid seed YAML.
- **accessibility** — fix the markup (semantic elements, labels, `alt`, keyboard parity, focus). Never suppress inline. Several UI modules → dispatch `accessibility-fixer` per module in parallel. The trailing "not enforced — disabled in biome config" line is informational; don't edit `biome.jsonc`.
- **translations** — add missing locales, keep `{{ placeholder }}` sets identical, never delete a key. Bulk: `/translation-translate`.
- **tests** — write the missing spec (happy path + edge case), don't exempt the file.
- **docs** — repoint or delete the broken relative link.
- **security** — bump to the patched version; if breaking or unpatched, `talos security:check --issues` then `/issue-plan`.
- **secrets** — remove the literal, move it to `.env.yml`, read via `AppEnv`, **rotate the credential**; `git rm --cached` any tracked `.env`/`.pem` and gitignore it.
- **git** — `git rm -r --cached <path>` build output and gitignore it in the same commit.
- **issues** — mechanical fixes to `/issue-check`, judgement calls to `/issue-plan`.
- **commits** — reword **unpushed** commits only (`git rebase -i`); never rewrite published history.
- **hygiene** — resolve conflict markers, drop `.only`/`.skip`, turn bare `TODO`/`FIXME` into an issue or delete it.
- **e2e** — fix the application, not the assertion.

## 3. Verify

Loop until nothing fails and nothing warns:

```bash
talos project:check --strict --logs
```

A zero exit is the only done signal — with `--strict` it means no failures *and* no warnings.

Report the final verdict line, what you fixed, and any warning left unfixed — with its reason. A check is *skipped* when it has nothing to inspect; say why.

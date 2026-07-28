---
name: project-check
description: Run every health check the project has with `talos project:check` — the full workspace gate (install, build, fmt, lint, test), workspace structure, framework conventions, local env files, dependency hygiene, Docker compose, migrations and seeds, an accessibility audit of every UI module, translation parity, test coverage of source files, markdown links, the OSV.dev dependency audit, a secret scan, the git index, issue YAML validation, conventional-commit linting, a source hygiene scan, and the opt-in end-to-end suite — then read the single aggregated report and fix what it surfaces.
when_to_use: Use when the user wants a full health check of the project ("check the project", "is the project healthy", "run all checks", "pre-release audit"), or as the gate before a release, a merge, or handing work back. Also use it for a single dimension through `--only=` (accessibility, secrets, translations, structure, conventions, env, dependencies, docker, migrations, tests, docs, git), since each check reuses the dedicated command's code. For deep work on one dimension the narrower skill still applies — security-check (vulnerabilities), issue-check (issue YAML), optimize (conventions).
model: sonnet
effort: medium
allowed-tools: Bash(talos project:check *), Bash(talos check *), Bash(talos security:check *), Bash(talos issue:check *), Bash(talos e2e:run *), Bash(talos lint *), Bash(talos test *), Read, Edit, Grep, Glob, Skill
argument-hint: [--only=<checks>] [--skip=<checks>] [--modules=<a,b>] [--packages=<a,b>] [--audit-level=<low|moderate|high|critical>] [--e2e] [--strict] [--json]
---

# Project Check

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

`talos project:check` runs **every** health check in one pass and prints one report. Each check reuses the exact code of its dedicated command, so `project:check` can never disagree with `talos check`, `talos security:check` or `talos issue:check`.

**Rules that apply throughout:**
- **Run the command from the monorepo root**, never from inside a package.
- **The report is the source of truth.** Fix what it reports; never silence a check by disabling a rule, deleting a test, or weakening an assertion.
- **The workspace check writes.** It runs `fmt` (`biome check --write`), so formatting changes may appear in the working tree — review them, don't revert them blindly.
- **Network is required for the security check.** Without it that check reports as *skipped*, not passed.

## The checks

They run in this order — the workspace first because its install is what makes the other tools available, the end-to-end suite last because it needs the build.

| Check | What it runs | Fails when |
|---|---|---|
| `workspace` | `talos monorepo:run --commands=install,build,fmt,lint,test` — the full gate, in order, with caching | a task exits non-zero |
| `structure` | module manifests (`<name>.yml` + its `type:`), `package.json` names and uniqueness, root `workspaces` globs, root `tsconfig.json` path aliases | a manifest, a package name or an alias target is missing or duplicated |
| `conventions` | DI decorators against class-name suffixes, direct `process.env` reads, exported `Type`/`I` naming, non-null assertions | a decorated class is misnamed (the container throws on boot) or a source file reads `process.env` |
| `env` | every `.env.example.yml` against the `.env.yml` next to it, key by key | the local file is missing, unparseable, or lacks a documented key |
| `dependencies` | one version range per dependency across all manifests, unpinned ranges, imports that no manifest declares, declared packages nothing uses | never — always reported as warnings |
| `docker` | every compose file (root and module-owned): unpinned images, services with neither `image` nor `build`, clashing host ports, missing `restart` | a service is undefined or two services publish the same host port |
| `migrations` | migration file ordering, `up`/`down` presence, seed YAML validity | two migrations share a timestamp, a migration has no `up`, or a seed file is invalid YAML |
| `accessibility` | Biome's `a11y` rules over every UI module's `src/` (`design`, `spa`, `admin`, `storybook`) | an enforced a11y rule reports an error |
| `translations` | every `translations.yml`/`translations.json`: the `en` fallback, locale parity, empty strings, `{{ placeholder }}` drift | a key has no `en` value |
| `tests` | a mirrored `.spec.ts`/`.test.ts` for every source file that declares a class or an exported function | never — always reported as warnings |
| `docs` | relative links in every markdown document, resolved from the file that declares them | a link points at a file that does not exist |
| `security` | the OSV.dev dependency audit (`talos security:check`) | a critical or high vulnerability is found |
| `secrets` | credential formats (private keys, AWS/GitHub/Slack/Stripe/Google/npm tokens) in the working tree, plus `.env`/`.pem` files git is tracking | a credential is found outside a fixture, or a secret file is tracked |
| `git` | build output and dependency trees in the index, blobs over 2 MB, `.gitignore` coverage | `node_modules/`, `dist/`, `.next/` or `coverage/` is tracked |
| `issues` | the issue YAML conventions (`talos issue:check`) | an issue file has an error-level violation |
| `commits` | conventional-commit rules over the unpushed commits (or the last 20) | never — always reported as a warning |
| `hygiene` | unresolved conflict markers, focused/skipped tests, bare `TODO`/`FIXME`/`HACK` comments | a conflict marker or a focused test is found |
| `e2e` | **opt-in** (`--e2e` or `--only=e2e`) — `talos monorepo:run --commands=e2e` | a suite exits non-zero |

A check that has nothing to inspect (no UI module, no lockfile, no issue file, no dictionary, no `.env.example.yml`, no compose file, no migration, no git repository) is reported as **skipped** — never as passed. Generated sources (`*.gen.ts`, `*.generated.ts`, files with an `@generated`/`do not edit` banner) are exempt from the convention rules, and only *exported* type and interface names are held to the naming convention.

## Run it

```bash
talos project:check                                  # every check except e2e, human report
talos project:check --skip=workspace                 # the fast checks only (no install/build/test)
talos project:check --only=conventions,tests,docs     # just these three
talos project:check --e2e                            # add the end-to-end suite to the run
talos project:check --modules=billing,user           # scope every module-aware check to these targets
talos project:check --audit-level=high               # only surface high/critical vulnerabilities
talos project:check --strict                         # exit 1 when a check only reports warnings
talos project:check --json                           # machine-readable report for CI
talos project:check --logs                           # stream plain workspace logs (use in non-interactive runs)
```

Check names accept aliases: `a11y` → accessibility, `audit` → security, `deps` → dependencies, `i18n` → translations, `layout` → structure, `naming` → conventions, `compose` → docker, `seeds` → migrations, `specs` → tests, `markdown` → docs, `gitignore` → git, `commit` → commits, `monorepo` → workspace. The exit code is `1` when any check failed (or, with `--strict`, when any warned).

**As an agent, start with `talos project:check --logs`.** The interactive footer is for a TTY; `--logs` streams output you can actually read. When you only need a quick signal, `--skip=workspace` returns in seconds.

## Read the report

The report has three parts: a status line per check, a detail block per non-passing check, and a one-line verdict.

```
  ✔  Workspace      install, build, fmt, lint, test                1m 12s
  ✖  Security       927 dependencies scanned · 2 vulnerabilities   2.6s
  ⚠  Accessibility  4 UI modules · 0 errors · 9 warnings           1.4s

  ✖ 1 failed · 1 warning · 1 passed · 1 skipped   in 1m 20s
```

- `✖ failed` — must be fixed before the work is done.
- `⚠ warning` — fix unless it is deliberate; record the reason if you leave it.
- `– skipped` — nothing to check; state *why* when you report back.

The accessibility block ends with a `not enforced — disabled in biome config: …` line. Those are a11y rules the project switched **off**, listed with their hit count so the real exposure stays visible. They never fail the check — do not "fix" them by editing `biome.jsonc`; if one matters, raise it as an issue instead.

## Fix what it reports

Work the failures top-down, re-running the single check each time (`--only=<check>`) rather than the whole suite:

1. **Workspace** — read the failing task's output. Re-run it alone (`talos lint --modules=<module> --logs`, `talos test --modules=<module> --logs`). Type and lint errors come from `tsc --noEmit && biome lint`; hand a failing test or a runtime exception to `/debug`.
2. **Structure** — restore the missing piece rather than deleting the module: add the `<name>.yml` with its `type:`, give the module a unique `package.json` name, extend the root `workspaces` globs, and point every `tsconfig.json` alias at a directory that exists (or drop the alias if the module is gone). `talos module:remove` removes all four in one go.
3. **Conventions** — rename the class rather than the decorator: `@decorator.service()` demands a `Service` suffix, `@decorator.repository()` a `Repository` suffix, and the container throws a `ContainerException` at startup otherwise. Replace every `process.env.X` with an injected `AppEnv` (`@inject(AppEnv) private readonly env: AppEnv`), suffix exported type aliases with `Type`, prefix exported interfaces with `I`, and swap non-null assertions for a default value or an optional type. `/optimize` applies all of this across a whole module.
4. **Env** — `.env.yml` is git-ignored and local, so never commit it: copy the example (`cp modules/app/.env.example.yml modules/app/.env.yml`) and fill in the values. A key reported as *not documented* means the reverse — add it to `.env.example.yml` with an empty default so the next developer knows it exists.
5. **Dependencies** — align a mismatched range in the root `package.json` and re-run `bun install`; declare an undeclared import in the module's own `package.json`; delete a genuinely unused package. A dependency used only from a config file or a script is not reported, so treat every "never uses it" line as real before removing it.
6. **Docker** — pin every image to an explicit tag (`postgres:16.2`, never `postgres:latest`), give each service an `image` or a `build`, and move one side of a port clash to a free host port. `talos docker:create --name <service>` adds a service with the right defaults.
7. **Migrations** — regenerate a colliding migration with `talos migration:create --module <name>` so it gets a fresh timestamp; never hand-edit a timestamp that has already been applied somewhere. Add the missing `down` so the change can be rolled back, and fix seed YAML the parser rejects.
8. **Accessibility** — each line is `<file>:<line>  a11y/<rule>  <message>`. Fix the markup: semantic elements over `div`s, labels on inputs, `alt` text, a keyboard handler next to every click handler, visible focus states. Follow `optimize-ui` for the component-level patterns; never suppress a rule inline. When more than one UI module reports violations, dispatch the `accessibility-fixer` agent per module and let them run in parallel.
9. **Translations** — add the missing locale, never delete the key. Keep the `{{ placeholder }}` set identical across locales, and use the `translation-translate` skill to complete a dictionary in bulk.
10. **Tests** — write the missing spec rather than exempting the file: at least one happy path and one edge case per public method with logic. Barrels (`index.ts`), `types.ts`, `constants.ts` and `enums.ts` are already exempt.
11. **Docs** — repoint the link at the file that exists, or delete it if the target is gone. Links resolve relative to the document that declares them, and anchors (`#section`) are stripped before resolving.
12. **Security** — bump to the patched version (`bun update <pkg>`, `cargo update -p <crate>`, `go get <mod>@<ver>`). For a breaking upgrade, or when no patch exists, file it with `talos security:check --issues` and hand off to `/issue-plan`.
13. **Secrets** — treat every confident finding as already leaked: remove the literal, move the value to `.env.yml`, read it through `AppEnv`, **and rotate the credential**. A tracked `.env`/`.pem` also needs `git rm --cached <file>` plus a `.gitignore` entry. Findings inside `tests/`, `fixtures/` or `templates/` are downgraded to warnings — confirm they really are fake before dismissing them.
14. **Git** — `git rm -r --cached <path>` the build output and add it to `.gitignore` in the same commit. Move a large binary to Git LFS *before* it is committed; once it is in history only a rewrite removes it.
15. **Issues** — hand mechanical violations to `/issue-check`; anything needing judgement goes to `/issue-plan`.
16. **Commits** — reword only *unpushed* commits (`git rebase -i`); never rewrite published history. Use `/commit` for new work.
17. **Hygiene** — resolve conflict markers, drop `.only`/`.skip` from tests, and turn every bare `TODO`/`FIXME` into a tracked issue (`talos issue:create`) or delete it.
18. **End-to-end** — re-run the failing suite alone (`talos e2e:run --modules=<module> --logs`) and fix the application, not the assertion.

## Verify

Re-run the checks that failed, then the whole suite once at the end:

```bash
talos project:check --only=<check> --logs   # confirm the fix
talos project:check --logs                  # confirm nothing regressed
```

Report back with the final verdict line, what you fixed, and any warning or skipped check you deliberately left — with its reason.

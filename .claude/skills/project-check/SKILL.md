---
name: project-check
description: Run every health check the project has with `talos project:check` — the full workspace gate (install, build, fmt, lint, test), an accessibility audit of every UI module, the OSV.dev dependency audit, issue YAML validation, conventional-commit linting, and a source hygiene scan — then read the single aggregated report and fix what it surfaces.
when_to_use: Use when the user wants a full health check of the project ("check the project", "is the project healthy", "run all checks", "pre-release audit"), or as the gate before a release, a merge, or handing work back. For a single dimension use the narrower skill instead — security-check (dependencies), issue-check (issue YAML), e2e-run (Playwright), optimize (conventions).
model: sonnet
effort: medium
allowed-tools: Bash(talos project:check *), Bash(talos monorepo:check *), Bash(talos security:check *), Bash(talos issue:check *), Bash(talos lint *), Bash(talos test *), Read, Edit, Grep, Glob, Skill
argument-hint: [--only=<checks>] [--skip=<checks>] [--modules=<a,b>] [--packages=<a,b>] [--audit-level=<low|moderate|high|critical>] [--strict] [--json]
---

# Project Check

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

`talos project:check` runs **every** health check in one pass and prints one report. Each check reuses the exact code of its dedicated command, so `project:check` can never disagree with `talos monorepo:check`, `talos security:check` or `talos issue:check`.

**Rules that apply throughout:**
- **Run the command from the monorepo root**, never from inside a package.
- **The report is the source of truth.** Fix what it reports; never silence a check by disabling a rule, deleting a test, or weakening an assertion.
- **The workspace check writes.** It runs `fmt` (`biome check --write`), so formatting changes may appear in the working tree — review them, don't revert them blindly.
- **Network is required for the security check.** Without it that check reports as *skipped*, not passed.

## The checks

| Check | What it runs | Fails when |
|---|---|---|
| `workspace` | `talos monorepo:run --commands=install,build,fmt,lint,test` — the full gate, in order, with caching | a task exits non-zero |
| `accessibility` | Biome's `a11y` rules over every UI module's `src/` (`design`, `spa`, `admin`, `storybook`) | an enforced a11y rule reports an error |
| `security` | the OSV.dev dependency audit (`talos security:check`) | a critical or high vulnerability is found |
| `issues` | the issue YAML conventions (`talos issue:check`) | an issue file has an error-level violation |
| `commits` | conventional-commit rules over the unpushed commits (or the last 20) | never — always reported as a warning |
| `hygiene` | unresolved conflict markers, focused/skipped tests, bare `TODO`/`FIXME`/`HACK` comments | a conflict marker or a focused test is found |

A check that has nothing to inspect (no UI module, no lockfile, no issue file, no git repository) is reported as **skipped** — never as passed.

## Run it

```bash
talos project:check                                  # every check, human report
talos project:check --skip=workspace                 # the fast checks only (no install/build/test)
talos project:check --only=security,accessibility    # just these two
talos project:check --modules=billing,user           # scope workspace/a11y/security/issues to these targets
talos project:check --audit-level=high               # only surface high/critical vulnerabilities
talos project:check --strict                         # exit 1 when a check only reports warnings
talos project:check --json                           # machine-readable report for CI
talos project:check --logs                           # stream plain workspace logs (use in non-interactive runs)
```

Check names accept aliases: `a11y` → accessibility, `audit`/`deps` → security, `commit` → commits, `monorepo` → workspace. The exit code is `1` when any check failed (or, with `--strict`, when any warned).

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
2. **Accessibility** — each line is `<file>:<line>  a11y/<rule>  <message>`. Fix the markup: semantic elements over `div`s, labels on inputs, `alt` text, a keyboard handler next to every click handler, visible focus states. Follow `optimize-ui` for the component-level patterns; never suppress a rule inline. When more than one UI module reports violations, dispatch the `accessibility-fixer` agent per module and let them run in parallel.
3. **Security** — bump to the patched version (`bun update <pkg>`, `cargo update -p <crate>`, `go get <mod>@<ver>`). For a breaking upgrade, or when no patch exists, file it with `talos security:check --issues` and hand off to `/issue-plan`.
4. **Issues** — hand mechanical violations to `/issue-check`; anything needing judgement goes to `/issue-plan`.
5. **Commits** — reword only *unpushed* commits (`git rebase -i`); never rewrite published history. Use `/commit` for new work.
6. **Hygiene** — resolve conflict markers, drop `.only`/`.skip` from tests, and turn every bare `TODO`/`FIXME` into a tracked issue (`talos issue:create`) or delete it.

## Verify

Re-run the checks that failed, then the whole suite once at the end:

```bash
talos project:check --only=<check> --logs   # confirm the fix
talos project:check --logs                  # confirm nothing regressed
```

Report back with the final verdict line, what you fixed, and any warning or skipped check you deliberately left — with its reason.

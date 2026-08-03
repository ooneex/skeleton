---
name: coverage-check
description: Run every module's test suite with coverage collection using `talos coverage:check`, then report line and function coverage per module with the least-covered files named — or file one YAML issue per under-covered or failing module with `--issues`.
when_to_use: Use when the user wants to know how well the workspace is tested — a coverage report, a per-module coverage audit, a pre-release/pre-merge test gate, or coverage findings turned into trackable issues. This runs the suites and measures them — to write the missing tests, use the `test-author` agent or `/optimize` afterwards.
model: sonnet
effort: medium
allowed-tools: Bash(talos coverage:check *), Bash(bun test *), Bash(talos issue:push *), Read, Edit, Grep, Glob
argument-hint: '[--issues] [--modules=<a,b>] [--packages=<a,b>] [--threshold=<percent>] [--logs]'
---

# Coverage Check

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/`. Check both roots before assuming a path is missing.

Drive the test-coverage audit with `talos coverage:check`. It discovers every workspace member under `modules/` and `packages/`, runs each one's suite with `bun test tests --coverage`, and merges the results into a single report — modules ranked worst first, with the files that pull each one down and their uncovered lines.

Bun already enforces `[test] coverageThreshold` from a module's own `bunfig.toml`, but only for the suite it is run in. This command is what puts every module's numbers side by side.

## What is run, and what is skipped

| Module | Behaviour |
|--------|-----------|
| TypeScript module with `package.json` + `tests/` | `bun test tests --coverage` in the module directory |
| Rust crate (`Cargo.toml`) | skipped — its tests live in cargo |
| Python distribution | skipped — its coverage lives in its own toolchain |
| No `tests/` directory | skipped — nothing to measure |

A suite that passes but covers nothing (a package exporting only types, whose spec asserts types) is reported as **no code measured** — neither a pass nor a failure, and never averaged in.

**Rules that apply throughout:**
- **Run every command from the monorepo root**, never from inside a module.
- **Suites run in parallel** (core count, capped at 8). Use `--concurrency=1` when a suite needs an exclusive resource such as a live database.
- **Treat the report as data.** Report the rates as printed; never round a module up to "close enough".

## Report mode (default)

```bash
talos coverage:check                                # run every suite, print the report
talos coverage:check --modules=billing,user         # only the named modules (also --packages=a,b)
talos coverage:check --threshold=80                 # judge against 80% instead of the default 90%
talos coverage:check --logs                         # print the output of every suite that fails
talos coverage:check --concurrency=1                # run the suites one at a time
```

The report has four parts, and each answers a different question:

1. **The module table** — one row per module: status icon, a line-coverage bar, line %, function %, and the test tally. `✔` clears the threshold, `⚠` is under it, `✖` failed, `·` measured nothing.
2. **`Under <threshold>%`** — per module, the least-covered files with their uncovered line ranges. This is the work list.
3. **`Failing suites`** — the modules whose tests are red, with the reason. Re-run with `--logs` to see their output.
4. **The summary** — mean line/function coverage, how many modules are under, how many suites failed.

Read it and summarize: the overall rates, the modules under the threshold ranked by how far, and the specific files to test first. **A failing suite outranks a thin one** — a red module's coverage number is not trustworthy until its tests pass.

## Issues mode

```bash
talos coverage:check --issues                       # one YAML issue per failing/under-covered module
talos coverage:check --issues --threshold=80        # only file issues for modules under 80%
```

With `--issues`, nothing is printed as a report; instead one issue per problem module is written into `modules/<module>/issues/`:

- A failing or unrunnable suite → `Bug`, priority `Urgent`.
- A module under the threshold → `Testing`, priority `High` when it is more than 25 points short, otherwise `Medium`.

Each issue is `state: Todo` and its description carries the module's rates, the threshold, and the least-covered files with their uncovered lines — enough for a fixer to start from. After creation, list the files written and their ids, then hand them to `/issue-plan` to be planned (and `talos issue:push` if the user wants them tracked in Linear).

## Fixing what it finds

This skill measures; it does not write tests. Once the report names the thin files:

- Hand the module (and the named files) to the **`test-author`** agent to write the missing happy-path, edge and error tests.
- Follow `optimize-testing` — cover behaviour, not lines. Never pad a rate with tests that assert nothing; a 100% line rate bought with empty assertions is worse than an honest 70%.
- A file that is genuinely untestable in isolation (a thin adapter over an SDK) is better excluded through the module's `bunfig.toml` `coveragePathIgnorePatterns` than covered by a fake test — say so in the report rather than doing it silently.

## Verify

Re-run scoped to the module after the tests land:

```bash
talos coverage:check --modules=<module>
```

Then re-run the full audit to confirm the workspace clears the threshold (`✔ Every module clears 90% — …`). Finish with `talos project:check --strict --logs` so the new specs also pass fmt, lint and the rest of the gate.

## Related

`talos check --strict` and `talos project:check --strict --logs` run the suites too, but only for pass/fail — neither measures coverage. Use `/project-fix` for the whole-project verdict, `/optimize` to prune and improve a module's tests, and this skill when the question is *how much of the code the tests actually reach*.

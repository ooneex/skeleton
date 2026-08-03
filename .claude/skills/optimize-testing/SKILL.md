---
name: optimize-testing
description: Project testing conventions and test-pruning rules — tests mirror src/ under tests/ as .spec.ts, every public method needs happy-path + edge-case coverage, drop trivial existence checks, keep deterministic behavior tests, consolidate redundancy.
when_to_use: Use when writing, pruning, or improving a module's tests.
user-invocable: false
---

# Testing Conventions

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** On any choice, pick the recommended option and proceed.

Apply when pruning or improving a module's tests (`optimize` skill, step 6).

## Conventions

- Test files mirror `src/` under `tests/` with the `.spec.ts` suffix.
- **Never run `bun test tests`.** Always run `talos coverage:check --strict --modules=<module>` — it runs the module's suite and measures it in one pass.
- `talos coverage:check --strict --modules=<module>` names the least-covered files and their uncovered lines, which is the work list for this skill (see `/coverage-check`). Keep working until **every line, statement and function is covered** — 100%, not just the 90% floor each module's `bunfig.toml` pins via `coverageThreshold`.
- Every public method with logic needs ≥1 happy-path + ≥1 edge-case test.
- Avoid trivial existence checks — test actual behavior.
- Keep tests deterministic: no random values, no time-dependent data.

## Pruning tests

- Remove trivial tests (class name checks, method existence) unless they are smoke tests for generated code
- Keep and improve tests that verify actual business logic, edge cases, error handling
- Consolidate redundant test cases into parameterized patterns
- Never pad a coverage rate: a line executed by a test that asserts nothing is uncovered in every sense that matters. Re-run `talos coverage:check --strict --modules=<module>` after pruning so the report reflects the tests that are actually left.

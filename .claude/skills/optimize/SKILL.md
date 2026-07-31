---
name: optimize
description: Optimize a module's codebase for quality, performance, and clean conventions. Enforces arrow functions (except class methods), Type/I naming (DI-enforced), explicit visibility, nullable columns; removes duplication and dead code; prunes trivial tests.
when_to_use: Use to optimize/clean up/refactor a module — not for new features, bug fixes, or issues.
model: sonnet
effort: high
agent: general-purpose
context: fork
argument-hint: '[module]'
---

# Optimize Codebase

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **Run autonomously — do not ask the user questions.** On any choice, pick the recommended option and proceed.

Bring a module in line with project conventions: clean code, no duplication, only meaningful tests. Not for new features, bug fixes, or issues — use the matching workflow instead.

**Rules throughout:**
- **Module location:** `<module>` = `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.
- Run every command from the **monorepo root**, never from inside a package.
- Start clean: no uncommitted changes (`git status`). Refactor only — never alter behavior or public APIs without checking callers first.
- Tests must pass before and after. If they were failing before, say so; don't claim a fix you didn't make.

## Routing — load on demand

Invoke each sub-skill only at the step that needs it; skip ones that don't apply.

| Invoke | Before | When |
|---|---|---|
| `optimize-conventions` | steps 3–5 | always |
| `optimize-testing` | step 6 | the module has tests |
| `optimize-ui` | step 7 | module is `design` or `spa` only |

## Steps

1. **Target** — work in `modules/<module>/`; ask if unspecified. For **several modules**, dispatch the `code-optimizer` sub-agent once per module via the Agent tool (independent modules concurrently); each runs these steps for its module and reports back, then collate. For a **single** module, run inline.

2. **Map (sub-agent)** — reading every file inline floods context. Spawn one read-only `Explore` sub-agent scoped to `modules/<module>/` returning *only* a digest, not file contents:
   - **Inventory** — each type, interface, class, standalone function + path.
   - **Naming violations** — type not ending `Type`; interface not starting `I`; non-arrow standalone function; method/property missing visibility; non-null assertion (`!`); optional entity property missing `null`/`nullable`.
   - **Duplication** — near-duplicates only: the same logic with renamed variables, two types describing one shape, utilities that differ by a line. Verbatim copies come from `project:check` in step 4 — don't spend the agent's budget hunting them.
   - **Dead code** — unused imports, unreachable branches, unused vars, empty files.

   Apply every fix yourself in the steps below.

3. **Conventions** — invoke `optimize-conventions`, then fix each reported violation; rename and update all references.

4. **Duplication & dead code** — find the verbatim copies with the check rather than by eye:

   ```bash
   talos project:check --only=duplication --modules=<module> --logs
   ```

   Each warning reads `<file>:<line>  duplication.block  <n> lines repeated at <file>:<line>, …`. Read every location it names before touching anything — the block that moves is the one whose module owns the logic.

   - **Widen the scope when the copy lives elsewhere.** The check only compares the modules it is given, so a block shared with another module stays invisible under a single `--modules`. Pass both (`--modules=<module>,<other>`) when you suspect one, and put the extraction in the module that owns the concept — or in a shared package when neither does.
   - **Fix it, then re-run.** Extract into a helper arrow, a base class, or a shared type; delete the copies; re-run the command until the block is gone.
   - **Leaving a block alone is a valid answer.** Two blocks that read alike today but answer to different owners will diverge tomorrow, and merging them couples the two. Say which blocks you left and why in the report — the check warns, it never fails.
   - **It only sees literal copies of 12+ lines.** A copy with its identifiers renamed, or a shorter one, will not appear — those come from the step 2 digest, and are fixed the same way.

   Then delete the dead code the digest listed: unused imports, unreachable branches, unused vars, empty files.

5. **Performance** — apply the performance rules from `optimize-conventions`.

6. **Tests** — invoke `optimize-testing`, then prune trivial tests, keep/improve meaningful ones, consolidate redundancy.

7. **UI** — if `design`/`spa`, invoke `optimize-ui` and adopt its patterns, then prove the accessibility of the result:

   ```bash
   talos project:check --strict --only=accessibility --modules=<module> --logs
   ```

   Fix every reported violation (never by disabling a rule); hand a large backlog to the `accessibility-fixer` agent.

8. **Verify** — from the root:

   ```bash
   talos check
   ```

   Fix every failure before completing.

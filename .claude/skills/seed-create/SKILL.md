---
name: seed-create
description: Generate a new database seed file with its test file, then complete the generated code.
when_to_use: Use when creating seed data for populating the database using @talosjs/seeds.
model: sonnet
effort: low
allowed-tools: Bash(talos seed:create *), Bash(talos check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make Seed

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

Generate a seed file and test file, then complete the implementation. Follow the `talos-scaffold` skill workflow (run-from-root, `--name`/`--module` inference, lint/format, conventions); this covers only the seed-specific parts.

- **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

## Steps

### 1. Infer the options from the request, then run the generator

```bash
talos seed:create --name=<name> --module=<module>
```

- `--name` — seed class name, from the data it seeds ("a seed for demo users" → `DemoUser`). Any casing; the CLI normalizes to PascalCase and appends the `Seed` suffix, so omit the suffix.

Also generates a `seeds.ts` root export file in the seeds directory.

### 2. Complete the seed data

Edit `modules/<module>/src/seeds/<name-seed>.yml`:

- Add entries with hardcoded `random.id()` values for `id` fields — generate via `bun -e "import { random } from '@talosjs/utils/random'; console.log(random.id())"`. For a human-facing short code column, use `random.code()` the same way.
- Do NOT use sequential IDs like `"item-1"`, `"item-2"`
- The same entity must use the same ID everywhere it appears

### 3. Complete the seed class

Read `modules/<module>/src/seeds/<Name>Seed.ts`, then:

- Import the relevant entity classes and repository
- Use `resolve()` from `@talosjs/container` to get the repository instance
- Map the imported YAML data to entity instances
- **Hash any credential/secret field** (passwords, API keys, tokens) with the framework's hashing utility before persisting — never store plaintext credentials, even in demo/dev seeds, since seed data can leak into other environments
- Persist the entities via the repository

**Declare cross-seed dependencies.** A seed that needs the rows another seed writes must import that seed and return it from `getDependencies()`, otherwise it may run first and reference rows that do not exist yet.

`getDependencies()` declares *ordering*, not extra work. A declared dependency is itself a registered seed that the runner runs exactly once, on its own turn — never call a dependency's `run()` yourself, and never write a seed that assumes being invoked twice. The `data` argument of `run()` holds each declared dependency's result in declaration order (`undefined` for one skipped as cached or inactive).

### 4. Complete the test file

Read and replace `modules/<module>/tests/seeds/<Name>Seed.spec.ts`.

**Coverage:** class identity (`name.endsWith("Seed")`, is constructor), `run` exists on prototype, `isActive` exists and returns `true` by default, `getDependencies` exists and returns an array, data YAML file exists/is non-empty/contains at least one entry, instance isolation.

```typescript
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { <Name>Seed } from "@/seeds/<Name>Seed";

const proto = () => Object.create(<Name>Seed.prototype) as <Name>Seed;
const dataFile = join(__dirname, "..", "src", "seeds", "<name-seed>.yml");

describe("<Name>Seed", () => {
  test("should have class name ending with 'Seed'", () => {
    expect(<Name>Seed.name.endsWith("Seed")).toBe(true);
  });

  test("should be a constructor function", () => {
    expect(typeof <Name>Seed).toBe("function");
  });

  test("should have 'run' method", () => {
    expect(typeof <Name>Seed.prototype.run).toBe("function");
  });

  test("'isActive' should exist and return true by default", () => {
    expect(typeof <Name>Seed.prototype.isActive).toBe("function");
    expect(proto().isActive()).toBe(true);
  });

  test("'getDependencies' should exist and return an array", () => {
    expect(typeof <Name>Seed.prototype.getDependencies).toBe("function");
    expect(Array.isArray(proto().getDependencies())).toBe(true);
  });

  test("data yml file should exist, be non-empty, and contain an entry", () => {
    expect(existsSync(dataFile)).toBe(true);
    const content = readFileSync(dataFile, "utf-8");
    expect(content.trim().length).toBeGreaterThan(0);
    expect(content).toMatch(/^-\s/m);
  });

  test("should produce independent instances", () => {
    expect(proto()).not.toBe(proto());
  });
});
```

### 5. Lint, format, and test

```bash
talos check --strict --logs
```

Fix every failure before completing.

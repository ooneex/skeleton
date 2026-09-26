---
name: database-create
description: Generate a new database class with its test file, then complete the generated code.
when_to_use: Use when creating a database adapter backed by PostgreSQL, SQLite, Turso, Cloudflare, Redis, MongoDB, or ClickHouse.
model: sonnet
effort: low
allowed-tools: Bash(talos database:create *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>] [--type=<postgres|sqlite|turso|cloudflare|redis|mongodb|clickhouse>]'
---

# Make Database Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** Pick the recommended option and proceed.

Generate a database class and test file, then complete the implementation (database-specific parts only). Follow the shared `talos-scaffold` skill for run-from-root, `--name`/`--module` inference, module registration, lint/format, and coding conventions.

**Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (once extracted into a shared package). Check both roots; every `modules/<module>/...` path applies equally under `packages/<module>/...`.

## Steps

### 1. Infer the options from the request, then run the generator

```bash
talos database:create --name=<name> --module=<module> --type=<postgres|sqlite|turso|cloudflare|redis|mongodb|clickhouse>
```

- `--name` — database class name, from its purpose (e.g. "a database for analytics" → `Analytics`). Any casing; the CLI normalizes to PascalCase and appends the `Database` suffix, so omit it.
- `--type` — one of `postgres`, `sqlite`, `turso`, `cloudflare`, `redis`, `mongodb`, or `clickhouse`; infer it from the request (e.g. "a Turso database" → `turso`), defaulting to `sqlite` when nothing suggests otherwise. If omitted, the generator asks via an interactive prompt.
- Cloudflare adapters receive the Worker's database binding through their constructor; pass `env.DB` at the application boundary.

### 2. Complete the database class

Read `modules/<module>/src/databases/<Name>Database.ts`, then:

- Do not import entity classes into the database. Modules declare them with `<Name>Database.registerEntities(...)`.
- Read those classes through `this.registeredEntities()` and reuse one process-wide source per path with `this.sharedSource()`.
- Adjust the database path if needed (default `"var/db"`)

```typescript
import { DataSource, SqlDatabase, decorator } from "@talosjs/database";

@decorator.database()
export class <Name>Database extends SqlDatabase {
  public getSource(database?: string): DataSource {
    if (this.source) {
      return this.source;
    }

    database = database || "var/db";

    return this.sharedSource(database, () => {
      return new DataSource({
        synchronize: false,
        entities: this.registeredEntities(),
        enableWAL: true,
        timeout: 30_000,
        database,
        type: "sqlite",
      });
    });
  }
}
```

### 3. Complete the test file

Read and replace `modules/<module>/tests/databases/<Name>Database.spec.ts`.

**Coverage:** class identity (`name.endsWith("Database")`, is constructor); `getSource` exists, returns a `DataSource`-like object (has `initialize`/`destroy`); `synchronize` is `false`; `entities` is the array from `registeredEntities()`; the same path reuses one source across instances; default path `"var/db"`, a different path opens another; instance isolation of the database class.

```typescript
import { describe, expect, test } from "bun:test";
import { <Name>Database } from "@/databases/<Name>Database";

describe("<Name>Database", () => {
  test("class name ends with 'Database' and is a constructor", () => {
    expect(<Name>Database.name.endsWith("Database")).toBe(true);
    expect(typeof <Name>Database).toBe("function");
  });

  test("'getSource' returns a DataSource-like object with synchronize disabled and an entities array", () => {
    const source = new <Name>Database().getSource();
    expect(typeof <Name>Database.prototype.getSource).toBe("function");
    expect(typeof source.initialize).toBe("function");
    expect(typeof source.destroy).toBe("function");
    expect((source.options as any).synchronize).toBe(false);
    expect(Array.isArray((source.options as any).entities)).toBe(true);
  });

  test("'getSource' uses the default path 'var/db', or the provided path when given", () => {
    expect((new <Name>Database().getSource().options as any).database).toBe("var/db");
    expect((new <Name>Database().getSource("custom/path/db").options as any).database).toBe("custom/path/db");
  });

  test("reuses one source across instances for the same path", () => {
    const first = new <Name>Database().getSource("var/shared.db");
    const second = new <Name>Database().getSource("var/shared.db");
    expect(second).toBe(first);
  });

  test("should produce independent instances", () => {
    expect(new <Name>Database()).not.toBe(new <Name>Database());
  });
});
```

### 4. Lint, format, and test

```bash
talos project:check --strict --logs
```

Fix every failure before completing.

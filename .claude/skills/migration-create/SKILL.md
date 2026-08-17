---
name: migration-create
description: Generate a new database migration file, then complete the generated code.
when_to_use: Use when creating a new database migration for schema changes using @talosjs/migrations.
model: sonnet
effort: medium
allowed-tools: Bash(talos migration:create *), Bash(talos check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--module=<module>]'
---

# Make Migration

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions;** pick the recommended option and proceed. **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` — check both roots before assuming a path is missing.

Generate a migration file, then complete the implementation. Follow the shared `talos-scaffold` skill workflow (run-from-root, `--module` inference, lint/format, coding conventions); this covers only the migration-specific parts.

## Steps

### 1. Run the generator

```bash
talos migration:create --module=<module>
```

There is no `--name` option — the file is named automatically from its version/timestamp. Capture the schema-change intent in step 2's `up()`/`down()`, not in a flag. Also generates a `migrations.ts` root export file in the migrations directory.

Never rename or hand-write the generated file. A bare `<version>.ts` (no `Migration` prefix) is invalid — see step 4.

### 2. Complete the migration

Read `modules/<module>/src/migrations/Migration<version>.ts`, then implement:

- `up()` with schema changes (create tables, add columns, create indexes, etc.)
- `down()` with the reverse operations to undo the migration

**Index rules — always index:**
- Foreign keys (e.g., `user_id`, `order_id`)
- `WHERE` fields (e.g., `email`, `slug`, `token`, `status`, `type`)
- `ORDER BY` fields (e.g., `created_at`, `updated_at`, `position`)
- Unique constraints (e.g., `email`, `slug`)
- Composite index when two fields are always queried together

Drop each index explicitly in `down()` before dropping the table or column it covers.

**Guard every `CREATE` with `IF NOT EXISTS`** — `CREATE TABLE IF NOT EXISTS`, `CREATE INDEX IF NOT EXISTS`, `CREATE UNIQUE INDEX IF NOT EXISTS`. This mirrors the `IF EXISTS` guards `down()` already uses and makes `up()` re-runnable, so a run that failed partway through can be re-applied instead of hand-unwound. Two limits it does not remove:

- The guard skips the statement when the object exists *in any shape*, so a table or index that drifted from the entity now passes silently instead of failing loudly. Drift is caught by the entity ↔ migration checks (repository/entity tests, `convention-reviewer`) — never by `up()`.
- `ALTER TABLE` has no general equivalent. `ADD COLUMN IF NOT EXISTS` and `DROP ... IF EXISTS` exist, but `ADD CONSTRAINT`, `ALTER COLUMN ... SET NOT NULL`, and `SET DEFAULT` do not, so a migration built on `ALTER` is not re-runnable and must not be blindly retried.

**Keep every identifier under 64 bytes.** Postgres silently truncates table, column, index, and constraint names at 63 bytes, so two long names sharing a prefix collide as `relation already exists` at migration time. When a generated name such as `IDX_<table>_<col_a>_<col_b>` overflows, shorten the parts rather than the meaning — `IDX_university_coordinator_audit_logs_coordinator_created_at`, not `IDX_university_coordinator_audit_logs_university_coordinator_id_created_at` — and use the same shortened name in `down()`.

**One migration owns each object.** Never re-create a table, index, or constraint another migration already creates. The `IF NOT EXISTS` guards make a duplicate `CREATE` *worse*, not safer: instead of failing the run with `relation already exists`, the second migration now silently no-ops, so its intended columns never appear and the mismatch only surfaces later as a runtime error. If a migration only refines an earlier one, keep the earlier one as the owner and reduce the newer one to its delta.

**Declare cross-module dependencies.** A migration that touches a table owned by another module must import that module's migration and return it from `getDependencies()`, otherwise it runs before the table exists (`relation does not exist`) whenever its module is migrated first.

`down()` is executed by `talos migration:down` (roll back the latest) and `talos migration:down --version <version>` (roll back this specific migration), so it must reverse `up()` exactly — a rollback that leaves the schema dirty is a bug.

### 3. Register the migration

A migration only runs when it is reachable from the module's migration entrypoints. After the generator runs, verify all three:

1. **`modules/<module>/src/migrations/migrations.ts`** — the barrel exports *every* migration file in the folder, one line each, in ascending version order:
   ```ts
   export { Migration20260812081730499 } from "./Migration20260812081730499";
   ```
   Every module that has a `migrations/` folder has this barrel — create it if it is missing.
2. **`modules/<module>/bin/migration/up.ts` and `down.ts`** — import the barrel, never the individual files:
   ```ts
   import "@module/<module>/migrations/migrations";
   ```
   The only extra imports allowed here are *cross-module* ones that pin ordering against another module's migration (`import "@module/user/migrations/Migration20260812081730499";`), each with a comment saying why.
3. **Cross-module dependencies inside a migration** — when `getDependencies()` references another module's migration, import the class by its full filename:
   ```ts
   import { Migration20260812081730499 } from "@module/user/migrations/Migration20260812081730499";
   ```

### 4. Naming rules

- The file is `Migration<version>.ts` — `Migration` + the 17-digit timestamp. A bare `<version>.ts` is invalid.
- The exported class name must match the filename exactly: `Migration20260812081730499.ts` → `export class Migration20260812081730499`.
- Import specifiers are always extensionless and mirror the filename: `"./Migration<version>"`, `"@module/<module>/migrations/Migration<version>"`.

**Fixing an invalidly named file** — rename with `git mv <version>.ts Migration<version>.ts` (preserves history), then update every reference repo-wide before checking:

```bash
rg -l 'migrations/<version>"|"\./<version>"' --glob '*.ts'
```

Update the barrel, the module's `bin/migration/{up,down}.ts`, sibling migrations, and any other module importing it. Never change the version/timestamp itself — it is the migration's identity in the `migrations` table, and renumbering desyncs environments that already ran it.

### 5. Lint, format, and test

```bash
talos check --strict --logs
```

Fix every failure before completing.

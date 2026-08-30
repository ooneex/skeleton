---
name: database-migrate
description: Run the database migration and seed lifecycle — apply pending migrations, roll back, reseed, and verify the schema matches the entities.
---

# Database Migrate

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

Drive the database lifecycle with the `talos` commands. This is the *runtime* workflow — scaffold new migration/seed files with `migration-create` / `seed-create`, then come back here to apply them.

**Rules that apply throughout:**
- **Run every command from the root of the project**, never from inside a package.
- **Docker services (Postgres, Redis, …) must be up.** A connection refused means Docker isn't running — start it with `talos app:start`.
- **`--drop` is destructive (dev only).** It wipes all data; never run it against a shared or production database, and confirm before any `--drop`.
- **Never edit an already-applied migration in place on a shared database** — add a new corrective migration instead.
- **A migration only runs when it is registered.** It must be named `Migration<version>.ts`, exported from the folder's `migrations.ts` barrel, and that barrel imported by the module's `bin/migration/up.ts` and `down.ts` — see `migration-create` for the full rules.

## Apply migrations

```bash
talos migration:up            # run all pending migrations
talos migration:up --drop     # DROP the database first, then run every migration (destructive — dev only)
talos migration:up --logs     # print the output of every module that failed
talos migration:up --modules=user,billing  # only the named modules (also --packages=a,b); cannot be combined with --drop
```

`migration:up`, `migration:down` and `seed:run` all capture each module's output rather than streaming it: the run prints a progress bar and a per-module report, and a failing module only shows its log under `--logs`.

## Roll back migrations

```bash
talos migration:down                      # roll back only the most recently applied migration
talos migration:down --version <version>  # roll back the single migration with that version
talos migration:down --logs               # print the output of every module that failed
talos migration:down --modules=user,billing  # only the named modules (also --packages=a,b)
```

Each rollback runs the migration's `down()` in a transaction and removes its row from the `migrations` table, so a later `talos migration:up` re-applies it. `<version>` is the timestamp in the migration's `getVersion()` (the number in the `Migration<version>.ts` filename). Rollback relies on a correct `down()` — if `down()` doesn't exactly reverse `up()`, prefer a new corrective migration over a rollback on shared data. Use `--version` instead of `--drop` when you only need to undo one migration.

## Seed data

```bash
talos seed:run                # run all seeds (idempotent)
talos seed:run --drop         # re-run every seed from scratch, ignoring the cache
talos seed:run --logs         # print the output of every module that failed
talos seed:run --modules=user,billing   # only the named modules (also --packages=a,b)
```

## Sync an entity change into the schema

When you change an entity's columns/relations:

1. `$migration-create --module=<module>` — scaffold a timestamped migration.
2. Implement `up()` with the DDL for the change and `down()` to reverse it exactly (drop what `up` adds). Match the entity's column types, nullability, and lengths — an entity column without `nullable` must be `NOT NULL` in the migration, and vice-versa. An asymmetric/irreversible `down()` is a bug.
3. `talos migration:up` to apply it.
4. Re-run the tests to confirm the entity and schema agree.

## Verify and troubleshoot

- **Verify** — after applying, run `talos workspace:run --commands=test` (repository/entity tests fail fast on a schema mismatch). Confirm every entity column has a matching migrated column with the same nullability/length.
- **Migration failed mid-way** — re-run with `--logs` to read the error, fix the offending `up()`, and in development re-run with `talos migration:up --drop` to rebuild from a clean state.
- **A migration silently never runs** — it isn't registered. Check that the file is named `Migration<version>.ts`, that `migrations.ts` exports it, and that `bin/migration/up.ts` imports the barrel. A missing table/column with no error in the log is almost always this.
- **Error stems from application code** (entity decorators, DI) — hand off to the `debug` skill.

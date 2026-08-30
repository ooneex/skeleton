---
name: module-create
description: Scaffold a backend business-domain module and complete its first entity, repository, service, controller, and supporting artifacts.
---

# Make Module

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions;** pick the recommended option and proceed. **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` — check both roots before assuming a path is missing.

Scaffold a new business-domain module, then complete the artifacts that give it its first vertical slice. Follow the shared `talos-scaffold` skill workflow (run-from-root, `--name`/`--module` inference, module registration, lint/format, conventions); this skill covers only the module-level orchestration.

For a **single** artifact inside an existing module, use the matching `<artifact>-create` skill instead. For a front-end design system or SPA, use `talos design:create` / `talos spa:create` (see `talos-commands`).

## Steps

### 1. Infer the module name and run the generator

Derive the name from the business domain ("a module for invoices and billing" → `billing`); any casing, the CLI normalizes it. `--destination` controls which module the new one registers into: pass `app` when the project has a single `api` module; when it has several `api`/`microservice` modules, infer the destination from the request. Then run:

```bash
talos module:create --name=<name> --destination=<destination>
```

Creates `modules/<name>/` with the `src/` subfolders (see `talos-module`), a mirrored `tests/`, a `<name>.yml` config (no `type:` ⇒ backend module), and a `<PascalName>Module.ts`, and registers it into its destination (for `app`, into `AppModule`/`SharedModule`; otherwise the chosen `api`/`microservice` module).

### 2. Plan the first slice

List the artifacts the domain needs for its first working slice. A typical CRUD domain needs, in dependency order:

1. **entity** — the domain data model.
2. **migration** — DDL for the entity's table/columns/relations.
3. **repository** — persistence for the entity (keep only the CRUD methods used).
4. **service** — the use case / business logic, injecting the repository.
5. **controller** — the HTTP (or WebSocket) endpoint, injecting the service.

Add only what the domain calls for — `permission`, `middleware`, `cron`, `queue`, `event`, `mailer`, `cache`, `seed`, `command`, etc. Don't scaffold artifacts the request doesn't need.

The domain's validation rules go in `src/constraints/` — `Assert<Name>` classes for the controller's `params`/`payload`/`queries` and `assert<Subject><Rule>` guards for the service's business rules (see `talos-module` → **Constraints**). There is no generator: write those files and their `tests/constraints/` mirrors by hand, reusing `@talosjs/validation/constraints/*` wherever one already covers the rule.

### 3. Generate and complete each artifact

For each planned artifact, invoke its `<artifact>-create` skill with `--module=<name>` (e.g. `$entity-create`, `$repository-create`, `$service-create`, `$controller-create`). Each runs its generator, completes the class + test, and registers it. Respect the **dependency rule** — controllers → services → repositories → entities, never the reverse (see `talos-module`).

### 4. Lint, format, and test

```bash
talos check --strict --logs
```

Fix every failure before completing. Report the module created, the artifacts filled in, and anything left as a stub for the user to flesh out.

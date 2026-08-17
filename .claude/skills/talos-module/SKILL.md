---
name: talos-module
description: Backend module layout and foundational patterns for this codebase — the module directory structure plus the dependency-injection, exception, and TypeScript conventions with code examples.
when_to_use: Use when creating or navigating a module, or when wiring DI or exceptions.
user-invocable: false
---

# Module Architecture

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing; every `modules/<module>/...` path applies equally under `packages/<module>/...`.

## Module Structure

All code lives under `modules/<name>/`. A module owns one business domain:
```
modules/<name>/
  <name>.yml      # Module manifest — declares type: "module" (or api | microservice | design | spa | admin | sdk)
  package.json    # Module package + its dependencies
  bin/            # Executable entry-point scripts for the module
  src/
    ai/           # AI integration classes — chats/, middlewares/, tools/ subfolders
    analytics/    # Analytics handler classes
    cache/        # Cache handler classes
    commands/     # CLI command classes (ICommand)
    controllers/  # HTTP + WebSocket controllers
    crons/        # Cron job classes
    databases/    # Database adapter + vector-database classes
    entities/     # TypeORM entity classes
    events/       # Pub/sub event classes
    exceptions/   # Exception classes
    flags/        # Feature flag classes
    loggers/      # Logger classes
    mailers/      # Mailer classes + JSX email templates
    middlewares/  # Middleware classes
    migrations/   # Versioned SQL migration files — Migration<version>.ts + a migrations.ts barrel exporting them all
    permissions/  # Permission classes
    queues/       # Queue classes
    repositories/ # Repository classes
    seeds/        # YAML seed data files
    services/     # Service classes
    storage/      # File storage classes
    translations/ # Translation classes + translations.yml dictionary
    types/        # TypeScript type definitions
    utils/        # Utility/helper functions shared across the module
    workflows/    # Workflow classes — transitions/ subfolder for each step
  tests/          # Tests mirroring src/ structure
  issues/         # Issue YAML files — <ID>.yml (see the /issue-* skills)
  marketing/      # Marketing post resources — <ID>/<ID>.yml + images/ + videos/ (see /marketing-create)
```

A module only contains the folders for the artifacts it actually uses — each `talos <artifact>:create` generator creates its `src/` subfolder (and the matching `tests/` one) on demand.

For front-end modules, see `talos-design` (design system), `talos-spa` (single-page app) and `talos-admin` (back-office dashboard). For typed config access, see `talos-env`.

## Dependency Injection

Every DI class is registered with a decorator (InversifyJS via `@talosjs/container`):
```typescript
import { inject } from "@talosjs/container";
import { decorator, type IService } from "@talosjs/service";

@decorator.service()
export class UserService implements IService {
  constructor(
    @inject(UserRepository)
    private readonly repository: UserRepository,
  ) {}

  public async execute(data?: ServiceDataType): Promise<void> {
    // business logic
  }
}
```
Every artifact follows one rule — `@decorator.<kind>()` on a class whose name ends with the matching PascalCase suffix:
`service()`/`Service`, `repository()`/`Repository`, `middleware()`/`Middleware`, `cron()`/`Cron`, `queue()`/`Queue`, `event()`/`Event`, `cache()`/`Cache`, `analytics()`/`Analytics`, `logger()`/`Logger`, `mailer()`/`Mailer`, `permission()`/`Permission`, `storage()`/`Storage`, `database()`/`Database`, `vectorDatabase()`/`VectorDatabase`, `featureFlag()`/`FeatureFlag`, `translation()`/`Translation`, `command()`/`Command`, `workflow()`/`Workflow`, `transition()`/`Transition`, plus the AI `chat()`/`Chat` and `tool()`/`Tool`. Controllers use controller-specific (route) decorators; TypeORM entities use entity decorators. Breaking the decorator/suffix contract throws `ContainerException` at startup.

## TypeScript Configuration

Strict TS: decorators (`emitDecoratorMetadata`); strict mode with `noUncheckedIndexedAccess` + `exactOptionalPropertyTypes`; ESNext modules with bundler resolution; target ES2022.

## Exception Handling

Domain exceptions extend `Exception` from `@talosjs/exception` with HTTP status codes + structured data. Throw typed exceptions from services rather than returning `null` or error codes. Every exception class must set `this.name` explicitly in its constructor, right after `super(...)`, even though `Exception` already assigns `this.name = this.constructor.name`:
```typescript
export class UserNotFoundException extends Exception {
  public constructor(userId: string) {
    super(`User "${userId}" was not found`, {
      key: "USER_NOT_FOUND",
      status: NOT_FOUND,
      data: { userId },
    });

    this.name = "UserNotFoundException";
  }
}
```
```typescript
throw new UserNotFoundException(userId);
```

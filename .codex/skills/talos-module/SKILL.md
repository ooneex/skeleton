---
name: talos-module
description: Backend module layout and foundational patterns for this codebase — the module directory structure plus the dependency-injection, exception, and TypeScript conventions with code examples.
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
    constraints/  # Every assertion the module owns — Assert<Name> route constraints + assert<Rule> domain guards
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
    utils/        # Utility/helper functions shared across the module — assertions belong in constraints/
    workflows/    # Workflow classes — transitions/ subfolder for each step
  tests/          # Tests mirroring src/ structure
  issues/         # Issue YAML files — <ID>.yml (see the /issue-* skills)
  marketing/      # Marketing post resources — <ID>/<ID>.yml + images/ + videos/ (see $marketing-create)
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

## Constraints

`src/constraints/` owns **every assertion the module makes about its own data**. Nothing assertion-shaped belongs in `utils/`, and a controller or service never inlines a rule it could name here. The folder mirrors `@talosjs/validation/constraints/` (`AssertId`, `AssertEmail`, `AssertName`, `AssertCountryCode`, `AssertHexaColor`, `AssertLocale`, …) — **reach for a package constraint first**; add a module-local one only when the rule is specific to this domain. There is no generator: write the file by hand, plus its mirror under `tests/constraints/`.

Two shapes live there.

**Route constraints** — one `Assert<Name>` class per `Assert<Name>.ts`, extending `Validation` from `@talosjs/validation`. These plug straight into a route's `params`/`payload`/`queries`:
```typescript
import { Assert, type AssertType, Validation } from "@talosjs/validation";

export class AssertCountryName extends Validation {
  public getConstraint(): AssertType {
    return Assert("2 <= string <= 120");
  }

  public getErrorMessage(): string | null {
    return "Must be a country name between 2 and 120 characters";
  }
}
```
```typescript
import { AssertCountryCode } from "@talosjs/validation/constraints/AssertCountryCode";
import { AssertCountryName } from "@/constraints/AssertCountryName";

@Route.post("/countries", {
  name: "country.create",
  version: 1,
  description: "Create a country",
  payload: { name: new AssertCountryName(), code: new AssertCountryCode() },
  response: Assert({ id: "string" }),
  roles: ["ROLE_ADMIN"],
})
```
The shared `Assert(...)` schemas a module's routes reuse (payload/response records, id patterns) live here too, one file per subject — `constraints/country.ts` exporting `countryIdAssert`, `COUNTRY_CREATE_PAYLOAD`, `COUNTRY_RESPONSE`.

**Domain guards** — camelCase `assert<Subject><Rule>` arrow functions that throw the module's typed exceptions for business rules a route schema can't express (cross-field, stateful, or lookup-dependent). Group them by subject in the same `constraints/<subject>.ts`, and call them from the service, never from the controller:
```typescript
export const assertCountryCodeUnique = (code: string, existing: CountryEntity | null): void => {
  if (existing) {
    throw new CountryCodeAlreadyUsedException(code);
  }
};
```

## Identifiers & Codes

Generate every identifier and short code with `random` from `@talosjs/utils/random` — never `crypto.randomUUID()`, `Math.random()`, `Date.now()`, or a hand-rolled generator.

```typescript
import { random } from "@talosjs/utils/random";

const id = random.id();     // identifiers: entity primary keys, raw-SQL inserts, seeds, job/correlation ids — 20 hex chars, `varchar(20)`
const code = random.code(); // human-facing short codes: verification/OTP, invite, referral, share — 8 chars, `varchar(8)`
```

`random.nanoid(size)` (hex) and `random.stringInt(size)` (digits) exist only for lengths an external contract dictates. A `code()` column needs a unique index, a conflict retry, and an expiry — it is never a primary key.

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

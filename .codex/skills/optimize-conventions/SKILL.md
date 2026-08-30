---
name: optimize-conventions
description: Apply this project's TypeScript, DI, entity, naming, hygiene, duplication, and performance conventions.
---

# Coding Conventions

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** On any choice, pick the recommended option and proceed.

Used by the `optimize` skill (steps 3–5) to enforce conventions and remove duplication/dead code.

## Visibility

Declare explicit visibility (`public`/`private`/`protected`) on every class method and property.

```typescript
export class UserService {
  private readonly repository: UserRepository;
  public async execute(data?: ServiceDataType): Promise<void> {}
  protected validate(): boolean {}
}
```

## Arrow Functions vs Class Methods

Arrow functions everywhere, except class methods (use regular method syntax).

```typescript
const formatName = (name: string): string => name.trim(); // standalone: arrow

export class UserService {
  public async execute(): Promise<void> {} // method: regular syntax, NOT `execute = async () =>`
}
```

## Type & Interface Naming

Type aliases **must** end with `Type`; interfaces **must** start with `I`. **Strictly enforced by DI decorators — violations throw at startup:**

| Artefact | Convention | Example |
|---|---|---|
| Service | ends `Service` | `UserService` |
| Repository | ends `Repository` | `UserRepository` |
| Middleware | ends `Middleware` | `AuthMiddleware` |
| Cron | ends `Cron` | `ExpiredTokenCleanupCron` |
| Type alias | ends `Type` | `ServiceDataType` |
| Interface | starts `I` | `IService` |

**Reuse a `@talosjs` type before declaring a new one.** Check `@talosjs/types` and the relevant domain package (see `talos-packages`) for a type that already covers the shape — import it instead of re-declaring it locally. Only add a new local type when no `@talosjs` package provides it.

## Non-null Assertions

Never use `!` on class properties — declare the type directly, or use an optional type. Don't paper over a missing default with an empty-string/zero placeholder either — a value that isn't known yet should stay undeclared, not fake-populated.

```typescript
export class UserEntity {
  public name: string;      // not `name!: string`, not `name = ""`
  public email?: string | null;
}
```

## Optional Entity Properties

- Optional (`?`) types must include `null` in the union.
- Never initialize with `= undefined`.
- Always set `nullable` explicitly in every `@Column`.
- Non-nullable fields with no real default (e.g. `title`, `email`) get a bare type, not an empty-string/zero placeholder. Only initialize when the value is a genuine default (`isBlocked = false`, `roles = []`, `id = random.id()`).

```typescript
export class BookEntity {
  @Column({ name: "title", type: "varchar", length: 255, nullable: false })
  public title: string; // not `title = ""`

  @Column({ name: "subtitle", type: "varchar", length: 255, nullable: true })
  public subtitle?: string | null; // not `subtitle?: string`, and not `nullable` omitted
}
```

## Entity Primary Keys

- Use `@PrimaryColumn({ name: "id", type: "varchar", length: 20, nullable: false })` with `id: string = random.id()` (from `@talosjs/utils/random`) — not `@PrimaryGeneratedColumn("uuid")` or a DB-generated default.
- Match the migration's column to `varchar(20) NOT NULL` — no `DEFAULT gen_random_uuid()`.

```typescript
import { random } from "@talosjs/utils/random";

export class UserEntity {
  @PrimaryColumn({ name: "id", type: "varchar", length: 20, nullable: false })
  public id: string = random.id(); // not `@PrimaryGeneratedColumn("uuid")`
}
```

## Identifiers & Codes

Every generated identifier or short code comes from `random` (`@talosjs/utils/random`) — never `crypto.randomUUID()`, `Math.random()`, `Date.now()`, a hand-rolled string builder, or a third-party id library.

- **`random.id()`** — the default for *any* identifier: entity primary keys, foreign-key values written by raw SQL, seed `id` fields, job/correlation/request ids, file and storage keys. 20 hex chars, so the column is `varchar(20)`.
- **`random.code()`** — the default for *any* human-facing short code: verification / confirmation / OTP codes, invite and referral codes, one-time coupons or share codes. 8 shuffled chars (2 letters `a-f` + 6 digits), so the column is `varchar(8)`.

```typescript
import { random } from "@talosjs/utils/random";

const id = random.id(); // "3f9c1a7b2e8d4056af13"  — identifiers
const code = random.code(); // "4e19d372"            — human-facing codes
```

Reach for the other helpers only when the length is dictated by an external contract — `random.nanoid(size)` for a non-default hex length, `random.stringInt(size)` for digits-only. Don't use them where `id()` or `code()` fits.

Codes are collision-prone by design: persist them behind a unique index, generate inside a retry on conflict, and give them an expiry — never treat a `code()` as a primary key.

## Dependency Injection

```typescript
import { inject } from "@talosjs/container";

@decorator.seed()
export class BookSeed implements ISeed {
  constructor(
    @inject(BookRepository)
    private readonly repository: BookRepository,
  ) {}
}
```

## Exceptions

Every `Exception` subclass sets `this.name` explicitly in its constructor, right after `super(...)`:

```typescript
export class UserNotFoundException extends Exception {
  public constructor(userId: string) {
    super(`User "${userId}" was not found`, { key: "USER_NOT_FOUND", status: NOT_FOUND, data: { userId } });

    this.name = "UserNotFoundException";
  }
}
```

## Code Hygiene

- Remove unused imports and dead code (unreachable branches, unused variables, empty files).
- No `TODO` comments without a corresponding task.

## Duplication & Dead Code

- Extract shared logic into helper arrow functions or base classes.
- Consolidate repeated type definitions; merge similar utilities.

## Performance

- Replace inefficient loops with single-pass approaches.
- Use `Map`/`Set` instead of arrays for lookups.
- Prefer early returns to reduce nesting.
- Drop unnecessary `async`/`await` where a direct return suffices.
- Eliminate redundant null/undefined checks.

## Migrations

**Never edit an existing migration file.** If an optimization pass calls for a schema change, run `talos migration:create` for a new migration instead — an already-applied migration is a historical record, and rewriting it desyncs environments that already ran it.

**Naming and registration** (violations to fix, since they silently skip a migration at runtime):

- The file is `modules/<module>/src/migrations/Migration<version>.ts` — the `Migration` prefix is mandatory, a bare `<version>.ts` is invalid.
- The exported class name matches the filename exactly (`Migration20260812081730499.ts` → `export class Migration20260812081730499`).
- `migrations.ts` in the same folder is a barrel exporting *every* migration file, one line each, in ascending version order.
- `modules/<module>/bin/migration/up.ts` and `down.ts` import that barrel (`import "@module/<module>/migrations/migrations";`), not individual files — the exception is a cross-module import pinning ordering against another module's migration, which is imported by full filename and carries a comment explaining why.
- Renaming an invalidly named file uses `git mv`, keeps the version/timestamp untouched (it is the migration's identity in the `migrations` table), and updates every reference: the barrel, the `bin/migration` entrypoints, sibling migrations, and other modules importing it.

**Idempotent DDL.** Every `CREATE` in `up()` carries `IF NOT EXISTS` — `CREATE TABLE IF NOT EXISTS`, `CREATE INDEX IF NOT EXISTS`, `CREATE UNIQUE INDEX IF NOT EXISTS` — mirroring the `IF EXISTS` guards in `down()`. Adding a missing guard is the one edit allowed to an existing migration file, since it changes no applied schema. It is not a licence to duplicate an object another migration already owns: with the guard, a duplicate `CREATE` silently no-ops instead of erroring, which hides the conflict rather than fixing it. `ALTER TABLE` is exempt — only its `ADD COLUMN`/`DROP` forms take a guard.

## Constraints

- Every assertion the module makes about its own data lives in `src/constraints/` — `Assert<Name>` classes (one per file, extending `Validation` from `@talosjs/validation`) for route `params`/`payload`/`queries`, the shared `Assert(...)` schemas routes reuse, and the camelCase `assert<Subject><Rule>` guards services call. See `talos-module` → **Constraints**.
- Move stray assertions there: validation helpers sitting in `src/utils/` (`*Validation.ts`, `*RouteAsserts.ts`), and rules inlined in a controller or service. Update every import; don't change what the rule accepts.
- Prefer an existing `@talosjs/validation/constraints/Assert*` (`AssertId`, `AssertEmail`, `AssertName`, `AssertCountryCode`, `AssertLocale`, `AssertHexaColor`, `AssertUrl`, …) over a module-local re-implementation of the same rule.
- Guards throw the module's typed exceptions — never return `false` or a message string for a domain rule.

## File & Folder Structure

**Respect the module's existing file and folder structure.** Load the matching structure skill before creating, moving, or renaming anything: `$talos-module` for backend modules, `$talos-spa` for SPA/admin, `$talos-design` for design, `$talos-storybook` for storybook, `$talos-swagger` for Swagger, and `$talos-scaffold` or `$talos-architecture` for project-level layout decisions. A file in the wrong place is a violation, but only move it to the location those references define.

---
name: optimize-conventions
description: Project coding conventions — explicit visibility, arrow functions vs class methods, Type/I naming (DI-enforced), no non-null assertions, nullable entity columns, DI wiring, code hygiene, duplication/dead-code removal, and performance rules.
when_to_use: Use when enforcing conventions, refactoring, or reviewing a module's code style.
user-invocable: false
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

## File & Folder Structure

**Respect the module's existing file and folder structure.** Don't invent a layout — look at the matching structure skill in `.claude/skills/` to know what's expected before creating, moving, or renaming anything: `talos-module` (backend `module`/`api`/`microservice`), `talos-spa` (`spa`/`admin`), `talos-design` (`design`), `talos-storybook` (`storybook`), `talos-swagger` (`swagger`), or `talos-scaffold`/`talos-architecture` for the project-level layout. A file in the wrong place is a violation to fix, but only move it to the location those references define.

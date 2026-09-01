---
name: talos-scaffold
description: Shared workflow for the `*-create` generator skills — run-from-root rule, --name/--module option inference, module registration, lint/format, and the test-scaffold baseline. Read alongside any `<artifact>-create` skill (service, controller, entity, cron, …); each artifact skill adds only its specifics.
when_to_use: Use alongside any `<artifact>-create` skill — the shared run-from-root rule, --name/--module inference, module registration, and lint/format workflow. Read whenever running a generator skill.
user-invocable: false
---

# Scaffold Workflow

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing; every `modules/<module>/...` path applies equally under `packages/<module>/...`.

Every `<artifact>-create` skill runs a generator, then completes the generated class and its test. They share the steps below; the artifact skill supplies the generator command, class template, and test coverage.

## Run from the project root

Run every command from the **root of the project**, never from inside an individual package.

## Generator options

```bash
talos <artifact>:create --name=<name> --module=<module>
```

- `--name` — any casing; the CLI normalizes to PascalCase and appends the artifact suffix (`Service`, `Controller`, `Cron`, …), so omit the suffix. The artifact skill says what to base the name on.
- `--module` — the target module, inferred from phrasing like "in the `blog` module" or "for the catalog feature". Omit to default to `shared` (SPA features have no default — the generator prompts).

The artifact skill lists extra flags (`--is-socket`, `--channel`, `--table-name`, `--route-*`, …) and notes when the generator prompts interactively instead.

Not every artifact has a generator. `src/constraints/` — the module's `Assert<Name>` route constraints, shared `Assert(...)` schemas, and `assert<Subject><Rule>` domain guards — is written by hand, together with its `tests/constraints/` mirror, following `talos-module` → **Constraints**. Constraints register nowhere; they are plain imports.

## Module registration

DI-registered artifacts must be added to the module's `ModuleType` in `src/<PascalModuleName>Module.ts` — put each in its own array:

```typescript
import type { ModuleType } from "@talosjs/module";
import { <Name>Controller } from "./controllers/<Name>Controller";

export const <PascalModuleName>Module: ModuleType = {
  controllers: [<Name>Controller],
  entities: [],
  middlewares: [],
  cronJobs: [],
  events: [],
};
```

Controllers → `controllers`, entities → `entities`, middlewares → `middlewares`, crons → `cronJobs`, pubsub events → `events`. Services, repositories, and the other artifacts auto-register via their decorator and need no entry here.

## Test scaffold baseline

Generated `.spec.ts` files share a baseline the artifact skill builds on: class identity (`Name.endsWith("<Suffix>")`, is a constructor), each method exists with the right return shape, and instance isolation (`new X() !== new X()`). Keep the artifact-specific coverage the skill lists, and replace any placeholder / "not implemented" assertions with real behavior once the class is implemented.

## Lint and format

```bash
talos project:check --strict --logs
```

## Coding conventions

Apply all coding conventions from the `optimize` skill.

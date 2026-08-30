---
name: queue-create
description: Generate a new queue class with its test file, then complete the generated code.
when_to_use: Use when creating a new BullMQ-backed job queue that extends Queue from @talosjs/queue.
model: sonnet
effort: medium
allowed-tools: Bash(talos queue:create *), Bash(talos check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make Queue Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions;** pick the recommended option and proceed. **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` — check both roots before assuming a path is missing.

Generate a queue class and test file, then complete the implementation. Follow the shared `talos-scaffold` skill workflow (run-from-root, `--name`/`--module` inference, module registration, lint/format, coding conventions); this covers only the queue-specific parts.

## Steps

### 1. Infer the options, then run the generator

```bash
talos queue:create --name=<name> --module=<module>
```

- `--name` — class name from the jobs it carries ("a queue for sending emails" → `Email`). Any casing; the CLI normalizes to PascalCase and appends the `Queue` suffix, so omit it.

### 2. Complete the queue class

Read `modules/<module>/src/queues/<Name>Queue.ts`, then implement:

- Add typed `add`/`addBulk` wrappers for the jobs this queue carries, or use the inherited `add`, `addBulk`, `removeJob`, and `close` methods directly
- `Queue` reads `QUEUE_REDIS_URL` from the injected `AppEnv`, so ensure that environment variable is set

```typescript
import { decorator, Queue } from "@talosjs/queue";

@decorator.queue()
export class <Name>Queue extends Queue {
  // Add custom queue logic here, or use the inherited
  // add, addBulk, removeJob and close methods.
}
```

### 3. Complete the test file

Read and replace `modules/<module>/tests/queues/<Name>Queue.spec.ts`:

**Coverage:** class identity (`name.endsWith("Queue")`, is constructor), the inherited `add`, `addBulk`, and `removeJob` methods exist on the prototype. Avoid instantiating directly in unit tests — the constructor opens a Redis connection; assert against the prototype or inject a mocked `AppEnv` instead.

```typescript
import { describe, expect, test } from "bun:test";
import { <Name>Queue } from "@/queues/<Name>Queue";

describe("<Name>Queue", () => {
  test("should have class name ending with 'Queue'", () => {
    expect(<Name>Queue.name.endsWith("Queue")).toBe(true);
  });

  test("should be a constructor function", () => {
    expect(typeof <Name>Queue).toBe("function");
  });

  test("should have 'add' method", () => {
    expect(typeof <Name>Queue.prototype.add).toBe("function");
  });

  test("should have 'addBulk' method", () => {
    expect(typeof <Name>Queue.prototype.addBulk).toBe("function");
  });

  test("should have 'removeJob' method", () => {
    expect(typeof <Name>Queue.prototype.removeJob).toBe("function");
  });
});
```

### 4. Lint, format, and test

```bash
talos check --strict --logs
```

Fix every failure before completing.

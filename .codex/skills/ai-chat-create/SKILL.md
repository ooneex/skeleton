---
name: ai-chat-create
description: Generate a new AI chat class with its test file, then complete the generated code.
when_to_use: Use when creating a chat that extends the Chat base class from @talosjs/ai (model, system prompts, tools, middlewares, skills).
model: sonnet
effort: medium
allowed-tools: Bash(talos ai:chat:create *), Bash(talos check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make AI Chat Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Generate an AI chat class and test file, then complete the implementation. Follow the `talos-scaffold` skill for the shared workflow (run-from-root, `--name`/`--module` inference, lint/format, conventions); this covers only AI-chat specifics.

## Steps

### 1. Infer options, then run the generator

```bash
talos ai:chat:create --name=<name> --module=<module>
```

- `--name` — chat class name from its purpose ("a chat that answers support questions" → `Support`). Any casing; the CLI normalizes to PascalCase and appends the `Chat` suffix, so omit it.

**Decide whether tools, middlewares, or skills are needed** — read the request; don't generate them by default.

- Tools — when the chat must act or fetch data beyond text generation ("look up an order", "search the docs", "send an email", "query the database"). One tool per distinct capability; else `getTools()` stays empty.
- Middlewares — for cross-cutting behavior on every run ("log each request", "rate-limit", "redact PII", "check authorization"); else `getMiddlewares()` stays empty.
- Skills — when a whole procedure is worth packaging: instructions plus the tools that carry them out ("handle a refund end to end", "onboard a new tenant"). One skill per procedure; else `getSkills()` stays empty.

If ambiguous, ask the user rather than guess. For each needed tool/middleware/skill, generate it first with `ai-tool-create` / `ai-middleware-create` / `ai-skill-create`, then reference the class in `getTools()` / `getMiddlewares()` / `getSkills()`.

### 2. Complete the chat class

Read `modules/<module>/src/ai/chats/<Name>Chat.ts`, then implement:

- `getModel()` — the OpenRouter model id in `provider/model` form (e.g. `anthropic/claude-sonnet-4.5`).
- `getSystemPrompts()` — the system prompts that define the chat's behavior.
- `getTools()` — the tool classes the model may call (generate with `ai-tool-create`).
- `getMiddlewares()` — the middleware classes applied to every run (generate with `ai-middleware-create`).
- `getSkills()` — the skill classes the chat can draw on (generate with `ai-skill-create`). Their catalogue entries are appended to the system prompts and their tools registered automatically, so they don't need to be repeated in `getTools()`.

```typescript
import { Chat, decorator } from "@talosjs/ai";
import type { AiMiddlewareClassType, AiSkillClassType, AiToolClassType } from "@talosjs/ai";

@decorator.chat()
export class <Name>Chat extends Chat {
  public getModel = (): string => "anthropic/claude-sonnet-4.5";

  public getSystemPrompts = (): string[] => ["You are a helpful assistant."];

  public getTools = (): AiToolClassType[] => [];

  public getMiddlewares = (): AiMiddlewareClassType[] => [];

  public getSkills = (): AiSkillClassType[] => [];
}
```

### 3. Complete the test file

Read and replace `modules/<module>/tests/ai/chats/<Name>Chat.spec.ts`.

**Coverage:** class identity (`name.endsWith("Chat")`); `getModel` returns a non-empty `provider/model` string; `getSystemPrompts`/`getTools`/`getMiddlewares`/`getSkills` return arrays; `run` and `stream` exist. After implementing, add assertions for the specific model, prompts, tools, and skills.

### 4. Lint, format, and test

```bash
talos check --strict --logs
```

Fix every failure before completing.

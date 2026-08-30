---
name: ai-skill-create
description: Generate a new AI skill class with its test file, then complete the generated code.
when_to_use: Use when creating a skill that implements ISkill from @talosjs/ai — a named procedure a chat can draw on, bundling instructions with the tools they need.
model: sonnet
effort: medium
allowed-tools: Bash(talos ai:skill:create *), Bash(talos check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make AI Skill Class

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Generate an AI skill class and test file, then complete the implementation. Follow the `talos-scaffold` skill for the shared workflow (run-from-root, `--name`/`--module` inference, lint/format, conventions); this covers only AI-skill specifics.

> A skill is a *procedure*: instructions plus the tools that carry them out. A tool is a single callable function (`ai-tool-create`); a skill is the know-how for using several of them together. If the request is one capability, make a tool — reach for a skill only when there is a procedure worth writing down.

**How a skill reaches the model.** `Chat` appends every declared skill's routing surface (`getDescription()`, `getWhenToUse()`) and full `getPrompt()` to the system prompt, and registers its tools on the run. So a skill in play is paid for on every turn — narrow which skills a request pulls in with `chat.judge()` before a request that only needs some of them.

## Steps

### 1. Infer options, then run the generator

```bash
talos ai:skill:create --name=<name> --module=<module>
```

- `--name` — skill class name from the procedure it covers ("handling order refunds" → `OrderRefund`). Any casing; the CLI normalizes to PascalCase and appends the `Skill` suffix. The generated `getName()` returns the `kebab-case` of the name (`order-refund`).

### 2. Complete the skill class

Read `modules/<module>/src/ai/skills/<Name>Skill.ts`, then implement the five getters:

- `getDescription()` — one line on what the skill covers.
- `getWhenToUse()` — the situations that should trigger it, written for the model to route on. Be concrete: name the user intents, not the internals.
- `getTools()` — the tool classes the procedure calls (generate each with `ai-tool-create`).
- `getPrompt()` — the procedure itself: the steps, the order, the rules, what to refuse. This is the payload the model follows once the skill is selected, so it can be long — keep `getDescription()`/`getWhenToUse()` short and put the detail here.

Inject dependencies via the constructor with `@inject` if the prompt has to be assembled from config or data.

```typescript
import type { AiToolClassType, ISkill } from "@talosjs/ai";
import { decorator } from "@talosjs/ai";

@decorator.skill()
export class <Name>Skill implements ISkill {
  public getName = (): string => "<kebab-name>";

  public getDescription = (): string => "Issue and explain order refunds.";

  public getWhenToUse = (): string =>
    "The user asks to cancel an order, disputes a charge, or asks for money back.";

  public getTools = (): AiToolClassType[] => [FindOrderTool, IssueRefundTool];

  public getPrompt = (): string => `
Look up the order first, confirm it is inside the refund window, then issue the refund.
Never refund an order that is already refunded — say so instead.
`;
}
```

**Authorization lives in the tools, not the prompt.** A skill's prompt is instructions the model may be talked out of; the tools it lists must enforce the user's permissions themselves (see `ai-tool-create`).

### 3. Complete the test file

Read and replace `modules/<module>/tests/ai/skills/<Name>Skill.spec.ts`.

**Coverage:** class identity (`name.endsWith("Skill")`); `getName` returns the expected `kebab-case` identifier; `getDescription`/`getWhenToUse`/`getPrompt` return non-empty strings; `getPrompt` contains the rules the procedure depends on; `getTools` returns exactly the tool classes the procedure needs.

### 4. Register the skill on a chat

Add `<Name>Skill` to the `getSkills()` array of the chat that should draw on it — that is enough: the chat advertises it and registers its tools. Don't also list the skill's tools in the chat's `getTools()`; duplicates are deduplicated, but `getTools()` is for tools the model may call without loading a procedure first.

### 5. Lint, format, and test

```bash
talos check --strict --logs
```

Fix every failure before completing.

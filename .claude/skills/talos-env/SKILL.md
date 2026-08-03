---
name: talos-env
description: Convention for reading environment variables in this codebase — inject the typed AppEnv from @talosjs/app-env instead of reading process.env, with a code example.
when_to_use: Use when wiring config or reading environment variables.
user-invocable: false
---

# Environment Variables

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

Never read `process.env` directly. Inject `AppEnv` from `@talosjs/app-env` and read typed properties:
```typescript
import { AppEnv } from "@talosjs/app-env";
import { inject } from "@talosjs/container";
import { decorator, type IService } from "@talosjs/service";

@decorator.service()
export class StripeService implements IService {
  constructor(@inject(AppEnv) private readonly env: AppEnv) {
    const secretKey = this.env.STRIPE_SECRET_KEY;
  }
}
```

`AppEnv` is a regular DI dependency — inject it into any artifact (service, repository, controller, …) the same way. See `talos-module` for DI conventions.

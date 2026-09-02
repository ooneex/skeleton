---
name: e2e-create
description: Create a Bun.WebView end-to-end test, then complete the bun:test spec with real browser interactions and assertions.
when_to_use: Use when adding browser end-to-end tests to a module — a Bun.WebView-powered `.spec.ts` under `e2e/`, run directly by Bun.
model: sonnet
effort: medium
allowed-tools: Bash(bun test *), Bash(talos e2e:run *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob
argument-hint: '[--name=<Name>] [--module=<module>]'
---

# Make a Bun.WebView E2E Test

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Create a native Bun browser test with [`Bun.WebView`](https://bun.com/blog/bun-v1.4#bun-webview), then complete the spec. Follow the shared run-from-root and option-inference rules in `talos-scaffold`; this skill covers only the E2E-specific work.

**Unlike the other `*-create` generators:** an E2E test is a plain `bun:test` spec that owns a `Bun.WebView`, not a DI-registered class. There is no module registration step or class-identity baseline. `Bun.WebView` is built into Bun 1.4, so do not add a browser-automation package, download a bundled browser, or create a separate runner config.

## 1. Infer the target and create the native spec

- `--name` — spec filename in PascalCase, inferred from the flow (for example, "E2E test for checkout" → `Checkout`). Strip a trailing `Spec`/`E2e` and write `e2e/<Name>.spec.ts`.
- `--module` — target module (defaults to `shared`). Resolve it under `modules/` or `packages/`.

Create or complete:

- `<root>/<module>/e2e/<Name>.spec.ts` — the `bun:test` + `Bun.WebView` test.
- `<root>/<module>/package.json` — ensure the script is `"e2e": "bun test e2e"`.

Preserve unrelated scripts and dependencies. No additional dependency or browser download is required. If the target still has obsolete external-runner config or dependencies, remove them only when they are no longer used by any remaining test.

## 2. Complete the spec

Use an absolute URL. Read `E2E_BASE_URL` so CI and local runs can target different app instances, with the module's normal local URL as the fallback.

```typescript
import { expect, test } from "bun:test";

const baseURL = process.env.E2E_BASE_URL ?? "http://127.0.0.1:5173";
const url = (path: string) => new URL(path, baseURL).href;

test("renders the home page", async () => {
  await using view = new Bun.WebView({
    width: 1440,
    height: 900,
    dataStore: "ephemeral",
  });

  await view.navigate(url("/"));

  expect(view.title).toMatch(/<Expected Title>/);
  expect(
    await view.evaluate<string>(
      'document.querySelector("h1")?.textContent?.trim()',
    ),
  ).toBe("<Expected Heading>");
});

test("completes the primary user flow", async () => {
  await using view = new Bun.WebView({ width: 1440, height: 900 });
  await view.navigate(url("/"));

  await view.click('a[href="/next"]');
  while (view.loading) await Bun.sleep(25);

  expect(new URL(view.url).pathname).toBe("/next");
  expect(
    await view.evaluate<string>(
      'document.querySelector("main h1")?.textContent?.trim()',
    ),
  ).toBe("<Expected Heading>");
});
```

- Prefer semantic CSS selectors: native elements, `aria-label`, `role`, `name`, and stable `href`/`type` attributes. Do not use generated class names or test IDs when the UI already exposes a semantic target.
- Use `view.click(selector)` for its built-in actionability wait. Use `view.type()`, `view.press()`, `view.scroll()`, and `view.scrollTo()` for real trusted input; do not trigger interaction with `element.click()` inside `evaluate()`.
- Use `view.evaluate()` to read DOM or application state. It accepts one JavaScript expression; wrap statement sequences in an IIFE.
- After an interaction that starts navigation, wait for `view.loading` to clear before asserting `view.url`, `view.title`, or the next page's DOM.
- Cover the happy path and at least one meaningful edge/error path where applicable.
- On failure, write `await view.screenshot()` with `Bun.write()` to a module-local ignored artifact path when the image helps diagnose the UI.

## 3. Choose the browser backend and start the app

The default backend is the system WebKit on macOS and needs no install. For Linux/Windows CI, or when Chromium-specific behavior matters, use an installed Chrome/Chromium/Edge through the Chrome backend:

```typescript
const backend = process.platform === "darwin"
  ? "webkit"
  : { type: "chrome", url: false } as const;

await using view = new Bun.WebView({ backend, width: 1440, height: 900 });
```

Set `BUN_CHROME_PATH` when auto-detection cannot find the installed browser. Use `view.cdp()` only for behavior the portable WebView API cannot express, and isolate that branch because CDP is Chrome-only.

`Bun.WebView` does not boot the application. Start the app with its normal Talos command before the suite, wait until `E2E_BASE_URL` responds, then run the E2E script. A connection refusal means the app or one of its Docker services is not ready.

## 4. Run and verify

From the project root:

```bash
talos e2e:run --modules=<module> --no-cache --logs
talos project:check --strict --modules=<module> --logs
```

Fix every failure before completing. Use the `e2e-run` skill to triage the suite without weakening assertions.

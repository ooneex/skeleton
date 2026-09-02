---
name: e2e-run
description: Run Bun.WebView end-to-end specs across packages and modules with granular caching, then triage failures against the app under test.
when_to_use: Use when running existing Bun.WebView E2E tests — a whole suite, one module, or a pre-merge gate. To author a new spec first, use e2e-create.
model: sonnet
effort: medium
allowed-tools: Bash(talos e2e:run *), Bash(talos workspace:run *), Bash(talos app:start *), Read, Edit, Grep, Glob
argument-hint: '[--modules=<a,b>] [--packages=<a,b>] [--logs] [--no-cache]'
---

# Run Bun.WebView E2E Tests

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** When a choice arises, pick the recommended option and proceed.

> **Module location:** `<module>` resolves to `modules/<module>/` or `packages/<module>/` (e.g. once extracted into a shared package). Check both roots before assuming a path is missing.

Drive the native Bun browser suite with `talos e2e:run`, the alias for `talos workspace:run --commands=e2e`. Each target's `e2e` script runs `bun test e2e`; its specs use the built-in [`Bun.WebView`](https://bun.com/blog/bun-v1.4#bun-webview). Scaffold or complete new specs with `e2e-create`, then return here to run them.

**Rules that apply throughout:**

- **Run every command from the project root**, never from inside a package.
- **The app under test must be reachable.** Start it with its normal Talos command, wait until the configured URL responds, and pass that origin through `E2E_BASE_URL`. A connection refusal means the app or its Docker services are not ready.
- **Always pass `--logs` as an agent.** The interactive footer is for a TTY; `--logs` streams readable output.
- **Only targets with an `e2e` script run.** Targets without `"e2e": "bun test e2e"` are skipped, so an empty run usually means the module has no native browser suite yet.
- **Use Bun 1.4 or newer.** On macOS the default WebKit backend is built in. On Linux/Windows, ensure Chrome/Chromium/Edge is installed and select `{ type: "chrome", url: false }`; set `BUN_CHROME_PATH` when auto-detection needs help.

## Run the suite

```bash
talos e2e:run --logs                          # every package and module with an e2e script
talos e2e:run --modules=billing,user --logs   # only named modules (also --packages=a,b)
talos e2e:run --no-cache --logs               # bypass cached task results
```

The workspace runner executes each target's native `e2e` script in dependency order and caches results in `var/cache/workspace/` from file content, transitive workspace dependencies, and script text. The first failure stops the run and prints its `bun:test` output; a cache hit replays earlier logs. Use `--no-cache` whenever the result depends on live app state that the cache cannot observe.

## Triage failures

When a spec fails:

1. **Locate the spec** — `<root>/<module>/e2e/<Name>.spec.ts`. Read the failing `bun:test` assertion and the selector or `evaluate()` expression it uses.
2. **Decide test vs. app.** A `view.click(selector)` actionability timeout usually means the semantic target disappeared, stayed hidden, moved, or is obscured. A wrong URL, title, text, or application state usually signals a product regression. Fix the app when its contract changed unintentionally; update the spec only when the intended UI contract changed.
3. **Check the target URL.** Confirm `E2E_BASE_URL` points at the intended running module and that the spec turns relative paths into absolute URLs with `new URL(path, baseURL)`. A stale origin makes every navigation fail similarly.
4. **Check the backend.** On macOS use the built-in WebKit unless the flow specifically requires Chromium. On Linux/Windows select the Chrome backend and verify the installed browser path. Use inherited browser stderr temporarily when launch failures are otherwise silent.
5. **Capture evidence.** On a UI failure, write `await view.screenshot()` to an ignored artifact path. For page-side errors, construct the view with `console: globalThis.console` while diagnosing.
6. **Re-run scoped** — `talos e2e:run --modules=<module> --no-cache --logs`.

Prefer semantic selectors and WebView's trusted `click`/`type`/`press`/scroll operations. Use `evaluate()` for assertions and state reads, not synthetic DOM interaction. Never weaken an assertion to make a real regression pass.

## Verify

Once green, run the full module gate:

```bash
talos project:check --strict --modules=<module> --logs
```

If the failure comes from application code rather than the spec, hand it to the `debug` skill.

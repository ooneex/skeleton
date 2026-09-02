---
name: ui-verify
description: Verify a changed UI in a running app with Bun.WebView, including rendered layout, trusted interactions, responsive viewports, accessibility behavior, and screenshot evidence.
when_to_use: Use after changing a rendered SPA, admin, Storybook, Swagger, or design-preview surface and before calling the UI complete.
model: sonnet
effort: medium
allowed-tools: Bash(bun *), Bash(talos app:start *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob, Skill
argument-hint: '[--module=<module>] [--url=<url>] [--route=<path>]'
---

# Verify UI with Bun.WebView

Use this after changing any rendered UI. Unit and happy-dom tests remain required, but they do not prove that the real application lays out correctly or responds to real browser input.

## Prepare the surface

- Run from the project root and identify the owning SPA, admin, Storybook, Swagger, or design preview.
- Start that surface with its normal Talos command, wait until its URL responds, and use `E2E_BASE_URL` when the project defines it. Do not replace an existing app process or change its configuration merely to make verification easier.
- Use Bun 1.4 or newer. On macOS use the built-in WebKit backend. On Linux or Windows use an installed Chrome, Chromium, or Edge through `{ type: "chrome", url: false }`; use `BUN_CHROME_PATH` when discovery needs help.

## Exercise the real UI

Drive the running page with the built-in [`Bun.WebView`](https://bun.com/blog/bun-v1.4#bun-webview):

```ts
await using view = new Bun.WebView({ width: 1440, height: 900 });
await view.navigate(new URL(route, baseURL).href);
await view.click("button[type='submit']");
const state = await view.evaluate("document.body.innerText");
await Bun.write(screenshotPath, await view.screenshot());
```

- Verify the changed surface at a representative desktop viewport and a narrow mobile viewport. Use a fresh view for each viewport so responsive state does not leak between checks.
- Reach the target through the same navigation a user follows. Exercise every changed interaction with trusted `click`, `type`, `press`, and scroll input. Use `evaluate()` for assertions and state reads, never to synthesize interaction with DOM `.click()` or dispatched events.
- Assert observable outcomes after each action: URL, visible copy, expanded/selected/disabled state, focus movement, loading/error/empty state, and persistence where applicable.
- Check `document.documentElement.scrollWidth <= document.documentElement.clientWidth` at each viewport, then inspect screenshots with the assistant's image viewer for clipping, overlap, broken hierarchy, unreadable contrast, misplaced overlays, and unintended horizontal scroll.
- For keyboard behavior, tab through the changed flow with `press("Tab")`, confirm focus order and visible focus, and activate the primary path without a pointer. Use realistic long, empty, and error data when the surface exposes those states.

Fix application defects and repeat the failing check. Do not weaken an assertion or call UI work complete from unit tests alone. If the app or a required service cannot start, report that concrete blocker and leave browser verification explicitly incomplete.

## Durable coverage

This workflow supplies rendered evidence for the current change. When the flow is a regression risk, appears in issue `testing` steps, or represents a critical user journey, use `/e2e-create` to preserve it as a `bun:test` spec under `e2e/`, then run it with `/e2e-run`.

Report the routes, viewports, trusted interactions, assertions, and screenshots inspected. Mention any state that could not be reached and why.

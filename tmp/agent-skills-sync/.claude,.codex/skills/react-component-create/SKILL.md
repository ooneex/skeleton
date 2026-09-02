---
name: react-component-create
description: Generate a new React component with a happy-dom + React Testing Library test, then complete the generated code.
when_to_use: Use when adding a presentational or container React component to a SPA module — at the module level or scoped to a feature.
model: sonnet
effort: medium
allowed-tools: Bash(talos react:component:create *), Bash(talos project:check *), Read, Edit, Write, Grep, Glob, Skill
argument-hint: '[--name=<Name>] [--module=<module>] [--feature=<feature>]'
---

# Make React Component

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos project:check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — never ask questions.** On any choice, pick the recommended option and proceed.

Generate a React component and its test, then complete both. Follow the shared `talos-scaffold` workflow (run-from-root, `--name`/`--module` inference, lint/format, conventions); this covers only the component-specific parts.

## Rules

- **Design system first — always pick UI elements from the design system module.** Every button, input, select, checkbox, dialog, drawer, card, badge, tooltip, table shell, icon, and layout primitive comes from the design module (`@module/<design>/...`) — never a raw styled `<button>`/`<input>`/`<div>`, a third-party UI kit, or a hand-rolled copy of something the system already exposes. Before writing markup, list what exists (`ls modules/<design>/src/components`, `ls modules/<design>/src/icons`, `cat modules/<design>/src/index.ts`) and pick from it; only when nothing fits do you add the missing primitive to the design module and consume it from there — never style a one-off locally. Every color, spacing, radius, shadow, and type size resolves to the design module's tokens.
- **Prefer the design system's defaults — never restate them at the call site.** Pass a prop only when its value differs from the component's own default: `<ButtonCancel type="button" size="md" onClick={onCancel}>` is wrong when `md` is the default size — write `<ButtonCancel type="button" onClick={onCancel}>`. Read the component's `cva` `defaultVariants` (and its default parameter values) before passing `size`, `variant`, `color`, `tone`, `radius`, `align`, and friends, and drop any `className` that re-applies what the default already gives you. Redundant props hide the one prop that actually matters and pin the call site to a value the design system may re-tune later.
- **Always use the design module's intent-named action button.** It ships one component per common action, each wrapping `Button` with the right variant, leading icon, and default label — pick by intent: cancel/dismiss/abort → `ButtonCancel`; back/previous step → `ButtonBack`; next/continue → `ButtonNext`; save/create/submit → `ButtonSave`; edit/rename/modify → `ButtonEdit`; delete/remove/destroy → `ButtonDelete`; overflow "…" menu trigger → `ButtonMore`. Never a plain `Button` carrying that label, a `variant`-tweaked button, a raw `<button>`, or a text link. Pass children only to override the wording (a translated string, "Discard", "Publish", "Remove"), and never restate the variant or re-add the icon it already renders. If the design module lacks the one you need, add it there and consume it from there.

- A component belongs to a **SPA module** (`type: spa` in its `<name>.yml`). Create it first with `spa:create` if missing.
- `<module>` resolves to `modules/<module>/` **or** `packages/<module>/` — check both before assuming a path is missing.
- Keep components **presentational**: compose primitives from the linked `design` module (never style from scratch), receive data via props or a feature hook, reach the backend through services/hooks (never import server modules).
- **Placement:** shared across the SPA → module level (`src/components/`); serves one feature → `--feature` (`src/features/<feature>/components/`). Never import another feature's internals; shared-by-two → keep at module level (or promote a reusable primitive to the design module).

## Steps

### 1. Infer options, then run the generator

```bash
talos react:component:create --name=<name> --module=<module> [--feature=<feature>]
```

- `--name` — from what it renders ("a back button" → `ButtonBack`). Any casing; normalized to PascalCase.
- `--module` — target SPA (e.g. "in the `dashboard` SPA"). No default; prompts if omitted.
- `--feature` — feature owner (e.g. "for the user-profile feature"). Omit for a shared component. Any casing; normalized to kebab-case, strips trailing `Feature`/`Layout`.
- `--override` — pass to regenerate an existing component; otherwise the generator prompts and aborts if declined.

The generator also installs test dev deps (`@happy-dom/global-registrator`, `@testing-library/react`, `@testing-library/jest-dom`) at the project root and writes shared `happydom.ts` + `bunfig.toml` at the module root on first use (never overwriting existing files).

**Files generated** (`<Name>` PascalCase, `<feature>` kebab-case):

| | Component | Test |
|---|---|---|
| Module-level | `src/components/<Name>.tsx` | `tests/components/<Name>.spec.tsx` |
| Feature-scoped | `src/features/<feature>/components/<Name>.tsx` | `tests/features/<feature>/components/<Name>.spec.tsx` |

### 2. Resolve the linked design module

Read `modules/<module>/<module>.yml`'s `design:` field (kebab-case name, e.g. `design: "ui"`).

- **No `design:` field** — no design module: build with plain elements and suggest `talos design:create`.
- Otherwise list its primitives and props, then import via the `@module/<design>/...` alias, matching the export style you find (per-file vs. barrel):

```bash
ls modules/<design>/src/components 2>/dev/null && cat modules/<design>/src/index.ts 2>/dev/null
```
```typescript
import { Button } from "@module/<design>/components/Button"; // per-file
import { Button } from "@module/<design>";                   // barrel
```

### 3. Complete the component

Replace the placeholder body with the real UI — a thin arranger over the design primitives. Follow the `optimize-ui` skill (interaction, motion, typography, color, surface): resolve every visual value from design-module tokens, never a hardcoded one-off; avoid AI-slop (`optimize-ui`'s `references/ai-slop.md`).

- **Inspirations — always start here, before writing markup.** Take inspiration from the design module's inspirations library (`modules/<design>/src/inspirations/<category>/<slug>.yml` + matching `.webp`): `rg` the `.yml` files for the categories this component touches (`card`, `form`, `table`, `list`, `modal`, `filter`, `navigation`, …), shortlist 2–4 whose `usage` fits, read them and open their screenshots with the Read tool, then build against their structure, density, control placement, labels, and state coverage. Never copy their colors, radii, shadows, spacing, or dummy copy — those come from design tokens. See `optimize-ui`'s `references/inspirations.md`.
- **Tables** — if the component renders a table, data grid, or a list with sorting/filtering/pagination/selection, build it with **TanStack Table (`@tanstack/react-table`, latest version)**: `bun add @tanstack/react-table` if missing, declare the features you use with `tableFeatures({...})`, and render via `table.FlexRender`. Never hand-roll that state over a raw `<table>` and never add a pre-built grid (AG Grid, MUI DataGrid, react-table v7, …) — it is headless, so the markup and styling still come from the design primitives. See `optimize-ui`'s `references/data-and-performance.md` and https://tanstack.com/table/latest/docs/framework/react/quick-start.
- **Charts** — if the component renders a chart, graph, plot, sparkline, or any data visualization, build it with **TanStack Charts (`@tanstack/charts`, latest version)**: `bun add @tanstack/charts` if missing, declare the composition with `defineChart` (marks + channels + scales from `@tanstack/charts/scales/*`), and render it through `Chart` from `@tanstack/charts/react` with an `ariaLabel`. Never add another charting library (Recharts, Chart.js, ECharts, Nivo, Victory, …) and never hand-roll SVG/canvas plotting — colors and type still resolve to design tokens via the `--ts-chart-*` variables. Hoist the definition and its data out of the render. See `optimize-ui`'s `references/data-and-performance.md`, https://tanstack.com/charts/v0/docs/overview, and the examples at https://tanstack.com/charts/catalog.
- **Scroll areas** — if any region of the component can outgrow its box (a listing, a menu, a long text/description block, a sidebar, a panel or dialog body, a code block, log output), wrap it in the design module's **`ScrollArea`** (`import { ScrollArea } from "@module/<design>/components/scroll-area";`) instead of a raw `overflow-auto`/`overflow-y-scroll` div — it brings the styled scrollbar and overflow fades with it. Cap the height on the viewport (`viewportClassName="max-h-*"`), give the root `min-h-0 flex-1` inside a flex column, use `hideScrollbar` only when the bar is noise, and `<ScrollArea.Bar orientation="horizontal" />` for horizontal scrolling. Leave the page's document scroll native. See `optimize-ui`'s **Scroll areas** section.
- Props type `<Name>PropsType`; prefer extending the underlying props (`React.ComponentProps<typeof Button>`) over redeclaring.
- Pure and presentational — no data fetching; receive via props or, for containers, a feature hook (`features/<feature>/hooks/`).
- **One component per file**, named after it; extract sub-pieces into their own file in the same folder.

```tsx
import { ArrowLeftIcon } from "@module/<design>/icons/ArrowLeftIcon";
import { Button } from "@module/<design>/components/Button";

type ButtonBackPropsType = Omit<React.ComponentProps<typeof Button>, "variant">;

export const ButtonBack = ({ children, ...props }: ButtonBackPropsType) => {
  return (
    <Button variant="outline" {...props}>
      <ArrowLeftIcon />
      {children ?? "Back"}
    </Button>
  );
};
```

### 4. Complete the test

Expand the generated spec to cover real behavior:

- Keep the `/// <reference lib="dom" />` directive and the `bun:test` + testing-library imports (`happydom.ts` registers DOM globals).
- Query by role/text/label, not test IDs; assert with jest-dom matchers.
- Cover: renders, each meaningful prop/variant, and user interactions (`@testing-library/user-event` or `fireEvent`) with their effect.
- Keep the relative import path (generator wires the correct depth) pointing at the component under test.

```tsx
/// <reference lib="dom" />

import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonBack } from "../../src/components/ButtonBack";

describe("ButtonBack", () => {
  test("renders the default label", () => {
    render(<ButtonBack />);
    expect(screen.getByRole("button")).toHaveTextContent("Back");
  });

  test("renders custom children", () => {
    render(<ButtonBack>Go back</ButtonBack>);
    expect(screen.getByRole("button")).toHaveTextContent("Go back");
  });
});
```

### 5. Lint, format, and test

```bash
talos project:check --strict --logs
```

Fix every failure before completing.

### 6. Verify the rendered component

Run `/ui-verify` against the owning feature route or its Storybook story. Exercise every changed interaction with trusted Bun.WebView input at desktop and mobile viewports, inspect screenshots, and fix any rendered defect. The component is not complete on happy-dom coverage alone; if it has no reachable preview, add or update the related story first.

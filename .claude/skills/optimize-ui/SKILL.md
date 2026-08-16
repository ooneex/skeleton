---
name: optimize-ui
description: Recommended UI/UX craft rules and React implementation patterns for design and spa modules — design-system-first styling plus reference docs for interaction states, motion, typography, color/contrast, surfaces, layout, hooks, and TanStack/Zustand state.
when_to_use: Use only when building or optimizing a React module (design or spa).
user-invocable: false
---

# UI & React Patterns (design & spa modules)

> **Package manager: `bun` and `bunx` only.** Never `npm`, `npx`, `yarn`, or `pnpm` — the sole exception is the `talos npm:*` commands, which publish to the npm registry.

> **CLI first.** A `talos`/`bun` command is faster and cheaper than doing the same work by hand: `talos <artifact>:create` over hand-writing a file, `talos check --strict --logs` / `talos fmt` / `talos lint` / `talos test` over running each tool yourself, `talos <domain>:<verb>` over scripting the steps, and a single `rg` / `git` / `ls` invocation over file-by-file reads. `talos help` and `talos <command> --help` list what exists — check there before writing a manual procedure, and only fall back to manual work when no command covers it.

> **Run autonomously — do not ask the user questions.** On any choice, pick the recommended option and proceed.

Apply **only** to a React module (`design` or `spa`) — `optimize` calls this for step 7. `<module>` = `modules/<module>/` or `packages/<module>/`; check both roots.

Install missing deps at the project root:

```bash
bun add zustand @tanstack/react-query @tanstack/react-table @tanstack/charts @tanstack/react-virtual @tanstack/react-pacer @tanstack/react-hotkeys
```

## Tables

**Every table or data grid is built with TanStack Table (`@tanstack/react-table`, latest version) — no exceptions.** Never hand-roll sorting/filtering/pagination/selection state over a raw `<table>`, and never introduce a pre-built grid (AG Grid, MUI DataGrid, react-table v7, …). It is headless, so the markup and every visual value still come from the design module's components and tokens. When optimizing existing UI, port hand-rolled tables onto it. See `references/data-and-performance.md` for the setup, the opt-in `tableFeatures` pattern, and the rules; docs at https://tanstack.com/table/latest/docs/overview.

## Charts

**Every chart, graph, plot, sparkline, or dashboard visualization is built with TanStack Charts (`@tanstack/charts`, latest version) — no exceptions.** Never add another charting library (Recharts, Chart.js, ECharts, Nivo, Victory, Highcharts, …) and never hand-roll SVG/canvas plotting or raw D3 selections. It is a typed grammar of marks — you declare data, marks, channels, and scales via `defineChart` and render through `@tanstack/charts/react` — so colors, fonts, and spacing still resolve to the design module's tokens (`--ts-chart-*` variables and inherited `currentColor`). When optimizing existing UI, port charts off whatever library they use. It is pre-alpha, so pin the installed version. See `references/data-and-performance.md` for the setup, mark selection, and the rules; docs at https://tanstack.com/charts/v0/docs/overview and worked examples at https://tanstack.com/charts/catalog.

## Scroll areas

**Every bounded region whose content can outgrow its box scrolls through the design module's `ScrollArea` — never a raw `overflow-auto` / `overflow-y-scroll` / `overflow-x-auto` div.** That covers listings and tables, menus/dropdowns/comboboxes, sidebars and nav trees, dialog/drawer/sheet/panel bodies, long prose or docs, code blocks, chat threads, and log output. It renders the styled scrollbar, the top/bottom overflow fades, and keyboard-focusable viewport for free, so scrolling looks and behaves the same everywhere.

```tsx
import { ScrollArea } from "@module/<design>/components/scroll-area";

<ScrollArea className="min-h-0 flex-1" viewportClassName="max-h-96 overscroll-contain">
  {items.map(...)}
</ScrollArea>
```

- Cap the scroll height on the **viewport** via `viewportClassName` (`max-h-*` / `h-full`); `className` styles the root box.
- Inside a flex column, give the root `min-h-0 flex-1` so it shrinks instead of pushing the page taller.
- `hideScrollbar` only where the bar is pure noise; `<ScrollArea.Bar orientation="horizontal" />` for horizontal scrolling.
- Leave the **page's** document scroll native — `ScrollArea` is for bounded regions, not the window.
- Virtualizing a long list (TanStack Virtual) still happens *inside* the ScrollArea: point `getScrollElement` at the viewport element (`[data-slot="scroll-area-viewport"]`).
- When optimizing existing UI, port ad-hoc `overflow-*` scroll containers onto it.

## Inspirations

**Always take inspiration from the inspirations library before designing or implementing any UI — screen, layout, component, or redesign.** It lives in the design module at `modules/<design>/src/inspirations/<category>/<slug>.yml` + a matching `.webp` screenshot: ~820 real product screens across 49 categories (`table`, `form`, `dashboard`, `sidebar`, `settings`, `modal`, `chart`, `list`, `filter`, `onboarding`, …). Never start from a blank page or a generic mental template while it sits there unread.

Workflow: pick the categories the work touches → `rg` the `.yml` files (tags / `usage`) → shortlist 2–4 whose `usage` matches the task → read those YAMLs and open their screenshots with the Read tool → design against them → note which ones you drew from.

Take structure, hierarchy, density, control placement, labels, and anticipated states (empty, loading, warning, permission). Never take palettes, fonts, radii, shadows, or spacing as literal values — every visual value still resolves to this project's design tokens and components — and never copy a screen pixel-for-pixel or ship its dummy copy. Inspirations are reference assets: never imported, never bundled, never edited.

Full procedure: `references/inspirations.md`.

## Design system

**Always build UI with the project's main design system — never restyle from scratch or hand-roll primitives that already exist there.** Use its component/token if one fits; else add the primitive to the design module per its conventions. Never ask which visual treatment, color, spacing, or variant — infer from the system's tokens/components and these rules.

- Before styling, do a discovery pass: does a token/component already cover this? If a deviation is unavoidable, classify it (missing token vs. one-off implementation vs. conceptual mismatch with neighboring screens) so the fix addresses the real cause.
- In a `spa` module, read the `design:` field in `modules/<module>/<module>.yml` for the linked design module, then list its exports (`ls modules/<design>/src/components`, `cat modules/<design>/src/index.ts`).
- Import design components via the module path alias:

  ```typescript
  import { Button } from "@module/<design>/components/Button";
  // or from a barrel re-export:
  import { Button, Card } from "@module/<design>";
  ```

- When optimizing existing UI, replace ad-hoc styled elements (raw `<button>`, `<input>`, one-off styled divs) with the system's equivalents. Fall back to plain elements only when no matching component exists — prefer adding the missing primitive to the design module over duplicating styles in the SPA.
- In a `design` module, extend the system itself: new components belong there and follow its tokens, variants, and conventions — colors, spacing, radii, shadows, and type sizes must always resolve to tokens, never a hardcoded one-off.

## UI craft references

Read the relevant reference(s) below **before** implementing — each is short, so open only what applies:

| Reference | Read when touching... |
|---|---|
| `references/inspirations.md` | any new screen, layout, or component — always read this one, **before** writing markup |
| `references/ai-slop.md` | any new screen, layout, or component — always read this one |
| `references/interaction-states.md` | any interactive element — hover/focus/active/disabled/loading/error states, empty states, error copy, destructive actions, hit areas |
| `references/motion.md` | any transition, animation, or entrance/exit effect |
| `references/typography.md` | text sizes, line length, dynamic numbers, headings |
| `references/color-contrast.md` | colors, contrast, state indicators, accent usage |
| `references/surfaces.md` | shadows, borders, cards, elevation, radii |
| `references/layout-spacing.md` | spacing, gaps, grids/flex, breakpoints, z-index |

## React pattern references

| Reference | Read when touching... |
|---|---|
| `references/state-and-hooks.md` | custom hooks, compound components, Zustand global state |
| `references/data-and-performance.md` | TanStack Query, tables/data grids (Table — mandatory for any table), charts/visualizations (Charts — mandatory for any chart), long lists (Virtual), debounce/throttle (Pacer), keyboard shortcuts (Hotkeys), perceived-speed techniques |

## Self-review before calling UI work done

Check every component/layout/feature against realistic conditions, not just the happy path — do this yourself:

- **Inspiration check** — did the design start from the inspirations library (`references/inspirations.md`)? Re-open the ones you picked and compare: same structural clarity, same density, same state coverage. If the result is thinner than its references, close the gap.
- **Squint test** — defocus; primary/secondary elements and groupings stay identifiable. A monotone uniform grid can pass every rule and still read as flat.
- **Edge-case inputs** — very long/short text, empty lists, huge lists, missing images, offline/slow network, permission-denied. A layout that only works with perfect demo data isn't done.
- **Accessibility** — tab the whole flow with no mouse; every interactive control reachable with a visible focus state; semantic elements/roles, form labels, and `alt` text present; hit areas ≥44×44px (≥40×40px in dense desktop UI); state never signalled by color alone; `prefers-reduced-motion` respected. Prove it, don't assume it: `talos project:check --strict --only=accessibility --modules=<module> --logs` runs Biome's `a11y` rules over the module and lists every violation with its file and line. Fix what it reports; never disable a rule to make it pass.
- **Removal test** — for any added motion, shadow, or flourish: if removed, would anyone notice? If not, it isn't earning its place.
- **AI-slop check** — run against `references/ai-slop.md`: no generic gradient-as-brand, no glassmorphism-as-decoration, no stock hero+3-card-grid, no emoji standing in for the icon set, no marketing-cliché copy.

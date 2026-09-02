# Server state, tables, charts, virtualization, rate-limiting & shortcuts

## Server state — TanStack Query

Wrap each query/mutation in a custom hook. https://tanstack.com/query/latest

```typescript
import { useQuery } from "@tanstack/react-query";

const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<UserType[]> => {
      const response = await fetch("/api/users");
      return response.json();
    },
  });

// usage
const { data, isLoading, error } = useUsers();
```

## Tables & data grids — TanStack Table

**Always build tables and data grids with TanStack Table (latest version) — never hand-roll sorting/filtering/pagination state over a raw `<table>`, and never pull in a pre-built grid (AG Grid, MUI DataGrid, react-table v7, …).** It is headless: it owns the state and logic, you own 100% of the markup and styling, which must still come from the design module's primitives and tokens.

```bash
bun add @tanstack/react-table
```

Docs: https://tanstack.com/table/latest/docs/overview · https://tanstack.com/table/latest/docs/installation · https://tanstack.com/table/latest/docs/framework/react/quick-start

Features are **opt-in** in the latest version: register only what the table uses via `tableFeatures({})` (plus the feature's row-model factory), so the rest is tree-shaken away. Render through `table.FlexRender`.

```tsx
import { tableFeatures, useTable } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

const features = tableFeatures({}); // add rowSortingFeature, rowPaginationFeature, … as needed

const columns: Array<ColumnDef<typeof features, UserType>> = [
  { accessorKey: "firstName", header: "First name", cell: (info) => info.getValue() },
  { accessorKey: "age", header: () => "Age" },
];

export const UserTable = ({ data }: { data: UserType[] }) => {
  const table = useTable({ key: "user-table", features, columns, data });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : <table.FlexRender header={header} />}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getAllCells().map((cell) => (
              <td key={cell.id}>
                <table.FlexRender cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

Adding a feature follows one pattern — register it (and its row model) in `tableFeatures`, then use the APIs it adds:

```tsx
import {
  createSortedRowModel,
  rowSortingFeature,
  sortFns,
  tableFeatures,
} from "@tanstack/react-table";

const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns,
});

// in the header cell
<th onClick={header.column.getToggleSortingHandler()}>…</th>
```

Same for `rowSelection`, `columnFiltering`, `rowPagination`, `columnVisibility`, `columnPinning`, `columnResizing`, `rowExpanding`, and grouping.

Rules:
- Give `data` and `columns` **stable references** (module scope, `useState`, or a query result) — inline literals re-create the table every render.
- Keep the `<table>` markup semantic (`<table>/<thead>/<tbody>/<th scope>`); sortable headers must be real buttons with an `aria-sort` state, not click-only `<div>`s.
- Server-driven tables (paginate/sort/filter on the backend) pair TanStack Table with TanStack Query — fetch in a hook, feed the rows in, and let the table manage only the state you don't own.
- Long tables compose with TanStack Virtual (below) — virtualize the rows without changing any table logic.
- Migrating from v8? Follow https://tanstack.com/table/latest/docs/framework/react/guide/migrating-to-v9 rather than leaving `useReactTable`/`flexRender` call sites in place.

## Charts & data visualization — TanStack Charts

**Always build charts, graphs, plots, sparklines, and dashboard visualizations with TanStack Charts (latest version) — never pull in another charting library (Recharts, Chart.js, ECharts, Nivo, Victory, Highcharts, react-chartjs-2, …) and never hand-roll SVG/canvas plotting or raw D3 selections.** It is a typed grammar of marks: you declare data, marks, channels, and scales, and it compiles a responsive, accessible, keyed scene (SVG by default, Canvas opt-in). Colors, fonts, and spacing still resolve to the design module's tokens through the `--ts-chart-*` CSS variables and inherited `currentColor`.

TanStack Charts is pre-alpha and its API may change between releases — pin the version you install and re-read the docs before upgrading.

```bash
bun add @tanstack/charts
```

Docs: https://tanstack.com/charts/v0/docs/overview · https://tanstack.com/charts/v0/docs/reference/index · catalog of 110 worked examples: https://tanstack.com/charts/catalog

Install only `@tanstack/charts`; everything else is a tree-shakeable subpath — marks and the runtime from the root entry, React from `@tanstack/charts/react`, compact scales from exact `@tanstack/charts/scales/*` entries (there is intentionally no aggregate `/scales` export). Optional capabilities live behind their own subpaths: `/tooltip`, `/transform/*`, `/motion`, `/legend`, `/view`, `/canvas`, `/interaction/*`, `/hierarchy/*`, `/spatial/*`, `/polar`, `/geo`.

Define the chart once with `defineChart`, then render it with the React adapter:

```tsx
import { Chart } from "@tanstack/charts/react";
import { defineChart, dot, lineY } from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";

const signupsChart = defineChart({
  marks: [
    lineY(signups, { x: "month", y: "value", stroke: "var(--ts-chart-series-1)", strokeWidth: 2 }),
    dot(signups, { x: "month", y: "value", fill: "var(--ts-chart-series-1)", r: 4 }),
  ],
  x: { scale: () => scaleBand<string>().padding(0.2) },
  y: { scale: scaleLinear, nice: true, grid: true, axis: { label: "Signups" } },
});

export const SignupsChart = () => (
  <Chart definition={signupsChart} ariaLabel="Monthly signups, January through May" />
);
```

Rules:
- **Pick the mark, not a chart type** — a chart is a composition of marks layered over shared scales (`lineY`, `areaY`, `barY`/`barX`, `rect`/`cell`, `dot`, `ruleX`/`ruleY`, `text`, `boxY`, `treemap`, `sankeyDiagram`, `pie`/`polar`, `geoShape`, …). Layer them in array order; for compound charts with their own scales, use `composeViews` from `@tanstack/charts/view` instead of nesting components.
- **Define outside render.** Hoist the `defineChart(...)` result to module scope, or memoize it — an inline definition re-compiles the scene every render. Same for the data array.
- **Prepare data before it reaches a mark.** Grouping, binning, stacking, rolling windows, and normalizing come from TanStack's transform entries (`@tanstack/charts/group`, `/stack`, `/transform/*`) or your query layer — marks consume plain rows, never a special series container.
- **Accessibility is not optional:** always pass `ariaLabel` describing what the chart shows; keyboard focus is on by default, so don't disable it. Never encode meaning by color alone — pair it with shape, label, or direct annotation, and check series colors against `references/color-contrast.md`.
- **Let it be responsive:** omit `width` (it follows the container) and omit `margin` (guides are measured automatically). Don't wire your own resize observer.
- Add the built-in tooltip from `@tanstack/charts/tooltip` before hand-building a hover overlay; motion belongs to `@tanstack/charts/motion`, not ad-hoc CSS transitions on the generated nodes, and must respect `prefers-reduced-motion`.
- Server-fed charts pair with TanStack Query exactly like tables — fetch in a hook, pass the rows into the marks.
- When optimizing existing UI, port charts off whatever library they use rather than leaving two charting systems in one app.

## Long lists — TanStack Virtual

Render only visible rows. https://tanstack.com/virtual/latest

```typescript
import { useVirtualizer } from "@tanstack/react-virtual";

const parentRef = useRef<HTMLDivElement>(null);
const virtualizer = useVirtualizer({
  count: rows.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 40,
});

virtualizer.getVirtualItems().map((item) => rows[item.index]);
```

Beyond virtualization, protect perceived speed with: reserved space for images/embeds (`aspect-ratio` or explicit dimensions) so nothing shifts on load; `IntersectionObserver` (unobserve after first fire) instead of scroll-event listeners for reveal/lazy-load triggers; batching DOM reads before writes when measuring layout manually, to avoid repeated synchronous reflow.

## Debounce / throttle / queue / batch — TanStack Pacer

Rate-limit expensive work (search input, scroll handlers, API calls). https://tanstack.com/pacer/latest

```typescript
import { useDebouncedValue } from "@tanstack/react-pacer";

const [search, setSearch] = useState("");
const [debouncedSearch] = useDebouncedValue(search, { wait: 300 });
// updates 300ms after the user stops typing
```

## Keyboard shortcuts — TanStack Hotkeys

https://tanstack.com/hotkeys/latest

```typescript
import { useHotkeys } from "@tanstack/react-hotkeys";

useHotkeys("mod+k", () => openCommandPalette());
useHotkeys("mod+s", (event) => {
  event.preventDefault();
  save();
});
```

# Server state, tables, virtualization, rate-limiting & shortcuts

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

import { cn } from "@module/design/utils/cn";
import type { ReactTable, RowData, TableFeatures } from "@tanstack/react-table";
import type * as React from "react";
import { readColumnMeta } from "./columnMeta";
import { DataTableBody } from "./DataTableBody";
import { DataTableCell } from "./DataTableCell";
import { DataTableHead } from "./DataTableHead";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import { DataTableSortButton } from "./DataTableSortButton";
import { selectionOf, sortingOf } from "./optionalFeatures";

type DataTablePropsType<TFeatures extends TableFeatures, TData extends RowData> = React.ComponentProps<"table"> & {
  /** A TanStack Table instance. Given one, the grid renders its own header groups and rows. */
  table?: ReactTable<TFeatures, TData>;
  /** What a reader sees in place of rows when the table resolves to none. */
  emptyState?: React.ReactNode;
};

const DataTableRoot = <TFeatures extends TableFeatures, TData extends RowData>({
  table,
  emptyState,
  className,
  children,
  ...props
}: DataTablePropsType<TFeatures, TData>) => {
  return (
    <table data-slot="data-table" className={cn("w-full border-separate border-spacing-0", className)} {...props}>
      {table ? <DataTableContent table={table} emptyState={emptyState} /> : children}
    </table>
  );
};

type DataTableContentPropsType<TFeatures extends TableFeatures, TData extends RowData> = {
  table: ReactTable<TFeatures, TData>;
  emptyState?: React.ReactNode;
};

/**
 * The generated half: header groups and rows straight off the table instance.
 * Sorting affordances appear only for columns whose table registered
 * `rowSortingFeature`, so a grid sorted by the API advertises nothing it cannot
 * honour.
 */
const DataTableContent = <TFeatures extends TableFeatures, TData extends RowData>({
  table,
  emptyState,
}: DataTableContentPropsType<TFeatures, TData>) => {
  const rows = table.getRowModel().rows;

  return (
    <>
      <DataTableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <DataTableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const meta = readColumnMeta(header.column.columnDef.meta);
              const sorting = sortingOf(header.column);
              const canSort = sorting.getCanSort?.() ?? false;
              const direction = sorting.getIsSorted?.() ?? false;

              return (
                <DataTableHead
                  key={header.id}
                  align={meta.align}
                  className={cn(canSort && "hover:text-foreground cursor-pointer select-none", meta.headClassName)}
                  colSpan={header.colSpan > 1 ? header.colSpan : undefined}
                  aria-sort={canSort ? sortStateOf(direction) : undefined}
                  onClick={canSort ? sorting.getToggleSortingHandler?.() : undefined}
                >
                  {header.isPlaceholder ? null : canSort ? (
                    <DataTableSortButton direction={direction}>
                      <table.FlexRender header={header} />
                    </DataTableSortButton>
                  ) : (
                    <table.FlexRender header={header} />
                  )}
                </DataTableHead>
              );
            })}
          </DataTableRow>
        ))}
      </DataTableHeader>
      <DataTableBody>
        {rows.length === 0 && emptyState !== undefined ? (
          <DataTableRow>
            <DataTableCell
              colSpan={table.getAllLeafColumns().length}
              className="text-muted-foreground py-8 text-center"
            >
              {emptyState}
            </DataTableCell>
          </DataTableRow>
        ) : (
          rows.map((row) => (
            <DataTableRow key={row.id} data-selected={selectionOf(row).getIsSelected?.() ? "true" : undefined}>
              {row.getAllCells().map((cell) => {
                const meta = readColumnMeta(cell.column.columnDef.meta);

                return (
                  <DataTableCell key={cell.id} align={meta.align} className={meta.cellClassName}>
                    <table.FlexRender cell={cell} />
                  </DataTableCell>
                );
              })}
            </DataTableRow>
          ))
        )}
      </DataTableBody>
    </>
  );
};

const sortStateOf = (direction: "asc" | "desc" | false): React.AriaAttributes["aria-sort"] => {
  if (direction === "asc") return "ascending";
  if (direction === "desc") return "descending";

  return "none";
};

/**
 * The grid shell for a record listing — hairline rows, a sticky quiet header,
 * and hover feedback — as opposed to the bordered prose `Table` in `typography`.
 *
 * Hand it a TanStack Table instance and it renders the header groups and rows
 * itself, taking alignment and per-column classes from `columnDef.meta`, wiring
 * `aria-sort` and a click-to-sort toggle onto every sortable column, and tinting the
 * rows the table reports as selected. Wrap it in a `ScrollArea` to cap its
 * height — the header stays put while the body scrolls:
 *
 * ```tsx
 * const table = useTable({ features, columns, data, getRowId: (row) => row.id });
 *
 * <ScrollArea viewportClassName="max-h-[32rem]">
 *   <DataTable table={table} aria-label="Tags" emptyState="No tags yet" />
 * </ScrollArea>
 * ```
 *
 * Without a `table` it stays headless: compose the markup from the attached
 * parts when a listing needs a shape the column model cannot express.
 *
 * ```tsx
 * <DataTable>
 *   <DataTable.Header>
 *     <DataTable.Row>
 *       <DataTable.Head>Name</DataTable.Head>
 *     </DataTable.Row>
 *   </DataTable.Header>
 *   <DataTable.Body>
 *     <DataTable.Row>
 *       <DataTable.Cell>Cardiology</DataTable.Cell>
 *     </DataTable.Row>
 *   </DataTable.Body>
 * </DataTable>
 * ```
 */
export const DataTable = Object.assign(DataTableRoot, {
  Header: DataTableHeader,
  Body: DataTableBody,
  Row: DataTableRow,
  Head: DataTableHead,
  Cell: DataTableCell,
  SortButton: DataTableSortButton,
});

DataTableRoot.displayName = "DataTable";

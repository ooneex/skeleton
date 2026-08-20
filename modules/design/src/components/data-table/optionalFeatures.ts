import type * as React from "react";

type SortableColumnType = {
  getCanSort: () => boolean;
  getIsSorted: () => "asc" | "desc" | false;
  getToggleSortingHandler: () => React.MouseEventHandler<HTMLElement> | undefined;
};

type SelectableRowType = {
  getIsSelected: () => boolean;
};

/**
 * A TanStack table only carries the API of the features it registered, so a
 * grid that renders any table has to ask rather than assume. Both readers hand
 * back a partial view: absent methods mean the feature is not in play, and the
 * matching affordance is simply not rendered.
 */
export const sortingOf = (column: unknown): Partial<SortableColumnType> => column as Partial<SortableColumnType>;

export const selectionOf = (row: unknown): Partial<SelectableRowType> => row as Partial<SelectableRowType>;

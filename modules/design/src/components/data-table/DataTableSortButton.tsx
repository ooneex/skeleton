import { ChevronDownSmIcon } from "@module/design/icons/outline/arrows/sm/ChevronDownSmIcon";
import { ChevronExpandYIcon } from "@module/design/icons/outline/arrows/sm/ChevronExpandYIcon";
import { ChevronUpSmIcon } from "@module/design/icons/outline/arrows/sm/ChevronUpSmIcon";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type DataTableSortButtonPropsType = React.ComponentProps<"button"> & {
  direction: "asc" | "desc" | false;
};

/**
 * The affordance on a sortable column header. The chevron is always present —
 * a double chevron until the column is the sort key — so a reader can tell at
 * a glance which columns are sortable without hovering each one.
 */
export const DataTableSortButton = ({ direction, className, children, ...props }: DataTableSortButtonPropsType) => {
  const Icon = direction === "asc" ? ChevronUpSmIcon : direction === "desc" ? ChevronDownSmIcon : ChevronExpandYIcon;

  return (
    <button
      type="button"
      data-slot="data-table-sort-button"
      className={cn(
        "hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      {children}
      <Icon className={cn("size-3 shrink-0", direction === false && "opacity-50")} aria-hidden="true" />
    </button>
  );
};

DataTableSortButton.displayName = "DataTable.SortButton";

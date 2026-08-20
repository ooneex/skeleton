import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type DataTableCellPropsType = React.ComponentProps<"td">;

/** A body cell. Keeps its content on one line so rows stay scannable. */
export const DataTableCell = ({ className, ...props }: DataTableCellPropsType) => {
  return (
    <td
      data-slot="data-table-cell"
      className={cn(
        "px-3 py-2 text-left align-middle text-sm",
        "[[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  );
};

DataTableCell.displayName = "DataTable.Cell";

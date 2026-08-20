import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type DataTableHeadPropsType = React.ComponentProps<"th">;

/** A column header cell: quiet, uppercase, and sticky so it survives a scrolled body. */
export const DataTableHead = ({ className, ...props }: DataTableHeadPropsType) => {
  return (
    <th
      data-slot="data-table-head"
      className={cn(
        "bg-muted text-muted-foreground sticky top-0 z-10 h-10 px-3 text-left align-middle text-xs font-medium tracking-wide uppercase whitespace-nowrap",
        "[[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  );
};

DataTableHead.displayName = "DataTable.Head";

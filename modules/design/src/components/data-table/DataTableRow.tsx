import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type DataTableRowPropsType = React.ComponentProps<"tr">;

/**
 * A grid row. Hairline separated rather than boxed, with the hover tint that
 * tells a reader which record the row actions belong to.
 */
export const DataTableRow = ({ className, ...props }: DataTableRowPropsType) => {
  return (
    <tr
      data-slot="data-table-row"
      className={cn(
        "border-border/60 hover:bg-muted/40 data-[selected=true]:bg-muted/60 border-b transition-colors last:border-b-0",
        className,
      )}
      {...props}
    />
  );
};

DataTableRow.displayName = "DataTable.Row";

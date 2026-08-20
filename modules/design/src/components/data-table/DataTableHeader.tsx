import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type DataTableHeaderPropsType = React.ComponentProps<"thead">;

export const DataTableHeader = ({ className, ...props }: DataTableHeaderPropsType) => {
  return <thead data-slot="data-table-header" className={cn(className)} {...props} />;
};

DataTableHeader.displayName = "DataTable.Header";

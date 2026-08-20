import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type DataTableBodyPropsType = React.ComponentProps<"tbody">;

export const DataTableBody = ({ className, ...props }: DataTableBodyPropsType) => {
  return <tbody data-slot="data-table-body" className={cn(className)} {...props} />;
};

DataTableBody.displayName = "DataTable.Body";

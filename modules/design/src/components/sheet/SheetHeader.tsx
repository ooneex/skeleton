import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="sheet-header" className={cn("gap-1.5 p-4 flex flex-col", className)} {...props} />;
};
SheetHeader.displayName = "SheetHeader";

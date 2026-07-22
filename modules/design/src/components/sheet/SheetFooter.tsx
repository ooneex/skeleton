import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const SheetFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="sheet-footer" className={cn("gap-2 p-4 mt-auto flex flex-col", className)} {...props} />;
};
SheetFooter.displayName = "SheetFooter";

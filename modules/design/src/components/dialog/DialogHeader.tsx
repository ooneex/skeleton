import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="dialog-header" className={cn("gap-2 flex flex-col", className)} {...props} />;
};
DialogHeader.displayName = "DialogHeader";

import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const PopoverHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="popover-header" className={cn("flex flex-col gap-1 text-sm", className)} {...props} />;
};

PopoverHeader.displayName = "Popover.Header";

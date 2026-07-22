import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const EmptyHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div data-slot="empty-header" className={cn("gap-2 flex max-w-sm flex-col items-center", className)} {...props} />
  );
};

EmptyHeader.displayName = "Empty.Header";

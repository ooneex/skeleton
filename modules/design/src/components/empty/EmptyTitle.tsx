import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const EmptyTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div data-slot="empty-title" className={cn("text-sm font-medium tracking-tight", className)} {...props} />;
};

EmptyTitle.displayName = "Empty.Title";

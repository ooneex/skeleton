import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const KbdGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <kbd data-slot="kbd-group" className={cn("gap-1 inline-flex items-center", className)} {...props} />
);

KbdGroup.displayName = "Kbd.Group";

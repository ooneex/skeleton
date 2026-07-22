import { cn } from "@module/design/utils/cn";
import type * as React from "react";

export const DrawerHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "gap-0.5 p-4 group-data-[side=bottom]/drawer-content:text-center group-data-[side=top]/drawer-content:text-center md:gap-1.5 md:text-left flex flex-col",
        className,
      )}
      {...props}
    />
  );
};
DrawerHeader.displayName = "DrawerHeader";

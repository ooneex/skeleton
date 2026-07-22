import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarInputPropsType = React.ComponentProps<"input">;

export const SidebarInput = ({ className, ...props }: SidebarInputPropsType) => {
  return (
    <input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(
        "bg-background ring-ring focus-visible:ring-ring/50 h-8 w-full rounded px-2.5 text-sm ring-1 outline-none focus-visible:ring-[3px]",
        className,
      )}
      {...props}
    />
  );
};
SidebarInput.displayName = "Sidebar.Input";

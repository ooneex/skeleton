import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarSeparatorPropsType = React.ComponentProps<"div">;

export const SidebarSeparator = ({ className, ...props }: SidebarSeparatorPropsType) => {
  return (
    <div
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-ring mx-2 h-px w-auto shrink-0", className)}
      {...props}
    />
  );
};
SidebarSeparator.displayName = "Sidebar.Separator";

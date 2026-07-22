import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarGroupPropsType = React.ComponentProps<"div">;

export const SidebarGroup = ({ className, ...props }: SidebarGroupPropsType) => {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col", className)}
      {...props}
    />
  );
};
SidebarGroup.displayName = "Sidebar.Group";

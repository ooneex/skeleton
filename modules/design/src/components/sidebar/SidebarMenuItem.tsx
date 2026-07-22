import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarMenuItemPropsType = React.ComponentProps<"li">;

export const SidebarMenuItem = ({ className, ...props }: SidebarMenuItemPropsType) => {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
};
SidebarMenuItem.displayName = "Sidebar.MenuItem";

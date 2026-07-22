import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarMenuSubItemPropsType = React.ComponentProps<"li">;

export const SidebarMenuSubItem = ({ className, ...props }: SidebarMenuSubItemPropsType) => {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
};
SidebarMenuSubItem.displayName = "Sidebar.MenuSubItem";

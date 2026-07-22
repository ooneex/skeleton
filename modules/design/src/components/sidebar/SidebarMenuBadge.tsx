import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarMenuBadgePropsType = React.ComponentProps<"div">;

export const SidebarMenuBadge = ({ className, ...props }: SidebarMenuBadgePropsType) => {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-primary peer-hover/menu-button:text-primary peer-data-active/menu-button:text-primary pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded px-1 text-xs font-medium tabular-nums select-none peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
};
SidebarMenuBadge.displayName = "Sidebar.MenuBadge";

import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarMenuSubPropsType = React.ComponentProps<"ul">;

export const SidebarMenuSub = ({ className, ...props }: SidebarMenuSubPropsType) => {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-ring mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex min-w-0 flex-col",
        className,
      )}
      {...props}
    />
  );
};
SidebarMenuSub.displayName = "Sidebar.MenuSub";

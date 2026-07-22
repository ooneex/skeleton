import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarContentPropsType = React.ComponentProps<"div">;

export const SidebarContent = ({ className, ...props }: SidebarContentPropsType) => {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "no-scrollbar gap-2 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
};
SidebarContent.displayName = "Sidebar.Content";

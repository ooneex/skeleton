import { cn } from "@module/design/utils/cn";
import React from "react";

type SidebarMenuSkeletonPropsType = React.ComponentProps<"div"> & {
  showIcon?: boolean;
};

export const SidebarMenuSkeleton = ({ className, showIcon = false, ...props }: SidebarMenuSkeletonPropsType) => {
  // Random width between 50 to 90%.
  const [width] = React.useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  });

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("h-8 gap-2 rounded px-2 flex items-center", className)}
      {...props}
    >
      {showIcon && <div className="bg-muted size-4 shrink-0 animate-pulse rounded" data-sidebar="menu-skeleton-icon" />}
      <div
        className="bg-muted h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
SidebarMenuSkeleton.displayName = "Sidebar.MenuSkeleton";

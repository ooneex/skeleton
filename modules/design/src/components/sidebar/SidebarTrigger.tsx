import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import type React from "react";
import { useSidebar } from "./useSidebar";

const PanelLeftIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="16" x2="6" y2="8" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

type SidebarTriggerPropsType = React.ComponentProps<typeof Button>;

export const SidebarTrigger = ({ className, onClick, ...props }: SidebarTriggerPropsType) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
SidebarTrigger.displayName = "Sidebar.Trigger";

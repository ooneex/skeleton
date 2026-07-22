import { cn } from "@module/design/utils/cn";
import type React from "react";

type SidebarInsetPropsType = React.ComponentProps<"main">;

export const SidebarInset = ({ className, ...props }: SidebarInsetPropsType) => {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col",
        className,
      )}
      {...props}
    />
  );
};
SidebarInset.displayName = "Sidebar.Inset";

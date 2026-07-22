import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";
import { Separator as ResizablePrimitiveSeparator } from "react-resizable-panels";

export const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ComponentProps<typeof ResizablePrimitiveSeparator> & { withHandle?: boolean }) => {
  return (
    <ResizablePrimitiveSeparator
      data-slot="resizable-handle"
      className={cn(
        "border-l relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && <div className="bg-border h-10 w-1.5 rounded-[4px] z-10 flex shrink-0" />}
    </ResizablePrimitiveSeparator>
  );
};

ResizableHandle.displayName = "ResizablePanelGroup.Handle";

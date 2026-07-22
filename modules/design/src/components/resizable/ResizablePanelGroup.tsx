import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";
import { Group as ResizablePrimitiveGroup } from "react-resizable-panels";
import { ResizableHandle } from "./ResizableHandle";
import { ResizablePanel } from "./ResizablePanel";

const ResizablePanelGroupRoot = ({ className, ...props }: ComponentProps<typeof ResizablePrimitiveGroup>) => {
  return (
    <ResizablePrimitiveGroup
      data-slot="resizable-panel-group"
      className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
      {...props}
    />
  );
};

/**
 * Compound resizable panel group.
 *
 * Use `ResizablePanelGroup.Panel` and `ResizablePanelGroup.Handle` for children.
 */
export const ResizablePanelGroup = Object.assign(ResizablePanelGroupRoot, {
  Panel: ResizablePanel,
  Handle: ResizableHandle,
});

ResizablePanelGroupRoot.displayName = "ResizablePanelGroup";

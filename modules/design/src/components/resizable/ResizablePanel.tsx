import type { ComponentProps } from "react";
import { Panel as ResizablePrimitivePanel } from "react-resizable-panels";

export const ResizablePanel = (props: ComponentProps<typeof ResizablePrimitivePanel>) => {
  return <ResizablePrimitivePanel data-slot="resizable-panel" {...props} />;
};

ResizablePanel.displayName = "ResizablePanelGroup.Panel";

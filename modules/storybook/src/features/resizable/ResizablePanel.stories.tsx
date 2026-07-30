import { ResizableHandle } from "@module/design/components/resizable/ResizableHandle";
import { ResizablePanel } from "@module/design/components/resizable/ResizablePanel";
import { ResizablePanelGroup } from "@module/design/components/resizable/ResizablePanelGroup";
import type { MetaType } from "../../shared/story";

type ResizablePanelDemoPropsType = {
  orientation?: "horizontal" | "vertical";
  withHandle?: boolean;
};

const ResizablePanelDemo = ({ orientation = "horizontal", withHandle = true }: ResizablePanelDemoPropsType) => {
  return (
    <ResizablePanelGroup
      orientation={orientation}
      className="h-64 max-w-3xl overflow-hidden rounded border border-border"
    >
      <ResizablePanel defaultSize={35} minSize={20}>
        <div className="bg-muted/40 flex h-full items-center justify-center p-6 text-sm font-medium">Navigation</div>
      </ResizablePanel>
      <ResizableHandle withHandle={withHandle} />
      <ResizablePanel defaultSize={65} minSize={30}>
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Detail panel</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

ResizablePanelDemo.displayName = "ResizablePanel";

export const meta = {
  title: "ResizablePanelGroup.Panel",
  group: "Components",
  tags: [],
  component: ResizablePanelDemo,
  usage: [
    "**ResizablePanel** and **ResizableHandle** are the two building blocks inside a `ResizablePanelGroup`. Panels define the resizable regions and their default/min sizes, while the handle is the draggable separator that users grab to redistribute space.",
    "",
    "**How to use it** — place `ResizablePanel` children inside a `ResizablePanelGroup` and insert a `ResizableHandle` between each adjacent pair. Give each panel sensible defaults and minimums so the workspace starts usable and never collapses into unusable slivers. Turn on `withHandle` when you want the visible grip affordance.",
    "",
    "**When to use it** — in split views such as navigation/detail, editor/preview, or inspector layouts where users benefit from tuning panel sizes themselves.",
    "",
    "**When not to use it** — do not use it for static two-column marketing or content layouts where the sizes never need user control.",
  ].join("\n"),
  props: [
    {
      name: "orientation",
      control: "radio",
      options: [
        {
          name: "horizontal",
          usage: "Side-by-side panels. Use for the common sidebar/detail or list/detail workspace.",
        },
        {
          name: "vertical",
          usage: "Stacked panels. Use for logs above output or any top/bottom split workspace.",
        },
      ],
      default: "horizontal",
    },
    {
      name: "withHandle",
      control: "boolean",
      default: true,
    },
  ],
} satisfies MetaType<typeof ResizablePanelDemo>;

import { ResizablePanelGroup } from "@module/design/components/resizable";
import type { ComponentProps } from "react";
import type { Meta } from "../../shared/story";

type ResizablePanelGroupDemoPropsType = Pick<
  ComponentProps<typeof ResizablePanelGroup>,
  "disabled" | "onLayoutChanged" | "orientation"
> & {
  navigationDefaultSize?: number;
  navigationMinSize?: number;
  previewDefaultSize?: number;
  previewMinSize?: number;
  withHandle?: boolean;
};

const ResizablePanelGroupDemo = ({
  orientation = "horizontal",
  disabled = false,
  navigationDefaultSize = 30,
  navigationMinSize = 20,
  previewDefaultSize = 70,
  previewMinSize = 30,
  withHandle = true,
  onLayoutChanged,
}: ResizablePanelGroupDemoPropsType) => {
  return (
    <ResizablePanelGroup
      orientation={orientation}
      disabled={disabled}
      onLayoutChanged={onLayoutChanged}
      className="h-64 max-w-3xl overflow-hidden rounded-lg border border-border"
    >
      <ResizablePanelGroup.Panel defaultSize={navigationDefaultSize} minSize={navigationMinSize}>
        <div className="bg-muted/40 flex h-full items-center justify-center p-6 text-sm font-medium">Navigation</div>
      </ResizablePanelGroup.Panel>
      <ResizablePanelGroup.Handle withHandle={withHandle} />
      <ResizablePanelGroup.Panel defaultSize={previewDefaultSize} minSize={previewMinSize}>
        <div className="flex h-full items-center justify-center p-6 text-sm font-medium">Preview panel</div>
      </ResizablePanelGroup.Panel>
    </ResizablePanelGroup>
  );
};
ResizablePanelGroupDemo.displayName = "ResizablePanelGroup";

export const meta = {
  title: "ResizablePanelGroup",
  group: "Components",
  tags: [],
  component: ResizablePanelGroupDemo,
  usage: [
    "**What** — `ResizablePanelGroup` is a compound layout container for panels the user can drag wider or taller. The root sets the resize direction, `ResizablePanelGroup.Panel` defines each resizable region, and `ResizablePanelGroup.Handle` inserts the draggable separator between adjacent panels. Together they form split views for navigation + detail, editor + preview, or any other adjustable workspace.",
    "",
    "**How to use it** — render the group with a fixed height, set `orientation` to `horizontal` or `vertical`, and alternate `Panel` / `Handle` / `Panel` children. Give each panel sensible `defaultSize` and `minSize` values so the layout starts balanced and never collapses into unusable slivers. Turn on `withHandle` when you want a visible grip affordance.",
    "",
    "**When to use it** — for productivity-heavy screens where users benefit from tuning space allocation: mail or ticket triage, code or content editing, dashboards with an inspectable side panel, and any split-pane workspace.",
    "",
    "**When not to use it** — do not use a resizable split for simple stacked content or mobile-first flows where drag handles add complexity without payoff. If the regions never need user control, a fixed flex or grid layout is simpler and more predictable.",
  ].join("\n"),
  props: [
    {
      name: "orientation",
      control: "radio",
      options: [
        {
          name: "horizontal",
          usage:
            "Left-to-right split. Use for sidebar/content, list/detail, or editor/preview layouts on wider screens.",
        },
        {
          name: "vertical",
          usage:
            "Top-to-bottom split. Use when stacking panes makes more sense, such as logs above output or inspector below content.",
        },
      ],
      default: "horizontal",
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "withHandle",
      control: "boolean",
      default: true,
    },
    {
      name: "navigationDefaultSize",
      control: "number",
      default: 30,
    },
    {
      name: "navigationMinSize",
      control: "number",
      default: 20,
    },
    {
      name: "previewDefaultSize",
      control: "number",
      default: 70,
    },
    {
      name: "previewMinSize",
      control: "number",
      default: 30,
    },
    {
      name: "onLayoutChanged",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof ResizablePanelGroupDemo>;

import { Button } from "@module/design/components/button";
import { Tooltip } from "@module/design/components/tooltip";
import type { Meta } from "../../shared/story";

const preview = (
  <Tooltip>
    <Tooltip.Trigger render={<Button variant="outline">Hover to preview</Button>} />
    <Tooltip.Content>Shows extra context without leaving the current screen.</Tooltip.Content>
  </Tooltip>
);

export const meta = {
  title: "Tooltip",
  group: "Components",
  tags: [],
  component: Tooltip,
  usage: [
    "**Tooltip** is a compound floating hint that pairs a trigger with small, contextual help content. The root manages open state and hover/focus timing, `Tooltip.Trigger` wires the events onto any inline element or supplied `render` element, `Tooltip.Content` portals the popup to the document body and positions it around the trigger, and `Tooltip.Provider` can coordinate hover delay across several tooltips.",
    "",
    "**How to use it** — wrap a `Tooltip.Trigger` and `Tooltip.Content` inside `Tooltip`, keeping the message short enough to scan in place. Prefer a real button, icon button, or link as the trigger by passing it through `render`, and use `delay` when the interface has many nearby tooltips so users do not get accidental popups while moving the pointer.",
    "",
    "**When to use it** — for terse explanations of icons, disabled actions, keyboard shortcuts, and compact controls whose meaning is not obvious from the visible label alone. It is best for supplementary help that should appear on hover or focus and disappear immediately afterward.",
    "",
    "**When not to use it** — do not hide essential instructions, validation errors, or multi-line guidance in a tooltip. If the user must read or act on the content, keep it visible in the layout or open a richer popover or dialog.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: preview,
    },
    {
      name: "defaultOpen",
      control: "boolean",
      default: true,
    },
    {
      name: "delay",
      control: "number",
      default: 0,
    },
    {
      name: "onOpenChange",
      callback: (open: boolean) => open,
    },
  ],
} satisfies Meta<typeof Tooltip>;

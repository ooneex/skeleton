import { Separator } from "@module/design/components/separator";
import type { MetaType } from "../../shared/story";

type SeparatorDemoPropsType = {
  orientation?: "horizontal" | "vertical";
};

const SeparatorDemo = ({ orientation = "horizontal" }: SeparatorDemoPropsType) => {
  if (orientation === "vertical") {
    return (
      <div className="flex h-24 items-center gap-4 rounded border border-border p-4">
        <span className="text-sm text-muted-foreground">Filters</span>
        <Separator orientation="vertical" />
        <span className="text-sm text-muted-foreground">Results</span>
      </div>
    );
  }
  return (
    <div className="w-full max-w-xl rounded border border-border p-4">
      <p className="mb-3 text-sm text-muted-foreground">Account details</p>
      <Separator />
      <p className="mt-3 text-sm text-muted-foreground">Billing preferences</p>
    </div>
  );
};

SeparatorDemo.displayName = "Separator";

export const meta = {
  title: "Separator",
  group: "Components",
  tags: [],
  component: SeparatorDemo,
  usage: [
    "**Separator** is the design system's minimal visual divider. It wraps the Base UI primitive and exposes horizontal and vertical orientations while keeping the border colour aligned with the rest of the surface system.",
    "",
    "**How to use it** — place it between related sections of content to create breathing room and clarify grouping. Use the default horizontal rule between stacked blocks, and the vertical orientation inside toolbars, filter bars, or inline metadata rows.",
    "",
    "**When to use it** — when adjacent content needs a subtle structural boundary but a full card or background change would be too heavy.",
    "",
    "**When not to use it** — do not stack many separators in dense lists or use them where spacing alone already communicates grouping; excessive rules quickly add visual noise.",
  ].join("\n"),
  props: [
    {
      name: "orientation",
      control: "radio",
      options: [
        {
          name: "horizontal",
          usage: "Top-to-bottom divider. Use between stacked sections, rows, or form groups.",
        },
        {
          name: "vertical",
          usage: "Left-to-right divider. Use inside toolbars, inline menus, and compact metadata rows.",
        },
      ],
      default: "horizontal",
    },
  ],
} satisfies MetaType<typeof SeparatorDemo>;

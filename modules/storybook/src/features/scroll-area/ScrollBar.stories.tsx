import { ScrollArea } from "@module/design/components/scroll-area/ScrollArea";
import { ScrollBar } from "@module/design/components/scroll-area/ScrollBar";
import type { MetaType } from "../../shared/story";

type ScrollBarDemoPropsType = {
  orientation?: "horizontal" | "vertical";
};

const horizontalItems = Array.from({ length: 8 }, (_, index) => `Card ${index + 1}`);

const ScrollBarDemo = ({ orientation = "vertical" }: ScrollBarDemoPropsType) => {
  if (orientation === "horizontal") {
    return (
      <ScrollArea className="w-full max-w-2xl rounded border border-border">
        <div className="flex w-max gap-3 p-4">
          {horizontalItems.map((item) => (
            <div key={item} className="w-44 shrink-0 rounded border border-border p-4 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }

  return (
    <ScrollArea className="h-56 w-80 rounded border border-border">
      <div className="flex flex-col p-2">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="rounded px-3 py-3 text-sm even:bg-muted/40">
            Activity row {index + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

ScrollBarDemo.displayName = "ScrollBar";

export const meta = {
  title: "ScrollArea.Bar",
  group: "Components",
  tags: [],
  component: ScrollBarDemo,
  usage: [
    "**ScrollBar** is the explicit scrollbar primitive used inside `ScrollArea`. It renders the track and thumb for either vertical or horizontal overflow while inheriting the design system's colour and spacing treatment.",
    "",
    "**How to use it** — add it as a child of `ScrollArea` when you want a visible scrollbar rather than relying on the root wrapper to insert it for you. Choose the orientation that matches the overflow direction and keep the content dimensions constrained so the thumb has a meaningful range to travel.",
    "",
    "**When to use it** — for custom scroll-area compositions that need an explicit horizontal or vertical scrollbar in the markup.",
    "",
    "**When not to use it** — do not render it outside a `ScrollArea`, and do not add both orientations unless the content truly scrolls in both directions.",
  ].join("\n"),
  props: [
    {
      name: "orientation",
      control: "radio",
      options: [
        {
          name: "vertical",
          usage: "Up-and-down scrollbar. Use for feeds, menus, and panels that grow taller than their container.",
        },
        {
          name: "horizontal",
          usage:
            "Side-to-side scrollbar. Use for chip rows, comparison cards, and wide content in a constrained frame.",
        },
      ],
      default: "vertical",
    },
  ],
} satisfies MetaType<typeof ScrollBarDemo>;

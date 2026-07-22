import { ButtonMore } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button.More",
  group: "Components",
  tags: [],
  component: ButtonMore,
  usage: [
    "**ButtonMore** is a preset icon-only `Button` — a vertical three-dot (kebab) glyph in a round `ghost` frame — that opens an overflow menu of secondary actions. It takes no label; the icon is the whole affordance, so it stays out of the way until the user reaches for the extra options.",
    "",
    '**How to use it** — use it as the trigger for a dropdown or context menu holding actions that do not warrant their own buttons. Give it an `aria-label` ("More actions") since it has no visible text, and wire `onClick`/`aria-expanded` through the menu. The variant, shape, and icon are fixed; you can adjust `size` and pass `className` for spacing.',
    "",
    "**When to use it** — on table rows, cards, and list items where several low-priority actions (rename, duplicate, archive, delete) would otherwise clutter the row.",
    "",
    "**When not to use it** — do not hide the primary or most common action behind it, and do not use it when there is only a single action available (show that action directly instead).",
  ].join("\n"),
  props: [
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "size",
      control: "select",
      options: [
        { name: "icon-xs", usage: "Smallest round icon button (24px). Use in dense table rows and inline lists." },
        { name: "icon-sm", usage: "Compact (32px). The default — fits standard rows, cards, and toolbars." },
        { name: "icon", usage: "Standard square 36px footprint. Use where the overflow trigger is a focal control." },
        { name: "icon-lg", usage: "Large (40px). Use on spacious cards and headers where the trigger needs presence." },
      ],
      default: "icon-sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof ButtonMore>;

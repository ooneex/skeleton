import { Kbd } from "@module/design/components/kbd";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Kbd",
  group: "Components",
  tags: [],
  component: Kbd,
  usage: [
    "**Kbd** renders a single keyboard key as a small, muted `kbd` chip — a rounded, monospace-height token for one key such as `⌘`, `Esc`, `↵`, or a letter. It is non-interactive (`pointer-events-none`, unselectable) and adapts its colors when it sits inside a tooltip. For multi-key shortcuts, cluster several with `Kbd.Group`.",
    "",
    "**How to use it** — put the key's glyph or short label as the child (`⌘`, `⇧`, `Enter`, `K`). Prefer the platform symbol over spelled-out words where it is universally understood (`⌘` over `Cmd`). Drop a small `svg` inside to show an icon key. To display a combination like `⌘ + K`, wrap multiple `Kbd`s in a `Kbd.Group` rather than putting several keys in one chip.",
    "",
    "**When to use it** — to document a shortcut inline in help text, menus, tooltips, command palettes, and empty states — anywhere you tell the user which key to press.",
    "",
    "**When not to use it** — as a button or a real control; it only displays a key and does nothing when clicked. Wire the actual shortcut with a key handler and use `Kbd` purely as the visual hint.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "⌘",
    },
  ],
} satisfies Meta<typeof Kbd>;

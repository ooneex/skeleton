import { Kbd } from "@module/design/components/kbd";
import type { Meta } from "../../shared/story";

const shortcut = (
  <Kbd.Group>
    <Kbd>⌘</Kbd>
    <Kbd>⇧</Kbd>
    <Kbd>P</Kbd>
  </Kbd.Group>
);

export const meta = {
  title: "Kbd.Group",
  group: "Components",
  tags: [],
  component: Kbd.Group,
  usage: [
    "**Kbd.Group** clusters several `Kbd` chips into one keyboard shortcut, laying them in a tight inline row with even spacing. It is how you show a combination like `⌘ ⇧ P` or a sequence like `g` then `i`.",
    "",
    "**How to use it** — nest one `Kbd` per key inside it, in the order the user presses them. For a combination, list the modifiers first (`⌘`, `⇧`, `⌥`) then the key; add a `+` glyph as plain text between chips if your product spells combinations out. Keep groups short — two or three keys read at a glance.",
    "",
    "**When to use it** — for any multi-key shortcut shown in menus, tooltips, command palettes, or documentation, and for key sequences where several `Kbd`s belong together as one hint.",
    "",
    "**When not to use it** — for a single key; a lone `Kbd` needs no wrapper. Do not pack unrelated shortcuts into one group — give each its own `Kbd.Group` so each combination reads as a unit.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: shortcut,
    },
  ],
} satisfies Meta<typeof Kbd.Group>;

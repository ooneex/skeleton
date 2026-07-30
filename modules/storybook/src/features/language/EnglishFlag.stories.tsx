import { EnglishFlag } from "@module/design/components/language/flags/EnglishFlag";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "EnglishFlag",
  group: "Components",
  tags: [],
  component: EnglishFlag,
  usage: [
    "**EnglishFlag** renders the Union Jack used by the language switcher for English. It is a pure SVG component that inherits sizing through standard SVG props and uses design-token CSS variables for its colours.",
    "",
    "**How to use it** — render it inline wherever an English locale needs an at-a-glance marker, usually beside the `English` label in language menus or settings rows. Size it with `className` or width/height props rather than editing the SVG paths.",
    "",
    "**When to use it** — in locale pickers, translation settings, or metadata badges that specifically denote English as the active language.",
    "",
    "**When not to use it** — do not use it as a generic decoration or to represent geography in a context that is about countries rather than UI language.",
  ].join("\n"),
  props: [
    {
      name: "className",
      control: "text",
      default: "size-12 rounded-sm shadow-sm",
    },
  ],
} satisfies MetaType<typeof EnglishFlag>;

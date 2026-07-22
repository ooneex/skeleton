import { H3 } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "H3",
  group: "Typography",
  tags: [],
  component: H3,
  usage: [
    "**H3** is the third heading level, rendering a native `h3` — semibold, one step down from `H2`, still with tight tracking.",
    "",
    "**How to use it** — nest it under an `H2` section to break that section into sub-topics.",
    "",
    "**When to use it** — sub-section headings inside a larger section: a card group title, a settings sub-panel, or a chapter's sub-heading.",
    "",
    "**When not to use it** — do not use it as a page or section title (`H1`/`H2`), and don't use it just for bold inline text — reach for `Large` or `Small` for that.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "The quick brown fox jumps over the lazy dog",
    },
  ],
} satisfies Meta<typeof H3>;

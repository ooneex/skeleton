import { H4 } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "H4",
  group: "Typography",
  tags: [],
  component: H4,
  usage: [
    "**H4** is the fourth heading level, rendering a native `h4` at a standard text-xl weight — one step down from `H3`.",
    "",
    "**How to use it** — nest it under an `H3` sub-section to label finer subdivisions such as a form group or a list's category label.",
    "",
    "**When to use it** — small group titles inside cards, form section labels, or table group headers.",
    "",
    "**When not to use it** — do not use it as a section or page title, and avoid using it in isolation without a surrounding `H2`/`H3` — the heading outline should stay contiguous.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "The quick brown fox jumps over the lazy dog",
    },
  ],
} satisfies Meta<typeof H4>;

import { Blockquote } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Blockquote",
  group: "Typography",
  tags: [],
  component: Blockquote,
  usage: [
    "**Blockquote** renders a quoted passage of text set off from the surrounding copy with a tinted background, inner padding, and an italic style. It wraps the native `blockquote` element, so it stays semantically a quotation for assistive technology and printed/exported content.",
    "",
    "**How to use it** — pass the quoted text (or a `p` with attribution below it) as `children`. Keep it to a real quotation or citation; don't reach for it just to add visual emphasis to a paragraph.",
    "",
    "**When to use it** — for testimonials, pulled quotes in articles or changelogs, citing an external source, or highlighting a customer statement in a case study.",
    "",
    "**When not to use it** — do not use it for callouts, warnings, or tips (use an alert/banner component instead), or for regular body copy that just needs `Lead`/`Large` emphasis — those convey weight without implying a quotation.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "“Design is not just what it looks like and feels like. Design is how it works.”",
    },
  ],
} satisfies Meta<typeof Blockquote>;

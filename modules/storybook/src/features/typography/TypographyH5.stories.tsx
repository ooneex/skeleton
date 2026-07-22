import { H5 } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "H5",
  group: "Typography",
  tags: [],
  component: H5,
  usage: [
    "**H5** is the fifth heading level, rendering a native `h5` at a text-lg weight with snug leading — used for small, deeply-nested labels.",
    "",
    "**How to use it** — reach for it only when the document outline genuinely needs a fifth level, nested under `H4`.",
    "",
    "**When to use it** — dense nested UIs such as deeply structured settings trees or reference documentation with many subdivision levels.",
    "",
    "**When not to use it** — for most product UIs this level is unnecessary; prefer restructuring the layout with cards or sections over stacking five heading levels. Don't use it for emphasis alone — use `Small`/`Muted` instead.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "The quick brown fox jumps over the lazy dog",
    },
  ],
} satisfies Meta<typeof H5>;

import { H6 } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "H6",
  group: "Typography",
  tags: [],
  component: H6,
  usage: [
    "**H6** is the smallest, final heading level, rendering a native `h6` at a base text size with medium weight — the lowest rung of the heading scale.",
    "",
    "**How to use it** — use only in the rare case a document outline goes six levels deep, nested under `H5`.",
    "",
    "**When to use it** — highly nested reference content such as generated API docs or a deeply structured table of contents.",
    "",
    "**When not to use it** — avoid it in ordinary product screens; restructure the content instead of nesting this deep. Don't use it as a substitute for `Small` or `Muted` label text.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "The quick brown fox jumps over the lazy dog",
    },
  ],
} satisfies Meta<typeof H6>;

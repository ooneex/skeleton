import { H2 } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "H2",
  group: "Typography",
  tags: [],
  component: H2,
  usage: [
    "**H2** is the second heading level, rendering a native `h2` with a large semibold size and tight tracking, one step down from `H1`.",
    "",
    "**How to use it** — use for the main sections of a page under the single `H1`. Multiple `H2`s per page are expected — one per major section.",
    "",
    "**When to use it** — top-level sections of an article, a settings page's section titles, or the main divisions of a long-form document.",
    "",
    "**When not to use it** — do not skip from `H1` straight to `H3` (breaks the outline for screen readers), and don't use it for a page's single top title — that's `H1`.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "The quick brown fox jumps over the lazy dog",
    },
  ],
} satisfies Meta<typeof H2>;

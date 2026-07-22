import { H1 } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "H1",
  group: "Typography",
  tags: [],
  component: H1,
  usage: [
    "**H1** is the largest heading level, rendering a native `h1` with a fluid clamp size, tight leading, and balanced line-wrapping so long titles break evenly.",
    "",
    "**How to use it** — use exactly one `H1` per page or view, at the very top of the content hierarchy. Keep the text short — a page title, hero headline, or article title.",
    "",
    "**When to use it** — page titles, hero sections, and the top-level heading of a document or article.",
    "",
    "**When not to use it** — never use it for a second title on the same page, for section headings inside a page (use `H2`/`H3`), or purely for large bold text with no structural meaning (use `Large` instead).",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "The quick brown fox jumps over the lazy dog",
    },
  ],
} satisfies Meta<typeof H1>;

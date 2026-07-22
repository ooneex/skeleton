import { HighlightText } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "HighlightText",
  group: "Typography",
  tags: [],
  component: HighlightText,
  usage: [
    "**HighlightText** wraps every case-insensitive occurrence of a search `query` inside a block of `text` in a `mark` tag with a warning-colored background, leaving the rest of the text untouched. When `query` is empty or whitespace, it renders the plain text unchanged.",
    "",
    "**How to use it** — pass the full string as `text` and the user's current search term as `query`; it re-computes the highlighted segments on every render, so it's safe to drive directly from a live search input's value.",
    "",
    "**When to use it** — search results lists, autocomplete/combobox option labels, and command palettes where showing which part of a result matched the query helps users scan faster.",
    "",
    "**When not to use it** — do not use it for static emphasis that never changes (use `Large`/`strong` markup instead), and avoid it on very large blocks of text where highlighting many scattered matches would hurt readability.",
  ].join("\n"),
  props: [
    {
      name: "text",
      control: "text",
      default: "Design systems help teams ship consistent, accessible interfaces faster.",
    },
    {
      name: "query",
      control: "text",
      default: "design",
    },
  ],
} satisfies Meta<typeof HighlightText>;

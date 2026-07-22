import { Link } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Link",
  group: "Typography",
  tags: [],
  component: Link,
  usage: [
    "**Link** is an inline text hyperlink — a native `a` tag styled in the primary color with medium weight and an underline on hover, sized via the `size` scale to match the surrounding text.",
    "",
    '**How to use it** — always pass a real `href`; add `target="_blank"` with `rel="noreferrer"` for external destinations. Match `size` to the body text it sits within so the link doesn\'t look mismatched.',
    "",
    "**When to use it** — inline references within prose, footer/legal links, 'Learn more' references beside a paragraph, and any navigation that reads as part of a sentence.",
    "",
    "**When not to use it** — for a standalone call-to-action or a navigational button, use `Button` (with `render` as an anchor) instead — it carries the visual weight and hit target a primary action needs.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Read the documentation",
    },
    {
      name: "href",
      control: "text",
      default: "#",
    },
    {
      name: "size",
      control: "select",
      options: [
        { name: "xs", usage: "Matches fine print and dense metadata — footnotes, table cells, timestamps." },
        { name: "sm", usage: "The default — fits standard body copy and card descriptions." },
        { name: "md", usage: "Matches base paragraph text where the link is a first-class part of the sentence." },
        { name: "lg", usage: "Matches lead/large text — use inside intros or hero copy." },
      ],
      default: "sm",
    },
  ],
} satisfies Meta<typeof Link>;

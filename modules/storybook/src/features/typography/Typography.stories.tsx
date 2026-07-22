import { P } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Typography",
  group: "Typography",
  tags: [],
  component: P,
  usage: [
    "**Typography** is the family of plain-text building blocks the design module ships for prose and content structure: heading levels `H1`–`H6`, the paragraph variants `P`, `Lead`, `Large`, `Small`, and `Muted`, plus `Blockquote`, `InlineCode`, `Link`, `List`, `Table`, and `HighlightText`. None of them carry layout or interactive behavior — they only set the font size, weight, color, and spacing for a piece of text, leaving the surrounding component to handle layout.",
    "",
    "**How to use it** — reach for the element whose name matches the role the text plays (a section title is a heading, an opening summary is `Lead`, fine print is `Small`), rather than styling a generic `p`/`div` with ad hoc classes. Compose them freely inside cards, pages, and dialogs; every element still accepts `className` for one-off spacing.",
    "",
    "**When to use it** — anywhere the app renders prose or structured text content: article and documentation pages, dialogs and empty states, form helper copy, and reference tables.",
    "",
    "**When not to use it** — do not reach for these when you need an interactive control (`Button`, `Link` styled as a button) or a data-heavy interactive grid — `Typography` elements are static text primitives, not components with their own behavior.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default:
        "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    },
  ],
} satisfies Meta<typeof P>;

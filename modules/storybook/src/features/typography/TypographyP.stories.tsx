import { P } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "P",
  group: "Typography",
  tags: [],
  component: P,
  usage: [
    "**P** is the base body-copy paragraph — a plain native `p` element with no imposed color or size beyond the page's default typography, so it inherits the surrounding text scale.",
    "",
    "**How to use it** — use it for standard paragraphs of prose; layer `className` on top only for spacing overrides your layout needs.",
    "",
    "**When to use it** — the default choice for any block of running text: article bodies, descriptions, form helper paragraphs, and general content copy.",
    "",
    "**When not to use it** — for de-emphasized secondary text use `Muted`, for an intro/standfirst use `Lead`, and for a short emphasized line use `Large` or `Small` instead of styling a plain `P` by hand.",
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

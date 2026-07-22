import { List } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

const items = (
  <List>
    <li>1st level of Neptune's Trident</li>
    <li>2nd level of Neptune's Trident</li>
    <li>3rd level of Neptune's Trident</li>
  </List>
);

export const meta = {
  title: "List",
  group: "Typography",
  tags: [],
  component: List,
  usage: [
    "**List** renders an unordered bullet list — a native `ul` with disc markers, left indent, and spacing between items — for grouping related lines of prose content.",
    "",
    "**How to use it** — pass plain `li` children; the component spaces them automatically so you don't need to add margin to each item.",
    "",
    "**When to use it** — bullet points inside documentation, article body copy, feature lists, and any set of short related statements that read as a list within prose.",
    "",
    "**When not to use it** — for interactive, selectable, or data-driven rows (menus, tables of records, navigable lists), use a dedicated list/menu/table component instead — `List` is plain static typography with no interaction model.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: items,
    },
  ],
} satisfies Meta<typeof List>;

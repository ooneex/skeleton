import { Pagination } from "@module/design/components/pagination";
import type { Meta } from "../../shared/story";

const pages = (
  <Pagination>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.Previous href="#" />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">1</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#" isActive>
          2
        </Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">3</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Ellipsis />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Link href="#">12</Pagination.Link>
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.Next href="#" />
      </Pagination.Item>
    </Pagination.Content>
  </Pagination>
);

export const meta = {
  title: "Pagination",
  group: "Components",
  tags: [],
  component: Pagination,
  usage: [
    "**What** — `Pagination` is a compound page navigator for long lists, tables, and search results. The root `Pagination` shares its `size` with the attached parts: `Pagination.Content` lays out the row, `Pagination.Item` provides list semantics, `Pagination.Link` renders numbered page buttons, `Pagination.Previous` and `Pagination.Next` render the edge controls, and `Pagination.Ellipsis` marks a skipped range.",
    "",
    "**How to use it** — wrap the whole control in `Pagination`, place one `Pagination.Content` inside it, then compose each page control as a `Pagination.Item`. Use `Pagination.Link` for concrete page numbers, set `isActive` on the current page so it gets `aria-current=page`, and keep `Previous` / `Next` at the ends. Add an `Ellipsis` when you are collapsing a long run of page numbers instead of showing every page at once.",
    "",
    "**When to use it** — when the user moves across predictable, numbered pages: server-paginated tables, product grids, audit logs, or archives. It works best when the user benefits from knowing where they are in a finite sequence and can jump directly to nearby pages.",
    "",
    "**When not to use it** — do not use numbered pagination for infinite feeds, carousels, or wizard steps. If the data is better explored by continuous scrolling, filtering, or cursor-based next/previous navigation, use those patterns instead of exposing arbitrary page numbers.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: pages,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest spacing and buttons. Use in dense tables or mobile cards where pagination has to stay visually light.",
        },
        {
          name: "sm",
          usage: "Compact default. Use for most list views, admin tables, and filter result pages.",
        },
        {
          name: "md",
          usage: "More breathing room around each control. Use when pagination sits in a roomy card or detail layout.",
        },
        {
          name: "lg",
          usage:
            "Largest tap target. Use for touch-first surfaces and hero lists where the pager needs stronger presence.",
        },
      ],
      default: "sm",
    },
  ],
} satisfies Meta<typeof Pagination>;

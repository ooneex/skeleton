import { Button } from "@module/design/components/button";
import { DropdownMenu } from "@module/design/components/dropdown";
import type { Meta } from "../../shared/story";

const nested = (
  <DropdownMenu>
    <DropdownMenu.Trigger render={<Button variant="outline">Share</Button>} />
    <DropdownMenu.Content className="w-56">
      <DropdownMenu.Item>Copy link</DropdownMenu.Item>
      <DropdownMenu.Sub defaultOpen>
        <DropdownMenu.SubTrigger>Invite people</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>By email</DropdownMenu.Item>
          <DropdownMenu.Item>By username</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Manage access</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Export</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
);

export const meta = {
  title: "DropdownMenu.Sub",
  group: "Components",
  tags: [],
  component: DropdownMenu,
  usage: [
    "**DropdownMenu.Sub** nests a second menu inside the first. It pairs a `DropdownMenu.SubTrigger` — a menu row with a trailing chevron that opens the submenu on hover or `ArrowRight` — with a `DropdownMenu.SubContent` popup that flies out to the side. The `Sub` wrapper owns the submenu's open state (`defaultOpen`, or `open` / `onOpenChange`) and handles the hover-intent delay so the pointer can travel to the flyout without it closing.",
    "",
    "**How to use it** — wrap a `SubTrigger` and a `SubContent` in a `DropdownMenu.Sub`, and place that whole unit where an `Item` would go inside the parent `Content`. Fill the `SubContent` with the same building blocks as a top-level menu (`Item`, `Separator`, even another `Sub`). `ArrowLeft` or moving the pointer away closes the submenu and returns focus to the trigger. Keep nesting shallow — one level is almost always enough.",
    "",
    "**When to use it** — to tuck a secondary set of choices behind one row without crowding the main menu: `Move to ▸ folder`, `Invite ▸ by email / by link`, `Share ▸ …`.",
    "",
    "**When not to use it** — do not bury frequently used commands behind a submenu, and avoid deep nesting; if a menu needs several layers, its structure probably belongs in a dedicated panel or page instead.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: nested,
    },
    {
      name: "defaultOpen",
      control: "boolean",
      default: true,
    },
    {
      name: "onOpenChange",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof DropdownMenu>;

import { Button } from "@module/design/components/button";
import { DropdownMenu } from "@module/design/components/dropdown";
import type { Meta } from "../../shared/story";

const menu = (
  <DropdownMenu>
    <DropdownMenu.Trigger render={<Button variant="outline">Open menu</Button>} />
    <DropdownMenu.Content className="w-56">
      <DropdownMenu.Label>My Account</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
        <DropdownMenu.Item>
          Profile
          <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Settings
          <DropdownMenu.Shortcut>⌘,</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Item variant="destructive">
        Log out
        <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
);

export const meta = {
  title: "DropdownMenu",
  group: "Components",
  tags: [],
  component: DropdownMenu,
  usage: [
    "**DropdownMenu** is a compound menu that opens a floating list of actions from a trigger. Compose it from its static parts: `DropdownMenu.Trigger` (the button that toggles it — pass a `render` element to reuse any control), `DropdownMenu.Content` (the anchored popup, portaled to the body and positioned via `side` / `align`), and the items inside it — `DropdownMenu.Item`, `DropdownMenu.CheckboxItem`, `DropdownMenu.RadioGroup` / `DropdownMenu.RadioItem`, plus structural `DropdownMenu.Label`, `DropdownMenu.Separator`, `DropdownMenu.Group`, `DropdownMenu.Shortcut`, and nested `DropdownMenu.Sub` / `SubTrigger` / `SubContent`.",
    "",
    '**How to use it** — wrap the whole thing in `DropdownMenu` and place a `Trigger` and a `Content` inside. It manages open state itself; pass `defaultOpen` for an uncontrolled start or `open` / `onOpenChange` to control it. Group related commands under a `Label`, split sections with a `Separator`, and align keyboard hints to the right with `Shortcut`. Reach for `CheckboxItem` for toggles that stay open and `RadioGroup` for a single choice among options. Give an `Item` `variant="destructive"` for dangerous actions. Full keyboard navigation (arrows, typeahead, Escape, Tab-to-close) and focus return are handled for you.',
    "",
    '**When to use it** — for a compact set of actions or options triggered from a button: a row\'s overflow `⋯` menu, an account menu, a "sort by" or "columns" picker, a bulk-actions menu. It keeps secondary commands out of the layout until the user asks for them.',
    "",
    "**When not to use it** — do not use it for primary navigation between pages (use links or tabs), for selecting a value from a long list within a form (use a `Select` or combobox), or for rich, non-menu content like a form or a card (use a `Popover`). If there is only one action, render a plain `Button`.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: menu,
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

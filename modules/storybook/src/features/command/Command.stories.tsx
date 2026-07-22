import { Command } from "@module/design/components/command";
import { File2Icon } from "@module/design/icons/outline/files-folders/sm/File2Icon";
import { CalendarIcon } from "@module/design/icons/outline/time/sm/CalendarIcon";
import { GearIcon } from "@module/design/icons/outline/ui-layout/sm/GearIcon";
import { PlusIcon } from "@module/design/icons/outline/ui-layout/sm/PlusIcon";
import { UserIcon } from "@module/design/icons/outline/users/sm/UserIcon";
import type { Meta } from "../../shared/story";

const palette = (
  <Command className="w-[420px] border border-border">
    <Command.Input placeholder="Type a command or search…" />
    <Command.List>
      <Command.Empty>No results found.</Command.Empty>
      <Command.Group heading="Suggestions">
        <Command.Item>
          <CalendarIcon />
          <span>Calendar</span>
        </Command.Item>
        <Command.Item>
          <UserIcon />
          <span>Search people</span>
        </Command.Item>
        <Command.Item>
          <File2Icon />
          <span>Search files</span>
        </Command.Item>
      </Command.Group>
      <Command.Separator />
      <Command.Group heading="Actions">
        <Command.Item>
          <PlusIcon />
          <span>New file</span>
          <Command.Shortcut>⌘N</Command.Shortcut>
        </Command.Item>
        <Command.Item>
          <GearIcon />
          <span>Settings</span>
          <Command.Shortcut>⌘,</Command.Shortcut>
        </Command.Item>
      </Command.Group>
    </Command.List>
  </Command>
);

export const meta = {
  title: "Command",
  group: "Components",
  tags: [],
  component: Command,
  usage: [
    "**Command** is a filterable command palette built on `cmdk`. The user types in `Command.Input` and the list narrows in real time to the items whose text (and `value`/keywords) match, with keyboard navigation, selection, and fuzzy matching handled for you. It is a compound component: `Command.Input` is the search field, `Command.List` is the scrollable results container, `Command.Group` buckets items under a heading, `Command.Item` is a selectable row, `Command.Separator` divides groups, `Command.Shortcut` shows a keyboard hint, and `Command.Empty` renders when nothing matches.",
    "",
    "**How to use it** — put one `Command.Input` at the top, then a `Command.List` holding a `Command.Empty` (so a no-match search is never a blank void) and one or more `Command.Group`s of `Command.Item`s. Give each item a `value` (or let it derive from its text) and an `onSelect` handler; drop an icon as the first child and a `Command.Shortcut` as the last. Separate unrelated groups with `Command.Separator`. Render it inline here, or reach for the imperative `Command.Palette` / `CommandPalette` to open the same UI in a modal on `⌘K`.",
    "",
    "**When to use it** — for fast, keyboard-first access to actions and navigation across an app: a global `⌘K` launcher, an inline action picker, a searchable menu of commands. It shines when there are more actions than fit comfortably in a visible menu and the user knows roughly what they want to type.",
    "",
    "**When not to use it** — for a short, fixed set of choices where a `Select` or a `DropdownMenu` reads more clearly, for free-text entry that is not matched against a list (use an input), or as primary page navigation that should always be visible (use a sidebar or tabs). Don't hide essential, first-run actions behind a palette the user has to know to summon.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: palette,
    },
    {
      name: "shouldFilter",
      control: "boolean",
      default: true,
    },
    {
      name: "onValueChange",
      callback: (value: string) => value,
    },
  ],
} satisfies Meta<typeof Command>;

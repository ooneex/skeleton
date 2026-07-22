import { ContextMenu, type ContextMenuItemType, openContextMenu } from "@module/design/components/context-menu";
import { useState } from "react";
import { File2Icon } from "../../shared/icons/outline/files-folders/sm/File2Icon";
import { PlusIcon } from "../../shared/icons/outline/ui-layout/sm/PlusIcon";
import { Trash2Icon } from "../../shared/icons/outline/ui-layout/sm/Trash2Icon";
import { UserIcon } from "../../shared/icons/outline/users/sm/UserIcon";
import type { Meta } from "../../shared/story";

const items: ContextMenuItemType[] = [
  { type: "label", label: "Actions" },
  { value: "open", label: "Open", icon: <File2Icon />, shortcut: "⌘O" },
  { value: "rename", label: "Rename", shortcut: "⌘R" },
  {
    type: "sub",
    label: "Share",
    icon: <UserIcon />,
    items: [
      { value: "share-link", label: "Copy link" },
      { value: "share-email", label: "Send by email" },
    ],
  },
  { type: "separator" },
  { type: "checkbox", value: "starred", label: "Starred", checked: true },
  { type: "radio", value: "list", label: "List view", checked: true },
  { type: "radio", value: "grid", label: "Grid view" },
  { type: "separator" },
  { value: "duplicate", label: "Duplicate", icon: <PlusIcon /> },
  { value: "delete", label: "Delete", icon: <Trash2Icon />, destructive: true, shortcut: "⌫" },
];

type ContextMenuDemoPropsType = {
  /** Prompt shown inside the right-click target area. */
  label?: string;
};

/**
 * `ContextMenu` is imperative — it renders nothing until `openContextMenu(event, items)`
 * is awaited — so the preview wraps it in a small demo: mount the Root once, then open the
 * menu from a right-click on the target area and show the value the user picked.
 */
const ContextMenuDemo = ({ label }: ContextMenuDemoPropsType) => {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <ContextMenu />
      <div
        onContextMenu={(event) => openContextMenu(event, items).then(setPicked)}
        className="flex h-40 w-80 select-none items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground"
      >
        {label}
      </div>
      <p className="text-sm text-muted-foreground">
        {picked ? (
          <>
            Selected: <span className="font-mono text-foreground">{picked}</span>
          </>
        ) : (
          "Nothing selected yet — right-click the area above."
        )}
      </p>
    </div>
  );
};
ContextMenuDemo.displayName = "ContextMenu";

export const meta = {
  title: "ContextMenu",
  group: "Components",
  tags: [],
  component: ContextMenuDemo,
  usage: [
    "**ContextMenu** is an imperative, right-click menu built on `react-call` and the `@base-ui/react` Menu primitive. It has no DOM trigger — you anchor it to the pointer by calling `openContextMenu(event, items)` from an `onContextMenu` handler, and it resolves the selected item's `value` (or `null` when dismissed by Escape, an outside click, or a programmatic close). Mount `<ContextMenu />` once near the app root and drive it entirely from data.",
    "",
    "**How to use it** — place `<ContextMenu />` once at the top of your app. On the element you want to right-click, wire `onContextMenu={(e) => openContextMenu(e, items).then(handle)}`; the helper calls `preventDefault()` for you so the native browser menu is suppressed. Each entry in `items` is a `ContextMenuItemType` discriminated by `type`: a default `item` (with `icon`, `shortcut`, `disabled`, `destructive`), a `separator`, a `label` heading, a `checkbox` or `radio` row with a `checked` flag, or a `sub` that nests its own `items` in a submenu. This preview wires that flow to a target area and shows the resolved value.",
    "",
    "**When to use it** — for secondary, contextual actions on an object the user right-clicks: a file in a tree, a row in a table, a node on a canvas. It keeps the actions out of the way until summoned, so the primary UI stays uncluttered.",
    "",
    "**When not to use it** — for primary actions that must be discoverable (put those in a visible toolbar or `DropdownMenu` with a real trigger), on touch-first surfaces where right-click isn't available (offer a long-press or an explicit menu button instead), or as an application menu bar. Don't bury the only path to an action behind a right-click.",
  ].join("\n"),
  props: [
    {
      name: "label",
      control: "text",
      default: "Right-click anywhere in this area",
    },
  ],
} satisfies Meta<typeof ContextMenuDemo>;

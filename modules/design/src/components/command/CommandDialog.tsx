import { createDialog } from "@module/design/components/dialog/Dialog";
import { cn } from "@module/design/utils/cn";
import type { ReactNode } from "react";
import { Command } from "./Command";
import { CommandEmpty } from "./CommandEmpty";
import { CommandGroup } from "./CommandGroup";
import { CommandInput } from "./CommandInput";
import { CommandItem } from "./CommandItem";
import { CommandList } from "./CommandList";
import { CommandShortcut } from "./CommandShortcut";

export type CommandPaletteItemType = {
  /** Value returned by `CommandPalette.call()` when this entry is chosen. */
  value: string;
  label: ReactNode;
  /** Optional heading to bucket items under. */
  group?: string;
  shortcut?: string;
  icon?: ReactNode;
  /** Extra search terms beyond the visible label. */
  keywords?: string[];
  disabled?: boolean;
};

export type CommandPalettePropsType = {
  items: CommandPaletteItemType[];
  placeholder?: string;
  emptyMessage?: ReactNode;
  className?: string;
  /** Screen-reader-only dialog title/description. */
  title?: string;
  description?: string;
};

const groupItems = (items: CommandPaletteItemType[]) => {
  const groups = new Map<string, CommandPaletteItemType[]>();
  for (const item of items) {
    const key = item.group ?? "";
    const bucket = groups.get(key);
    if (bucket) bucket.push(item);
    else groups.set(key, [item]);
  }
  return [...groups.entries()];
};

/**
 * Imperative command palette built on `react-call`. Mount `<CommandPalette />`
 * once, then await the user's selection:
 *
 * ```tsx
 * const action = await CommandPalette.call({
 *   items: [
 *     { value: "new", label: "New file", group: "Actions", shortcut: "⌘N" },
 *     { value: "open", label: "Open…", group: "Actions" },
 *   ],
 * })
 * if (action) run(action)
 * ```
 *
 * Resolves the chosen item's `value`, or `null` when dismissed.
 */
export const CommandPalette = createDialog<CommandPalettePropsType, string | null>(
  ({ call, items, placeholder = "Type a command or search…", emptyMessage = "No results found.", className }) => (
    <Command className={cn("**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5", className)}>
      <CommandInput placeholder={placeholder} autoFocus />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        {groupItems(items).map(([group, groupEntries]) => (
          <CommandGroup key={group || "_"} heading={group || undefined}>
            {groupEntries.map((item) => (
              <CommandItem
                key={item.value}
                value={`${item.value} ${item.label} ${(item.keywords ?? []).join(" ")}`}
                disabled={item.disabled}
                onSelect={() => call.end(item.value)}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.shortcut ? <CommandShortcut>{item.shortcut}</CommandShortcut> : null}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  ),
  {
    dismissValue: null,
    showCloseButton: false,
    className: "rounded-xl! top-12 translate-y-0 overflow-hidden p-0 shadow-2xl border-none ring-0",
  },
);
CommandPalette.displayName = "CommandPalette";

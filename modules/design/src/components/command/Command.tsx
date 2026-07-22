import { cn } from "@module/design/utils/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";
import { CommandEmpty } from "./CommandEmpty";
import { CommandGroup } from "./CommandGroup";
import { CommandInput } from "./CommandInput";
import { CommandItem } from "./CommandItem";
import { CommandList } from "./CommandList";
import { CommandSeparator } from "./CommandSeparator";
import { CommandShortcut } from "./CommandShortcut";

const CommandRoot = ({ className, ...props }: ComponentProps<typeof CommandPrimitive>) => {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground rounded-xl! flex size-full flex-col overflow-hidden",
        className,
      )}
      {...props}
    />
  );
};

/**
 * Command palette compound component. Sub-components are attached as
 * properties on `Command`, so a single import exposes the whole API:
 *
 * ```tsx
 * <Command>
 *   <Command.Input placeholder="Type a command..." />
 *   <Command.List>
 *     <Command.Empty>No results.</Command.Empty>
 *     <Command.Group heading="Actions">
 *       <Command.Item>Open<Command.Shortcut>⌘O</Command.Shortcut></Command.Item>
 *     </Command.Group>
 *   </Command.List>
 * </Command>
 * ```
 */
export const Command = Object.assign(CommandRoot, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Separator: CommandSeparator,
  Item: CommandItem,
  Shortcut: CommandShortcut,
});
CommandRoot.displayName = "Command";

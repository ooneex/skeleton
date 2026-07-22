import { cn } from "@module/design/utils/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

/** Labelled section grouping related command items. */
export const CommandGroup = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground **:[[cmdk-group-heading]]:text-foreground/60 overflow-hidden px-2 py-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:tracking-wider",
        className,
      )}
      {...props}
    />
  );
};
CommandGroup.displayName = "Command.Group";

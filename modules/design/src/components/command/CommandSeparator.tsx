import { cn } from "@module/design/utils/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentProps } from "react";

/** Thin divider between command groups. */
export const CommandSeparator = ({ className, ...props }: ComponentProps<typeof CommandPrimitive.Separator>) => {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border/50 mx-2 h-px w-auto", className)}
      {...props}
    />
  );
};
CommandSeparator.displayName = "Command.Separator";

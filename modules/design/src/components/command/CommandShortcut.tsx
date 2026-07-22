import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

/** Right-aligned keyboard hint displayed inside a command item. */
export const CommandShortcut = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground group-data-selected/command-item:text-accent-foreground ml-auto text-xs tracking-wide shrink-0",
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "Command.Shortcut";

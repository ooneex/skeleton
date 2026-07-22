import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { KbdGroup } from "./KbdGroup";

const KbdRoot = ({ className, ...props }: React.ComponentProps<"kbd">) => (
  <kbd
    data-slot="kbd"
    className={cn(
      "bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex items-center justify-center select-none",
      className,
    )}
    {...props}
  />
);

/**
 * Keyboard key display component.
 * Use `Kbd` for a single key and `Kbd.Group` to cluster multiple keys.
 */
export const Kbd = Object.assign(KbdRoot, { Group: KbdGroup });

KbdRoot.displayName = "Kbd";

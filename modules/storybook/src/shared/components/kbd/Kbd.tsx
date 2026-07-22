import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import { KbdGroup } from "./KbdGroup";

const KbdRoot = ({ className, ...props }: ComponentProps<"kbd">) => (
  <kbd
    data-slot="kbd"
    className={cn(
      "pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground [&_svg:not([class*='size-'])]:size-3",
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

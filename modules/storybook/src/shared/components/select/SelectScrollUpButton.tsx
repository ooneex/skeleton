import { Select as SelectPrimitive } from "@base-ui/react/select";
import type * as React from "react";
import { ChevronUpIcon } from "../../icons/outline/arrows/sm/ChevronUpIcon";
import { cn } from "../../utils/cn";

/** Scrolls the select list upward when content overflows. */
export const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) => {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 top-0 w-full",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4 text-foreground" />
    </SelectPrimitive.ScrollUpArrow>
  );
};

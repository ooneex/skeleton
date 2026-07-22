import { Select as SelectPrimitive } from "@base-ui/react/select";
import type * as React from "react";
import { ChevronDownIcon } from "../../icons/outline/arrows/sm/ChevronDownIcon";
import { cn } from "../../utils/cn";

/** Scrolls the select list downward when content overflows. */
export const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) => {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 bottom-0 w-full",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4 text-foreground" />
    </SelectPrimitive.ScrollDownArrow>
  );
};

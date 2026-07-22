import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "@module/design/utils/cn";

/** A visual divider between groups of select items. */
export const SelectSeparator = ({ className, ...props }: SelectPrimitive.Separator.Props) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border -mx-1 my-1 h-px pointer-events-none", className)}
      {...props}
    />
  );
};

SelectSeparator.displayName = "Select.Separator";

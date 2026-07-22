import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "@module/design/utils/cn";

/** A non-selectable label for a group of select items. */
export const SelectLabel = ({ className, ...props }: SelectPrimitive.GroupLabel.Props) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
};

SelectLabel.displayName = "Select.Label";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "../../utils/cn";

/** Displays the currently selected value in the trigger. */
export const SelectValue = ({ className, ...props }: SelectPrimitive.Value.Props) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left text-sm text-foreground", className)}
      {...props}
    />
  );
};

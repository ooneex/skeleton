import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "@module/design/utils/cn";

export const ComboboxSeparator = ({ className, ...props }: ComboboxPrimitive.Separator.Props) => {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};
ComboboxSeparator.displayName = "Combobox.Separator";

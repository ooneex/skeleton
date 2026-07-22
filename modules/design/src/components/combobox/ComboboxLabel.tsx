import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "@module/design/utils/cn";

export const ComboboxLabel = ({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) => {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
};
ComboboxLabel.displayName = "Combobox.Label";

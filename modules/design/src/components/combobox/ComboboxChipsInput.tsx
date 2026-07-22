import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "@module/design/utils/cn";

export const ComboboxChipsInput = ({ className, ...props }: ComboboxPrimitive.Input.Props) => {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn("min-w-16 flex-1 outline-none hover:ring-0 placeholder:text-muted-foreground/60", className)}
      {...props}
    />
  );
};
ComboboxChipsInput.displayName = "Combobox.ChipsInput";

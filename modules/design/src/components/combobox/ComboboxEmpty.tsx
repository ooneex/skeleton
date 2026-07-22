import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "@module/design/utils/cn";

export const ComboboxEmpty = ({ className, ...props }: ComboboxPrimitive.Empty.Props) => {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex",
        className,
      )}
      {...props}
    />
  );
};
ComboboxEmpty.displayName = "Combobox.Empty";

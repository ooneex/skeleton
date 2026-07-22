import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "@module/design/utils/cn";

export const ComboboxGroup = ({ className, ...props }: ComboboxPrimitive.Group.Props) => {
  return <ComboboxPrimitive.Group data-slot="combobox-group" className={cn(className)} {...props} />;
};
ComboboxGroup.displayName = "Combobox.Group";

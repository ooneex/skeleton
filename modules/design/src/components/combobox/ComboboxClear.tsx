import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { InputGroup } from "@module/design/components/input/InputGroup";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { cn } from "@module/design/utils/cn";

export const ComboboxClear = ({ className, ...props }: ComboboxPrimitive.Clear.Props) => {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroup.Button variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XmarkIcon className="size-3 text-primary pointer-events-none" />
    </ComboboxPrimitive.Clear>
  );
};
ComboboxClear.displayName = "Combobox.Clear";

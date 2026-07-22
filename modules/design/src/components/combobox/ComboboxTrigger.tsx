import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { ChevronDownIcon } from "@module/design/icons/outline/arrows/sm/ChevronDownIcon";
import { cn } from "@module/design/utils/cn";

export const ComboboxTrigger = ({ className, children, ...props }: ComboboxPrimitive.Trigger.Props) => {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "[&_svg:not([class*='size-'])]:size-3 [[data-slot=input-group]:has(&:focus-visible)]:border-ring-active",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-3 text-primary pointer-events-none" />
    </ComboboxPrimitive.Trigger>
  );
};
ComboboxTrigger.displayName = "Combobox.Trigger";

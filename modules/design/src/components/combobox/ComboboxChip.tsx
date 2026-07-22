import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { Button } from "@module/design/components/button/Button";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { cn } from "@module/design/utils/cn";

type ComboboxChipPropsType = ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean;
};

export const ComboboxChip = ({ className, children, showRemove = true, ...props }: ComboboxChipPropsType) => {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "bg-muted text-foreground flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded px-1.5 text-xs whitespace-nowrap has-data-[slot=combobox-chip-remove]:pr-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XmarkIcon className="size-3 text-primary pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
};
ComboboxChip.displayName = "Combobox.Chip";

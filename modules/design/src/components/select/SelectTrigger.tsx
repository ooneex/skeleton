import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ChevronDownIcon } from "@module/design/icons/outline/arrows/sm/ChevronDownIcon";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const selectTriggerVariants = cva(
  "ring-border text-foreground data-placeholder:text-muted-foreground hover:ring-ring-active hover:ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 gap-1.5 rounded ring bg-transparent py-2 pr-2 pl-2.5 transition-[color,box-shadow] focus-visible:ring aria-invalid:ring *:data-[slot=select-value]:flex *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      size: {
        xs: "h-6 rounded-[min(var(--radius-md),8px)] text-xs",
        sm: "h-8 rounded-[min(var(--radius-md),10px)] text-sm",
        md: "h-9 text-base",
        lg: "h-10 text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

const selectTriggerIconVariants = cva("text-foreground pointer-events-none", {
  variants: {
    size: {
      xs: "size-2.5",
      sm: "size-3",
      md: "size-3.5",
      lg: "size-4",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type SelectTriggerPropsType = SelectPrimitive.Trigger.Props & VariantProps<typeof selectTriggerVariants>;

/** The button that opens the select popup and shows the value. */
export const SelectTrigger = ({ className, size = "sm", children, ...props }: SelectTriggerPropsType) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(selectTriggerVariants({ size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon render={<ChevronDownIcon className={cn(selectTriggerIconVariants({ size }))} />} />
    </SelectPrimitive.Trigger>
  );
};

export { selectTriggerVariants };

SelectTrigger.displayName = "Select.Trigger";

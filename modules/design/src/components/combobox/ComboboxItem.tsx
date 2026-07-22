import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const comboboxItemVariants = cva(
  "data-highlighted:bg-accent gap-2 rounded py-1.5 pr-8 pl-2 [&_svg:not([class*='size-'])]:size-3 relative flex w-full cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

const comboboxItemIconVariants = cva("text-foreground pointer-events-none", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-3.5",
      md: "size-4",
      lg: "size-4.5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type ComboboxItemPropsType = ComboboxPrimitive.Item.Props & VariantProps<typeof comboboxItemVariants>;

export const ComboboxItem = ({ className, size = "sm", children, ...props }: ComboboxItemPropsType) => {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      data-size={size}
      className={cn(comboboxItemVariants({ size }), className)}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={<span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />}
      >
        <CheckIcon className={cn(comboboxItemIconVariants({ size }))} />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
};

export { comboboxItemIconVariants, comboboxItemVariants };

ComboboxItem.displayName = "Combobox.Item";

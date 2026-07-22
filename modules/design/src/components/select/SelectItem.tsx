import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const selectItemVariants = cva(
  "focus:bg-accent text-foreground gap-2 rounded py-1 pr-8 pl-2 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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

const selectItemIconVariants = cva("text-foreground pointer-events-none", {
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

type SelectItemPropsType = SelectPrimitive.Item.Props & VariantProps<typeof selectItemVariants>;

/** A selectable option within the select content. */
export const SelectItem = ({ className, size = "sm", children, ...props }: SelectItemPropsType) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      data-size={size}
      className={cn(selectItemVariants({ size }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.ItemIndicator
        render={<span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />}
      >
        <CheckIcon className={cn(selectItemIconVariants({ size }))} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export { selectItemVariants };

SelectItem.displayName = "Select.Item";

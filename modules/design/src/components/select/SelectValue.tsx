import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const selectValueVariants = cva("flex flex-1 text-left text-foreground", {
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
});

type SelectValuePropsType = SelectPrimitive.Value.Props & VariantProps<typeof selectValueVariants>;

/** Displays the currently selected value in the trigger. */
export const SelectValue = ({ className, size = "sm", ...props }: SelectValuePropsType) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn(selectValueVariants({ size }), className)}
      {...props}
    />
  );
};

export { selectValueVariants };

SelectValue.displayName = "Select.Value";

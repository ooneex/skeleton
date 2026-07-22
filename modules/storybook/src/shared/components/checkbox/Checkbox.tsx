import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "../../icons/outline/ui-layout/sm/CheckIcon";
import { cn } from "../../utils/cn";

const checkboxVariants = cva(
  "ring-border data-checked:bg-primary data-checked:text-primary-foreground data-checked:ring-primary aria-invalid:aria-checked:ring-primary aria-invalid:ring-destructive hover:ring-ring-active focus-visible:ring-ring-active flex items-center justify-center rounded ring bg-transparent transition-[color,box-shadow] group-has-disabled/field:opacity-50 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: { size: { xs: "size-3.5", sm: "size-4", md: "size-[1.125rem]", lg: "size-5" } },
    defaultVariants: { size: "sm" },
  },
);
const checkboxIndicatorVariants = cva("grid place-content-center text-current transition-none", {
  variants: { size: { xs: "[&>svg]:size-3", sm: "[&>svg]:size-3.5", md: "[&>svg]:size-4", lg: "[&>svg]:size-4.5" } },
  defaultVariants: { size: "sm" },
});
type CheckboxPropsType = CheckboxPrimitive.Root.Props & VariantProps<typeof checkboxVariants>;
export const Checkbox = ({ className, size = "sm", ...props }: CheckboxPropsType) => {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={cn(checkboxVariants({ size, className }))} {...props}>
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className={cn(checkboxIndicatorVariants({ size }))}>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
export { checkboxVariants };

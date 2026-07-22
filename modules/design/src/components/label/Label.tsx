import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const labelVariants = cva(
  "gap-2 leading-relaxed font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
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

type LabelPropsType = React.ComponentProps<"label"> &
  VariantProps<typeof labelVariants> & {
    required?: boolean;
  };

export const Label = ({ className, size = "xs", required, children, ...props }: LabelPropsType) => {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Reusable label component, control association handled by parent
    <label data-slot="label" className={cn(labelVariants({ size, className }))} {...props}>
      <span
        className={cn(
          "font-semibold uppercase tracking-wider text-muted-foreground",
          labelVariants({ size, className }),
          "inline-flex items-baseline gap-0.5",
        )}
      >
        {children}
        {required && <span className={cn(labelVariants({ size }), "text-destructive")}>*</span>}
      </span>
    </label>
  );
};

export { labelVariants };

Label.displayName = "Label";

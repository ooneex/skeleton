import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { ChevronRightIcon } from "../../icons/outline/arrows/sm/ChevronRightIcon";
import { cn } from "../../utils/cn";

const breadcrumbSeparatorVariants = cva("[&>svg]:text-primary", {
  variants: {
    size: {
      xs: "[&>svg]:size-2.5",
      sm: "[&>svg]:size-3",
      md: "[&>svg]:size-3.5",
      lg: "[&>svg]:size-4",
    },
  },
  defaultVariants: { size: "sm" },
});

type BreadcrumbSeparatorPropsType = ComponentProps<"li"> & VariantProps<typeof breadcrumbSeparatorVariants>;

export const BreadcrumbSeparator = ({ children, className, size = "sm", ...props }: BreadcrumbSeparatorPropsType) => {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(breadcrumbSeparatorVariants({ size, className }))}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
};

export { breadcrumbSeparatorVariants };

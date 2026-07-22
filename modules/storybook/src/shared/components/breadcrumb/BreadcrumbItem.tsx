import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

const breadcrumbItemVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      xs: "gap-1",
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
    },
  },
  defaultVariants: { size: "sm" },
});

type BreadcrumbItemPropsType = ComponentProps<"li"> & VariantProps<typeof breadcrumbItemVariants>;

export const BreadcrumbItem = ({ className, size = "sm", ...props }: BreadcrumbItemPropsType) => {
  return <li data-slot="breadcrumb-item" className={cn(breadcrumbItemVariants({ size, className }))} {...props} />;
};

export { breadcrumbItemVariants };

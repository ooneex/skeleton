import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const breadcrumbListVariants = cva(
  "text-muted-foreground flex flex-wrap items-center wrap-break-word leading-relaxed",
  {
    variants: {
      size: {
        xs: "gap-1 text-xs sm:gap-2",
        sm: "gap-1.5 text-sm sm:gap-2.5",
        md: "gap-2 text-base sm:gap-3",
        lg: "gap-2.5 text-lg sm:gap-3.5",
      },
    },
    defaultVariants: { size: "sm" },
  },
);

type BreadcrumbListPropsType = ComponentProps<"ol"> & VariantProps<typeof breadcrumbListVariants>;

export const BreadcrumbList = ({ className, size = "sm", ...props }: BreadcrumbListPropsType) => {
  return <ol data-slot="breadcrumb-list" className={cn(breadcrumbListVariants({ size, className }))} {...props} />;
};

export { breadcrumbListVariants };

BreadcrumbList.displayName = "Breadcrumb.List";

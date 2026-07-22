import { DotsIcon } from "@module/design/icons/outline/editing/sm/DotsIcon";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const breadcrumbEllipsisVariants = cva("flex items-center justify-center", {
  variants: {
    size: {
      xs: "size-4 [&>svg]:size-3.5",
      sm: "size-5 [&>svg]:size-4",
      md: "size-6 [&>svg]:size-5",
      lg: "size-7 [&>svg]:size-5.5",
    },
  },
  defaultVariants: { size: "sm" },
});

type BreadcrumbEllipsisPropsType = ComponentProps<"span"> & VariantProps<typeof breadcrumbEllipsisVariants>;

export const BreadcrumbEllipsis = ({ className, size = "sm", ...props }: BreadcrumbEllipsisPropsType) => {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(breadcrumbEllipsisVariants({ size, className }))}
      {...props}
    >
      <DotsIcon />
      <span className="sr-only">More</span>
    </span>
  );
};

export { breadcrumbEllipsisVariants };

BreadcrumbEllipsis.displayName = "Breadcrumb.Ellipsis";

import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export const linkVariants = cva("text-primary-600 no-underline font-medium hover:underline", {
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

type LinkPropsType = ComponentProps<"a"> & VariantProps<typeof linkVariants>;

export const Link = ({ className, size = "sm", ...props }: LinkPropsType) => {
  return <a className={cn(linkVariants({ size, className }))} {...props} />;
};

Link.displayName = "Link";

import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const inputGroupTextVariants = cva(
  "text-muted-foreground gap-2 [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

type InputGroupTextPropsType = Omit<React.ComponentProps<"span">, "size"> & VariantProps<typeof inputGroupTextVariants>;

export const InputGroupText = ({ className, size = "sm", ...props }: InputGroupTextPropsType) => {
  return <span className={cn(inputGroupTextVariants({ size }), className)} {...props} />;
};

InputGroupText.displayName = "InputGroup.Text";

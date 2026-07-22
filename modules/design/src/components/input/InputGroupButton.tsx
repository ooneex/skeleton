import { Button } from "@module/design/components/button/Button";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const inputGroupButtonVariants = cva("gap-2 flex items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 text-xs [&>svg:not([class*='size-'])]:size-3.5",
      sm: "text-sm",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 text-xs has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 text-sm has-[>svg]:p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

type InputGroupButtonPropsType = Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset";
  };

export const InputGroupButton = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonPropsType) => {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
};

export { inputGroupButtonVariants };

InputGroupButton.displayName = "InputGroup.Button";

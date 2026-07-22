import { cn } from "@module/design/utils/cn";
import type * as React from "react";

type TextareaPropsType = React.ComponentProps<"textarea">;

export const Textarea = ({ className, ...props }: TextareaPropsType) => {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border aria-invalid:ring-destructive/20 aria-invalid:border-destructive rounded border bg-transparent px-2.5 py-2 text-base transition-[color,box-shadow] aria-invalid:ring-[3px] md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

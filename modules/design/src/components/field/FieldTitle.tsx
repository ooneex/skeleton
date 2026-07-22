import { cn } from "@module/design/utils/cn";
import type * as React from "react";

/** Inline title for a field, styled like a label. */
export const FieldTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug",
        className,
      )}
      {...props}
    />
  );
};

FieldTitle.displayName = "Field.Title";

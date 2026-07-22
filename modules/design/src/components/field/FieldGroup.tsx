import { cn } from "@module/design/utils/cn";
import type * as React from "react";

/** Container that stacks multiple fields with consistent spacing. */
export const FieldGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col",
        className,
      )}
      {...props}
    />
  );
};

FieldGroup.displayName = "Field.Group";

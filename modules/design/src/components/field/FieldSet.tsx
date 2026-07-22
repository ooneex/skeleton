import { cn } from "@module/design/utils/cn";
import type * as React from "react";

/** Groups related fields within a `Field` fieldset. */
export const FieldSet = ({ className, ...props }: React.ComponentProps<"fieldset">) => {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col",
        className,
      )}
      {...props}
    />
  );
};

FieldSet.displayName = "Field.Set";

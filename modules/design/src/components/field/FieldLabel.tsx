import { Label } from "@module/design/components/label/Label";
import { cn } from "@module/design/utils/cn";
import type * as React from "react";

/** Label for a field, with optional required indicator. */
export const FieldLabel = ({
  className,
  required,
  children,
  ...props
}: React.ComponentProps<typeof Label> & { required?: boolean }) => {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "has-data-checked:bg-primary/5 has-data-checked:border-primary gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded has-[>[data-slot=field]]:border *:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-baseline">
        {children}
        {required && <span className="text-destructive">*</span>}
      </span>
    </Label>
  );
};

FieldLabel.displayName = "Field.Label";

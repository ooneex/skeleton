import { cn } from "@module/design/utils/cn";
import type * as React from "react";

/** Caption for a `FieldSet`, rendered as `legend` or `label` variant. */
export const FieldLegend = ({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) => {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn("mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", className)}
      {...props}
    />
  );
};

FieldLegend.displayName = "Field.Legend";

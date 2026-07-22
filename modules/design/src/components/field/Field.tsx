import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { FieldContent } from "./FieldContent";
import { FieldDescription } from "./FieldDescription";
import { FieldError } from "./FieldError";
import { FieldGroup } from "./FieldGroup";
import { FieldLabel } from "./FieldLabel";
import { FieldLegend } from "./FieldLegend";
import { FieldSeparator } from "./FieldSeparator";
import { FieldSet } from "./FieldSet";
import { FieldTitle } from "./FieldTitle";

const fieldVariants = cva("data-[invalid=true]:text-destructive gap-3 group/field flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
      horizontal:
        "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive:
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

/** Field fieldset with vertical, horizontal, or responsive orientation. */
const FieldRoot = ({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"fieldset"> & VariantProps<typeof fieldVariants>) => {
  return (
    <fieldset
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
};

export const Field = Object.assign(FieldRoot, {
  Set: FieldSet,
  Legend: FieldLegend,
  Group: FieldGroup,
  Content: FieldContent,
  Label: FieldLabel,
  Title: FieldTitle,
  Description: FieldDescription,
  Separator: FieldSeparator,
  Error: FieldError,
});

FieldRoot.displayName = "Field";

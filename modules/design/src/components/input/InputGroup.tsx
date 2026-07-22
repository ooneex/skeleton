import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { InputGroupAddon } from "./InputGroupAddon";
import { InputGroupButton } from "./InputGroupButton";
import { InputGroupInput } from "./InputGroupInput";
import { InputGroupText } from "./InputGroupText";
import { InputGroupTextarea } from "./InputGroupTextarea";

const inputGroupVariants = cva(
  "border-border hover:border-ring-active has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive rounded border transition-[color,box-shadow] has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
  {
    variants: {
      size: {
        xs: "h-6 rounded-[min(var(--radius-md),8px)]",
        sm: "h-8 rounded-[min(var(--radius-md),10px)]",
        md: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

type InputGroupPropsType = React.ComponentProps<"fieldset"> & VariantProps<typeof inputGroupVariants>;

const InputGroupRoot = ({ className, size = "sm", ...props }: InputGroupPropsType) => {
  return (
    <fieldset
      data-slot="input-group"
      data-size={size}
      className={cn(inputGroupVariants({ size }), className)}
      {...props}
    />
  );
};

/**
 * Compound component. Sub-components are attached as properties on `InputGroup`,
 * so a single import exposes the whole API:
 *
 * ```tsx
 * <InputGroup>
 *   <InputGroup.Input placeholder="Search" />
 *   <InputGroup.Addon align="inline-end">
 *     <InputGroup.Button>Go</InputGroup.Button>
 *   </InputGroup.Addon>
 * </InputGroup>
 * ```
 */
export const InputGroup = Object.assign(InputGroupRoot, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Text: InputGroupText,
  Input: InputGroupInput,
  Textarea: InputGroupTextarea,
});

export { inputGroupVariants };

InputGroupRoot.displayName = "InputGroup";

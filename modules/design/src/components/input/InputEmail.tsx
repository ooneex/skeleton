import { InputGroup } from "@module/design/components/input/InputGroup";
import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { InputGroupInput } from "@module/design/components/input/InputGroupInput";
import { EnvelopeIcon as EmailIcon } from "@module/design/icons/outline/communication/sm/EnvelopeIcon";
import { cn } from "@module/design/utils/cn";
import type { ComponentProps, ReactNode } from "react";

type InputVariantPropsType = Omit<ComponentProps<typeof InputGroupInput>, "type"> & {
  groupClassName?: string;
  iconClassName?: string;
  children?: ReactNode;
};

export const InputEmail = ({
  placeholder = "email@example.com",
  size,
  className,
  groupClassName,
  iconClassName,
  ...props
}: InputVariantPropsType) => {
  return (
    <InputGroup size={size} className={groupClassName}>
      <InputGroupInput
        type="email"
        placeholder={placeholder}
        size={size}
        className={cn("placeholder:text-sm", className)}
        {...props}
      />
      <InputGroupAddon align="inline-start">
        <EmailIcon className={iconClassName} />
      </InputGroupAddon>
    </InputGroup>
  );
};

InputEmail.displayName = "InputEmail";

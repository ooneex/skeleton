import { InputGroup } from "@module/design/components/input/InputGroup";
import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { InputGroupInput } from "@module/design/components/input/InputGroupInput";
import { LockPasswordIcon as PasswordIcon } from "@module/design/icons/outline/design-development/sm/LockPasswordIcon";
import { cn } from "@module/design/utils/cn";
import type { ComponentProps, ReactNode } from "react";

type InputVariantPropsType = Omit<ComponentProps<typeof InputGroupInput>, "type"> & {
  groupClassName?: string;
  iconClassName?: string;
  children?: ReactNode;
};

export const InputPassword = ({
  placeholder = "Password",
  size,
  className,
  groupClassName,
  iconClassName,
  ...props
}: InputVariantPropsType) => {
  return (
    <InputGroup size={size} className={groupClassName}>
      <InputGroupInput
        type="password"
        placeholder={placeholder}
        size={size}
        className={cn("placeholder:text-sm", className)}
        {...props}
      />
      <InputGroupAddon align="inline-start">
        <PasswordIcon className={iconClassName} />
      </InputGroupAddon>
    </InputGroup>
  );
};

InputPassword.displayName = "InputPassword";

import { InputGroup } from "@module/design/components/input/InputGroup";
import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { InputGroupInput } from "@module/design/components/input/InputGroupInput";
import { CreditCardIcon as PaymentIcon } from "@module/design/icons/outline/business-finance/sm/CreditCardIcon";
import { cn } from "@module/design/utils/cn";
import type { ComponentProps, ReactNode } from "react";

type InputVariantPropsType = Omit<ComponentProps<typeof InputGroupInput>, "type"> & {
  groupClassName?: string;
  iconClassName?: string;
  children?: ReactNode;
};

export const InputCreditCard = ({
  placeholder = "1234 5678 9012 3456",
  size,
  className,
  groupClassName,
  iconClassName,
  ...props
}: InputVariantPropsType) => {
  return (
    <InputGroup size={size} className={groupClassName}>
      <InputGroupInput
        placeholder={placeholder}
        size={size}
        className={cn("placeholder:text-sm", className)}
        {...props}
      />
      <InputGroupAddon align="inline-start">
        <PaymentIcon className={iconClassName} />
      </InputGroupAddon>
    </InputGroup>
  );
};

InputCreditCard.displayName = "InputCreditCard";

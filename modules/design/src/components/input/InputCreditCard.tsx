import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { CreditCardIcon as PaymentIcon } from "@module/design/icons/outline/business-finance/sm/CreditCardIcon";

export const InputCreditCard = ({ placeholder = "1234 5678 9012 3456", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={PaymentIcon} placeholder={placeholder} {...props} />;
};

InputCreditCard.displayName = "InputCreditCard";

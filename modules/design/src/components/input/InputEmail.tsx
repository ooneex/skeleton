import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { EnvelopeIcon as EmailIcon } from "@module/design/icons/outline/communication/sm/EnvelopeIcon";

export const InputEmail = ({ placeholder = "email@example.com", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={EmailIcon} type="email" placeholder={placeholder} {...props} />;
};

InputEmail.displayName = "InputEmail";

import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { LockPasswordIcon as PasswordIcon } from "@module/design/icons/outline/design-development/sm/LockPasswordIcon";

export const InputPassword = ({ placeholder = "Password", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={PasswordIcon} type="password" placeholder={placeholder} {...props} />;
};

InputPassword.displayName = "InputPassword";

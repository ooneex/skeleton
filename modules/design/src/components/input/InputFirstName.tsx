import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { UserIcon } from "@module/design/icons/outline/users/sm/UserIcon";

export const InputFirstName = ({ placeholder = "First name", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={UserIcon} placeholder={placeholder} {...props} />;
};

InputFirstName.displayName = "InputFirstName";

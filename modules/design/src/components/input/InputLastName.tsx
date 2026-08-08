import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { UserIcon } from "@module/design/icons/outline/users/sm/UserIcon";

export const InputLastName = ({ placeholder = "Last name", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={UserIcon} placeholder={placeholder} {...props} />;
};

InputLastName.displayName = "InputLastName";

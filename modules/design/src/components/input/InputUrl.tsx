import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { LinkIcon as LinkUrlIcon } from "@module/design/icons/outline/editing/sm/LinkIcon";

export const InputUrl = ({ placeholder = "https://example.com", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={LinkUrlIcon} type="url" placeholder={placeholder} {...props} />;
};

InputUrl.displayName = "InputUrl";

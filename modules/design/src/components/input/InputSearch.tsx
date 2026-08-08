import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { MagnifierIcon as SearchIcon } from "@module/design/icons/outline/filtering-sorting/sm/MagnifierIcon";

export const InputSearch = ({ placeholder = "Search...", ...props }: InputIconVariantPropsType) => {
  return <InputWithIcon icon={SearchIcon} placeholder={placeholder} {...props} />;
};

InputSearch.displayName = "InputSearch";

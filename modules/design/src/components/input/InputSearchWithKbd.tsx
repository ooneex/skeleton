import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { type InputIconVariantPropsType, InputWithIcon } from "@module/design/components/input/InputWithIcon";
import { Kbd } from "@module/design/components/kbd/Kbd";
import { MagnifierIcon as SearchIcon } from "@module/design/icons/outline/filtering-sorting/sm/MagnifierIcon";

export const InputSearchWithKbd = ({ placeholder = "Search...", ...props }: InputIconVariantPropsType) => {
  return (
    <InputWithIcon
      icon={SearchIcon}
      placeholder={placeholder}
      trailing={
        <InputGroupAddon align="inline-end">
          <Kbd>⌘K</Kbd>
        </InputGroupAddon>
      }
      {...props}
    />
  );
};

InputSearchWithKbd.displayName = "InputSearchWithKbd";

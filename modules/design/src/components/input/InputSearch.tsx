import { InputGroup } from "@module/design/components/input/InputGroup";
import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { InputGroupInput } from "@module/design/components/input/InputGroupInput";
import { MagnifierIcon as SearchIcon } from "@module/design/icons/outline/filtering-sorting/sm/MagnifierIcon";
import { cn } from "@module/design/utils/cn";
import type { ComponentProps, ReactNode } from "react";

type InputVariantPropsType = Omit<ComponentProps<typeof InputGroupInput>, "type"> & {
  groupClassName?: string;
  iconClassName?: string;
  children?: ReactNode;
};

export const InputSearch = ({
  placeholder = "Search...",
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
        <SearchIcon className={iconClassName} />
      </InputGroupAddon>
    </InputGroup>
  );
};

InputSearch.displayName = "InputSearch";

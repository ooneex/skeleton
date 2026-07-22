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

export const InputSearchLight = ({
  placeholder = "Search...",
  size = "md",
  groupClassName,
  iconClassName,
  ...props
}: InputVariantPropsType) => {
  return (
    <InputGroup
      size={size}
      className={cn(
        "border-none w-fit has-[[data-slot=input-group-control]:focus-visible]:border-transparent has-[[data-slot=input-group-control]:focus-visible]:ring-0",
        groupClassName,
      )}
    >
      <InputGroupInput className="p-0 placeholder:text-sm" placeholder={placeholder} size={size} {...props} />
      <InputGroupAddon align="inline-start" className="p-0">
        <SearchIcon className={iconClassName} />
      </InputGroupAddon>
    </InputGroup>
  );
};

InputSearchLight.displayName = "InputSearchLight";

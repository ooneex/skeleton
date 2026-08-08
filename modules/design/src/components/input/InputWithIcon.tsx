import { InputGroup } from "@module/design/components/input/InputGroup";
import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { InputGroupInput } from "@module/design/components/input/InputGroupInput";
import { cn } from "@module/design/utils/cn";
import type { ComponentProps, ComponentType, ReactNode, SVGProps } from "react";

/** Shared prop shape for every icon-prefixed input variant (email, password, search, …). */
export type InputIconVariantPropsType = Omit<ComponentProps<typeof InputGroupInput>, "type"> & {
  groupClassName?: string;
  iconClassName?: string;
};

type InputWithIconPropsType = InputIconVariantPropsType & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  type?: ComponentProps<typeof InputGroupInput>["type"];
  trailing?: ReactNode;
};

/**
 * Internal building block behind the icon-prefixed input variants (`InputEmail`,
 * `InputSearch`, `InputCreditCard`, …). Not part of the module's public surface —
 * each variant wraps this with its own icon, `type`, and default placeholder.
 */
export const InputWithIcon = ({
  icon: Icon,
  type,
  size,
  className,
  groupClassName,
  iconClassName,
  trailing,
  ...props
}: InputWithIconPropsType) => {
  return (
    <InputGroup size={size} className={groupClassName}>
      <InputGroupInput type={type} size={size} className={cn("placeholder:text-sm", className)} {...props} />
      <InputGroupAddon align="inline-start">
        <Icon className={iconClassName} />
      </InputGroupAddon>
      {trailing}
    </InputGroup>
  );
};

InputWithIcon.displayName = "InputWithIcon";

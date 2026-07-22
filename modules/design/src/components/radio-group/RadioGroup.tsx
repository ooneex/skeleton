import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "@module/design/utils/cn";
import { RadioGroupItem } from "./RadioGroupItem";

const RadioGroupRoot = ({ className, ...props }: RadioGroupPrimitive.Props) => {
  return <RadioGroupPrimitive data-slot="radio-group" className={cn("grid gap-3 w-full", className)} {...props} />;
};

/**
 * Radio group component.
 * Compose with `RadioGroup.Item` for each selectable option.
 */
export const RadioGroup = Object.assign(RadioGroupRoot, { Item: RadioGroupItem });

RadioGroupRoot.displayName = "RadioGroup";

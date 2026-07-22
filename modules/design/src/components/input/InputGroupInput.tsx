import { Input, type inputVariants } from "@module/design/components/input/Input";
import { cn } from "@module/design/utils/cn";
import type { VariantProps } from "class-variance-authority";

type InputGroupInputPropsType = Omit<React.ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants>;

export const InputGroupInput = ({ className, size = "sm", ...props }: InputGroupInputPropsType) => {
  return (
    <Input
      size={size}
      data-slot="input-group-control"
      className={cn(
        "rounded-none border-0 bg-transparent ring-0 hover:ring-0 focus-visible:ring-0 aria-invalid:ring-0 flex-1",
        className,
      )}
      {...props}
    />
  );
};

InputGroupInput.displayName = "InputGroup.Input";

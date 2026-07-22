import { Button } from "@module/design/components/button/Button";
import { Input } from "@module/design/components/input/Input";
import { MinusIcon as MinusIconLg } from "@module/design/icons/outline/ui-layout/lg/MinusIcon";
import { PlusIcon as PlusIconLg } from "@module/design/icons/outline/ui-layout/lg/PlusIcon";
import { MinusIcon as MinusIconMd } from "@module/design/icons/outline/ui-layout/md/MinusIcon";
import { PlusIcon as PlusIconMd } from "@module/design/icons/outline/ui-layout/md/PlusIcon";
import { MinusIcon as MinusIconSm } from "@module/design/icons/outline/ui-layout/sm/MinusIcon";
import { PlusIcon as PlusIconSm } from "@module/design/icons/outline/ui-layout/sm/PlusIcon";
import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";

const inputNumericContainerVariants = cva(
  "border-border hover:border-ring-active focus-within:border-ring-active flex items-center rounded border transition-[color,box-shadow]",
  {
    variants: {
      size: {
        xs: "h-6",
        sm: "h-8",
        md: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

type ButtonSizeType = "icon-xs" | "icon-sm" | "icon" | "icon-lg";

const inputNumericButtonSizeMap: Record<
  NonNullable<VariantProps<typeof inputNumericContainerVariants>["size"]>,
  ButtonSizeType
> = {
  xs: "icon-xs",
  sm: "icon-sm",
  md: "icon-sm",
  lg: "icon",
};

const inputNumericIconVariants = cva("", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-4",
      lg: "size-5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const inputNumericIconMap: Record<
  NonNullable<VariantProps<typeof inputNumericContainerVariants>["size"]>,
  { MinusIcon: typeof MinusIconSm; PlusIcon: typeof PlusIconSm }
> = {
  xs: { MinusIcon: MinusIconSm, PlusIcon: PlusIconSm },
  sm: { MinusIcon: MinusIconSm, PlusIcon: PlusIconSm },
  md: { MinusIcon: MinusIconMd, PlusIcon: PlusIconMd },
  lg: { MinusIcon: MinusIconLg, PlusIcon: PlusIconLg },
};

const inputNumericInputVariants = cva(
  "rounded-none bg-transparent text-center shadow-none ring-0 hover:ring-0 focus-visible:ring-0",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-base",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

type InputNumericPropsType = VariantProps<typeof inputNumericContainerVariants> & {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  pad?: boolean;
  wrap?: boolean;
  className?: string;
};

export const InputNumeric = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  value: controlledValue,
  onChange,
  pad = false,
  wrap = false,
  size = "sm",
  className,
}: InputNumericPropsType) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = (newValue: number) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue === "") {
      setValue(min);
      return;
    }
    const newValue = Number.parseInt(inputValue, 10);
    if (!Number.isNaN(newValue) && newValue >= min && newValue <= max) {
      setValue(newValue);
    } else if (newValue > max) {
      setValue(max);
    }
  };

  const incrementValue = () => {
    if (wrap && value >= max) {
      setValue(min);
    } else {
      const newValue = Math.min(value + step, max);
      setValue(newValue);
    }
  };

  const decrementValue = () => {
    if (wrap && value <= min) {
      setValue(max);
    } else {
      const newValue = Math.max(value - step, min);
      setValue(newValue);
    }
  };

  const displayValue = pad ? String(value).padStart(2, "0") : value;

  const buttonSize = inputNumericButtonSizeMap[size ?? "sm"];
  const { MinusIcon, PlusIcon } = inputNumericIconMap[size ?? "sm"];

  return (
    <div className={cn("w-full max-w-xs", className)}>
      <div className="relative">
        <div className={inputNumericContainerVariants({ size })}>
          <Button
            variant="ghost"
            size={buttonSize}
            onClick={decrementValue}
            aria-label="Decrement button"
            className="h-full"
          >
            <MinusIcon className={inputNumericIconVariants({ size })} />
          </Button>
          <Input
            type="text"
            inputMode="numeric"
            value={displayValue}
            onChange={handleChange}
            className={cn("h-auto", inputNumericInputVariants({ size }))}
          />
          <Button
            variant="ghost"
            size={buttonSize}
            onClick={incrementValue}
            aria-label="Increment button"
            className="h-full"
          >
            <PlusIcon className={inputNumericIconVariants({ size })} />
          </Button>
        </div>
      </div>
    </div>
  );
};

InputNumeric.displayName = "InputNumeric";

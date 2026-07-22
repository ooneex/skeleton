import { cn } from "@module/design/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { OTPInputContext } from "input-otp";
import { type ComponentProps, useContext } from "react";

export const inputOTPSlotVariants = cva(
  "relative flex items-center justify-center border-y border-r border-border bg-transparent shadow-xs transition-[color,box-shadow] outline-none first:border-l aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20",
  {
    variants: {
      size: {
        xs: "size-6 text-xs first:rounded-l-[min(var(--radius-md),8px)] last:rounded-r-[min(var(--radius-md),8px)]",
        sm: "size-8 text-sm first:rounded-l-[min(var(--radius-md),10px)] last:rounded-r-[min(var(--radius-md),10px)]",
        md: "size-9 text-base first:rounded-l last:rounded-r",
        lg: "size-10 text-base first:rounded-l last:rounded-r",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export type InputOTPSizeType = NonNullable<VariantProps<typeof inputOTPSlotVariants>["size"]>;

type InputOTPSlotPropsType = ComponentProps<"div"> & {
  index: number;
  size?: InputOTPSizeType;
};

export const InputOTPSlot = ({ index, size = "sm", className, ...props }: InputOTPSlotPropsType) => {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(inputOTPSlotVariants({ size }), className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="input-otp-caret h-4 w-px bg-foreground" />
        </div>
      )}
    </div>
  );
};

InputOTPSlot.displayName = "InputOTP.Slot";

import { cn } from "@module/design/utils/cn";
import { OTPInput } from "input-otp";
import type { ComponentProps } from "react";
import { InputOTPGroup } from "./InputOTPGroup";
import { InputOTPSeparator } from "./InputOTPSeparator";
import { InputOTPSlot } from "./InputOTPSlot";

type InputOTPPropsType = ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

const InputOTPRoot = ({ className, containerClassName, ...props }: InputOTPPropsType) => {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center has-disabled:opacity-50", containerClassName)}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
};

/**
 * One-time-password input with compound `Group`, `Slot`, and `Separator` parts.
 */
export const InputOTP = Object.assign(InputOTPRoot, {
  Group: InputOTPGroup,
  Slot: InputOTPSlot,
  Separator: InputOTPSeparator,
});

InputOTPRoot.displayName = "InputOTP";

import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

export const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "flex items-center has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] has-aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  );
};

InputOTPGroup.displayName = "InputOTP.Group";

import { MinusIcon } from "@module/design/icons/outline/ui-layout/sm/MinusIcon";
import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

export const InputOTPSeparator = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="input-otp-separator"
      aria-hidden="true"
      className={cn("flex items-center text-muted-foreground", className)}
      {...props}
    >
      <MinusIcon className="size-4" />
    </div>
  );
};

InputOTPSeparator.displayName = "InputOTP.Separator";

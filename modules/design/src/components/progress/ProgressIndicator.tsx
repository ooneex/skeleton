import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@module/design/utils/cn";

export const ProgressIndicator = ({ className, ...props }: ProgressPrimitive.Indicator.Props) => (
  <ProgressPrimitive.Indicator
    data-slot="progress-indicator"
    className={cn("bg-primary h-full transition-[width] duration-500 ease-in-out", className)}
    {...props}
  />
);

ProgressIndicator.displayName = "Progress.Indicator";

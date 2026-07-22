import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@module/design/utils/cn";

export const ProgressLabel = ({ className, ...props }: ProgressPrimitive.Label.Props) => (
  <ProgressPrimitive.Label className={cn("text-sm font-medium", className)} data-slot="progress-label" {...props} />
);

ProgressLabel.displayName = "Progress.Label";

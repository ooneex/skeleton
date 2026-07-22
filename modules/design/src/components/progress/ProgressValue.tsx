import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@module/design/utils/cn";

export const ProgressValue = ({ className, ...props }: ProgressPrimitive.Value.Props) => (
  <ProgressPrimitive.Value
    className={cn("text-muted-foreground ml-auto text-sm tabular-nums", className)}
    data-slot="progress-value"
    {...props}
  />
);

ProgressValue.displayName = "Progress.Value";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@module/design/utils/cn";
import { ProgressIndicator } from "./ProgressIndicator";
import { ProgressLabel } from "./ProgressLabel";
import { ProgressTrack } from "./ProgressTrack";
import { ProgressValue } from "./ProgressValue";

const ProgressRoot = ({ className, children, value, ...props }: ProgressPrimitive.Root.Props) => (
  <ProgressPrimitive.Root
    value={value}
    data-slot="progress"
    className={cn("flex flex-wrap gap-3", className)}
    {...props}
  >
    {children}
  </ProgressPrimitive.Root>
);

/**
 * Progress bar component.
 * Compose with `Progress.Track`, `Progress.Indicator`, `Progress.Label`, and `Progress.Value`.
 */
export const Progress = Object.assign(ProgressRoot, {
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
  Label: ProgressLabel,
  Value: ProgressValue,
});

ProgressRoot.displayName = "Progress";

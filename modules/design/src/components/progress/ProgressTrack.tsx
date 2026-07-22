import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "@module/design/utils/cn";

export const ProgressTrack = ({ className, ...props }: ProgressPrimitive.Track.Props) => (
  <ProgressPrimitive.Track
    className={cn("bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden", className)}
    data-slot="progress-track"
    {...props}
  />
);

ProgressTrack.displayName = "Progress.Track";

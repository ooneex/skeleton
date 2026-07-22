import { Badge } from "@module/design/components/badge/Badge";
import { HourglassIcon } from "@module/design/icons/outline/time/sm/HourglassIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusQueuedBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="neutral" {...props}>
      <HourglassIcon data-icon="inline-start" />
      {children ?? "Queued"}
    </Badge>
  );
};

StatusQueuedBadge.displayName = "StatusQueuedBadge";

import { Badge } from "@module/design/components/badge/Badge";
import { CircleMediaStopIcon } from "@module/design/icons/outline/photography-video/sm/CircleMediaStopIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusInactiveBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="neutral" {...props}>
      <CircleMediaStopIcon data-icon="inline-start" />
      {children ?? "Inactive"}
    </Badge>
  );
};

StatusInactiveBadge.displayName = "StatusInactiveBadge";

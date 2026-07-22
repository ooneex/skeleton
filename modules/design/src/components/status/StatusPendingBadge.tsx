import { Badge } from "@module/design/components/badge/Badge";
import { HourglassIcon } from "@module/design/icons/outline/time/sm/HourglassIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusPendingBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="warning" {...props}>
      <HourglassIcon data-icon="inline-start" />
      {children ?? "Pending"}
    </Badge>
  );
};

StatusPendingBadge.displayName = "StatusPendingBadge";

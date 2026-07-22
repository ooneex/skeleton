import { Badge } from "@module/design/components/badge/Badge";
import { CalendarIcon } from "@module/design/icons/outline/time/sm/CalendarIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusScheduledBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="info" {...props}>
      <CalendarIcon data-icon="inline-start" />
      {children ?? "Scheduled"}
    </Badge>
  );
};

StatusScheduledBadge.displayName = "StatusScheduledBadge";

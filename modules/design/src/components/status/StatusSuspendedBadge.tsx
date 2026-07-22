import { Badge } from "@module/design/components/badge/Badge";
import { TriangleWarningIcon } from "@module/design/icons/outline/ui-layout/sm/TriangleWarningIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusSuspendedBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="danger" {...props}>
      <TriangleWarningIcon data-icon="inline-start" />
      {children ?? "Suspended"}
    </Badge>
  );
};

StatusSuspendedBadge.displayName = "StatusSuspendedBadge";

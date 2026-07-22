import { Badge } from "@module/design/components/badge/Badge";
import { ShieldCheckIcon } from "@module/design/icons/outline/security/sm/ShieldCheckIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusValidBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <ShieldCheckIcon data-icon="inline-start" />
      {children ?? "Valid"}
    </Badge>
  );
};

StatusValidBadge.displayName = "StatusValidBadge";

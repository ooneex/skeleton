import { Badge } from "@module/design/components/badge/Badge";
import { EyeSlashIcon } from "@module/design/icons/outline/ui-layout/sm/EyeSlashIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusExpiredBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="danger" {...props}>
      <EyeSlashIcon data-icon="inline-start" />
      {children ?? "Expired"}
    </Badge>
  );
};

StatusExpiredBadge.displayName = "StatusExpiredBadge";

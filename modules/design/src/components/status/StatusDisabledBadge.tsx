import { Badge } from "@module/design/components/badge/Badge";
import { BanIcon } from "@module/design/icons/outline/ui-layout/sm/BanIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusDisabledBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="neutral" {...props}>
      <BanIcon data-icon="inline-start" />
      {children ?? "Disabled"}
    </Badge>
  );
};

StatusDisabledBadge.displayName = "StatusDisabledBadge";

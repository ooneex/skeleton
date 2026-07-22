import { Badge } from "@module/design/components/badge/Badge";
import { CheckDoubleIcon } from "@module/design/icons/outline/ui-layout/sm/CheckDoubleIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusDeliveredBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <CheckDoubleIcon data-icon="inline-start" />
      {children ?? "Delivered"}
    </Badge>
  );
};

StatusDeliveredBadge.displayName = "StatusDeliveredBadge";

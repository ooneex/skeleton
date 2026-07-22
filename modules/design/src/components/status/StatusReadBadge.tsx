import { Badge } from "@module/design/components/badge/Badge";
import { EnvelopeOpenIcon } from "@module/design/icons/outline/communication/sm/EnvelopeOpenIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusReadBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="success" {...props}>
      <EnvelopeOpenIcon data-icon="inline-start" />
      {children ?? "Read"}
    </Badge>
  );
};

StatusReadBadge.displayName = "StatusReadBadge";

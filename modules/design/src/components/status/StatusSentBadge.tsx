import { Badge } from "@module/design/components/badge/Badge";
import { PaperPlaneIcon } from "@module/design/icons/outline/communication/sm/PaperPlaneIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusSentBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="info" {...props}>
      <PaperPlaneIcon data-icon="inline-start" />
      {children ?? "Sent"}
    </Badge>
  );
};

StatusSentBadge.displayName = "StatusSentBadge";

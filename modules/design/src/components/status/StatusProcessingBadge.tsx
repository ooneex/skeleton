import { Badge } from "@module/design/components/badge/Badge";
import { SpinnerLoaderIcon } from "@module/design/icons/outline/loaders/sm/SpinnerLoaderIcon";
import type { StatusBadgePropsType } from "./types";

export const StatusProcessingBadge = ({ children, ...props }: StatusBadgePropsType) => {
  return (
    <Badge variant="info" {...props}>
      <SpinnerLoaderIcon data-icon="inline-start" />
      {children ?? "Processing"}
    </Badge>
  );
};

StatusProcessingBadge.displayName = "StatusProcessingBadge";

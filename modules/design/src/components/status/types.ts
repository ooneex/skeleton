import type { badgeVariants } from "@module/design/components/badge/Badge";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export type StatusBadgePropsType = Omit<HTMLAttributes<HTMLSpanElement>, "children"> &
  Omit<VariantProps<typeof badgeVariants>, "variant"> & {
    children?: React.ReactNode;
  };

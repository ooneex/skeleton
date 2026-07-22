import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

export const tabsBadgeVariants = cva(
  "ml-0.5 inline-flex min-w-5 shrink-0 items-center justify-center rounded-full px-1.5 py-0.5 text-xs font-medium leading-none tabular-nums transition-colors",
  {
    variants: {
      variant: {
        // Neutral by default; lights up in the theme accent while its tab is active.
        default:
          "bg-muted text-muted-foreground group-data-[active]/tab:bg-tabs-accent group-data-[active]/tab:text-tabs-accent-foreground",
        info: "bg-info-100 text-info-700",
        danger: "bg-danger-100 text-danger-700",
        success: "bg-success-100 text-success-700",
        warning: "bg-warning-100 text-warning-700",
        neutral: "bg-neutral-100 text-neutral-700",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type TabsBadgePropsType = ComponentPropsWithoutRef<"span"> & VariantProps<typeof tabsBadgeVariants>;

/**
 * Small count pill rendered inside a `Tabs.Trigger` — e.g. the `12` next to
 * "Inbox". The `default` variant tracks its trigger's active state; the
 * semantic variants (`info`, `danger`, …) stay a fixed color.
 */
export const TabsBadge = ({ className, variant = "default", ...props }: TabsBadgePropsType) => {
  return <span data-slot="tabs-badge" className={cn(tabsBadgeVariants({ variant }), className)} {...props} />;
};

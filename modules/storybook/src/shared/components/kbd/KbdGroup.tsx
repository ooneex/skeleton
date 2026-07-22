import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

export const KbdGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <kbd data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />
);

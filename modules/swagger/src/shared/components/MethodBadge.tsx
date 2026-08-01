import type { MethodType } from "../route";
import { cn } from "../utils/cn";

type MethodBadgePropsType = {
  method: MethodType;
  className?: string;
};

/**
 * The verb, coloured by what it does to the resource — read, create, replace,
 * amend, destroy. The colours come from the design system's status palette, so
 * they follow the active theme instead of hard-coding a green and a red.
 */
const METHOD_CLASS: Record<MethodType, string> = {
  get: "bg-info-100 text-info-700",
  post: "bg-success-100 text-success-700",
  put: "bg-warning-100 text-warning-700",
  patch: "bg-warning-100 text-warning-700",
  delete: "bg-danger-100 text-danger-700",
  head: "bg-neutral-100 text-neutral-700",
  options: "bg-neutral-100 text-neutral-700",
  socket: "bg-secondary/15 text-secondary-800",
};

export const MethodBadge = ({ method, className }: MethodBadgePropsType) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center justify-center rounded-sm px-1.5 py-0.5 font-mono text-2xs font-semibold uppercase tracking-wide",
      METHOD_CLASS[method],
      className,
    )}
  >
    {method === "socket" ? "WS" : method}
  </span>
);

import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

type PPropsType = ComponentProps<"p">;

export const P = ({ className, ...props }: PPropsType) => {
  return <p className={cn(className)} {...props} />;
};

type LeadPropsType = ComponentProps<"p">;

export const Lead = ({ className, ...props }: LeadPropsType) => {
  return <p className={cn("text-muted-foreground text-xl", className)} {...props} />;
};

type LargePropsType = ComponentProps<"div">;

export const Large = ({ className, ...props }: LargePropsType) => {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
};

type SmallPropsType = ComponentProps<"small">;

export const Small = ({ className, ...props }: SmallPropsType) => {
  return <small className={cn("text-sm font-normal", className)} {...props} />;
};

type MutedPropsType = ComponentProps<"p">;

export const Muted = ({ className, ...props }: MutedPropsType) => {
  return <p className={cn("text-muted-foreground", className)} {...props} />;
};

P.displayName = "P";
Lead.displayName = "Lead";
Large.displayName = "Large";
Small.displayName = "Small";
Muted.displayName = "Muted";

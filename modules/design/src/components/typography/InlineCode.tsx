import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

type InlineCodePropsType = ComponentProps<"code">;

export const InlineCode = ({ className, ...props }: InlineCodePropsType) => {
  return (
    <code
      className={cn("bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}
      {...props}
    />
  );
};

InlineCode.displayName = "InlineCode";

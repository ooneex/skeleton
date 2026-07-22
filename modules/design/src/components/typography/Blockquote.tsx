import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

type BlockquotePropsType = ComponentProps<"blockquote">;

export const Blockquote = ({ className, ...props }: BlockquotePropsType) => {
  return <blockquote className={cn("mt-6 rounded bg-muted/60 px-4 py-3 italic", className)} {...props} />;
};

Blockquote.displayName = "Blockquote";

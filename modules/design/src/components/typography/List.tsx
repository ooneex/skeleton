import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

type ListPropsType = ComponentProps<"ul">;

export const List = ({ className, ...props }: ListPropsType) => {
  return <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />;
};

List.displayName = "List";

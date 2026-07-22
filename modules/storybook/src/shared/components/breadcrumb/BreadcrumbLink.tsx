import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "../../utils/cn";

export const BreadcrumbLink = ({ className, render, ...props }: useRender.ComponentProps<"a">) => {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">({ className: cn("hover:text-foreground transition-colors", className) }, props),
    render,
    state: { slot: "breadcrumb-link" },
  });
};

import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

export const PageLoader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="page-loader"
      className={cn("flex flex-col items-center justify-center min-h-screen gap-8", className)}
      {...props}
    >
      <img src="/logo-full.svg" alt="Ooneex" className="h-10 animate-pulse" />
    </div>
  );
};
PageLoader.displayName = "PageLoader";

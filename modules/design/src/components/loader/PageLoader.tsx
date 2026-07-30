import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

export const PageLoader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="page-loader"
      className={cn("flex flex-col items-center justify-center min-h-screen gap-8", className)}
      {...props}
    >
      <img alt="Ooneex" className="h-10 animate-pulse" height={40} src="/logo-full.svg" width={160} />
    </div>
  );
};
PageLoader.displayName = "PageLoader";

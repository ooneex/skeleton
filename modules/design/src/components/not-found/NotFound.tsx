import { Button, buttonVariants } from "@module/design/components/button/Button";
import { H1, Muted } from "@module/design/components/typography";
import { ArrowTriangleLineLeftIcon } from "@module/design/icons/fill/arrows/sm/ArrowTriangleLineLeftIcon";
import { cn } from "@module/design/utils/cn";
import { Link, useRouter } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { NotFoundIcon } from "./NotFoundIcon";

export const NotFound = ({ className, ...props }: ComponentProps<"div">) => {
  const router = useRouter();

  return (
    <div
      data-slot="not-found"
      className={cn("flex flex-col items-center justify-center h-full gap-6 p-12", className)}
      {...props}
    >
      <NotFoundIcon />
      <div className="flex flex-col items-center gap-2 text-center">
        <H1>404</H1>
        <Muted className="max-w-sm">The page you are looking for doesn't exist or has been moved.</Muted>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => router.history.back()}>
          <ArrowTriangleLineLeftIcon />
          Go back
        </Button>
        <Link to="/" className={buttonVariants()}>
          Go home
        </Link>
      </div>
    </div>
  );
};
NotFound.displayName = "NotFound";

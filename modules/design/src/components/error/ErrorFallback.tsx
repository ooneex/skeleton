import { Button, buttonVariants } from "@module/design/components/button/Button";
import { ArrowLeftIcon } from "@module/design/icons/outline/arrows/sm/ArrowLeftIcon";
import { cn } from "@module/design/utils/cn";
import { isStaleChunkError, reloadIfStaleChunkError } from "@module/design/utils/staleChunk";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ErrorFallbackIcon } from "./ErrorFallbackIcon";

const parseStackTrace = (stack: string | undefined) => {
  if (!stack) return [];
  return stack
    .split("\n")
    .filter((line) => line.trim().startsWith("at"))
    .map((line) => {
      const match = line.match(/^\s*at\s+(.+?)\s+\((.+):(\d+):(\d+)\)/);
      if (match) {
        return { fn: match[1], file: match[2], line: match[3], col: match[4] };
      }
      const matchNoFn = line.match(/^\s*at\s+(.+):(\d+):(\d+)/);
      if (matchNoFn) {
        return { fn: null, file: matchNoFn[1], line: matchNoFn[2], col: matchNoFn[3] };
      }
      return { fn: null, file: line.trim(), line: null, col: null };
    });
};

export const ErrorFallback = ({ error, reset }: ErrorComponentProps) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const frames = parseStackTrace(error.stack);
  const hasStack = frames.length > 0;
  const staleChunk = isStaleChunkError(error);

  useEffect(() => {
    reloadIfStaleChunkError(error);
  }, [error]);

  const handleReset = () => {
    if (staleChunk) {
      window.location.reload();
      return;
    }
    reset();
    router.invalidate();
  };

  return (
    <div role="alert" className="relative h-full flex flex-col overflow-hidden">
      {/* Main content — centered */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 p-12">
        <ErrorFallbackIcon />

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-muted-foreground max-w-sm">Something went wrong while processing your request.</p>

          {/* Error message card */}
          <div className="mt-1 max-w-lg w-full rounded border border-destructive/15 bg-destructive/5 px-4 py-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 rounded-full bg-destructive/10 p-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" className="text-destructive">
                  <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="7" y1="4" x2="7" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="7" cy="10.5" r="0.8" fill="currentColor" />
                </svg>
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs font-semibold text-destructive/80">{error.name || "Error"}</p>
                <p className="mt-0.5 text-sm text-foreground/70 wrap-break-word">
                  {error.message || "An unexpected error occurred."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.history.back()}>
            <ArrowLeftIcon />
            Go back
          </Button>
          <Button onClick={handleReset}>Try again</Button>
          <Link to="/" className={buttonVariants({ variant: "outline" })}>
            Go home
          </Link>
        </div>

        {/* Drawer toggle */}
        {hasStack && (
          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5 mt-2"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className={cn("transition-transform duration-300", drawerOpen ? "rotate-180" : "rotate-0")}
            >
              <path d="M2 8L6 4L10 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {drawerOpen ? "Hide" : "Show"} stack trace
          </button>
        )}
      </div>

      {/* Bottom drawer */}
      {hasStack && (
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-in-out bg-muted/40 backdrop-blur-sm",
            drawerOpen ? "grid-rows-[1fr] border-t border-border/50" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            {/* Drawer handle */}
            <div className="flex justify-center py-2">
              <div className="w-10 h-1 rounded-full bg-border" />
            </div>

            <div className="overflow-auto px-6 pb-6 max-h-[calc(50vh-2rem)]">
              {/* Error header */}
              <div className="flex items-center gap-2 mb-3 font-mono text-xs">
                <span className="px-1.5 py-0.5 rounded bg-destructive/10 text-destructive text-2xs font-semibold">
                  {error.name || "Error"}
                </span>
                <span className="text-muted-foreground truncate text-xs">{error.message}</span>
              </div>

              {/* Stack frames */}
              <div className="space-y-0.5">
                {frames.map((frame, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-baseline gap-3 py-1.5 px-3 rounded font-mono text-xs",
                      i === 0 && "bg-destructive/5 border border-destructive/10",
                      i > 0 && "hover:bg-muted/60",
                    )}
                  >
                    <span
                      className={cn(
                        "select-none w-4 text-right shrink-0 tabular-nums text-xs",
                        i === 0 ? "text-destructive/50" : "text-muted-foreground/40",
                      )}
                    >
                      {i + 1}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-2 min-w-0">
                      {frame.fn ? (
                        <span
                          className={cn(
                            "font-medium shrink-0 text-xs",
                            i === 0 ? "text-destructive/80" : "text-foreground/70",
                          )}
                        >
                          {frame.fn}
                        </span>
                      ) : (
                        <span className="text-muted-foreground/40 italic shrink-0 text-xs">anonymous</span>
                      )}
                      {frame.file && (
                        <span className="text-muted-foreground/50 break-all text-xs">
                          {frame.file}
                          {frame.line && (
                            <span className="text-muted-foreground/30 text-xs">
                              :{frame.line}:{frame.col}
                            </span>
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
ErrorFallback.displayName = "ErrorFallback";

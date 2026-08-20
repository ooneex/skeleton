import { Button } from "@module/design/components/button/Button";
import { SpinnerLoaderIcon } from "@module/design/icons/outline/loaders/sm/SpinnerLoaderIcon";
import { CircleInfoIcon } from "@module/design/icons/outline/travel/sm/CircleInfoIcon";
import { CircleCheckIcon } from "@module/design/icons/outline/ui-layout/sm/CircleCheckIcon";
import { CircleXmarkIcon } from "@module/design/icons/outline/ui-layout/sm/CircleXmarkIcon";
import { TriangleWarningIcon } from "@module/design/icons/outline/ui-layout/sm/TriangleWarningIcon";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { cn } from "@module/design/utils/cn";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { createCallable } from "react-call";

const TOAST_DURATION = 4000;
/** Keep the toast mounted briefly so its exit animation can play. */
const UNMOUNTING_DELAY = 200;

type ToastStateType = "success" | "error" | "warning" | "info" | "loading";

type ToastOptionsType = {
  description?: string;
  duration?: number;
};

const stateStyles: Record<ToastStateType, { badge: string; glow: string }> = {
  success: {
    badge: "bg-success-500",
    glow: "shadow-[0_0_8px_theme(--color-success-500/0.4)]",
  },
  error: {
    badge: "bg-danger-500",
    glow: "shadow-[0_0_8px_theme(--color-danger-500/0.4)]",
  },
  warning: {
    badge: "bg-warning-500",
    glow: "shadow-[0_0_8px_theme(--color-warning-500/0.4)]",
  },
  info: {
    badge: "bg-info-500",
    glow: "shadow-[0_0_8px_theme(--color-info-500/0.4)]",
  },
  loading: {
    badge: "bg-primary-400",
    glow: "shadow-[0_0_8px_theme(--color-primary-400/0.4)]",
  },
};

const stateIcons: Record<ToastStateType, ReactNode> = {
  success: <CircleCheckIcon className="size-3.5 shrink-0" />,
  error: <CircleXmarkIcon className="size-3.5 shrink-0" />,
  warning: <TriangleWarningIcon className="size-3.5 shrink-0" />,
  info: <CircleInfoIcon className="size-3.5 shrink-0" />,
  loading: <SpinnerLoaderIcon className="size-3.5 shrink-0 animate-spin" />,
};

type ToastPropsType = {
  state: ToastStateType;
  title: string;
  description?: string;
  duration?: number;
};

/**
 * A single imperatively-rendered toast. Mount the Root once with `<Toaster />`,
 * then emit toasts via the {@link toaster} API. Each call resolves when the
 * toast is dismissed (auto-dismiss for non-loading states).
 */
const Toast = createCallable<ToastPropsType, void>(({ call, state, title, description, duration = TOAST_DURATION }) => {
  const styles = stateStyles[state];
  const [paused, setPaused] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  /** Time left before auto-dismiss, carried across pauses. */
  const remainingRef = useRef(duration);

  useEffect(() => {
    if (state === "loading" || paused) return;
    const remaining = remainingRef.current;
    const startedAt = performance.now();
    const timer = setTimeout(() => call.end(), remaining);
    const bar = barRef.current;
    if (bar) {
      // Jump to the remaining share without animating, then shrink to 0 over what is left.
      bar.style.transitionDuration = "0ms";
      bar.style.width = `${(remaining / duration) * 100}%`;
      void bar.offsetWidth;
      bar.style.transitionDuration = `${remaining}ms`;
      bar.style.width = "0%";
    }

    return () => {
      clearTimeout(timer);
      remainingRef.current = Math.max(0, remaining - (performance.now() - startedAt));
      if (!bar) return;
      // Freeze the bar where the transition currently is.
      const track = bar.parentElement?.getBoundingClientRect().width ?? 0;
      const filled = bar.getBoundingClientRect().width;
      bar.style.transitionDuration = "0ms";
      bar.style.width = track ? `${(filled / track) * 100}%` : "0%";
    };
  }, [state, duration, paused, call.end]);

  return (
    <div
      data-state={call.ended ? "closed" : "open"}
      className={cn(
        "fixed left-1/2 z-9999 flex -translate-x-1/2 justify-center transition-all duration-200",
        "data-[state=closed]:-translate-y-3 data-[state=closed]:opacity-0",
      )}
      style={{ top: `${1 + call.index * 5}rem` }}
    >
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="relative flex w-91 items-start gap-3 overflow-hidden rounded-lg bg-linear-to-br from-primary-950 via-primary-800 to-primary-950 p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <div
          className={cn(
            "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded text-light",
            styles.badge,
            styles.glow,
          )}
        >
          {stateIcons[state]}
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <p className="text-sm font-medium text-light">{title}</p>
          {description ? <p className="mt-0.5 text-xs text-light/50">{description}</p> : null}
        </div>
        <Button
          variant="ghost"
          size="icon-xs"
          className="shrink-0 mt-0.5 text-light/25 hover:text-light/70 hover:bg-light/10"
          onClick={() => call.end()}
        >
          <XmarkIcon className="size-3.5" />
        </Button>
        {state !== "loading" && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-light/4">
            <div ref={barRef} className={cn("h-full w-full transition-[width] ease-linear", styles.badge)} />
          </div>
        )}
      </div>
    </div>
  );
}, UNMOUNTING_DELAY);
Toast.displayName = "Toaster";

/** Handle returned by every toaster call — pass it to `toaster.dismiss(handle)`. */
export type ToastHandleType = Promise<void>;

const emit =
  (state: ToastStateType) =>
  (title: string, options: ToastOptionsType = {}): ToastHandleType =>
    Toast.call({ state, title, description: options.description, duration: options.duration });

type PromiseMessagesType<T> = {
  loading: string;
  success: string | ((data: T) => string);
  error: string | ((error: unknown) => string);
};

/**
 * Imperative toast API backed by `react-call`.
 *
 * Mount the Root once: `<Toaster />`. Then anywhere:
 *
 * ```tsx
 * toaster.success("Saved", { description: "Your changes are live." })
 * const handle = toaster.loading("Uploading…")
 * toaster.dismiss(handle)
 * await toaster.promise(api.save(), { loading: "Saving…", success: "Saved", error: "Failed" })
 * ```
 */
export const toaster = {
  success: emit("success"),
  error: emit("error"),
  info: emit("info"),
  warning: emit("warning"),
  loading: emit("loading"),
  /** Dismiss a specific toast (pass its handle) or all toasts (no argument). */
  dismiss: (handle?: ToastHandleType) => {
    if (handle) Toast.end(handle, undefined);
    else Toast.end();
  },
  /** Show a loading toast that resolves to success/error when the promise settles. */
  promise: async <T,>(promise: Promise<T>, messages: PromiseMessagesType<T>): Promise<T> => {
    const loading = Toast.call({ state: "loading", title: messages.loading });
    try {
      const data = await promise;
      Toast.end(loading, undefined);
      const title = typeof messages.success === "function" ? messages.success(data) : messages.success;
      Toast.call({ state: "success", title });
      return data;
    } catch (error) {
      Toast.end(loading, undefined);
      const title = typeof messages.error === "function" ? messages.error(error) : messages.error;
      Toast.call({ state: "error", title });
      throw error;
    }
  },
};

/**
 * Toast stack mounting point. Render once near the root of your app:
 *
 * ```tsx
 * <Toaster />
 * ```
 *
 * Toasts are emitted imperatively through the {@link toaster} API.
 */
export const Toaster = Toast;

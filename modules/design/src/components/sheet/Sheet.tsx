import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import type { ReactNode } from "react";
import { type Callable, createCallable, type PropsWithCall } from "react-call";
import { SheetContent } from "./SheetContent";
import { SheetDescription } from "./SheetDescription";
import { SheetHeader } from "./SheetHeader";
import { SheetTitle } from "./SheetTitle";

/** Milliseconds to keep the popup mounted so the close animation can play. */
const UNMOUNTING_DELAY = 300;

export type CreateSheetOptionsType<Response> = {
  className?: string;
  /** Edge the sheet slides in from. Defaults to `'right'`. */
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
  /** `'trap-focus'` keeps the page interactive; `true` (default) blocks it. */
  modal?: boolean | "trap-focus";
  /** Disable outside-click dismissal (Escape still closes). */
  disablePointerDismissal?: boolean;
  /** Value the promise resolves with when the sheet is dismissed (Escape / outside click). */
  dismissValue?: Response;
  unmountingDelay?: number;
};

/**
 * Build a typed, imperatively-callable sheet on top of `react-call` and base-ui.
 *
 * `render` receives the `call` context (`end`, `ended`, …) plus your props and
 * returns the sheet body. Resolve a value with `call.end(value)`; dismissing
 * the sheet resolves with `dismissValue`.
 *
 * ```tsx
 * const EditSheet = createSheet<{ user: User }, User | null>(
 *   ({ call, user }) => {
 *     const [draft, setDraft] = useState(user)
 *     return <Button onClick={() => call.end(draft)}>Save</Button>
 *   },
 *   { side: "right", dismissValue: null },
 * )
 *
 * // mount once: <EditSheet />
 * const updated = await EditSheet.call({ user })
 * ```
 */
export const createSheet = <Props = void, Response = void>(
  render: (props: PropsWithCall<Props, Response, Record<string, never>>) => ReactNode,
  options: CreateSheetOptionsType<Response> = {},
): Callable<Props, Response, Record<string, never>> => {
  const {
    className,
    side = "right",
    showCloseButton = true,
    modal = true,
    disablePointerDismissal = false,
    dismissValue,
    unmountingDelay = UNMOUNTING_DELAY,
  } = options;

  return createCallable<Props, Response>((props) => {
    const { call } = props;
    return (
      <SheetPrimitive.Root
        data-slot="sheet"
        open={!call.ended}
        modal={modal}
        disablePointerDismissal={disablePointerDismissal}
        onOpenChange={(open) => {
          if (!open) call.end(dismissValue as Response);
        }}
      >
        <SheetContent className={className} side={side} showCloseButton={showCloseButton}>
          {render(props)}
        </SheetContent>
      </SheetPrimitive.Root>
    );
  }, unmountingDelay);
};

export type SheetPropsType = {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Edge the sheet slides in from. Defaults to `'right'`. */
  side?: "top" | "right" | "bottom" | "left";
};

/**
 * Basic content sheet. Mount `<Sheet />` once, then:
 *
 * ```tsx
 * await Sheet.call({ title: "Settings", side: "left", children: <Form /> })
 * ```
 *
 * Resolves when the sheet is closed. Unlike {@link createSheet}, `side` is read
 * per call. For sheets that return a value or hold internal form state, use
 * {@link createSheet} instead.
 */
export const Sheet = createCallable<SheetPropsType, void>(
  ({ call, title, description, children, side = "right" }) => (
    <SheetPrimitive.Root
      data-slot="sheet"
      open={!call.ended}
      onOpenChange={(open) => {
        if (!open) call.end();
      }}
    >
      <SheetContent side={side}>
        {title || description ? (
          <SheetHeader>
            {title ? <SheetTitle>{title}</SheetTitle> : null}
            {description ? <SheetDescription>{description}</SheetDescription> : null}
          </SheetHeader>
        ) : null}
        {children}
      </SheetContent>
    </SheetPrimitive.Root>
  ),
  UNMOUNTING_DELAY,
);
Sheet.displayName = "Sheet";

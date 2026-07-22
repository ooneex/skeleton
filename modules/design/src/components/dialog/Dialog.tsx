import type { ReactNode } from "react";
import { type Callable, createCallable, type PropsWithCall } from "react-call";
import { DialogContent } from "./DialogContent";
import { DialogDescription } from "./DialogDescription";
import { DialogHeader } from "./DialogHeader";
import { DialogTitle } from "./DialogTitle";

/** Milliseconds to keep the popup mounted so the close animation can play. */
const UNMOUNTING_DELAY = 200;

export type CreateDialogOptionsType<Response> = {
  className?: string;
  showCloseButton?: boolean;
  /** `'trap-focus'` keeps the page interactive; `true` (default) blocks it. */
  modal?: boolean | "trap-focus";
  /** Disable outside-click dismissal (Escape still closes). */
  disablePointerDismissal?: boolean;
  /** Value the promise resolves with when the dialog is dismissed (Escape / outside click). */
  dismissValue?: Response;
  unmountingDelay?: number;
};

/**
 * Build a typed, imperatively-callable modal dialog on top of `react-call`.
 *
 * `render` receives the `call` context (`end`, `ended`, …) plus your props and
 * returns the dialog body. Resolve a value with `call.end(value)`; dismissing
 * the dialog resolves with `dismissValue`.
 *
 * ```tsx
 * const RenameDialog = createDialog<{ current: string }, string | null>(
 *   ({ call, current }) => {
 *     const [name, setName] = useState(current)
 *     return (
 *       <>
 *         <Input value={name} onChange={(e) => setName(e.target.value)} />
 *         <Button onClick={() => call.end(name)}>Save</Button>
 *       </>
 *     )
 *   },
 *   { dismissValue: null },
 * )
 *
 * // mount once: <RenameDialog />
 * const name = await RenameDialog.call({ current: "Untitled" })
 * ```
 */
export const createDialog = <Props = void, Response = void>(
  render: (props: PropsWithCall<Props, Response, Record<string, never>>) => ReactNode,
  options: CreateDialogOptionsType<Response> = {},
): Callable<Props, Response, Record<string, never>> => {
  const {
    className,
    showCloseButton = true,
    modal = true,
    disablePointerDismissal = false,
    dismissValue,
    unmountingDelay = UNMOUNTING_DELAY,
  } = options;

  return createCallable<Props, Response>((props) => {
    const { call } = props;
    return (
      <DialogContent
        open={!call.ended}
        modal={modal}
        disablePointerDismissal={disablePointerDismissal}
        showCloseButton={showCloseButton}
        className={className}
        onDismiss={() => call.end(dismissValue as Response)}
      >
        {render(props)}
      </DialogContent>
    );
  }, unmountingDelay);
};

export type DialogPropsType = {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/**
 * Basic content dialog. Mount `<Dialog />` once, then:
 *
 * ```tsx
 * await Dialog.call({ title: "Heads up", children: <p>Saved.</p> })
 * ```
 *
 * Resolves when the dialog is closed. For dialogs that return a value or hold
 * internal form state, use {@link createDialog} instead.
 */
export const Dialog = createDialog<DialogPropsType, void>(({ title, description, children }) => (
  <>
    {title || description ? (
      <DialogHeader>
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        {description ? <DialogDescription>{description}</DialogDescription> : null}
      </DialogHeader>
    ) : null}
    {children}
  </>
));
Dialog.displayName = "Dialog";

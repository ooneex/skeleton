import type { ReactNode } from "react";
import { type Callable, createCallable, type PropsWithCall } from "react-call";
import { DrawerContent } from "./DrawerContent";
import { DrawerDescription } from "./DrawerDescription";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerTitle } from "./DrawerTitle";

/** Milliseconds to keep the popup mounted so the close animation can play. */
const UNMOUNTING_DELAY = 300;

export type CreateDrawerOptionsType<Response> = {
  className?: string;
  /** Edge the drawer slides in from. Defaults to `'bottom'`. */
  side?: "top" | "right" | "bottom" | "left";
  /** Disable outside-click/Escape dismissal. */
  dismissible?: boolean;
  /** `false` keeps the page interactive behind the drawer. Defaults to `true`. */
  modal?: boolean;
  /** Value the promise resolves with when the drawer is dismissed (outside click / Escape). */
  dismissValue?: Response;
  unmountingDelay?: number;
};

/**
 * Build a typed, imperatively-callable drawer on top of `react-call`.
 *
 * `render` receives the `call` context (`end`, `ended`, …) plus your props and
 * returns the drawer body. Resolve a value with `call.end(value)`; dismissing
 * the drawer resolves with `dismissValue`.
 *
 * ```tsx
 * const FilterDrawer = createDrawer<{ initial: Filters }, Filters | null>(
 *   ({ call, initial }) => {
 *     const [filters, setFilters] = useState(initial)
 *     return <Button onClick={() => call.end(filters)}>Apply</Button>
 *   },
 *   { side: "right", dismissValue: null },
 * )
 *
 * // mount once: <FilterDrawer />
 * const filters = await FilterDrawer.call({ initial })
 * ```
 */
export const createDrawer = <Props = void, Response = void>(
  render: (props: PropsWithCall<Props, Response, Record<string, never>>) => ReactNode,
  options: CreateDrawerOptionsType<Response> = {},
): Callable<Props, Response, Record<string, never>> => {
  const {
    className,
    side = "bottom",
    dismissible = true,
    modal = true,
    dismissValue,
    unmountingDelay = UNMOUNTING_DELAY,
  } = options;

  return createCallable<Props, Response>((props) => {
    const { call } = props;
    return (
      <DrawerContent
        open={!call.ended}
        side={side}
        modal={modal}
        dismissible={dismissible}
        className={className}
        onDismiss={() => call.end(dismissValue as Response)}
      >
        {render(props)}
      </DrawerContent>
    );
  }, unmountingDelay);
};

export type DrawerPropsType = {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/**
 * Basic content drawer. Mount `<Drawer />` once, then:
 *
 * ```tsx
 * await Drawer.call({ title: "Details", children: <p>…</p> })
 * ```
 *
 * Resolves when the drawer is closed. For drawers that return a value or hold
 * internal form state, use {@link createDrawer} instead.
 */
export const Drawer = createDrawer<DrawerPropsType, void>(({ title, description, children }) => (
  <>
    {title || description ? (
      <DrawerHeader>
        {title ? <DrawerTitle>{title}</DrawerTitle> : null}
        {description ? <DrawerDescription>{description}</DrawerDescription> : null}
      </DrawerHeader>
    ) : null}
    {children}
  </>
));
Drawer.displayName = "Drawer";

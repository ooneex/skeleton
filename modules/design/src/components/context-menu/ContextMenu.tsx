import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { ChevronRightIcon } from "@module/design/icons/outline/arrows/sm/ChevronRightIcon";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { cn } from "@module/design/utils/cn";
import type { ReactNode } from "react";
import { createCallable } from "react-call";

/** Milliseconds to keep the popup mounted so the close animation can play. */
const UNMOUNTING_DELAY = 200;

/** Shared className for a clickable, focusable menu row. */
const ITEM_CLASS =
  "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 group/context-menu-item relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

/** Shared className for the popup surface (root + submenus). */
const POPUP_CLASS =
  "bg-dropdown text-dropdown-foreground min-w-40 rounded p-1 z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.4px] ring-ring-active border-none";

/** ClassName for checkbox/radio rows (indicator sits in the right gutter). */
const INDICATOR_ITEM_CLASS =
  "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

/**
 * A single entry in a context menu. Discriminated by `type` (defaults to
 * `"item"`). Values resolved by the menu are returned from {@link openContextMenu}.
 */
export type ContextMenuItemType =
  | {
      type?: "item";
      /** Value resolved by `ContextMenu.call` when this row is selected. */
      value: string;
      label: ReactNode;
      icon?: ReactNode;
      shortcut?: ReactNode;
      disabled?: boolean;
      /** Renders the row in the destructive color scheme. */
      destructive?: boolean;
    }
  | { type: "separator" }
  | { type: "label"; label: ReactNode }
  | {
      type: "checkbox";
      value: string;
      label: ReactNode;
      checked?: boolean;
      disabled?: boolean;
    }
  | {
      type: "radio";
      value: string;
      label: ReactNode;
      checked?: boolean;
      disabled?: boolean;
    }
  | {
      type: "sub";
      label: ReactNode;
      icon?: ReactNode;
      disabled?: boolean;
      items: ContextMenuItemType[];
    };

export type ContextMenuPropsType = {
  /** Viewport X coordinate of the triggering pointer (e.g. `event.clientX`). */
  x: number;
  /** Viewport Y coordinate of the triggering pointer (e.g. `event.clientY`). */
  y: number;
  /** Flat list of rows to render. */
  items: ContextMenuItemType[];
};

/**
 * Builds a Floating-UI virtual element anchored at the pointer coordinates.
 * The context menu has no DOM trigger, so the popup is positioned against a
 * zero-size rectangle at `{ x, y }`.
 */
const virtualAnchor = (x: number, y: number) => ({
  getBoundingClientRect: () => ({
    x,
    y,
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
  }),
});

/** Renders one row of the menu, recursing into submenus. */
const renderItem = (item: ContextMenuItemType, index: number, end: (value: string | null) => void): ReactNode => {
  switch (item.type) {
    case "separator":
      return (
        <ContextMenuPrimitive.Separator
          key={`separator-${index}`}
          data-slot="context-menu-separator"
          className="bg-ring -mx-1 my-1 h-[0.4px]"
        />
      );

    case "label":
      return (
        <ContextMenuPrimitive.Group key={`label-${index}`}>
          <ContextMenuPrimitive.GroupLabel
            data-slot="context-menu-label"
            className="text-muted-foreground px-2 py-1.5 text-xs font-medium"
          >
            {item.label}
          </ContextMenuPrimitive.GroupLabel>
        </ContextMenuPrimitive.Group>
      );

    case "checkbox":
      return (
        <ContextMenuPrimitive.CheckboxItem
          key={item.value}
          data-slot="context-menu-checkbox-item"
          className={INDICATOR_ITEM_CLASS}
          checked={item.checked}
          disabled={item.disabled}
          closeOnClick
          onClick={() => end(item.value)}
        >
          <span
            className="pointer-events-none absolute right-2 flex items-center justify-center"
            data-slot="context-menu-checkbox-item-indicator"
          >
            <ContextMenuPrimitive.CheckboxItemIndicator>
              <CheckIcon className="size-3" />
            </ContextMenuPrimitive.CheckboxItemIndicator>
          </span>
          {item.label}
        </ContextMenuPrimitive.CheckboxItem>
      );

    case "radio":
      // `Menu.RadioItem` must live inside a `Menu.RadioGroup`. Each row gets its
      // own single-option group whose selected value reflects the `checked` flag.
      return (
        <ContextMenuPrimitive.RadioGroup key={item.value} value={item.checked ? item.value : undefined}>
          <ContextMenuPrimitive.RadioItem
            data-slot="context-menu-radio-item"
            className={INDICATOR_ITEM_CLASS}
            value={item.value}
            disabled={item.disabled}
            closeOnClick
            onClick={() => end(item.value)}
          >
            <span
              className="pointer-events-none absolute right-2 flex items-center justify-center"
              data-slot="context-menu-radio-item-indicator"
            >
              <ContextMenuPrimitive.RadioItemIndicator>
                <svg className="size-2 fill-current" viewBox="0 0 8 8" aria-hidden="true">
                  <circle cx="4" cy="4" r="2.5" />
                </svg>
              </ContextMenuPrimitive.RadioItemIndicator>
            </span>
            {item.label}
          </ContextMenuPrimitive.RadioItem>
        </ContextMenuPrimitive.RadioGroup>
      );

    case "sub":
      return (
        <ContextMenuPrimitive.SubmenuRoot key={`sub-${index}`}>
          <ContextMenuPrimitive.SubmenuTrigger
            data-slot="context-menu-sub-trigger"
            className={cn(ITEM_CLASS, "data-open:bg-accent data-open:text-accent-foreground")}
            disabled={item.disabled}
          >
            {item.icon}
            {item.label}
            <ChevronRightIcon className="ml-auto size-3" />
          </ContextMenuPrimitive.SubmenuTrigger>
          <ContextMenuPrimitive.Portal>
            <ContextMenuPrimitive.Positioner
              className="isolate z-50 outline-none"
              align="start"
              side="right"
              sideOffset={0}
            >
              <ContextMenuPrimitive.Popup data-slot="context-menu-sub-content" className={POPUP_CLASS}>
                {item.items.map((child, childIndex) => renderItem(child, childIndex, end))}
              </ContextMenuPrimitive.Popup>
            </ContextMenuPrimitive.Positioner>
          </ContextMenuPrimitive.Portal>
        </ContextMenuPrimitive.SubmenuRoot>
      );

    default:
      return (
        <ContextMenuPrimitive.Item
          key={item.value}
          data-slot="context-menu-item"
          data-variant={item.destructive ? "destructive" : "default"}
          className={ITEM_CLASS}
          disabled={item.disabled}
          closeOnClick
          onClick={() => end(item.value)}
        >
          {item.icon}
          {item.label}
          {item.shortcut ? (
            <span data-slot="context-menu-shortcut" className="text-muted-foreground ml-auto text-xs tracking-widest">
              {item.shortcut}
            </span>
          ) : null}
        </ContextMenuPrimitive.Item>
      );
  }
};

/**
 * Imperative context menu built on `react-call` and the `@base-ui/react`
 * ContextMenu primitive. The menu has no DOM trigger; it is anchored to a
 * virtual element placed at the pointer coordinates passed into the call.
 *
 * Mount the Root once near the top of your app:
 *
 * ```tsx
 * <ContextMenu />
 * ```
 *
 * Then await a selection from an `onContextMenu` handler:
 *
 * ```tsx
 * const onContextMenu = async (event: React.MouseEvent) => {
 *   const value = await openContextMenu(event, [
 *     { value: "copy", label: "Copy", shortcut: "⌘C" },
 *     { type: "separator" },
 *     { value: "delete", label: "Delete", destructive: true },
 *   ]);
 *   if (value) handle(value);
 * };
 * ```
 *
 * The promise resolves with the selected item's `value`, or `null` when the
 * menu is dismissed (Escape, outside click, or programmatic close).
 */
export const ContextMenu = createCallable<ContextMenuPropsType, string | null>(({ call, x, y, items }) => {
  return (
    <ContextMenuPrimitive.Root
      open={!call.ended}
      onOpenChange={(open, eventDetails) => {
        // `sibling-open` is fired on the root when one of its submenus opens —
        // an internal signal, not a dismissal — so ignore it. Otherwise hovering
        // a submenu trigger would tear the whole menu down.
        if (!open && eventDetails.reason !== "sibling-open") {
          call.end(null);
        }
      }}
    >
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Positioner
          className="isolate z-50 outline-none"
          anchor={virtualAnchor(x, y)}
          align="start"
          side="bottom"
          sideOffset={2}
        >
          <ContextMenuPrimitive.Popup data-slot="context-menu-content" className={POPUP_CLASS}>
            {items.map((item, index) => renderItem(item, index, call.end))}
          </ContextMenuPrimitive.Popup>
        </ContextMenuPrimitive.Positioner>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
}, UNMOUNTING_DELAY);
ContextMenu.displayName = "ContextMenu";

/** Anything carrying viewport pointer coordinates (a native or React mouse event). */
type PointerLikeType = { clientX: number; clientY: number; preventDefault?: () => void };

/**
 * Opens the context menu at the pointer location and awaits a selection.
 *
 * Designed to be called straight from an `onContextMenu` handler: it calls
 * `preventDefault()` to suppress the native browser menu, then resolves with the
 * selected item's `value` or `null` when dismissed.
 *
 * ```tsx
 * onContextMenu={(e) => openContextMenu(e, items).then(handleSelection)}
 * ```
 */
export const openContextMenu = (event: PointerLikeType, items: ContextMenuItemType[]) => {
  event.preventDefault?.();
  return ContextMenu.call({ x: event.clientX, y: event.clientY, items });
};

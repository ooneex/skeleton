import { type RefObject, useEffect, useRef } from "react";

type UseDialogBehaviorOptionsType = {
  open: boolean;
  /** `true` locks scroll and blocks the page; `'trap-focus'` only traps focus; `false` does neither. */
  modal: boolean | "trap-focus";
  popupRef: RefObject<HTMLDivElement | null>;
  onDismiss: () => void;
};

/** Open dialogs, oldest first — only the topmost one reacts to Escape. */
const dialogStack: object[] = [];

let scrollLockCount = 0;
let previousBodyOverflow = "";

const lockBodyScroll = () => {
  scrollLockCount += 1;
  if (scrollLockCount === 1) {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};

const unlockBodyScroll = () => {
  scrollLockCount -= 1;
  if (scrollLockCount === 0) {
    document.body.style.overflow = previousBodyOverflow;
  }
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

/**
 * Escape-to-dismiss, body scroll lock and focus management for a dialog popup.
 * Escape only closes the topmost open dialog; nested popups that handle
 * Escape themselves (and call `preventDefault`) are left alone.
 */
export const useDialogBehavior = ({ open, modal, popupRef, onDismiss }: UseDialogBehaviorOptionsType) => {
  const onDismissRef = useRef(onDismiss);
  useEffect(() => {
    onDismissRef.current = onDismiss;
  });

  useEffect(() => {
    if (!open) return;
    const token = {};
    dialogStack.push(token);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      if (dialogStack[dialogStack.length - 1] !== token) return;
      event.preventDefault();
      onDismissRef.current();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      dialogStack.splice(dialogStack.indexOf(token), 1);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || modal !== true) return;
    lockBodyScroll();
    return unlockBodyScroll;
  }, [open, modal]);

  useEffect(() => {
    if (!open || modal === false) return;
    const popup = popupRef.current;
    if (!popup) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const initialFocus = popup.querySelector<HTMLElement>("[autofocus], [data-autofocus]");
    (initialFocus ?? popup).focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = Array.from(popup.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) {
        event.preventDefault();
        popup.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      const active = document.activeElement;
      if (event.shiftKey) {
        if (active === first || active === popup) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    popup.addEventListener("keydown", handleKeyDown);
    return () => {
      popup.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
    };
  }, [open, modal, popupRef]);
};

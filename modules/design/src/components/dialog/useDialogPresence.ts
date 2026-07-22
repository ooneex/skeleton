import { useLayoutEffect } from "react";
import { useDialogContext } from "./DialogContext";

/**
 * Registers a title's presence with the surrounding dialog context and returns
 * the context-provided `titleId` to wire up `aria-labelledby`. Shared by the
 * title primitives of dialog, alert-dialog, drawer, and popover.
 */
export const useRegisterDialogTitle = (): string | undefined => {
  const context = useDialogContext();
  const setHasTitle = context?.setHasTitle;
  useLayoutEffect(() => {
    if (!setHasTitle) return;
    setHasTitle(true);
    return () => setHasTitle(false);
  }, [setHasTitle]);
  return context?.titleId;
};

/**
 * Registers a description's presence with the surrounding dialog context and
 * returns the context-provided `descriptionId` to wire up `aria-describedby`.
 */
export const useRegisterDialogDescription = (): string | undefined => {
  const context = useDialogContext();
  const setHasDescription = context?.setHasDescription;
  useLayoutEffect(() => {
    if (!setHasDescription) return;
    setHasDescription(true);
    return () => setHasDescription(false);
  }, [setHasDescription]);
  return context?.descriptionId;
};

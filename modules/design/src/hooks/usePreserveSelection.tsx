import { useCallback } from "react";

/**
 * Returns a ref callback that stops a mouse press on the element from collapsing
 * the document selection, so editor popovers can act on the text still selected
 * in the editable area. The listener is attached natively because the behaviour
 * is pointer-only and must not turn its host into an interactive element.
 */
const usePreserveSelection = <T extends HTMLElement>() => {
  return useCallback((node: T | null) => {
    if (!node) {
      return;
    }

    const preventSelectionLoss = (event: MouseEvent) => event.preventDefault();
    node.addEventListener("mousedown", preventSelectionLoss);

    return () => node.removeEventListener("mousedown", preventSelectionLoss);
  }, []);
};

export default usePreserveSelection;

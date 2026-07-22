import type { Ref, RefObject } from "react";

/** Merge several refs into one callback ref (for the `render` prop pattern). */
export const composeRefs = <T>(...refs: Array<Ref<T> | undefined | null>) => {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as RefObject<T | null>).current = node;
    }
  };
};

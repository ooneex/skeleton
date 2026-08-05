import { useCallback, useState } from "react";

/**
 * `useState` that survives a reload. Used for the settings a reader sets once
 * and expects to still be there tomorrow — the API origin, a pasted token —
 * never for anything the URL already carries.
 *
 * Storage may be unavailable (private mode, disabled cookies), so every access
 * degrades to plain in-memory state rather than throwing.
 */
export const usePersistentState = (key: string, initial: string): [string, (value: string) => void] => {
  const [value, setValue] = useState<string>(() => {
    try {
      return window.localStorage.getItem(key) ?? initial;
    } catch {
      return initial;
    }
  });

  const update = useCallback(
    (next: string): void => {
      setValue(next);
      try {
        window.localStorage.setItem(key, next);
      } catch {
        // Nothing to recover: the value still lives in state for this session.
      }
    },
    [key],
  );

  return [value, update];
};

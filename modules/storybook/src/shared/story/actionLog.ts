export type ActionEntryType = {
  id: number;
  /** Name of the callback prop that fired, when known. */
  name: string;
  /** Arguments the callback was invoked with. */
  args: readonly unknown[];
  /** Epoch milliseconds the action was recorded. */
  time: number;
};

let counter = 0;
let entries: readonly ActionEntryType[] = [];
const listeners = new Set<() => void>();

const emit = (): void => {
  for (const listener of listeners) {
    listener();
  }
};

/** Record a fired callback so preview panels (e.g. the Logs tab) can surface it. */
export const recordAction = (name: string, args: readonly unknown[]): void => {
  counter += 1;
  entries = [{ id: counter, name, args, time: Date.now() }, ...entries];
  emit();
};

export const clearActions = (): void => {
  if (entries.length === 0) {
    return;
  }
  entries = [];
  emit();
};

/** Immutable snapshot — safe to use as a `useSyncExternalStore` getter. */
export const getActions = (): readonly ActionEntryType[] => entries;

export const subscribeActions = (listener: () => void): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

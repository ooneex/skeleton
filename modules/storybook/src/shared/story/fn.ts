import { recordAction } from "./actionLog";

export type MockFnType = ((...args: readonly unknown[]) => void) & {
  calls: unknown[][];
  reset: () => void;
};

/**
 * Lightweight action spy — a drop-in for Storybook's `fn()`.
 * Records every call and echoes it to the console so interactions are observable.
 */
export const fn = (): MockFnType => {
  const calls: unknown[][] = [];

  const base = (...args: readonly unknown[]): void => {
    calls.push([...args]);
    recordAction("fn", args);
    // biome-ignore lint/suspicious/noConsole: action logging is the intended output of a preview spy
    console.info("[action]", ...args);
  };

  return Object.assign(base, {
    calls,
    reset: (): void => {
      calls.length = 0;
    },
  });
};

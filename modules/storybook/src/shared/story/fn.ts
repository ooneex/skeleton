import { recordAction } from "./actionLog";
import { formatArg } from "./formatArg";
import { storyLogger } from "./logger";

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
    storyLogger.info("[action]", { args: args.map(formatArg).join(", ") });
  };

  return Object.assign(base, {
    calls,
    reset: (): void => {
      calls.length = 0;
    },
  });
};

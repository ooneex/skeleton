/** Run several event handlers in order, skipping undefined ones. */
export const chainHandlers = <Args extends unknown[]>(...handlers: Array<((...args: Args) => void) | undefined>) => {
  return (...args: Args) => {
    for (const handler of handlers) handler?.(...args);
  };
};

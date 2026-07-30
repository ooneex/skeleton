import type { ILogger } from "@talosjs/logger";

/**
 * Browser-safe `ILogger` for the story preview. `@talosjs/logger`'s own implementations
 * (`TerminalLogger`, `BetterstackLogger`) depend on `process`/`Bun` and a DI container that
 * don't exist in a Vite-bundled browser app, so this satisfies the same contract directly
 * against the browser's console — the one destination a preview runtime actually has — with
 * every call carrying an explicit level.
 */
const DESTINATION = globalThis.console;

const write = (
  level: "error" | "warn" | "info" | "debug" | "log",
  message: string | { message: string },
  data?: unknown,
): void => {
  const text = typeof message === "string" ? message : message.message;
  DESTINATION[level](`[story:${level}]`, text, data);
};

export const storyLogger: ILogger = {
  init: () => {},
  error: (message, data) => write("error", message, data),
  warn: (message, data) => write("warn", message, data),
  info: (message, data) => write("info", message, data),
  debug: (message, data) => write("debug", message, data),
  log: (message, data) => write("log", message, data),
  success: (message, data) => write("info", message, data),
};

import { buildEndpoint } from "./request";
import type { RouteMetaType } from "./types";

/** One line of the exchange log — what was sent, what came back, what happened. */
export type SocketFrameType = {
  direction: "sent" | "received" | "system";
  /** Wall-clock time the frame was logged, `HH:MM:SS`. */
  at: string;
  data: unknown;
};

export type SocketUrlInputType = {
  baseURL: string;
  meta: RouteMetaType;
  params: Record<string, string>;
  queries: Record<string, string>;
  /** Forwarded as a query parameter — a browser cannot set a header on a WebSocket. */
  bearerToken?: string;
};

/**
 * The `ws://` (or `wss://`) URL a socket route is reached at.
 *
 * The token travels as a query parameter because the browser's `WebSocket`
 * constructor accepts no headers — that is what `@talosjs/socket-client` reads
 * too. It is worth knowing that URLs leak into proxy logs, browser history and
 * APM traces, so a socket token should be short-lived and query strings should
 * be scrubbed in the log pipeline.
 */
export const socketUrl = (input: SocketUrlInputType): string => {
  const queries = { ...input.queries };
  if (input.bearerToken) {
    queries.bearerToken = input.bearerToken;
  }

  const origin = input.baseURL
    .replace(/\/$/, "")
    .replace(/^http:/, "ws:")
    .replace(/^https:/, "wss:");

  return `${origin}${buildEndpoint(input.meta.path, input.params, queries)}`;
};

/** The clock stamp a frame is logged under. */
export const frameStamp = (at: Date): string => at.toTimeString().slice(0, 8);

/**
 * The `queries` a socket message must carry.
 *
 * The server overwrites `context.queries` from every message, and the auth
 * middleware runs per message reading `context.queries.bearerToken` — so a
 * message that omits the token undoes the one the connection URL carried, and
 * the route answers as if nobody were signed in.
 */
export const socketMessageQueries = (queries: Record<string, string>, bearerToken?: string): Record<string, string> =>
  bearerToken ? { ...queries, bearerToken } : { ...queries };

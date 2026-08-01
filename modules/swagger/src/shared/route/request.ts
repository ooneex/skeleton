import type { MethodType, RouteMetaType, TransportType } from "./types";

/** Everything the try-it form collected, ready to be put on the wire. */
export type RequestInputType = {
  /** Backend origin, e.g. `http://localhost:3000`. No trailing slash. */
  baseURL: string;
  meta: RouteMetaType;
  params: Record<string, string>;
  queries: Record<string, string>;
  headers: Record<string, string>;
  /** Raw JSON text straight from the editor — sent as-is once it parses. */
  payload?: string;
  /** Forwarded as `Authorization: Bearer …` when present. */
  bearerToken?: string;
  signal?: AbortSignal;
  /** Called per chunk for `stream`, per event for `sse`. Never called for `http`. */
  onChunk?: (chunk: unknown) => void;
};

/** What came back, in the shape the response panel renders. */
export type RequestResultType = {
  status: number;
  statusText: string;
  /** Wall-clock time from send to last byte, in milliseconds. */
  duration: number;
  headers: Record<string, string>;
  /** Parsed JSON when the body is JSON, the raw text otherwise. */
  body: unknown;
  raw: string;
  ok: boolean;
};

/** A request the explorer refused to send, with the reason a reader can act on. */
export type RequestErrorType = {
  message: string;
  duration: number;
};

/** The verbs that carry a request body. */
const BODY_METHODS: readonly MethodType[] = ["post", "put", "patch"];

export const hasBody = (method: MethodType): boolean => BODY_METHODS.includes(method);

export const transportOf = (meta: RouteMetaType): TransportType =>
  meta.transport ?? (meta.method === "socket" ? "socket" : "http");

/** Whether the route needs a bearer token before it will answer. */
export const isProtected = (meta: RouteMetaType): boolean => meta.roles.length > 0;

/**
 * Substitute the `:param` segments and append the non-empty queries. Values are
 * encoded, so a path parameter carrying a slash cannot invent a new segment.
 */
export const buildEndpoint = (
  template: string,
  params: Record<string, string> = {},
  queries: Record<string, string> = {},
): string => {
  const path = template.replace(/:(\w+)/g, (_, key: string) => encodeURIComponent(params[key] ?? ""));
  const search = new URLSearchParams(
    Object.entries(queries).filter(([, value]) => value !== undefined && value !== ""),
  ).toString();
  return search ? `${path}?${search}` : path;
};

export const buildUrl = (input: Pick<RequestInputType, "baseURL" | "meta" | "params" | "queries">): string =>
  `${input.baseURL.replace(/\/$/, "")}${buildEndpoint(input.meta.path, input.params, input.queries)}`;

/** The headers the request travels with, ours merged under the route's own. */
export const buildHeaders = (input: RequestInputType): Record<string, string> => {
  const headers: Record<string, string> = { ...input.headers };
  if (hasBody(input.meta.method) && input.payload) {
    headers["Content-Type"] = "application/json";
  }
  if (transportOf(input.meta) === "sse") {
    headers.Accept = "text/event-stream";
  }
  if (input.bearerToken) {
    headers.Authorization = `Bearer ${input.bearerToken}`;
  }
  return headers;
};

/** Parse a body as JSON, falling back to the raw text when it isn't. */
const readBody = (raw: string): unknown => {
  if (raw.trim() === "") {
    return undefined;
  }
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    return raw;
  }
};

const collectHeaders = (headers: Headers): Record<string, string> => {
  const collected: Record<string, string> = {};
  headers.forEach((value, key) => {
    collected[key] = value;
  });
  return collected;
};

/**
 * Read a newline-delimited stream, handing each line to `onChunk` as it lands
 * and keeping the whole body for the response panel.
 */
const readStream = async (
  response: Response,
  onChunk: ((chunk: unknown) => void) | undefined,
  signal: AbortSignal | undefined,
): Promise<string> => {
  const reader = response.body?.getReader();
  if (!reader) {
    return "";
  }

  const decoder = new TextDecoder();
  let buffer = "";
  let raw = "";

  for (;;) {
    if (signal?.aborted) {
      await reader.cancel();
      break;
    }
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const text = decoder.decode(value, { stream: true });
    raw += text;
    buffer += text;

    let newline = buffer.indexOf("\n");
    while (newline !== -1) {
      const line = buffer.slice(0, newline).trim();
      buffer = buffer.slice(newline + 1);
      if (line !== "") {
        onChunk?.(readBody(line));
      }
      newline = buffer.indexOf("\n");
    }
  }

  return raw;
};

/**
 * Read a `text/event-stream`, delivering one parsed `data:` payload per frame.
 * Comment and keep-alive frames carry no `data:` line and are skipped.
 */
const readEventStream = async (
  response: Response,
  onChunk: ((chunk: unknown) => void) | undefined,
  signal: AbortSignal | undefined,
): Promise<string> => {
  const reader = response.body?.getReader();
  if (!reader) {
    return "";
  }

  const decoder = new TextDecoder();
  let buffer = "";
  let raw = "";

  for (;;) {
    if (signal?.aborted) {
      await reader.cancel();
      break;
    }
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const text = decoder.decode(value, { stream: true });
    raw += text;
    buffer += text;

    let boundary = buffer.indexOf("\n\n");
    while (boundary !== -1) {
      const frame = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      const data = frame
        .split("\n")
        .filter((line) => line.startsWith("data:"))
        .map((line) => line.slice(5).replace(/^ /, ""))
        .join("\n");
      if (data !== "") {
        onChunk?.(readBody(data));
      }
      boundary = buffer.indexOf("\n\n");
    }
  }

  return raw;
};

/**
 * Run one documented route against a live backend and report what came back.
 *
 * Rejects with a `RequestErrorType` when the request never reached a status —
 * an unparseable payload, a CORS refusal, a dead origin — so the panel can tell
 * "the API said no" apart from "the call never happened".
 */
export const sendRequest = async (input: RequestInputType): Promise<RequestResultType> => {
  const started = performance.now();
  const transport = transportOf(input.meta);

  if (transport === "socket") {
    throw { message: "A socket route is documented here, not executed.", duration: 0 } as RequestErrorType;
  }

  const body = hasBody(input.meta.method) && input.payload ? input.payload : undefined;
  if (body) {
    try {
      JSON.parse(body);
    } catch {
      throw { message: "The payload is not valid JSON.", duration: 0 } as RequestErrorType;
    }
  }

  try {
    const response = await fetch(buildUrl(input), {
      method: input.meta.method.toUpperCase(),
      headers: buildHeaders(input),
      body,
      signal: input.signal,
    });

    let raw: string;
    if (transport === "stream") {
      raw = await readStream(response, input.onChunk, input.signal);
    } else if (transport === "sse") {
      raw = await readEventStream(response, input.onChunk, input.signal);
    } else {
      raw = await response.text();
    }

    return {
      status: response.status,
      statusText: response.statusText,
      duration: Math.round(performance.now() - started),
      headers: collectHeaders(response.headers),
      body: readBody(raw),
      raw,
      ok: response.ok,
    };
  } catch (error) {
    throw {
      message: error instanceof Error ? error.message : "The request failed before reaching the API.",
      duration: Math.round(performance.now() - started),
    } as RequestErrorType;
  }
};

const shellQuote = (value: string): string => `'${value.replace(/'/g, `'\\''`)}'`;

/** The same request as a `curl` line, so it can be replayed outside the browser. */
export const toCurl = (input: RequestInputType): string => {
  const parts = [`curl -X ${input.meta.method.toUpperCase()} ${shellQuote(buildUrl(input))}`];
  for (const [name, value] of Object.entries(buildHeaders(input))) {
    parts.push(`  -H ${shellQuote(`${name}: ${value}`)}`);
  }
  if (hasBody(input.meta.method) && input.payload) {
    parts.push(`  -d ${shellQuote(input.payload)}`);
  }
  return parts.join(" \\\n");
};

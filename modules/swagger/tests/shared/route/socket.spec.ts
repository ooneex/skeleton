import { describe, expect, test } from "bun:test";
import { frameStamp, socketMessageQueries, socketUrl } from "../../../src/shared/route/socket";
import type { RouteMetaType } from "../../../src/shared/route/types";

const meta = (overrides: Partial<RouteMetaType> = {}): RouteMetaType => ({
  title: "Activity feed",
  key: "app.feed.stream",
  version: 1,
  method: "socket",
  path: "/api/v1/feed",
  roles: [],
  ...overrides,
});

const input = (overrides: Record<string, unknown> = {}) => ({
  baseURL: "http://localhost:8030",
  meta: meta(),
  params: {},
  queries: {},
  ...overrides,
});

describe("socketUrl", () => {
  test("should upgrade http to ws", () => {
    expect(socketUrl(input())).toBe("ws://localhost:8030/api/v1/feed");
  });

  test("should upgrade https to wss", () => {
    expect(socketUrl(input({ baseURL: "https://api.test" }))).toBe("wss://api.test/api/v1/feed");
  });

  test("should not double the slash between origin and path", () => {
    expect(socketUrl(input({ baseURL: "http://localhost:8030/" }))).toBe("ws://localhost:8030/api/v1/feed");
  });

  test("should substitute path parameters", () => {
    expect(socketUrl(input({ meta: meta({ path: "/api/v1/feed/:room" }), params: { room: "42" } }))).toBe(
      "ws://localhost:8030/api/v1/feed/42",
    );
  });

  test("should carry the queries", () => {
    expect(socketUrl(input({ queries: { since: "10" } }))).toBe("ws://localhost:8030/api/v1/feed?since=10");
  });

  test("should append the token as a query parameter", () => {
    // A browser cannot set a header on a WebSocket, so the token has nowhere
    // else to go — which is exactly why it must be short-lived.
    expect(socketUrl(input({ bearerToken: "abc" }))).toBe("ws://localhost:8030/api/v1/feed?bearerToken=abc");
  });

  test("should leave the url untouched when there is no token", () => {
    expect(socketUrl(input({ bearerToken: undefined }))).not.toContain("bearerToken");
  });

  test("should keep a ws origin as it stands", () => {
    expect(socketUrl(input({ baseURL: "ws://localhost:8030" }))).toBe("ws://localhost:8030/api/v1/feed");
  });
});

describe("frameStamp", () => {
  test("should render the wall clock as HH:MM:SS", () => {
    expect(frameStamp(new Date(2026, 0, 1, 9, 5, 3))).toBe("09:05:03");
  });
});

describe("socketMessageQueries", () => {
  test("should carry the token in every message", () => {
    // The server overwrites `context.queries` from each message, and the auth
    // middleware reads the token from there — omitting it undoes the URL.
    expect(socketMessageQueries({ since: "10" }, "abc")).toEqual({ since: "10", bearerToken: "abc" });
  });

  test("should leave the queries alone when there is no token", () => {
    expect(socketMessageQueries({ since: "10" })).toEqual({ since: "10" });
  });

  test("should still be an object when there is nothing to send", () => {
    // A route declaring `queries:` rejects a message that omits the key.
    expect(socketMessageQueries({})).toEqual({});
  });
});

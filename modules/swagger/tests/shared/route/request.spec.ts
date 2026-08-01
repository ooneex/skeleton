import { describe, expect, test } from "bun:test";
import {
  buildEndpoint,
  buildHeaders,
  buildUrl,
  hasBody,
  isProtected,
  toCurl,
  transportOf,
} from "../../../src/shared/route/request";
import type { RouteMetaType } from "../../../src/shared/route/types";

const meta = (overrides: Partial<RouteMetaType> = {}): RouteMetaType => ({
  title: "Grant entitlement",
  group: "Entitlement",
  key: "entitlement.grant",
  version: 1,
  method: "post",
  path: "/api/v1/entitlement/:userId/grants",
  roles: ["ROLE_ADMIN"],
  ...overrides,
});

const input = (overrides: Record<string, unknown> = {}) => ({
  baseURL: "http://localhost:3000",
  meta: meta(),
  params: { userId: "42" },
  queries: {},
  headers: {},
  ...overrides,
});

describe("buildEndpoint", () => {
  test("should substitute every path parameter", () => {
    expect(buildEndpoint("/api/v1/users/:id/posts/:postId", { id: "7", postId: "9" })).toBe("/api/v1/users/7/posts/9");
  });

  test("should encode a parameter so it cannot invent a new segment", () => {
    expect(buildEndpoint("/api/v1/files/:name", { name: "a/b" })).toBe("/api/v1/files/a%2Fb");
  });

  test("should substitute an empty string for a parameter that was left blank", () => {
    expect(buildEndpoint("/api/v1/users/:id", {})).toBe("/api/v1/users/");
  });

  test("should append the non-empty queries only", () => {
    expect(buildEndpoint("/api/v1/users", {}, { page: "2", search: "" })).toBe("/api/v1/users?page=2");
  });

  test("should leave the path untouched when every query is empty", () => {
    expect(buildEndpoint("/api/v1/users", {}, { search: "" })).toBe("/api/v1/users");
  });
});

describe("buildUrl", () => {
  test("should join the origin and the endpoint without doubling the slash", () => {
    expect(buildUrl(input({ baseURL: "http://localhost:3000/" }))).toBe(
      "http://localhost:3000/api/v1/entitlement/42/grants",
    );
  });
});

describe("hasBody", () => {
  test("should be true for the verbs that carry one", () => {
    expect(["post", "put", "patch"].every((method) => hasBody(method as RouteMetaType["method"]))).toBe(true);
  });

  test("should be false for the verbs that do not", () => {
    expect(
      ["get", "delete", "head", "options", "socket"].some((method) => hasBody(method as RouteMetaType["method"])),
    ).toBe(false);
  });
});

describe("isProtected", () => {
  test("should be true when the route declares roles", () => {
    expect(isProtected(meta())).toBe(true);
  });

  test("should be false for a public route", () => {
    expect(isProtected(meta({ roles: [] }))).toBe(false);
  });
});

describe("transportOf", () => {
  test("should default an http route to http", () => {
    expect(transportOf(meta())).toBe("http");
  });

  test("should infer socket from the method when no transport is declared", () => {
    expect(transportOf(meta({ method: "socket" }))).toBe("socket");
  });

  test("should honour a declared transport over the method", () => {
    expect(transportOf(meta({ method: "get", transport: "sse" }))).toBe("sse");
  });
});

describe("buildHeaders", () => {
  test("should add a json content type when a body travels", () => {
    expect(buildHeaders(input({ payload: "{}" }))["Content-Type"]).toBe("application/json");
  });

  test("should not add a content type when there is no body", () => {
    expect(buildHeaders(input())["Content-Type"]).toBeUndefined();
  });

  test("should ask for an event stream on an sse route", () => {
    expect(buildHeaders(input({ meta: meta({ method: "get", transport: "sse" }) })).Accept).toBe("text/event-stream");
  });

  test("should forward the bearer token", () => {
    expect(buildHeaders(input({ bearerToken: "abc" })).Authorization).toBe("Bearer abc");
  });

  test("should keep the route's own headers", () => {
    expect(buildHeaders(input({ headers: { "X-Tenant": "acme" } }))["X-Tenant"]).toBe("acme");
  });
});

describe("toCurl", () => {
  test("should spell the verb, the url, the headers and the body", () => {
    const command = toCurl(input({ payload: '{"plan":"pro"}', bearerToken: "abc" }));

    expect(command).toContain("curl -X POST 'http://localhost:3000/api/v1/entitlement/42/grants'");
    expect(command).toContain("-H 'Authorization: Bearer abc'");
    expect(command).toContain(`-d '{"plan":"pro"}'`);
  });

  test("should escape a single quote so the line stays one shell argument", () => {
    expect(toCurl(input({ payload: `{"name":"o'brien"}` }))).toContain(`o'\\''brien`);
  });

  test("should omit the body on a verb that carries none", () => {
    expect(toCurl(input({ meta: meta({ method: "get" }), payload: "{}" }))).not.toContain("-d");
  });
});

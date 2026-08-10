import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";
import {
  bodyKindOf,
  buildEndpoint,
  buildHeaders,
  buildUrl,
  carriesPayload,
  hasBody,
  isProtected,
  sendRequest,
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
    expect(buildHeaders(input({ body: { kind: "json", text: "{}" } }))["Content-Type"]).toBe("application/json");
  });

  test("should not add a content type when there is no body", () => {
    expect(buildHeaders(input())["Content-Type"]).toBeUndefined();
  });

  test("should not add a content type for an empty json body", () => {
    expect(buildHeaders(input({ body: { kind: "json", text: "" } }))["Content-Type"]).toBeUndefined();
  });

  test("should never name the content type of a multipart body", () => {
    // `fetch` generates the boundary; naming the type ourselves would drop it.
    const headers = buildHeaders(input({ body: { kind: "multipart", fields: {}, files: {} } }));

    expect(headers["Content-Type"]).toBeUndefined();
  });

  test("should ask for an event stream on an sse route", () => {
    expect(buildHeaders(input({ meta: meta({ method: "get", transport: "sse" }) })).Accept).toBe("text/event-stream");
  });

  test("should forward the bearer token", () => {
    expect(buildHeaders(input({ bearerToken: "abc" })).Authorization).toBe("Bearer abc");
  });

  test("should omit Authorization when the environment has no token", () => {
    expect(buildHeaders(input({ bearerToken: undefined })).Authorization).toBeUndefined();
  });

  test("should keep the route's own headers", () => {
    expect(buildHeaders(input({ headers: { "X-Tenant": "acme" } }))["X-Tenant"]).toBe("acme");
  });
});

describe("toCurl", () => {
  test("should spell the verb, the url, the headers and the body", () => {
    const command = toCurl(input({ body: { kind: "json", text: '{"plan":"pro"}' }, bearerToken: "abc" }));

    expect(command).toContain("curl -X POST 'http://localhost:3000/api/v1/entitlement/42/grants'");
    expect(command).toContain("-H 'Authorization: Bearer abc'");
    expect(command).toContain(`-d '{"plan":"pro"}'`);
  });

  test("should escape a single quote so the line stays one shell argument", () => {
    expect(toCurl(input({ body: { kind: "json", text: `{"name":"o'brien"}` } }))).toContain(`o'\\''brien`);
  });

  test("should omit the body on a verb that carries none", () => {
    expect(toCurl(input({ meta: meta({ method: "get" }), body: { kind: "json", text: "{}" } }))).not.toContain("-d");
  });
});

describe("bodyKindOf", () => {
  test("should default to json", () => {
    expect(bodyKindOf(meta())).toBe("json");
  });

  test("should honour a multipart declaration", () => {
    expect(bodyKindOf(meta({ payload: { contentType: "multipart" } }))).toBe("multipart");
  });
});

describe("toCurl with a multipart body", () => {
  const upload = meta({ method: "post", payload: { contentType: "multipart" } });

  test("should render each field as a -F part", () => {
    const command = toCurl(input({ meta: upload, body: { kind: "multipart", fields: { caption: "hi" }, files: {} } }));

    expect(command).toContain("-F 'caption=hi'");
  });

  test("should render a file as -F name=@filename", () => {
    const file = new File(["x"], "avatar.png", { type: "image/png" });
    const command = toCurl(input({ meta: upload, body: { kind: "multipart", fields: {}, files: { avatar: file } } }));

    expect(command).toContain("-F 'avatar=@avatar.png'");
  });

  test("should skip a field left empty rather than send a blank part", () => {
    const command = toCurl(input({ meta: upload, body: { kind: "multipart", fields: { caption: "" }, files: {} } }));

    expect(command).not.toContain("-F 'caption='");
  });
});

describe("sendRequest", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    // biome-ignore lint/suspicious/noExplicitAny: stand-in for whichever signature the test needs
    global.fetch = mock(async () => new Response("{}")) as any;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("should return the parsed body, the status and the response headers", async () => {
    global.fetch = mock(
      async () => new Response('{"granted":true}', { status: 201, statusText: "Created", headers: { "X-Test": "1" } }),
      // biome-ignore lint/suspicious/noExplicitAny: stand-in for whichever signature the test needs
    ) as any;

    const result = await sendRequest(input({ meta: meta({ method: "get" }) }));

    expect(result.status).toBe(201);
    expect(result.statusText).toBe("Created");
    expect(result.body).toEqual({ granted: true });
    expect(result.headers["x-test"]).toBe("1");
    expect(result.ok).toBe(true);
  });

  test("should fall back to the raw text when the body is not json", async () => {
    global.fetch = mock(async () => new Response("Not Found", { status: 404 })) as unknown as typeof fetch;

    const result = await sendRequest(input({ meta: meta({ method: "get" }) }));

    expect(result.body).toBe("Not Found");
    expect(result.ok).toBe(false);
  });

  test("should refuse a socket route without ever calling fetch", async () => {
    await expect(sendRequest(input({ meta: meta({ method: "socket" }) }))).rejects.toMatchObject({
      message: "A socket route is opened by the socket panel, not sent as a request.",
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("should reject before sending when the json body is not valid", async () => {
    await expect(sendRequest(input({ body: { kind: "json", text: "{bad" } }))).rejects.toMatchObject({
      message: "The payload is not valid JSON.",
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test("should send a valid json body as-is", async () => {
    let sent: BodyInit | undefined;
    global.fetch = mock(async (_url: string, init?: RequestInit) => {
      sent = init?.body ?? undefined;
      return new Response("{}");
      // biome-ignore lint/suspicious/noExplicitAny: stand-in for whichever signature the test needs
    }) as any;

    await sendRequest(input({ meta: meta({ method: "post" }), body: { kind: "json", text: '{"plan":"pro"}' } }));

    expect(sent).toBe('{"plan":"pro"}');
  });

  test("should treat an empty response body as no body at all", async () => {
    global.fetch = mock(async () => new Response("")) as unknown as typeof fetch;

    const result = await sendRequest(input({ meta: meta({ method: "get" }) }));

    expect(result.body).toBeUndefined();
    expect(result.raw).toBe("");
  });

  test("should send a multipart body as FormData", async () => {
    let sent: BodyInit | undefined;
    global.fetch = mock(async (_url: string, init?: RequestInit) => {
      sent = init?.body ?? undefined;
      return new Response("{}");
      // biome-ignore lint/suspicious/noExplicitAny: stand-in for whichever signature the test needs
    }) as any;
    const file = new File(["x"], "avatar.png");

    await sendRequest(
      input({
        meta: meta({ method: "post" }),
        body: { kind: "multipart", fields: { caption: "hi" }, files: { avatar: file } },
      }),
    );

    expect(sent).toBeInstanceOf(FormData);
    expect((sent as FormData).get("caption")).toBe("hi");
    expect((sent as FormData).get("avatar")).toBeInstanceOf(File);
    expect(((sent as FormData).get("avatar") as File).name).toBe("avatar.png");
  });

  test("should return no body when the streamed response carries none", async () => {
    global.fetch = mock(async () => new Response(null)) as unknown as typeof fetch;

    const result = await sendRequest(input({ meta: meta({ method: "get", transport: "stream" }) }));

    expect(result.raw).toBe("");
  });

  test("should stop reading a stream once it is aborted", async () => {
    const body = new ReadableStream({
      start(controller) {
        // Never closes — the abort check is what stops the loop, not the stream ending.
        controller.enqueue(new TextEncoder().encode("first\n"));
      },
    });
    global.fetch = mock(async () => new Response(body)) as unknown as typeof fetch;
    const controller = new AbortController();
    controller.abort();

    const result = await sendRequest(
      input({ meta: meta({ method: "get", transport: "stream" }), signal: controller.signal }),
    );

    expect(result.raw).toBe("");
  });

  test("should hand back what already arrived when a stream is aborted mid-flight", async () => {
    const controller = new AbortController();
    const body = new ReadableStream({
      start(streamController) {
        // Never closes — the abort raised from onChunk is what ends the read.
        streamController.enqueue(new TextEncoder().encode("first\n"));
      },
    });
    global.fetch = mock(async () => new Response(body)) as unknown as typeof fetch;
    const chunks: unknown[] = [];

    const result = await sendRequest(
      input({
        meta: meta({ method: "get", transport: "stream" }),
        signal: controller.signal,
        onChunk: (chunk: unknown) => {
          chunks.push(chunk);
          controller.abort();
        },
      }),
    );

    expect(chunks).toEqual(["first"]);
    expect(result.raw).toBe("first\n");
  });

  test("should deliver each line of a newline-delimited stream to onChunk", async () => {
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('{"a":1}\n{"a":2}\n'));
        controller.close();
      },
    });
    global.fetch = mock(async () => new Response(body)) as unknown as typeof fetch;
    const chunks: unknown[] = [];

    const result = await sendRequest(
      input({ meta: meta({ method: "get", transport: "stream" }), onChunk: (chunk: unknown) => chunks.push(chunk) }),
    );

    expect(chunks).toEqual([{ a: 1 }, { a: 2 }]);
    expect(result.raw).toBe('{"a":1}\n{"a":2}\n');
  });

  test("should deliver each data frame of an event stream to onChunk", async () => {
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('data: {"tick":1}\n\ndata: {"tick":2}\n\n'));
        controller.close();
      },
    });
    global.fetch = mock(async () => new Response(body)) as unknown as typeof fetch;
    const chunks: unknown[] = [];

    await sendRequest(
      input({ meta: meta({ method: "get", transport: "sse" }), onChunk: (chunk: unknown) => chunks.push(chunk) }),
    );

    expect(chunks).toEqual([{ tick: 1 }, { tick: 2 }]);
  });

  test("should reject with the failure reason when the request never reaches a status", async () => {
    global.fetch = mock(async () => {
      throw new Error("network down");
      // biome-ignore lint/suspicious/noExplicitAny: stand-in for whichever signature the test needs
    }) as any;

    await expect(sendRequest(input({ meta: meta({ method: "get" }) }))).rejects.toMatchObject({
      message: "network down",
    });
  });
});

describe("carriesPayload", () => {
  test("should be true for the verbs that carry an http body", () => {
    expect(carriesPayload(meta({ method: "post" }))).toBe(true);
  });

  test("should be true for a socket route — the payload is in its message", () => {
    expect(carriesPayload(meta({ method: "socket" }))).toBe(true);
  });

  test("should be false for a get", () => {
    expect(carriesPayload(meta({ method: "get" }))).toBe(false);
  });
});

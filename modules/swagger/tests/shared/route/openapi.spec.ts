import { describe, expect, test } from "bun:test";
import type { RouteEntryType } from "../../../src/shared/route/navigation";
import { routeId } from "../../../src/shared/route/navigation";
import { operationOf, schemaOfExample, schemaOfType, toOpenApiDocument } from "../../../src/shared/route/openapi";
import type { RouteMetaType } from "../../../src/shared/route/types";

const meta = (overrides: Partial<RouteMetaType> = {}): RouteMetaType => ({
  title: "List users",
  group: "User",
  key: "user.list",
  version: 1,
  method: "get",
  path: "/api/v1/users",
  roles: [],
  ...overrides,
});

const entry = (overrides: Partial<RouteMetaType> = {}): RouteEntryType => {
  const value = meta(overrides);
  return { id: routeId(value), meta: value };
};

/** Reach into the one JSON path every request-body assertion needs. */
const bodySchema = (operation: Record<string, unknown>): unknown =>
  JSON.parse(JSON.stringify(operation)).requestBody?.content?.["application/json"]?.schema;

describe("schemaOfType", () => {
  test("should map a scalar onto its json schema type", () => {
    expect(schemaOfType("number")).toEqual({ type: "number" });
  });

  test("should carry the format a named scalar implies", () => {
    expect(schemaOfType("uuid")).toEqual({ type: "string", format: "uuid" });
  });

  test("should turn a union of literals into an enum", () => {
    expect(schemaOfType('"draft" | "published"')).toEqual({ type: "string", enum: ["draft", "published"] });
  });

  test("should turn a trailing [] into an array of the element type", () => {
    expect(schemaOfType("string[]")).toEqual({ type: "array", items: { type: "string" } });
  });

  test("should stay free-form rather than guess at an unknown type", () => {
    expect(schemaOfType("UserEntity")).toEqual({});
  });

  test("should stay free-form when a union carries no quoted literal", () => {
    expect(schemaOfType("string | number")).toEqual({});
  });
});

describe("schemaOfExample", () => {
  test("should describe an object property by property", () => {
    expect(schemaOfExample({ status: "ok", count: 2 })).toEqual({
      type: "object",
      properties: { status: { type: "string" }, count: { type: "integer" } },
    });
  });

  test("should tell an integer apart from a float", () => {
    expect(schemaOfExample(1.5)).toEqual({ type: "number" });
  });

  test("should describe a boolean", () => {
    expect(schemaOfExample(true)).toEqual({ type: "boolean" });
  });

  test("should describe an array from its first element", () => {
    expect(schemaOfExample(["a"])).toEqual({ type: "array", items: { type: "string" } });
  });

  test("should stay free-form for an empty array", () => {
    expect(schemaOfExample([])).toEqual({ type: "array", items: {} });
  });

  test("should stay free-form for null", () => {
    expect(schemaOfExample(null)).toEqual({});
  });
});

describe("operationOf", () => {
  test("should require bearer auth exactly when the route declares roles", () => {
    expect(operationOf(meta({ roles: ["ROLE_ADMIN"] })).security).toEqual([{ bearerAuth: [] }]);
    expect(operationOf(meta()).security).toEqual([]);
  });

  test("should mark a path parameter required whatever the meta says", () => {
    const parameters = operationOf(
      meta({ path: "/api/v1/users/:id", params: [{ name: "id", type: "uuid", required: false }] }),
    ).parameters as Array<Record<string, unknown>>;

    expect(parameters[0]).toMatchObject({ name: "id", in: "path", required: true });
  });

  test("should build the body schema from the documented fields", () => {
    const operation = operationOf(
      meta({
        method: "post",
        payload: {
          fields: [
            { name: "email", type: "email", required: true },
            { name: "nickname", type: "string" },
          ],
        },
      }),
    );

    expect(bodySchema(operation)).toEqual({
      type: "object",
      properties: { email: { type: "string", format: "email" }, nickname: { type: "string" } },
      required: ["email"],
    });
  });

  test("should fall back to the example when no field is documented", () => {
    const operation = operationOf(meta({ method: "post", payload: { example: { plan: "pro" } } }));

    expect(bodySchema(operation)).toEqual({ type: "object", properties: { plan: { type: "string" } } });
  });

  test("should carry no request body on a verb that has none", () => {
    expect(operationOf(meta({ payload: { example: { plan: "pro" } } })).requestBody).toBeUndefined();
  });

  test("should nest a body schema the way the fields nest", () => {
    const operation = operationOf(
      meta({
        method: "post",
        payload: {
          fields: [
            {
              name: "author",
              type: "object",
              required: true,
              fields: [{ name: "displayName", type: "string", required: true }],
            },
          ],
        },
      }),
    );

    expect(bodySchema(operation)).toEqual({
      type: "object",
      properties: {
        author: { type: "object", properties: { displayName: { type: "string" } }, required: ["displayName"] },
      },
      required: ["author"],
    });
  });

  test("should carry a file payload as a form rather than as json", () => {
    const operation = JSON.parse(
      JSON.stringify(
        operationOf(
          meta({
            method: "post",
            payload: { contentType: "multipart", fields: [{ name: "avatar", type: "file", required: true }] },
          }),
        ),
      ),
    );

    expect(operation.requestBody.content["application/json"]).toBeUndefined();
    expect(operation.requestBody.content["multipart/form-data"].schema.properties.avatar).toEqual({
      type: "string",
      format: "binary",
    });
  });

  test("should default to a 200 when no response is documented", () => {
    expect(operationOf(meta()).responses).toEqual({ "200": { description: "Successful response" } });
  });

  test("should describe the answer as the envelope it travels in", () => {
    const responses = JSON.parse(
      JSON.stringify(
        operationOf(meta({ responses: [{ status: 200, fields: [{ name: "granted", type: "boolean" }] }] })),
      ),
    ).responses;
    const schema = responses["200"].content["application/json"].schema;

    // The documented fields name what goes in `data`; the wire carries the
    // whole envelope, and that is what a consumer parses.
    expect(schema.properties.success).toEqual({ type: "boolean" });
    expect(schema.properties.data.properties.granted).toEqual({ type: "boolean" });
  });

  test("should answer a streaming route with its own media type", () => {
    const responses = operationOf(meta({ transport: "sse", responses: [{ status: 200, example: { tick: 1 } }] }))
      .responses as Record<string, Record<string, Record<string, unknown>>>;

    expect(Object.keys(responses["200"]?.content ?? {})).toEqual(["text/event-stream"]);
  });
});

describe("toOpenApiDocument", () => {
  test("should spell path parameters the openapi way", () => {
    const document = toOpenApiDocument([entry({ path: "/api/v1/users/:id" })], { title: "API", version: "1.0.0" });

    expect(Object.keys(document.paths as object)).toEqual(["/api/v1/users/{id}"]);
  });

  test("should file two verbs of one path under the same path item", () => {
    const document = toOpenApiDocument([entry(), entry({ method: "post", key: "user.create" })], {
      title: "API",
      version: "1.0.0",
    });
    const item = (document.paths as Record<string, Record<string, unknown>>)["/api/v1/users"];

    expect(Object.keys(item ?? {}).sort()).toEqual(["get", "post"]);
  });

  test("should leave a socket route out — it is no http operation to publish", () => {
    const document = toOpenApiDocument([entry({ method: "socket", path: "/api/v1/feed" })], {
      title: "API",
      version: "1.0.0",
    });

    expect(document.paths).toEqual({});
  });

  test("should publish the server only when a base url is given", () => {
    expect(toOpenApiDocument([], { title: "API", version: "1.0.0" }).servers).toBeUndefined();
    expect(toOpenApiDocument([], { title: "API", version: "1.0.0", baseURL: "http://localhost:3000" }).servers).toEqual(
      [{ url: "http://localhost:3000" }],
    );
  });

  test("should declare the bearer security scheme once, at the document level", () => {
    const components = toOpenApiDocument([], { title: "API", version: "1.0.0" }).components as Record<
      string,
      Record<string, unknown>
    >;

    expect(components.securitySchemes?.bearerAuth).toEqual({ type: "http", scheme: "bearer", bearerFormat: "JWT" });
  });
});

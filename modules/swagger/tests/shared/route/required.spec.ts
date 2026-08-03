import { describe, expect, test } from "bun:test";
import type { FormValuesType } from "../../../src/shared/route/required";
import { missingRequired } from "../../../src/shared/route/required";
import type { RouteMetaType } from "../../../src/shared/route/types";

const meta = (overrides: Partial<RouteMetaType> = {}): RouteMetaType => ({
  title: "Grant",
  key: "entitlement.grant",
  version: 1,
  method: "post",
  path: "/api/v1/entitlement/:userId",
  roles: [],
  ...overrides,
});

const values = (overrides: Partial<FormValuesType> = {}): FormValuesType => ({
  params: {},
  queries: {},
  headers: {},
  body: { kind: "json", text: "" },
  ...overrides,
});

describe("missingRequired", () => {
  test("should report a path parameter left empty", () => {
    // An empty `:userId` does not make an incomplete request, it makes a
    // request to `/entitlement/` — a different path entirely.
    const route = meta({ params: [{ name: "userId", type: "string" }] });

    expect(missingRequired(route, values())).toEqual(["userId"]);
  });

  test("should report a path parameter even when the meta calls it optional", () => {
    const route = meta({ params: [{ name: "userId", type: "string", required: false }] });

    expect(missingRequired(route, values())).toEqual(["userId"]);
  });

  test("should accept a path parameter that is filled", () => {
    const route = meta({ params: [{ name: "userId", type: "string" }] });

    expect(missingRequired(route, values({ params: { userId: "42" } }))).toEqual([]);
  });

  test("should treat whitespace as empty", () => {
    const route = meta({ params: [{ name: "userId", type: "string" }] });

    expect(missingRequired(route, values({ params: { userId: "   " } }))).toEqual(["userId"]);
  });

  test("should report a required query but ignore an optional one", () => {
    const route = meta({
      queries: [
        { name: "scope", type: "string", required: true },
        { name: "page", type: "number", required: false },
      ],
    });

    expect(missingRequired(route, values())).toEqual(["scope"]);
  });

  test("should report a required header the form does not carry", () => {
    const route = meta({ headers: [{ name: "X-Tenant", type: "string", required: true }] });

    expect(missingRequired(route, values())).toEqual(["X-Tenant"]);
    expect(missingRequired(route, values({ headers: { "X-Tenant": "acme" } }))).toEqual([]);
  });

  test("should report a required multipart field and a missing file", () => {
    const route = meta({
      payload: {
        contentType: "multipart",
        fields: [
          { name: "avatar", type: "file", required: true },
          { name: "caption", type: "string", required: true },
          { name: "alt", type: "string", required: false },
        ],
      },
    });

    expect(missingRequired(route, values({ body: { kind: "multipart", fields: {}, files: {} } }))).toEqual([
      "avatar",
      "caption",
    ]);
  });

  test("should accept a multipart body once the file is picked", () => {
    const route = meta({
      payload: { contentType: "multipart", fields: [{ name: "avatar", type: "file", required: true }] },
    });
    const file = new File(["x"], "a.png");

    expect(
      missingRequired(route, values({ body: { kind: "multipart", fields: {}, files: { avatar: file } } })),
    ).toEqual([]);
  });

  test("should not second-guess a json body — only its syntax can be checked", () => {
    const route = meta({ payload: { fields: [{ name: "plan", type: "string", required: true }] } });

    expect(missingRequired(route, values())).toEqual([]);
  });

  test("should leave an untouched optional group alone", () => {
    const route = meta({
      queries: [
        {
          name: "filter",
          type: "object",
          required: false,
          fields: [
            { name: "since", type: "date", required: true },
            { name: "author", type: "string", required: false },
          ],
        },
      ],
    });

    expect(missingRequired(route, values())).toEqual([]);
  });

  test("should require the rest of an optional group once one of its fields is filled", () => {
    const route = meta({
      queries: [
        {
          name: "filter",
          type: "object",
          required: false,
          fields: [
            { name: "since", type: "date", required: true },
            { name: "author", type: "string", required: false },
          ],
        },
      ],
    });

    expect(missingRequired(route, values({ queries: { "filter.author": "ada" } }))).toEqual(["filter.since"]);
  });

  test("should report nothing for a route that takes nothing", () => {
    expect(missingRequired(meta({ path: "/api/v1/health", method: "get" }), values())).toEqual([]);
  });
});

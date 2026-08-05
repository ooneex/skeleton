import { describe, expect, test } from "bun:test";
import type { RouteEntryType } from "../../../src/shared/route/navigation";
import { buildSections, filterRoutes, findRoute, matchesQuery, routeId } from "../../../src/shared/route/navigation";
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

describe("routeId", () => {
  test("should build a url-safe id from the method and the path", () => {
    expect(routeId(meta())).toBe("get-api-v1-users");
  });

  test("should keep two verbs on the same path apart", () => {
    expect(routeId(meta({ method: "post" }))).not.toBe(routeId(meta()));
  });

  test("should collapse path parameters into the id", () => {
    expect(routeId(meta({ path: "/api/v1/users/:id" }))).toBe("get-api-v1-users-id");
  });
});

describe("findRoute", () => {
  const routes = [entry(), entry({ method: "post", key: "user.create" })];

  test("should return the route carrying the id", () => {
    expect(findRoute(routes, "post-api-v1-users")?.meta.key).toBe("user.create");
  });

  test("should fall back to the first route when no id is selected", () => {
    expect(findRoute(routes, undefined)?.meta.key).toBe("user.list");
  });

  test("should return nothing for an id that no longer exists", () => {
    expect(findRoute(routes, "get-api-v1-gone")).toBeUndefined();
  });
});

describe("buildSections", () => {
  test("should group routes by their module in first-seen order", () => {
    const sections = buildSections([
      entry(),
      entry({ group: "App", path: "/api/v1/health" }),
      entry({ method: "post" }),
    ]);

    expect(sections.map((section) => section.group)).toEqual(["User", "App"]);
    expect(sections[0]?.routes).toHaveLength(2);
  });

  test("should file a meta with no group under the fallback section", () => {
    expect(buildSections([entry({ group: undefined })])[0]?.group).toBe("API");
  });
});

describe("matchesQuery", () => {
  test("should match the path, the title, the key and the roles", () => {
    const route = entry({ roles: ["ROLE_ADMIN"], tags: ["billing"] });

    for (const needle of ["users", "list", "user.list", "role_admin", "billing"]) {
      expect(matchesQuery(route, needle)).toBe(true);
    }
  });

  test("should not match text that appears nowhere in the route", () => {
    expect(matchesQuery(entry(), "invoice")).toBe(false);
  });
});

describe("filterRoutes", () => {
  const routes = [entry(), entry({ group: "App", key: "app.health.check", path: "/api/v1/health", title: "Health" })];

  test("should return every route for an empty query", () => {
    expect(filterRoutes(routes, "   ")).toHaveLength(2);
  });

  test("should keep only the matching routes, ignoring case and padding", () => {
    expect(filterRoutes(routes, "  HEALTH ").map((route) => route.meta.key)).toEqual(["app.health.check"]);
  });
});

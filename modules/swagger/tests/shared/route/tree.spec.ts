import { describe, expect, test } from "bun:test";
import type { RouteEntryType } from "../../../src/shared/route/navigation";
import { buildTree, folderContains, routeId, routeSegments } from "../../../src/shared/route/navigation";
import type { RouteMetaType } from "../../../src/shared/route/types";

const entry = (path: string, method: RouteMetaType["method"] = "get"): RouteEntryType => {
  const meta: RouteMetaType = { title: path, key: path, version: 1, method, path, roles: [] };
  return { id: routeId(meta), meta };
};

describe("routeSegments", () => {
  test("should drop the mount prefix and the version", () => {
    expect(routeSegments("/api/v1/admin/stats")).toEqual(["admin", "stats"]);
  });

  test("should keep every segment when no version is present", () => {
    expect(routeSegments("/admin/stats")).toEqual(["admin", "stats"]);
  });

  test("should handle a route sitting right after the version", () => {
    expect(routeSegments("/api/v1/health")).toEqual(["health"]);
  });

  test("should keep a path parameter as a segment", () => {
    expect(routeSegments("/api/v2/user/:id/posts")).toEqual(["user", ":id", "posts"]);
  });
});

describe("buildTree", () => {
  test("should gather routes sharing a prefix under one folder", () => {
    const tree = buildTree([entry("/api/v1/admin/stats"), entry("/api/v1/admin/users")]);

    expect(tree.folders).toHaveLength(1);
    expect(tree.folders[0]?.name).toBe("admin");
    expect(tree.folders[0]?.routes).toHaveLength(2);
  });

  test("should leave a single-segment route at the root", () => {
    const tree = buildTree([entry("/api/v1/health")]);

    expect(tree.folders).toHaveLength(0);
    expect(tree.routes).toHaveLength(1);
  });

  test("should nest deeper paths", () => {
    const tree = buildTree([entry("/api/v1/admin/billing/invoices")]);

    expect(tree.folders[0]?.name).toBe("admin");
    expect(tree.folders[0]?.folders[0]?.name).toBe("billing");
    expect(tree.folders[0]?.folders[0]?.routes).toHaveLength(1);
  });

  test("should file two verbs of the same path side by side", () => {
    const tree = buildTree([entry("/api/v1/admin/users"), entry("/api/v1/admin/users", "post")]);

    expect(tree.folders[0]?.routes).toHaveLength(2);
  });

  test("should give each folder a path that distinguishes same-named siblings", () => {
    const tree = buildTree([entry("/api/v1/admin/billing/x"), entry("/api/v1/user/billing/y")]);
    const paths = tree.folders.map((folder) => folder.folders[0]?.path);

    expect(paths).toEqual(["/admin/billing", "/user/billing"]);
  });

  test("should return an empty tree for no routes", () => {
    expect(buildTree([])).toEqual({ name: "", path: "", folders: [], routes: [] });
  });
});

describe("folderContains", () => {
  const tree = buildTree([entry("/api/v1/admin/billing/invoices"), entry("/api/v1/health")]);

  test("should find a route nested several levels down", () => {
    expect(folderContains(tree.folders[0] as never, routeId(entry("/api/v1/admin/billing/invoices").meta))).toBe(true);
  });

  test("should not claim a route it does not hold", () => {
    expect(folderContains(tree.folders[0] as never, routeId(entry("/api/v1/health").meta))).toBe(false);
  });
});

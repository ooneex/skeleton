import { describe, expect, test } from "bun:test";
import { routeTree } from "../../src/bootstrap/routeTree.gen";

describe("routeTree", () => {
  test("should be rooted on the root route", () => {
    expect(routeTree.isRoot).toBe(true);
  });

  test("should register the index route as a child of the root", () => {
    const paths = Object.values(routeTree.children ?? {}).map((route) => route.options.path);

    expect(paths).toContain("/");
  });
});

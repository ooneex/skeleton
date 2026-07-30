import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Route } from "../../src/routes/index";

describe("spa index route", () => {
  test("renders the home message", () => {
    const IndexComponent = Route.options.component;
    expect(IndexComponent).toBeDefined();

    if (!IndexComponent) {
      throw new Error("Index route is missing its component.");
    }

    const markup = renderToStaticMarkup(IndexComponent({} as never));

    expect(markup).toContain("Hello &quot;/&quot;!");
  });

  test("uses the shared loading and error boundaries", () => {
    expect(typeof Route.options.pendingComponent).toBe("function");
    expect(typeof Route.options.errorComponent).toBe("function");
    expect(typeof Route.options.notFoundComponent).toBe("function");
  });
});

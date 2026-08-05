import { describe, expect, test } from "bun:test";
import { NotFound } from "@module/design/components/not-found";
import { isValidElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Route } from "../../src/routes/index";

describe("admin index route", () => {
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

  test("renders the shared not-found component for unmatched routes", () => {
    const NotFoundComponent = Route.options.notFoundComponent;
    expect(NotFoundComponent).toBeDefined();

    if (!NotFoundComponent) {
      throw new Error("Index route is missing its not-found component.");
    }

    const element = NotFoundComponent({} as never);

    expect(isValidElement(element)).toBe(true);

    if (isValidElement(element)) {
      expect(element.type).toBe(NotFound);
    }
  });
});

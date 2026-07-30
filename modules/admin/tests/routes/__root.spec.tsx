import { describe, expect, test } from "bun:test";
import { ErrorFallback } from "@module/design/components/error";
import { PageLoader } from "@module/design/components/loader";
import { NotFound } from "@module/design/components/not-found";
import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import { Route } from "../../src/routes/__root";

describe("admin root route", () => {
  test("wraps the shared not found component and reuses the shared boundaries", () => {
    const NotFoundComponent = Route.options.notFoundComponent;
    expect(NotFoundComponent).toBeDefined();

    if (!NotFoundComponent) {
      throw new Error("Root route is missing a not found component.");
    }

    const element = NotFoundComponent({} as never);

    expect(Route.options.pendingComponent).toBe(PageLoader);
    expect(Route.options.errorComponent).toBe(ErrorFallback);
    expect(isValidElement(element)).toBe(true);

    if (isValidElement(element)) {
      expect(element.type).toBe(NotFound);
    }
  });

  test("renders a main outlet shell in the root component", () => {
    const RootComponent = Route.options.component;
    expect(RootComponent).toBeDefined();

    if (!RootComponent) {
      throw new Error("Root route is missing its main component.");
    }

    const rootElement = RootComponent({} as never);
    expect(isValidElement(rootElement)).toBe(true);

    if (isValidElement(rootElement)) {
      const typedRootElement = rootElement as ReactElement<{ children: ReactNode }>;
      const [main] = Children.toArray(typedRootElement.props.children);
      expect(isValidElement(main)).toBe(true);

      if (isValidElement(main)) {
        const typedMain = main as ReactElement<{ className: string }>;
        expect(typedMain.type).toBe("main");
        expect(typedMain.props.className).toContain("min-h-0");
      }
    }
  });
});

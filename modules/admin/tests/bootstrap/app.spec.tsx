import { afterEach, describe, expect, mock, test } from "bun:test";
import { isValidElement } from "react";

const render = mock(() => {});
const createRoot = mock(() => ({ render }));
const originalDocument = globalThis.document;
const originalWindow = globalThis.window;

mock.module("react-dom/client", () => ({
  default: { createRoot },
  createRoot,
}));

afterEach(() => {
  if (originalDocument) {
    Object.defineProperty(globalThis, "document", { value: originalDocument, configurable: true });
  } else {
    Reflect.deleteProperty(globalThis, "document");
  }

  if (originalWindow) {
    Object.defineProperty(globalThis, "window", { value: originalWindow, configurable: true });
    return;
  }

  Reflect.deleteProperty(globalThis, "window");
});

describe("admin bootstrap app", () => {
  test("creates the router and mounts the provider into #app", async () => {
    const rootElement = { id: "app", innerHTML: "" };
    const getElementById = mock((id: string) => (id === "app" ? rootElement : null));
    const history = { state: {}, pushState() {}, replaceState() {}, back() {}, go() {}, forward() {} };
    const location = new URL("http://localhost/");
    const documentStub = { getElementById };
    const windowStub = {
      document: documentStub,
      history,
      location,
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return true;
      },
    };

    Object.defineProperty(globalThis, "document", { value: documentStub, configurable: true });
    Object.defineProperty(globalThis, "window", { value: windowStub, configurable: true });

    await import("../../src/bootstrap/app");

    expect(getElementById).toHaveBeenCalledWith("app");
    expect(createRoot).toHaveBeenCalledWith(rootElement);
    expect(render).toHaveBeenCalledTimes(1);

    const firstRenderCall = render.mock.calls.at(0) as [unknown] | undefined;
    expect(isValidElement(firstRenderCall?.[0] ?? null)).toBe(true);
  });
});

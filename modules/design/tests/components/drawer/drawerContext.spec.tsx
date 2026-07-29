/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawerContentContext, useDrawerContentRef } from "../../../src/components/drawer/drawerContext";

afterEach(cleanup);

const Harness = () => {
  const ref = useDrawerContentRef();
  return <span data-testid="has-ref">{String(ref !== undefined)}</span>;
};

describe("useDrawerContentRef", () => {
  test("returns undefined outside a DrawerContentContext provider", () => {
    const { getByTestId } = render(<Harness />);
    expect(getByTestId("has-ref").textContent).toBe("false");
  });

  test("returns the provided ref inside a DrawerContentContext provider", () => {
    const contentRef = { current: document.createElement("div") };
    const { getByTestId } = render(
      <DrawerContentContext.Provider value={contentRef}>
        <Harness />
      </DrawerContentContext.Provider>,
    );
    expect(getByTestId("has-ref").textContent).toBe("true");
  });
});

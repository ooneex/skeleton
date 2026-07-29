/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createDrawer, Drawer } from "../../../src/components/drawer/Drawer";

afterEach(cleanup);

describe("Drawer", () => {
  test("renders title, description and children while open", async () => {
    render(<Drawer />);

    let resultPromise!: Promise<void>;
    await act(async () => {
      resultPromise = Drawer.call({ title: "Details", description: "More info", children: <p>Body</p> });
    });

    const drawerEl = await screen.findByRole("dialog");
    expect(drawerEl).toHaveAttribute("data-side", "bottom");
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("More info")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    await resultPromise;
  });

  test("resolves when dismissed via Escape", async () => {
    render(<Drawer />);

    let resultPromise!: Promise<void>;
    await act(async () => {
      resultPromise = Drawer.call({ title: "Dismiss me" });
    });

    await screen.findByRole("dialog");
    fireEvent.keyDown(document, { key: "Escape" });

    await resultPromise;
  });
});

describe("createDrawer", () => {
  test("resolves the value passed to call.end and supports a custom side", async () => {
    const FilterDrawer = createDrawer<{ initial: string }, string | null>(
      ({ call, initial }) => (
        <button type="button" onClick={() => call.end(`${initial}-applied`)}>
          Apply
        </button>
      ),
      { side: "right", dismissValue: null },
    );

    render(<FilterDrawer />);

    let resultPromise!: Promise<string | null>;
    await act(async () => {
      resultPromise = FilterDrawer.call({ initial: "draft" });
    });

    const drawerEl = await screen.findByRole("dialog");
    expect(drawerEl).toHaveAttribute("data-side", "right");

    fireEvent.click(screen.getByRole("button", { name: "Apply" }));
    expect(await resultPromise).toBe("draft-applied");
  });

  test("dismissible: false keeps the drawer open and unresolved on Escape", async () => {
    const NonDismissibleDrawer = createDrawer<void, string | null>(() => <p>Locked drawer</p>, {
      dismissValue: null,
      dismissible: false,
    });

    render(<NonDismissibleDrawer />);

    await act(async () => {
      NonDismissibleDrawer.call();
    });

    await screen.findByText("Locked drawer");

    // Escape should NOT resolve the promise because dismissible is false.
    fireEvent.keyDown(document, { key: "Escape" });

    // The drawer content is still present/open — dismissal was suppressed.
    expect(screen.getByText("Locked drawer")).toBeInTheDocument();
    expect(await screen.findByRole("dialog")).toHaveAttribute("data-open", "");
  });
});

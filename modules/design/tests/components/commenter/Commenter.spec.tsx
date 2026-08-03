/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Commenter } from "../../../src/components/commenter/Commenter";
import {
  buildLabel,
  buildSelector,
  createAnchor,
  resolveAnchor,
} from "../../../src/components/commenter/elementAnchor";
import type {
  CommenterCommentType,
  CommenterRectType,
  CommenterSubmitType,
} from "../../../src/components/commenter/types";

afterEach(cleanup);

const anchor = (selector: string) => ({
  selector,
  label: selector,
  offsetX: 0.5,
  offsetY: 0.5,
  pageX: 10,
  pageY: 20,
});

const comment = (overrides: Partial<CommenterCommentType> = {}): CommenterCommentType => ({
  id: "c1",
  body: "The label is misaligned",
  anchor: anchor("#target"),
  author: { name: "Ada" },
  createdAt: "2026-01-05T10:00:00.000Z",
  ...overrides,
});

describe("Commenter", () => {
  test("stays out of the DOM when disabled", () => {
    render(<Commenter enabled={false} defaultOpen />);

    expect(screen.queryByRole("region", { name: "Feedback commenter" })).not.toBeInTheDocument();
  });

  test("renders the widget and the existing comments when enabled and open", () => {
    render(<Commenter enabled defaultOpen comments={[comment()]} />);

    expect(screen.getByRole("region", { name: "Feedback commenter" })).toBeInTheDocument();
    expect(screen.getByText("The label is misaligned")).toBeInTheDocument();
    expect(screen.getByText(/Ada/)).toBeInTheDocument();
  });

  test("hides itself from the close button", async () => {
    const user = userEvent.setup();
    const onOpenChange = mock(() => {});
    render(<Commenter enabled defaultOpen onOpenChange={onOpenChange} />);

    await user.click(screen.getByRole("button", { name: "Hide commenter" }));

    expect(screen.queryByRole("region", { name: "Feedback commenter" })).not.toBeInTheDocument();
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  test("switches between edit and view mode from the header toggles", async () => {
    const user = userEvent.setup();
    const onModeChange = mock(() => {});
    render(<Commenter enabled defaultOpen onModeChange={onModeChange} />);

    await user.click(screen.getByRole("button", { name: "Edit mode" }));

    expect(onModeChange).toHaveBeenLastCalledWith("edit");
    expect(screen.getByRole("button", { name: "Edit mode" })).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: "View mode" }));

    expect(onModeChange).toHaveBeenLastCalledWith("view");
    expect(screen.getByRole("button", { name: "View mode" })).toHaveAttribute("aria-pressed", "true");
  });

  test("view mode never opens the composer on a page click", async () => {
    const user = userEvent.setup();
    const target = document.createElement("button");
    target.textContent = "Save";
    document.body.append(target);

    render(<Commenter enabled defaultOpen defaultMode="view" />);
    await user.click(target);

    expect(screen.queryByRole("textbox", { name: "Comment" })).not.toBeInTheDocument();
    target.remove();
  });

  test("edit mode turns a page click into a comment", async () => {
    const user = userEvent.setup();
    const onCreate = mock((_comment: CommenterSubmitType) => {});
    const target = document.createElement("button");
    target.id = "target";
    target.textContent = "Save";
    document.body.append(target);

    render(<Commenter enabled defaultOpen defaultMode="edit" onCreate={onCreate} />);
    await user.click(target);

    const textarea = await screen.findByRole("textbox", { name: "Comment" });
    await user.type(textarea, "Wrong wording");
    await user.click(screen.getByRole("button", { name: "Send" }));

    await waitFor(() => expect(onCreate).toHaveBeenCalledTimes(1));
    expect(onCreate.mock.calls[0]?.[0]).toMatchObject({ body: "Wrong wording", anchor: { selector: "#target" } });
    expect(await screen.findByText("Wrong wording")).toBeInTheDocument();

    target.remove();
  });

  test("drops the draft from the composer cancel button", async () => {
    const user = userEvent.setup();
    const target = document.createElement("div");
    target.id = "target";
    document.body.append(target);

    render(<Commenter enabled defaultOpen defaultMode="edit" />);
    await user.click(target);
    expect(await screen.findByRole("textbox", { name: "Comment" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("textbox", { name: "Comment" })).not.toBeInTheDocument();

    target.remove();
  });

  test("deletes a comment through the host handler", async () => {
    const user = userEvent.setup();
    const onDelete = mock(() => {});
    render(<Commenter enabled defaultOpen comments={[comment()]} onDelete={onDelete} />);

    await user.click(screen.getByRole("button", { name: "Delete comment 1" }));

    expect(onDelete).toHaveBeenCalledWith("c1");
  });

  test("attaches the captured area to the draft", async () => {
    const user = userEvent.setup();
    const capture = mock(async (_rect: CommenterRectType) => "data:image/png;base64,AAA");
    const target = document.createElement("div");
    target.id = "target";
    document.body.append(target);

    render(<Commenter enabled defaultOpen defaultMode="edit" capture={capture} />);
    await user.click(target);
    await user.click(await screen.findByRole("button", { name: /Screenshot/ }));

    const overlay = screen.getByRole("application", { name: "Select the area to capture" });
    await user.pointer([
      { target: overlay, coords: { clientX: 10, clientY: 10 }, keys: "[MouseLeft>]" },
      { target: overlay, coords: { clientX: 120, clientY: 90 } },
      { target: overlay, keys: "[/MouseLeft]" },
    ]);

    await waitFor(() => expect(capture).toHaveBeenCalledTimes(1));
    expect(capture.mock.calls[0]?.[0]).toMatchObject({ x: 10, y: 10, width: 110, height: 80 });
    expect(await screen.findByAltText("Captured area")).toBeInTheDocument();

    target.remove();
  });

  test("says so when the capture comes back empty instead of showing nothing", async () => {
    const user = userEvent.setup();
    const capture = mock(async (_rect: CommenterRectType) => null);
    const target = document.createElement("div");
    target.id = "target";
    document.body.append(target);

    render(<Commenter enabled defaultOpen defaultMode="edit" capture={capture} />);
    await user.click(target);
    await user.click(await screen.findByRole("button", { name: /Screenshot/ }));

    const overlay = screen.getByRole("application", { name: "Select the area to capture" });
    await user.pointer([
      { target: overlay, coords: { clientX: 10, clientY: 10 }, keys: "[MouseLeft>]" },
      { target: overlay, coords: { clientX: 120, clientY: 90 } },
      { target: overlay, keys: "[/MouseLeft]" },
    ]);

    expect(await screen.findByRole("alert")).toHaveTextContent("The screenshot could not be taken");
    expect(screen.queryByAltText("Captured area")).not.toBeInTheDocument();

    target.remove();
  });

  test("moves the widget when its header is dragged", async () => {
    const user = userEvent.setup();
    render(<Commenter enabled defaultOpen />);

    const widget = screen.getByRole("region", { name: "Feedback commenter" });
    const header = widget.querySelector("header");
    if (!header) throw new Error("the widget must expose a drag handle");
    const before = widget.style.left;

    await user.pointer([
      { target: header, coords: { clientX: 500, clientY: 40 }, keys: "[MouseLeft>]" },
      { target: header, coords: { clientX: 300, clientY: 200 } },
      { target: header, keys: "[/MouseLeft]" },
    ]);

    expect(widget.style.left).not.toBe(before);
  });
});

describe("elementAnchor", () => {
  test("prefers ids and data-testid over structural selectors", () => {
    const root = document.createElement("section");
    root.innerHTML = `<div id="panel"><p>a</p><p data-testid="second">b</p></div>`;
    document.body.append(root);

    const first = root.querySelector("p");
    const second = root.querySelector("[data-testid='second']");

    expect(first && buildSelector(first)).toBe("#panel > p:nth-of-type(1)");
    expect(second && buildSelector(second)).toBe('[data-testid="second"]');
    expect(second && buildLabel(second)).toBe("p[second]");

    root.remove();
  });

  test("falls back to the recorded document point when the target is gone", () => {
    expect(resolveAnchor(anchor("#missing-element"))).toEqual({ x: 10, y: 20 });
  });

  test("records the click position as a fraction of the target box", () => {
    const target = document.createElement("div");
    target.id = "boxed";
    document.body.append(target);
    target.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 100 }) as DOMRect;

    const created = createAnchor(target, 50, 25);

    expect(created).toMatchObject({ selector: "#boxed", offsetX: 0.25, offsetY: 0.25 });
    target.remove();
  });
});

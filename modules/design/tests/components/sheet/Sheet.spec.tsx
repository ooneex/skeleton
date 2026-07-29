/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "../../../src/components/button/Button";
import { createSheet, Sheet } from "../../../src/components/sheet/Sheet";

afterEach(cleanup);

describe("Sheet", () => {
  test("renders the title, description and children once called, and resolves on close", async () => {
    let resolved = false;
    const OpenButton = () => (
      <Button
        onClick={() => {
          Sheet.call({ title: "Settings", description: "Manage your account", children: <div>Body content</div> }).then(
            () => {
              resolved = true;
            },
          );
        }}
      >
        Open
      </Button>
    );

    render(
      <>
        <Sheet />
        <OpenButton />
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open" }));

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Manage your account")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(dialog).toHaveAttribute("data-side", "right");

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(resolved).toBe(true);
  });

  test("renders no header when title and description are omitted", async () => {
    render(
      <>
        <Sheet />
        <Button onClick={() => Sheet.call({ children: <div>Just body</div> })}>Open</Button>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open" }));

    const dialog = await screen.findByRole("dialog");
    expect(screen.getByText("Just body")).toBeInTheDocument();
    expect(dialog.querySelector('[data-slot="sheet-header"]')).toBeNull();
  });

  test("slides in from the requested side", async () => {
    render(
      <>
        <Sheet />
        <Button onClick={() => Sheet.call({ side: "left", children: <div>Left content</div> })}>Open</Button>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open" }));

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAttribute("data-side", "left");
  });
});

describe("createSheet", () => {
  test("resolves the call promise with the value passed to call.end", async () => {
    const user = userEvent.setup();
    const ConfirmSheet = createSheet<{ label: string }, string | null>(
      ({ call, label }) => (
        <div>
          <p>{label}</p>
          <Button onClick={() => call.end("confirmed")}>Confirm</Button>
        </div>
      ),
      { dismissValue: null },
    );

    let result: string | null | undefined;
    const OpenButton = () => (
      <Button
        onClick={() => {
          ConfirmSheet.call({ label: "Are you sure?" }).then((value) => {
            result = value;
          });
        }}
      >
        Open
      </Button>
    );

    render(
      <>
        <ConfirmSheet />
        <OpenButton />
      </>,
    );

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByText("Are you sure?")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Confirm" }));
    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(result).toBe("confirmed");
  });

  test("resolves with dismissValue when dismissed via the close button", async () => {
    const DismissSheet = createSheet<void, string | null>(() => <div>Dismissible body</div>, {
      dismissValue: null,
      showCloseButton: true,
    });

    let result: string | null | undefined = "not-set";
    const OpenButton = () => (
      <Button
        onClick={() => {
          DismissSheet.call().then((value) => {
            result = value;
          });
        }}
      >
        Open
      </Button>
    );

    render(
      <>
        <DismissSheet />
        <OpenButton />
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByText("Dismissible body");

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(result).toBeNull();
  });

  test("hides the close button when showCloseButton is false", async () => {
    const NoCloseSheet = createSheet<void, void>(() => <div>No close button here</div>, {
      showCloseButton: false,
    });

    render(
      <>
        <NoCloseSheet />
        <Button onClick={() => NoCloseSheet.call()}>Open</Button>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    await screen.findByText("No close button here");

    expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();
  });
});

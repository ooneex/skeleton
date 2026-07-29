/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toaster, toaster } from "../../../src/components/toaster/Toaster";

afterEach(cleanup);

describe("Toaster", () => {
  test("renders a mount point without crashing when no toast is active", () => {
    render(<Toaster />);
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });

  test("toaster.success shows a toast with the given title and description", async () => {
    render(<Toaster />);
    toaster.success("Saved", { description: "Your changes are live." });

    expect(await screen.findByText("Saved")).toBeInTheDocument();
    expect(screen.getByText("Your changes are live.")).toBeInTheDocument();
  });

  test("toaster.error, toaster.warning and toaster.info each render their own toast", async () => {
    render(<Toaster />);
    toaster.error("Something failed");
    toaster.warning("Careful");
    toaster.info("FYI");

    expect(await screen.findByText("Something failed")).toBeInTheDocument();
    expect(screen.getByText("Careful")).toBeInTheDocument();
    expect(screen.getByText("FYI")).toBeInTheDocument();
  });

  test("dismissing a toast via the close button resolves its handle", async () => {
    render(<Toaster />);
    const handle = toaster.success("Saved");

    const title = await screen.findByText("Saved");
    const toastRoot = title.closest("[data-state]") as HTMLElement;
    const closeButton = toastRoot.querySelector("button") as HTMLButtonElement;

    fireEvent.click(closeButton);

    await expect(handle).resolves.toBeUndefined();
    expect(toastRoot).toHaveAttribute("data-state", "closed");
  });

  test("toaster.dismiss(handle) dismisses a specific toast", async () => {
    render(<Toaster />);
    const handle = toaster.info("Dismiss me");

    const title = await screen.findByText("Dismiss me");
    const toastRoot = title.closest("[data-state]") as HTMLElement;

    toaster.dismiss(handle);

    await expect(handle).resolves.toBeUndefined();
    expect(toastRoot).toHaveAttribute("data-state", "closed");
  });

  test("toaster.dismiss() with no argument dismisses every active toast", async () => {
    render(<Toaster />);
    const first = toaster.success("First");
    const second = toaster.warning("Second");

    await screen.findByText("First");
    await screen.findByText("Second");

    toaster.dismiss();

    await expect(first).resolves.toBeUndefined();
    await expect(second).resolves.toBeUndefined();
  });

  test("toaster.promise resolves to success and shows the success message", async () => {
    render(<Toaster />);

    const work = Promise.resolve("done");
    const result = await toaster.promise(work, {
      loading: "Saving…",
      success: (data) => `Saved: ${data}`,
      error: "Failed",
    });

    expect(result).toBe("done");
    expect(await screen.findByText("Saved: done")).toBeInTheDocument();
  });

  test("toaster.promise rejects and shows the error message, rethrowing the error", async () => {
    render(<Toaster />);

    const failure = new Error("boom");
    const work = Promise.reject(failure);

    await expect(
      toaster.promise(work, {
        loading: "Saving…",
        success: "Saved",
        error: (error) => `Failed: ${(error as Error).message}`,
      }),
    ).rejects.toBe(failure);

    expect(await screen.findByText("Failed: boom")).toBeInTheDocument();
  });
});

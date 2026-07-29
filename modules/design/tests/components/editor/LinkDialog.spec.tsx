/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LinkDialog, openLinkDialog } from "../../../src/components/editor/LinkDialog";

afterEach(cleanup);

describe("LinkDialog", () => {
  test("shows the 'Add Link' title and no Remove button when there is no active link", async () => {
    render(<LinkDialog />);
    const resultPromise = openLinkDialog({ initialHref: "", isActive: false });

    expect(await screen.findByText("Add Link")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Remove" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(await resultPromise).toBeNull();
  });

  test("shows 'Edit Link' and a Remove button, seeded with the initial href, when active", async () => {
    render(<LinkDialog />);
    const resultPromise = openLinkDialog({ initialHref: "https://example.com", isActive: true });

    expect(await screen.findByText("Edit Link")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("https://www.google.com") as HTMLInputElement;
    expect(input.value).toBe("https://example.com");

    fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    expect(await resultPromise).toEqual({ remove: true });
  });

  test("rejects a URL missing the http(s) scheme with a validation error", async () => {
    render(<LinkDialog />);
    const resultPromise = openLinkDialog({ initialHref: "", isActive: false });
    await screen.findByText("Add Link");

    const input = screen.getByPlaceholderText("https://www.google.com");
    fireEvent.change(input, { target: { value: "example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(await screen.findByText("Please enter a valid URL")).toBeInTheDocument();

    // Clean up the still-pending call so it doesn't leak into other tests.
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await resultPromise;
  });

  test("resolves with the entered href once it looks like a valid URL", async () => {
    render(<LinkDialog />);
    const resultPromise = openLinkDialog({ initialHref: "", isActive: false });
    await screen.findByText("Add Link");

    const input = screen.getByPlaceholderText("https://www.google.com");
    fireEvent.change(input, { target: { value: "https://example.com/page" } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(await resultPromise).toEqual({ href: "https://example.com/page" });
  });

  test("submits on Enter within the input", async () => {
    render(<LinkDialog />);
    const resultPromise = openLinkDialog({ initialHref: "", isActive: false });
    await screen.findByText("Add Link");

    const input = screen.getByPlaceholderText("https://www.google.com");
    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(await resultPromise).toEqual({ href: "https://example.com" });
  });
});

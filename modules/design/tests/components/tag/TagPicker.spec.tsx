/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { pickTags, TagPicker } from "../../../src/components/tag/TagPicker";

afterEach(cleanup);

describe("TagPicker", () => {
  test("renders the input placeholder and the confirm button", async () => {
    render(<TagPicker />);
    pickTags({ placeholder: "Add tags...", confirmLabel: "Done" });

    expect(await screen.findByPlaceholderText("Add tags...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Done" })).toBeInTheDocument();
  });

  test("pre-populates chips from the initial value", async () => {
    render(<TagPicker />);
    pickTags({ value: ["urgent", "billing"] });

    expect(await screen.findByText("urgent")).toBeInTheDocument();
    expect(screen.getByText("billing")).toBeInTheDocument();
  });

  test("resolves with the selected tags when Done is clicked", async () => {
    render(<TagPicker />);
    const promise = pickTags({ value: ["urgent"], confirmLabel: "Save" });

    await screen.findByText("urgent");
    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    await expect(promise).resolves.toEqual(["urgent"]);
  });

  test("selecting a suggested tag adds it as a chip and resolves it on confirm", async () => {
    const user = userEvent.setup();
    render(<TagPicker />);
    const promise = pickTags({ suggestedTags: ["frontend", "backend"] });

    const input = await screen.findByPlaceholderText("Add tags...");
    await user.click(input);

    const option = await screen.findByRole("option", { name: "frontend" });
    await user.click(option);
    // Close the combobox popup (multi-select keeps it open after a pick) so the
    // confirm button is no longer aria-hidden behind the open listbox.
    await user.keyboard("{Escape}");

    fireEvent.click(screen.getByRole("button", { name: "Done" }));

    await expect(promise).resolves.toEqual(["frontend"]);
  });

  test("shows a loading state while isPending is true and no tags are suggested yet", async () => {
    const user = userEvent.setup();
    render(<TagPicker />);
    pickTags({ isPending: true, suggestedTags: [] });

    const input = await screen.findByPlaceholderText("Add tags...");
    await user.click(input);

    expect(await screen.findByText("Loading tags…")).toBeInTheDocument();
  });

  test("shows 'No matching tags' when the query matches nothing and creation is disabled", async () => {
    const user = userEvent.setup();
    render(<TagPicker />);
    pickTags({ suggestedTags: ["frontend"], allowCreate: false });

    const input = await screen.findByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "zzz-no-match");

    await waitFor(() => expect(screen.getByText("No matching tags")).toBeInTheDocument(), { timeout: 2000 });
  });

  test("allows creating a new tag from the input when allowCreate is true", async () => {
    const user = userEvent.setup();
    render(<TagPicker />);
    const promise = pickTags({ suggestedTags: ["frontend"], allowCreate: true });

    const input = await screen.findByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "brand-new-tag");

    const createButton = await waitFor(() => screen.getByRole("button", { name: /Create/ }), { timeout: 2000 });
    await user.click(createButton);

    // The debounced query clears asynchronously; wait for the "Create" option
    // to disappear before asserting on the newly-added chip to avoid matching
    // its lingering "brand-new-tag" label.
    await waitFor(() => expect(screen.queryByRole("button", { name: /Create/ })).not.toBeInTheDocument(), {
      timeout: 2000,
    });
    // The new tag now appears both as a selected chip and as a selected list
    // option in the still-open popup, so scope the assertion to the chip.
    const chips = screen.getAllByText("brand-new-tag");
    expect(chips.some((el) => el.closest('[data-slot="combobox-chip"]'))).toBe(true);

    // Click outside the combobox to close its still-open popup (without
    // dismissing the dialog) before the confirm button becomes reachable.
    fireEvent.mouseDown(document.body);
    fireEvent.click(document.body);

    fireEvent.click(screen.getByRole("button", { name: "Done" }));
    await expect(promise).resolves.toEqual(["brand-new-tag"]);
  });

  test("does not offer tag creation when allowCreate is false", async () => {
    const user = userEvent.setup();
    render(<TagPicker />);
    pickTags({ suggestedTags: ["frontend"], allowCreate: false });

    const input = await screen.findByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "brand-new-tag");

    await waitFor(() => expect(screen.getByText("No matching tags")).toBeInTheDocument(), { timeout: 2000 });
    expect(screen.queryByRole("button", { name: /Create/ })).not.toBeInTheDocument();
  });

  test("resolves with null when dismissed", async () => {
    render(<TagPicker />);
    const promise = pickTags();

    await screen.findByPlaceholderText("Add tags...");
    fireEvent.keyDown(document, { key: "Escape" });

    await expect(promise).resolves.toBeNull();
  });
});

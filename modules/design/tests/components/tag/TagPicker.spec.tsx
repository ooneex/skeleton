/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TagPicker } from "../../../src/components/tag/TagPicker";

afterEach(cleanup);

describe("TagPicker", () => {
  test("renders inline and follows controlled changes without creating a dialog", async () => {
    const onChange = mock();
    const { rerender } = render(
      <TagPicker value={["urgent"]} onChange={onChange} suggestedTags={["urgent", "billing"]} aria-label="Tags" />,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Done" })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("combobox", { name: "Tags" }));
    await userEvent.click(await screen.findByRole("option", { name: "billing" }));
    expect(onChange).toHaveBeenCalledWith(["urgent", "billing"]);
    await userEvent.keyboard("{Escape}");
    rerender(<TagPicker value={["billing"]} onChange={onChange} aria-label="Tags" />);
    expect(screen.queryByText("urgent")).not.toBeInTheDocument();
    expect(screen.getByText("billing")).toBeInTheDocument();
    rerender(<TagPicker value={[]} onChange={onChange} aria-label="Tags" />);
    expect(screen.queryByText("billing")).not.toBeInTheDocument();
  });

  test("renders the input placeholder and pre-populates chips from value", () => {
    render(<TagPicker value={["urgent", "billing"]} onChange={mock()} placeholder="Add tags..." />);

    expect(screen.getByPlaceholderText("Add tags...")).toBeInTheDocument();
    expect(screen.getByText("urgent")).toBeInTheDocument();
    expect(screen.getByText("billing")).toBeInTheDocument();
  });

  test("selecting a suggested tag reports it through onChange", async () => {
    const user = userEvent.setup();
    const onChange = mock();
    render(<TagPicker onChange={onChange} suggestedTags={["frontend", "backend"]} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);

    const option = await screen.findByRole("option", { name: "frontend" });
    await user.click(option);

    expect(onChange).toHaveBeenCalledWith(["frontend"]);
  });

  test("shows a loading state while isPending is true and no tags are suggested yet", async () => {
    const user = userEvent.setup();
    render(<TagPicker onChange={mock()} isPending suggestedTags={[]} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);

    expect(await screen.findByText("Loading tags…")).toBeInTheDocument();
  });

  test("shows 'No matching tags' when the query matches nothing and creation is disabled", async () => {
    const user = userEvent.setup();
    render(<TagPicker onChange={mock()} suggestedTags={["frontend"]} allowCreate={false} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "zzz-no-match");

    await waitFor(() => expect(screen.getByText("No matching tags")).toBeInTheDocument(), { timeout: 2000 });
  });

  test("allows creating a new tag from the input when allowCreate is true", async () => {
    const user = userEvent.setup();
    const onChange = mock();
    render(<TagPicker onChange={onChange} suggestedTags={["frontend"]} allowCreate size="md" />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "brand-new-tag");

    const createButton = await waitFor(() => screen.getByRole("button", { name: /Create/ }), { timeout: 2000 });
    await user.click(createButton);

    expect(onChange).toHaveBeenCalledWith(["brand-new-tag"]);
  });

  test("does not offer tag creation when allowCreate is false", async () => {
    const user = userEvent.setup();
    render(<TagPicker onChange={mock()} suggestedTags={["frontend"]} allowCreate={false} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "brand-new-tag");

    await waitFor(() => expect(screen.getByText("No matching tags")).toBeInTheDocument(), { timeout: 2000 });
    expect(screen.queryByRole("button", { name: /Create/ })).not.toBeInTheDocument();
  });

  test("keeps selected tags that are missing from the filtered suggestions", async () => {
    const user = userEvent.setup();
    render(
      <TagPicker
        value={["legacy"]}
        onChange={mock()}
        suggestedTags={["frontend"]}
        allowCreate={false}
        aria-labelledby="tags-label"
      />,
    );

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);
    await user.type(input, "front");

    expect(await screen.findByRole("option", { name: "frontend" })).toBeInTheDocument();
    expect(screen.getByText("legacy")).toBeInTheDocument();
  });
});

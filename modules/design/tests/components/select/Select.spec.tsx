/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Select } from "../../../src/components/select/Select";

afterEach(cleanup);

const BasicSelect = () => (
  <Select>
    <Select.Trigger>
      <Select.Value placeholder="Pick a fruit" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
      </Select.Group>
      <Select.Separator />
      <Select.Group>
        <Select.Label>Vegetables</Select.Label>
        <Select.Item value="carrot">Carrot</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select>
);

describe("Select", () => {
  test("renders the trigger with the placeholder and keeps the list closed", () => {
    render(<BasicSelect />);

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveTextContent("Pick a fruit");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  test("opens the list of options when the trigger is clicked", async () => {
    render(<BasicSelect />);

    fireEvent.click(screen.getByRole("combobox"));

    const listbox = await screen.findByRole("listbox");
    expect(listbox).toBeInTheDocument();
    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Carrot" })).toBeInTheDocument();
  });

  test("selecting an option updates the trigger value and closes the list", async () => {
    const user = userEvent.setup();
    render(<BasicSelect />);

    await user.click(screen.getByRole("combobox"));
    const option = await screen.findByRole("option", { name: "Banana" });
    await user.click(option);

    const trigger = await screen.findByRole("combobox");
    expect(trigger).not.toHaveAttribute("data-placeholder");
    expect(trigger).toHaveTextContent("banana");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  test("supports a controlled value and calls onValueChange", async () => {
    const user = userEvent.setup();
    let receivedValue: string | null = null;
    const onValueChange = (value: string | null) => {
      receivedValue = value;
    };

    render(
      <Select value="apple" onValueChange={onValueChange}>
        <Select.Trigger>
          <Select.Value placeholder="Pick a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("apple");

    await user.click(screen.getByRole("combobox"));
    const banana = await screen.findByRole("option", { name: "Banana" });
    await user.click(banana);

    expect(receivedValue as string | null).toBe("banana");
  });

  test("marks a disabled item as unavailable and skips selecting it", async () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Pick a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple" disabled>
            Apple
          </Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Content>
      </Select>,
    );

    fireEvent.click(screen.getByRole("combobox"));
    const disabledOption = await screen.findByRole("option", { name: "Apple" });
    expect(disabledOption).toHaveAttribute("data-disabled", "");

    fireEvent.click(disabledOption);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveTextContent("Pick a fruit");
  });

  test("renders a separator between groups", async () => {
    render(<BasicSelect />);

    fireEvent.click(screen.getByRole("combobox"));
    await screen.findByRole("listbox");

    expect(document.querySelector('[data-slot="select-separator"]')).not.toBeNull();
  });

  test("applies the size variant to the trigger", () => {
    render(
      <Select>
        <Select.Trigger size="lg">
          <Select.Value placeholder="Pick a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
        </Select.Content>
      </Select>,
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("data-size", "lg");
    expect(trigger.className).toContain("h-10");
  });
});

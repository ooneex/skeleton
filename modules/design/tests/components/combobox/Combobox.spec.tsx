/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

afterEach(cleanup);

const fruits = ["Apple", "Banana", "Blueberry", "Grapes", "Mango"];

const SingleCombobox = (props: { defaultOpen?: boolean; onValueChange?: (value: unknown) => void }) => (
  <Combobox items={fruits} defaultOpen={props.defaultOpen} onValueChange={props.onValueChange}>
    <Combobox.Input placeholder="Search fruit…" />
    <Combobox.Content>
      <Combobox.Empty>No fruits found.</Combobox.Empty>
      <Combobox.List>
        {(item: string) => (
          <Combobox.Item key={item} value={item}>
            {item}
          </Combobox.Item>
        )}
      </Combobox.List>
    </Combobox.Content>
  </Combobox>
);

describe("Combobox", () => {
  test("renders the input closed by default", () => {
    render(<SingleCombobox />);

    expect(screen.getByPlaceholderText("Search fruit…")).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument();
  });

  test("opens and lists all items when defaultOpen is set", async () => {
    render(<SingleCombobox defaultOpen />);

    for (const fruit of fruits) {
      expect(await screen.findByRole("option", { name: fruit })).toBeInTheDocument();
    }
  });

  test("typing filters the visible items", async () => {
    const user = userEvent.setup();
    render(<SingleCombobox defaultOpen />);

    const input = screen.getByPlaceholderText("Search fruit…");
    await user.type(input, "ban");

    expect(await screen.findByRole("option", { name: "Banana" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Grapes" })).not.toBeInTheDocument();
  });

  test("shows the empty state when no item matches the search", async () => {
    const user = userEvent.setup();
    render(<SingleCombobox defaultOpen />);

    const input = screen.getByPlaceholderText("Search fruit…");
    await user.type(input, "zzz");

    expect(await screen.findByText("No fruits found.")).toBeInTheDocument();
  });

  test("selecting an item calls onValueChange with that value", async () => {
    let selected: unknown;
    render(<SingleCombobox defaultOpen onValueChange={(value) => (selected = value)} />);

    const option = await screen.findByRole("option", { name: "Mango" });
    fireEvent.click(option);

    expect(selected).toBe("Mango");
  });

  test("supports multi-select with chips", async () => {
    let selected: unknown;
    render(
      <Combobox items={fruits} multiple defaultOpen onValueChange={(value) => (selected = value)}>
        <Combobox.Chips>
          <Combobox.ChipsInput placeholder="Search fruit…" />
        </Combobox.Chips>
        <Combobox.Content>
          <Combobox.Empty>No fruits found.</Combobox.Empty>
          <Combobox.List>
            {(item: string) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>,
    );

    const apple = await screen.findByRole("option", { name: "Apple" });
    fireEvent.click(apple);
    expect(selected).toEqual(["Apple"]);

    const banana = await screen.findByRole("option", { name: "Banana" });
    fireEvent.click(banana);
    expect(selected).toEqual(["Apple", "Banana"]);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  test("Combobox.Group renders a label above its items", async () => {
    render(
      <Combobox items={fruits} defaultOpen>
        <Combobox.Input placeholder="Search fruit…" />
        <Combobox.Content>
          <Combobox.Empty>No fruits found.</Combobox.Empty>
          <Combobox.Group items={fruits}>
            <Combobox.Label>Fruits</Combobox.Label>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item key={item} value={item}>
                  {item}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Group>
        </Combobox.Content>
      </Combobox>,
    );

    expect(await screen.findByText("Fruits")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Apple" })).toBeInTheDocument();
  });
});

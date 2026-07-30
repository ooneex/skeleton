/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

describe("ComboboxEmpty", () => {
  test("shows the empty state when filtering removes every option", async () => {
    const user = userEvent.setup();
    render(
      <Combobox items={["Apple", "Banana"]} defaultOpen>
        <Combobox.Input placeholder="Search fruit" />
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

    await user.type(screen.getByRole("combobox"), "zzz");

    expect(await screen.findByText("No fruits found.")).toBeInTheDocument();
  });

  test("merges a custom className", () => {
    render(
      <Combobox items={[]} defaultOpen>
        <Combobox.Content>
          <Combobox.Empty className="custom-empty">Nothing here</Combobox.Empty>
        </Combobox.Content>
      </Combobox>,
    );

    expect(document.querySelector('[data-slot="combobox-empty"]')).toHaveClass("custom-empty");
  });
});

/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";
import { ComboboxCollection } from "../../../src/components/combobox/ComboboxCollection";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(cleanup);

const fruits = ["Apple", "Banana"];

describe("ComboboxCollection", () => {
  test("renders collection items from the root item array and filters them", async () => {
    const user = userEvent.setup();
    render(
      <Combobox items={fruits} defaultOpen>
        <Combobox.Input placeholder="Search fruit" />
        <Combobox.Content>
          <ComboboxCollection>
            {(item: string) => (
              <Combobox.Item key={item} value={item}>
                {item}
              </Combobox.Item>
            )}
          </ComboboxCollection>
        </Combobox.Content>
      </Combobox>,
    );

    expect(await screen.findByRole("option", { name: "Apple" })).toBeInTheDocument();
    await user.type(screen.getByRole("combobox"), "ban");
    expect(await screen.findByRole("option", { name: "Banana" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "Apple" })).not.toBeInTheDocument();
  });
});

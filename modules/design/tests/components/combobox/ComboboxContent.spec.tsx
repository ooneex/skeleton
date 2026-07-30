/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Combobox } from "../../../src/components/combobox/Combobox";

// biome-ignore lint/suspicious/noExplicitAny: happy-dom gap
(HTMLElement.prototype as any).getAnimations ??= () => [];

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("ComboboxContent", () => {
  test("renders the popup into the provided container", async () => {
    const portalContainer = document.createElement("div");
    document.body.appendChild(portalContainer);

    render(
      <Combobox items={["Apple"]} defaultOpen>
        <Combobox.Input placeholder="Search fruit" />
        <Combobox.Content container={portalContainer} className="custom-content">
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

    expect(await screen.findByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(portalContainer.querySelector('[data-slot="combobox-content"]')).toHaveClass("custom-content");
  });

  test("marks anchored chip popups with data-chips", async () => {
    const anchor = document.createElement("div");

    render(
      <Combobox items={["Apple"]} defaultOpen>
        <Combobox.Input placeholder="Search fruit" />
        <Combobox.Content anchor={anchor}>
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

    await screen.findByRole("option", { name: "Apple" });
    expect(document.body.querySelector('[data-slot="combobox-content"]')?.getAttribute("data-chips")).toBe("true");
  });
});

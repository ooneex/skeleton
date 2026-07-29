/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordion } from "../../../src/components/accordion/Accordion";

afterEach(cleanup);

describe("Accordion", () => {
  test("renders items with trigger and content", () => {
    render(
      <Accordion>
        <Accordion.Item value="a">
          <Accordion.Trigger>Section A</Accordion.Trigger>
          <Accordion.Content>Body A</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="b">
          <Accordion.Trigger>Section B</Accordion.Trigger>
          <Accordion.Content>Body B</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "Section A" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Section B" })).toBeInTheDocument();
  });

  test("content is collapsed by default", () => {
    render(
      <Accordion>
        <Accordion.Item value="a">
          <Accordion.Trigger>Section A</Accordion.Trigger>
          <Accordion.Content>Body A</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Section A" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking a trigger expands its panel", () => {
    render(
      <Accordion>
        <Accordion.Item value="a">
          <Accordion.Trigger>Section A</Accordion.Trigger>
          <Accordion.Content>Body A</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Section A" });
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Body A")).toBeInTheDocument();
  });

  test("supports multiple open items when multiple is enabled", () => {
    render(
      <Accordion multiple>
        <Accordion.Item value="a">
          <Accordion.Trigger>Section A</Accordion.Trigger>
          <Accordion.Content>Body A</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="b">
          <Accordion.Trigger>Section B</Accordion.Trigger>
          <Accordion.Content>Body B</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Section A" }));
    fireEvent.click(screen.getByRole("button", { name: "Section B" }));

    expect(screen.getByRole("button", { name: "Section A" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Section B" })).toHaveAttribute("aria-expanded", "true");
  });
});

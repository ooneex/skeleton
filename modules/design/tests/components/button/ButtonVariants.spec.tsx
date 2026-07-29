/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonBack } from "../../../src/components/button/ButtonBack";
import { ButtonCancel } from "../../../src/components/button/ButtonCancel";
import { ButtonDelete } from "../../../src/components/button/ButtonDelete";
import { ButtonEdit } from "../../../src/components/button/ButtonEdit";
import { ButtonMore } from "../../../src/components/button/ButtonMore";
import { ButtonNext } from "../../../src/components/button/ButtonNext";
import { ButtonSave } from "../../../src/components/button/ButtonSave";

afterEach(cleanup);

const variants = [
  { Component: ButtonBack, defaultLabel: "Back", variantClass: "ring-1" },
  { Component: ButtonCancel, defaultLabel: "Cancel", variantClass: "hover:bg-muted" },
  { Component: ButtonDelete, defaultLabel: "Delete", variantClass: "bg-destructive/10" },
  { Component: ButtonEdit, defaultLabel: "Edit", variantClass: "ring-1" },
  { Component: ButtonNext, defaultLabel: "Next", variantClass: "bg-primary" },
  { Component: ButtonSave, defaultLabel: "Save", variantClass: "bg-primary" },
];

describe.each(variants)("$Component.name", ({ Component, defaultLabel, variantClass }) => {
  test("renders its default label", () => {
    render(<Component />);
    expect(screen.getByRole("button")).toHaveTextContent(defaultLabel);
  });

  test("renders custom children instead of the default label", () => {
    render(<Component>Custom label</Component>);
    expect(screen.getByRole("button")).toHaveTextContent("Custom label");
  });

  test("applies its fixed variant class", () => {
    render(<Component />);
    expect(screen.getByRole("button").className).toContain(variantClass);
  });

  test("forwards extra props to the underlying button", () => {
    render(<Component disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});

describe("ButtonMore", () => {
  test("renders an icon-only button with no text content", () => {
    render(<ButtonMore aria-label="More actions" />);
    const button = screen.getByRole("button", { name: "More actions" });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("rounded-full");
  });

  test("merges a custom className with the fixed rounded-full class", () => {
    render(<ButtonMore aria-label="More actions" className="mt-2" />);
    const button = screen.getByRole("button", { name: "More actions" });
    expect(button.className).toContain("rounded-full");
    expect(button.className).toContain("mt-2");
  });
});

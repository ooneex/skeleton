/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Field } from "../../../src/components/field/Field";

afterEach(cleanup);

describe("Field", () => {
  test("composes Label, Content, Description, and Error", () => {
    render(
      <Field data-testid="field">
        <Field.Label htmlFor="email">Email</Field.Label>
        <Field.Content>
          <input id="email" />
          <Field.Description>We'll never share your email.</Field.Description>
          <Field.Error errors={[{ message: "Required" }]} />
        </Field.Content>
      </Field>,
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("We'll never share your email.")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  test("defaults to the vertical orientation", () => {
    render(<Field data-testid="field" />);
    expect(screen.getByTestId("field")).toHaveAttribute("data-orientation", "vertical");
  });

  test("supports the horizontal orientation", () => {
    render(<Field data-testid="field" orientation="horizontal" />);
    expect(screen.getByTestId("field")).toHaveAttribute("data-orientation", "horizontal");
  });

  test("Field.Label renders a required indicator when required=true", () => {
    render(<Field.Label required>Name</Field.Label>);
    expect(screen.getByText("Name").parentElement).toHaveTextContent("Name*");
  });

  test("Field.Label does not render a required indicator by default", () => {
    render(<Field.Label>Name</Field.Label>);
    expect(screen.getByText("Name").parentElement).toHaveTextContent("Name");
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  test("Field.Legend supports the 'legend' and 'label' variants", () => {
    const { rerender } = render(<Field.Legend data-testid="legend">Caption</Field.Legend>);
    expect(screen.getByTestId("legend")).toHaveAttribute("data-variant", "legend");

    rerender(
      <Field.Legend data-testid="legend" variant="label">
        Caption
      </Field.Legend>,
    );
    expect(screen.getByTestId("legend")).toHaveAttribute("data-variant", "label");
  });

  test("Field.Separator renders centered content when children are provided", () => {
    render(<Field.Separator data-testid="separator">OR</Field.Separator>);
    const separator = screen.getByTestId("separator");
    expect(separator).toHaveAttribute("data-content", "true");
    expect(screen.getByText("OR")).toBeInTheDocument();
  });

  test("Field.Separator has no centered content marker when there are no children", () => {
    render(<Field.Separator data-testid="separator" />);
    expect(screen.getByTestId("separator")).toHaveAttribute("data-content", "false");
  });
});

describe("Field.Error", () => {
  test("renders custom children over the errors prop when provided", () => {
    render(<Field.Error errors={[{ message: "Ignored" }]}>Custom message</Field.Error>);
    expect(screen.getByRole("alert")).toHaveTextContent("Custom message");
    expect(screen.queryByText("Ignored")).not.toBeInTheDocument();
  });

  test("renders a single error message inline when there is exactly one unique error", () => {
    render(<Field.Error errors={[{ message: "Required" }, { message: "Required" }]} />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  test("renders a deduplicated list when there are multiple distinct errors", () => {
    render(<Field.Error errors={[{ message: "Too short" }, { message: "Too short" }, { message: "Required" }]} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Too short");
    expect(items[1]).toHaveTextContent("Required");
  });

  test("renders nothing when there are no errors and no children", () => {
    const { container } = render(<Field.Error />);
    expect(container).toBeEmptyDOMElement();
  });

  test("renders nothing for an errors array containing only entries without a message", () => {
    const { container } = render(<Field.Error errors={[{}, undefined]} />);
    expect(container).toBeEmptyDOMElement();
  });
});

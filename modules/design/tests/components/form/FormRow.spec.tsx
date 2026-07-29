/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormRow } from "../../../src/components/form/FormRow";

afterEach(cleanup);

const DummyIcon = (props: React.SVGProps<SVGSVGElement>) => <svg data-testid="dummy-icon" {...props} />;

describe("FormRow", () => {
  test("renders children", () => {
    render(<FormRow>Some value</FormRow>);
    expect(screen.getByText("Some value")).toBeInTheDocument();
  });

  test("renders a label when provided", () => {
    render(<FormRow label="Email">john@example.com</FormRow>);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("does not render a label when omitted", () => {
    render(<FormRow>content</FormRow>);
    expect(screen.queryByText("Email")).not.toBeInTheDocument();
  });

  test("renders a function-component icon", () => {
    render(<FormRow icon={DummyIcon}>content</FormRow>);
    expect(screen.getByTestId("dummy-icon")).toBeInTheDocument();
  });

  test("renders a ReactNode icon as-is", () => {
    render(<FormRow icon={<svg data-testid="node-icon" />}>content</FormRow>);
    expect(screen.getByTestId("node-icon")).toBeInTheDocument();
  });

  test("does not render an icon wrapper when icon is omitted", () => {
    const { container } = render(<FormRow>content</FormRow>);
    expect(container.querySelector('[class*="bg-muted"]')).not.toBeInTheDocument();
  });

  test("applies a custom className to the root", () => {
    const { container } = render(<FormRow className="custom-row">content</FormRow>);
    expect(container.firstElementChild).toHaveClass("custom-row");
  });
});

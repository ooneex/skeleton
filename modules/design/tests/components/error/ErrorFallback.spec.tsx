/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const back = mock(() => {});
const invalidate = mock(() => {});

mock.module("@tanstack/react-router", () => ({
  useRouter: () => ({ history: { back }, invalidate }),
  Link: ({ to, className, children }: { to: string; className?: string; children?: React.ReactNode }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));

const { ErrorFallback } = await import("../../../src/components/error/ErrorFallback");

afterEach(() => {
  cleanup();
  back.mockClear();
  invalidate.mockClear();
});

const info = {} as Parameters<typeof ErrorFallback>[0]["info"];

describe("ErrorFallback", () => {
  test("renders the error name and message", () => {
    const error = Object.assign(new Error("Boom"), { name: "CustomError" });
    const { container } = render(<ErrorFallback error={error} reset={() => {}} info={info} />);

    expect(container.textContent).toContain("Boom");
    expect(container.textContent).toContain("CustomError");
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  test('falls back to "Error" and a generic message when the error has none', () => {
    const error = new Error();
    error.name = "";
    const { container } = render(<ErrorFallback error={error} reset={() => {}} info={info} />);

    expect(container.textContent).toContain("An unexpected error occurred.");
  });

  test("navigates back through the router history when 'Go back' is clicked", () => {
    render(<ErrorFallback error={new Error("Boom")} reset={() => {}} info={info} />);
    fireEvent.click(screen.getByRole("button", { name: /Go back/ }));
    expect(back).toHaveBeenCalledTimes(1);
  });

  test("calls reset() and invalidates the router when 'Try again' is clicked", () => {
    let resetCalled = false;
    render(<ErrorFallback error={new Error("Boom")} reset={() => (resetCalled = true)} info={info} />);
    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    expect(resetCalled).toBe(true);
    expect(invalidate).toHaveBeenCalledTimes(1);
  });

  test("renders a 'Go home' link pointing at the root route", () => {
    render(<ErrorFallback error={new Error("Boom")} reset={() => {}} info={info} />);
    expect(screen.getByRole("link", { name: "Go home" })).toHaveAttribute("href", "/");
  });

  test("toggles the stack-trace drawer open and closed", () => {
    render(<ErrorFallback error={new Error("Boom")} reset={() => {}} info={info} />);

    const toggle = screen.getByRole("button", { name: /Show stack trace/ });
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: /Hide stack trace/ })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Hide stack trace/ }));
    expect(screen.getByRole("button", { name: /Show stack trace/ })).toBeInTheDocument();
  });

  test("does not render the stack-trace toggle when the error has no stack frames", () => {
    const error = new Error("Boom");
    Object.defineProperty(error, "stack", { value: "" });
    render(<ErrorFallback error={error} reset={() => {}} info={info} />);

    expect(screen.queryByText(/stack trace/i)).not.toBeInTheDocument();
  });
});

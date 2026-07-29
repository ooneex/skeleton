/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputOTP } from "../../../src/components/input/InputOTP";
import { InputOTPGroup } from "../../../src/components/input/InputOTPGroup";
import { InputOTPSeparator } from "../../../src/components/input/InputOTPSeparator";
import { InputOTPSlot } from "../../../src/components/input/InputOTPSlot";

afterEach(cleanup);

const renderOtp = (props: Partial<Omit<React.ComponentProps<typeof InputOTP>, "children" | "render">> = {}) =>
  render(
    <InputOTP maxLength={4} {...props}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>,
  );

describe("InputOTP", () => {
  test("renders a hidden text input accepting the OTP value", () => {
    renderOtp();
    expect(screen.getByRole("textbox", { hidden: true })).toBeInTheDocument();
  });

  test("displays typed characters in the slots", () => {
    renderOtp();
    const input = screen.getByRole("textbox", { hidden: true });
    fireEvent.change(input, { target: { value: "12" } });
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("calls onChange as the value updates", () => {
    let received = "";
    renderOtp({ onChange: (value) => (received = value) });
    const input = screen.getByRole("textbox", { hidden: true });
    fireEvent.change(input, { target: { value: "42" } });
    expect(received).toBe("42");
  });

  test("exposes Group, Slot, and Separator as static properties", () => {
    expect(InputOTP.Group).toBe(InputOTPGroup);
    expect(InputOTP.Slot).toBe(InputOTPSlot);
    expect(InputOTP.Separator).toBe(InputOTPSeparator);
  });

  test("is disabled and shows reduced opacity when disabled", () => {
    const { container } = renderOtp({ disabled: true });
    expect(screen.getByRole("textbox", { hidden: true })).toBeDisabled();
    expect(container.querySelector("[data-input-otp-container]")).toHaveClass("has-disabled:opacity-50");
  });
});

describe("InputOTPSeparator", () => {
  test("renders as an aria-hidden decorative separator", () => {
    const { container } = render(<InputOTPSeparator />);
    const el = container.querySelector('[data-slot="input-otp-separator"]');
    expect(el).toHaveAttribute("aria-hidden", "true");
  });
});

describe("InputOTPSlot", () => {
  // Defect: OTPInputContext's default value (from the `input-otp` library) is `{}`,
  // so `inputOTPContext?.slots[index]` is not fully guarded by optional chaining —
  // `.slots` resolves to `undefined` and `undefined[index]` throws instead of the
  // component rendering an empty slot gracefully.
  test("throws when rendered outside an InputOTP provider (missing context guard)", () => {
    expect(() => render(<InputOTPSlot index={0} />)).toThrow();
  });
});

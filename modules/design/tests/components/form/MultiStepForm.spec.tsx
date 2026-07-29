/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MultiStepForm } from "../../../src/components/form/MultiStepForm";

afterEach(cleanup);

const steps = [
  { title: "Step 1", description: "First step", content: <div>Content 1</div> },
  { title: "Step 2", description: "Second step", content: <div>Content 2</div> },
  { title: "Step 3", description: "Third step", content: <div>Content 3</div> },
];

describe("MultiStepForm", () => {
  test("renders the first step by default", () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("First step")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  test("the back button is disabled on the first step", () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    expect(screen.getByRole("button", { name: /back/i })).toBeDisabled();
  });

  test("advances to the next step when clicking continue", () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  test("goes back to the previous step when clicking back", () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  test("shows a save button with the custom label on the last step", () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} submitLabel="Finish" />);
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(screen.getByText("Step 3")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Finish" })).toBeInTheDocument();
  });

  test("calls onSubmit when clicking save on the last step", () => {
    let submitted = false;
    render(
      <MultiStepForm
        steps={steps}
        onSubmit={() => {
          submitted = true;
        }}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    fireEvent.click(screen.getByRole("button", { name: "Save" }));
    expect(submitted).toBe(true);
  });

  test("shows the submitting label and disables save while isSubmitting", () => {
    render(<MultiStepForm steps={steps} onSubmit={() => {}} isSubmitting submittingLabel="Please wait..." />);
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    const saveButton = screen.getByRole("button", { name: "Please wait..." });
    expect(saveButton).toBeDisabled();
  });
});

/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogContext, type DialogContextValueType } from "../../../src/components/dialog/DialogContext";
import { useRegisterDialogDescription, useRegisterDialogTitle } from "../../../src/components/dialog/useDialogPresence";

afterEach(cleanup);

const makeContextValue = (overrides: Partial<DialogContextValueType> = {}): DialogContextValueType => ({
  open: true,
  dismiss: () => {},
  titleId: "title-id",
  descriptionId: "description-id",
  setHasTitle: () => {},
  setHasDescription: () => {},
  ...overrides,
});

const TitleHarness = () => {
  const titleId = useRegisterDialogTitle();
  return <span data-testid="title-id">{titleId}</span>;
};

const DescriptionHarness = () => {
  const descriptionId = useRegisterDialogDescription();
  return <span data-testid="description-id">{descriptionId}</span>;
};

describe("useRegisterDialogTitle", () => {
  test("returns the context's titleId and registers presence", () => {
    const hasTitleCalls: boolean[] = [];
    const contextValue = makeContextValue({ setHasTitle: (hasTitle) => hasTitleCalls.push(hasTitle) });

    const { getByTestId } = render(
      <DialogContext.Provider value={contextValue}>
        <TitleHarness />
      </DialogContext.Provider>,
    );

    expect(getByTestId("title-id").textContent).toBe("title-id");
    expect(hasTitleCalls).toEqual([true]);
  });

  test("unregisters presence on unmount", () => {
    const hasTitleCalls: boolean[] = [];
    const contextValue = makeContextValue({ setHasTitle: (hasTitle) => hasTitleCalls.push(hasTitle) });

    const { unmount } = render(
      <DialogContext.Provider value={contextValue}>
        <TitleHarness />
      </DialogContext.Provider>,
    );
    unmount();

    expect(hasTitleCalls).toEqual([true, false]);
  });

  test("returns undefined when rendered outside a dialog context", () => {
    const { getByTestId } = render(<TitleHarness />);
    expect(getByTestId("title-id").textContent).toBe("");
  });
});

describe("useRegisterDialogDescription", () => {
  test("returns the context's descriptionId and registers presence", () => {
    const hasDescriptionCalls: boolean[] = [];
    const contextValue = makeContextValue({
      setHasDescription: (hasDescription) => hasDescriptionCalls.push(hasDescription),
    });

    const { getByTestId } = render(
      <DialogContext.Provider value={contextValue}>
        <DescriptionHarness />
      </DialogContext.Provider>,
    );

    expect(getByTestId("description-id").textContent).toBe("description-id");
    expect(hasDescriptionCalls).toEqual([true]);
  });
});

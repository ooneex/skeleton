import { describe, expect, test } from "bun:test";
import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { DialogContext, useDialogContext } from "../../../src/components/dialog/DialogContext";

describe("DialogContext", () => {
  test("returns null without a provider and exposes provider values when mounted", () => {
    const { result: outside } = renderHook(() => useDialogContext());
    expect(outside.current).toBeNull();

    const wrapper = ({ children }: { children: ReactNode }) => (
      <DialogContext.Provider
        value={{
          open: true,
          dismiss: () => {},
          titleId: "title",
          descriptionId: "description",
          setHasTitle: () => {},
          setHasDescription: () => {},
        }}
      >
        {children}
      </DialogContext.Provider>
    );

    const { result } = renderHook(() => useDialogContext(), { wrapper });
    expect(result.current?.titleId).toBe("title");
  });
});

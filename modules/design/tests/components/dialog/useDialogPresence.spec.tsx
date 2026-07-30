/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { DialogContext } from "../../../src/components/dialog/DialogContext";
import { useRegisterDialogDescription, useRegisterDialogTitle } from "../../../src/components/dialog/useDialogPresence";

afterEach(cleanup);

describe("useDialogPresence", () => {
  test("registers title and description presence with dialog context", () => {
    const setHasTitle = mock((_value: boolean) => {});
    const setHasDescription = mock((_value: boolean) => {});

    const wrapper = ({ children }: { children: ReactNode }) => (
      <DialogContext.Provider
        value={{
          open: true,
          dismiss: () => {},
          titleId: "title-id",
          descriptionId: "description-id",
          setHasTitle,
          setHasDescription,
        }}
      >
        {children}
      </DialogContext.Provider>
    );

    const titleHook = renderHook(() => useRegisterDialogTitle(), { wrapper });
    const descriptionHook = renderHook(() => useRegisterDialogDescription(), { wrapper });

    expect(titleHook.result.current).toBe("title-id");
    expect(descriptionHook.result.current).toBe("description-id");
    expect(setHasTitle).toHaveBeenCalledWith(true);
    expect(setHasDescription).toHaveBeenCalledWith(true);

    titleHook.unmount();
    descriptionHook.unmount();

    expect(setHasTitle).toHaveBeenCalledWith(false);
    expect(setHasDescription).toHaveBeenCalledWith(false);
  });
});

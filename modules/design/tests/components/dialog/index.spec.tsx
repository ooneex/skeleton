/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { act, cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertDialog, Dialog } from "../../../src/components/dialog";

afterEach(cleanup);

describe("dialog index", () => {
  test("re-exports Dialog and AlertDialog callables", async () => {
    render(
      <>
        <Dialog />
        <AlertDialog />
      </>,
    );

    await act(async () => {
      Dialog.call({ title: "Dialog title" });
    });
    expect(await screen.findByText("Dialog title")).toBeInTheDocument();
  });
});

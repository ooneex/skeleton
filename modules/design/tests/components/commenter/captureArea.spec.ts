/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { captureArea } from "../../../src/components/commenter/captureArea";

const rect = { x: 10, y: 10, width: 100, height: 50 };
const nativeMediaDevices = navigator.mediaDevices;

const setMediaDevices = (value: unknown) => {
  Object.defineProperty(navigator, "mediaDevices", { value, configurable: true });
};

afterEach(() => {
  setMediaDevices(nativeMediaDevices);
});

describe("captureArea", () => {
  test("returns null when the browser has no screen-capture API", async () => {
    setMediaDevices(undefined);

    expect(await captureArea(rect)).toBeNull();
  });

  test("returns null when the user dismisses the share prompt", async () => {
    setMediaDevices({ getDisplayMedia: mock(async () => Promise.reject(new Error("NotAllowedError"))) });

    expect(await captureArea(rect)).toBeNull();
  });

  test("stops the stream and leaves no video behind when no frame ever decodes", async () => {
    const stop = mock(() => {});
    setMediaDevices({ getDisplayMedia: mock(async () => ({ getTracks: () => [{ stop }] })) });

    // happy-dom never decodes a frame: the caller must get null rather than a blank image.
    expect(await captureArea(rect)).toBeNull();
    expect(stop).toHaveBeenCalled();
    expect(document.querySelector("video")).toBeNull();
  });
});

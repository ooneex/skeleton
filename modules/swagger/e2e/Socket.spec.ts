import { expect, test } from "@playwright/test";

test("opens, exchanges and closes a socket route", async ({ page }) => {
  // A stand-in for the browser WebSocket: it echoes whatever is sent, which is
  // enough to drive the panel without needing a live socket backend.
  await page.addInitScript(() => {
    class FakeSocket {
      onopen: ((e: unknown) => void) | null = null;
      onmessage: ((e: { data: string }) => void) | null = null;
      onclose: ((e: unknown) => void) | null = null;
      onerror: ((e: unknown) => void) | null = null;
      readyState = 1;
      static OPEN = 1;
      constructor(public url: string) {
        setTimeout(() => this.onopen?.({}), 20);
      }
      send(raw: string) {
        const sent = JSON.parse(raw);
        setTimeout(() => this.onmessage?.({ data: JSON.stringify({ success: true, data: { echo: sent.payload } }) }), 20);
      }
      close() { this.readyState = 3; this.onclose?.({ code: 1000, reason: "" }); }
    }
    (window as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
  });

  await page.goto("/?route=socket-api-v1-feed&tab=try");

  await expect(page.getByText("Not connected")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send message" })).toBeDisabled();

  await page.getByRole("button", { name: "Connect" }).click();
  await expect(page.getByText("Connected", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("SENT")).toBeVisible();
  await expect(page.getByText("RECEIVED")).toBeVisible();
  await expect(page.getByText("orders", { exact: false }).first()).toBeVisible();

  await page.getByRole("button", { name: "Disconnect" }).click();
  await expect(page.getByText("Closed", { exact: true })).toBeVisible();
});

test("documents a socket route as WS and shows its contract", async ({ page }) => {
  await page.goto("/?route=socket-api-v1-feed");

  await expect(page.getByText("Stream activity events as they happen")).toBeVisible();
  await expect(page.getByText("A WebSocket route.", { exact: false })).toBeVisible();
});

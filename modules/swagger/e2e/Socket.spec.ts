import { expect, test } from "@playwright/test";
import { findRoute, isSendableSocket } from "./routes";

// `src/features/` is rebuilt from the target's controllers: each spec picks a
// socket route of the shape it needs, and skips itself when the API has none.

test("opens, exchanges and closes a socket route", async ({ page }) => {
  const route = await findRoute(isSendableSocket);
  test.skip(!route, "The API has no socket route whose message can be sent as prefilled");

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
        setTimeout(
          () => this.onmessage?.({ data: JSON.stringify({ success: true, data: { echo: sent.payload } }) }),
          20,
        );
      }
      close() {
        this.readyState = 3;
        this.onclose?.({ code: 1000, reason: "" });
      }
    }
    (window as unknown as { WebSocket: unknown }).WebSocket = FakeSocket;
  });

  await page.goto(`/?route=${route?.id}&tab=try`);

  await expect(page.getByText("Not connected")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send message" })).toBeDisabled();

  await page.getByRole("button", { name: "Connect" }).click();
  await expect(page.getByText("Connected", { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("SENT")).toBeVisible();
  // The message must carry `queries`, even empty: a route declaring `queries:`
  // rejects a message that omits the key with INVALID_QUERY.
  await expect(page.locator("pre").filter({ hasText: "queries" }).first()).toBeVisible();
  await expect(page.getByText("RECEIVED")).toBeVisible();
  await expect(page.locator("pre").filter({ hasText: "echo" }).first()).toBeVisible();

  await page.getByRole("button", { name: "Disconnect" }).click();
  await expect(page.getByText("Closed", { exact: true })).toBeVisible();
});

test("documents a socket route as WS and shows its contract", async ({ page }) => {
  const route = await findRoute((meta) => meta.method === "socket");
  test.skip(!route, "The API has no socket route");
  if (!route) return;

  await page.goto(`/?route=${route.id}`);

  await expect(page.getByText(route.meta.summary ?? route.meta.title).first()).toBeVisible();
  await expect(page.getByText("A WebSocket route.", { exact: false })).toBeVisible();
});

test("documents the message payload of a socket route", async ({ page }) => {
  const route = await findRoute((meta) => meta.method === "socket" && (meta.payload?.fields ?? []).length > 0);
  test.skip(!route, "The API has no socket route with a message payload");
  if (!route) return;

  await page.goto(`/?route=${route.id}`);

  // A socket carries its payload in the message, so the docs must not claim the
  // route takes nothing.
  await expect(page.getByText("This route takes no parameter and no body.")).toBeHidden();
  await expect(page.getByText("Message payload")).toBeVisible();
  await expect(page.getByText(route.meta.payload?.fields?.[0]?.name ?? "", { exact: false }).first()).toBeVisible();
});

import { expect, test } from "@playwright/test";

test("renders the api reference home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("API Reference");
  await expect(page.getByRole("img", { name: "API reference" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Jump to a route/i })).toBeVisible();
  await expect(page.getByLabel("API base URL")).toBeVisible();
});

test("opens a documented route and shows its contract", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "/api/v1/health" }).click();

  await expect(page.getByText("Report whether the app is up and reachable.")).toBeVisible();
  await expect(page.getByText("Public", { exact: true })).toBeVisible();
  await expect(page.getByText("app.health.check")).toBeVisible();
  await expect(page.getByText("200", { exact: true })).toBeVisible();
});

test("shows the curl line for the selected route in the try-it tab", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("tab", { name: "Try it" }).click();

  await expect(page.getByText("curl -X GET", { exact: false })).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeEnabled();
});

test("keeps the selected route in the url so it can be shared", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health&tab=try");

  await expect(page.getByRole("tab", { name: "Try it" })).toHaveAttribute("data-selected", "");
  await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
});

import { expect, test } from "@playwright/test";

test("renders the storybook home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Storybook");
  await expect(page.getByRole("img", { name: "Ooneex" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Jump to/i })).toBeVisible();
});

test("opens a real story and shows its usage guidance", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Status", exact: true }).click();

  await expect(page.getByRole("button", { name: "Choose status" })).toBeVisible();
  await expect(page.getByLabel("breadcrumb")).toContainText("Components");
  await expect(page.getByLabel("breadcrumb")).toContainText("Status");

  await page.getByRole("tab", { name: "Usage" }).click();

  await expect(page.getByText("ready-made status system", { exact: false })).toBeVisible();
});

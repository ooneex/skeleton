import { expect, test } from "@playwright/test";

test("renders the admin home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Ooneex");
  await expect(page.getByText('Hello "/"!')).toBeVisible();
});

test("shows the not-found page and lets the user return home", async ({ page }) => {
  await page.goto("/missing");

  await expect(page.getByText("404")).toBeVisible();
  await expect(page.getByText("The page you are looking for doesn't exist or has been moved.")).toBeVisible();

  await page.getByRole("link", { name: "Go home" }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByText('Hello "/"!')).toBeVisible();
});

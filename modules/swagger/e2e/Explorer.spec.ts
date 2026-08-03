import { expect, test } from "@playwright/test";

test("renders the api reference home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("API Reference");
  await expect(page.getByRole("img", { name: "API reference" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Jump to a route/i })).toBeVisible();
  await expect(page.getByLabel("Environment")).toBeVisible();
});

test("opens a documented route and shows its contract", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "health" }).click();

  await expect(page.getByText("Report whether the app is up and reachable.")).toBeVisible();
  await expect(page.getByText("Public", { exact: true })).toBeVisible();
  await expect(page.getByText("app.health.check")).toBeVisible();
  await expect(page.getByText("The app is up.", { exact: false })).toBeVisible();
});

test("splits the documentation into input and output", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health");

  await expect(page.getByRole("heading", { name: "Input" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Output" })).toBeVisible();
  await expect(page.getByText("This route takes no parameter and no body.")).toBeVisible();
});

test("shows the curl line and a header editor in the try-it tab", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health");

  await page.getByRole("tab", { name: "Try it" }).click();

  await expect(page.getByText("curl -X GET", { exact: false })).toBeVisible();
  await expect(page.getByRole("button", { name: "Add header" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeEnabled();
});

test("lets a header be added and disabled", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health&tab=try");

  await page.getByRole("button", { name: "Add header" }).click();
  await page.getByLabel("Header 1 name").fill("X-Tenant");
  await page.getByLabel("Header 1 value").fill("acme");

  await expect(page.getByText("X-Tenant: acme", { exact: false })).toBeVisible();

  await page.getByLabel("Enable X-Tenant").uncheck();

  await expect(page.getByText("X-Tenant: acme", { exact: false })).toBeHidden();
});

test("resolves an environment variable into the request", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health&tab=try");

  await page.getByRole("button", { name: "Edit" }).click();
  await page.getByRole("button", { name: "Add variable" }).click();
  await page.getByLabel("Variable 1 name").fill("tenant");
  await page.getByLabel("Variable 1 value").fill("acme");
  await page.getByRole("button", { name: "Done" }).click();

  await page.getByRole("button", { name: "Add header" }).click();
  await page.getByLabel("Header 1 name").fill("X-Tenant");
  await page.getByLabel("Header 1 value").fill("{{tenant}}");

  await expect(page.getByText("X-Tenant: acme", { exact: false })).toBeVisible();
});

test("blocks Send while a variable cannot be resolved", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health&tab=try");

  await page.getByRole("button", { name: "Add header" }).click();
  await page.getByLabel("Header 1 name").fill("X-Region");
  await page.getByLabel("Header 1 value").fill("{{region}}");

  await expect(page.getByText("Undefined variable: {{region}}")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeDisabled();
});

test("keeps the selected route in the url so it can be shared", async ({ page }) => {
  await page.goto("/?route=get-api-v1-health&tab=try");

  await expect(page.getByRole("tab", { name: "Try it" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
});

test("blocks Send while a required field is empty", async ({ page }) => {
  await page.goto("/?route=post-api-v1-media-upload&tab=try");

  // `avatar` is required and no file has been chosen yet.
  await expect(page.getByText("Required field left empty: avatar")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeDisabled();
});

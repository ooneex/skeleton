import { expect, test } from "@playwright/test";
import { findRoute, isBareHttpRoute, nestedLabelOf, requiresFile } from "./routes";

// `src/features/` is rebuilt from the target's controllers, so every spec below
// picks a route of the shape it needs instead of naming one.
const bareRoute = () => findRoute(isBareHttpRoute);

test("renders the api reference home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("API Reference");
  await expect(page.getByRole("img", { name: "API reference" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Jump to a route/i })).toBeVisible();
  await expect(page.getByRole("combobox", { name: "Environment", exact: true })).toBeVisible();
});

test("opens a documented route and shows its contract", async ({ page }) => {
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");
  if (!route) return;

  await page.goto(`/?route=${route.id}`);

  await expect(page.getByText(route.meta.summary ?? route.meta.title).first()).toBeVisible();
  await expect(
    page.getByText(route.meta.roles.length > 0 ? route.meta.roles.join(" · ") : "Public", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText(route.meta.key)).toBeVisible();
  const outcome = route.meta.responses?.[0]?.description;
  if (outcome) {
    await expect(page.getByText(outcome, { exact: false }).first()).toBeVisible();
  }
});

test("splits the documentation into input and output", async ({ page }) => {
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");

  await page.goto(`/?route=${route?.id}`);

  await expect(page.getByRole("heading", { name: "Input" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Output" })).toBeVisible();
  await expect(page.getByText("This route takes no parameter and no body.")).toBeVisible();
});

test("shows the curl line and a header editor in the try-it tab", async ({ page }) => {
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");
  if (!route) return;

  await page.goto(`/?route=${route.id}`);

  await page.getByRole("tab", { name: "Try it" }).click();

  await expect(page.getByText(`curl -X ${route.meta.method.toUpperCase()}`, { exact: false })).toBeVisible();
  await expect(page.getByRole("button", { name: "Add header" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeEnabled();
});

test("lets a header be added and disabled", async ({ page }) => {
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");

  await page.goto(`/?route=${route?.id}&tab=try`);

  await page.getByRole("button", { name: "Add header" }).click();
  await page.getByLabel("Header 1 name").fill("X-Tenant");
  await page.getByLabel("Header 1 value").fill("acme");

  await expect(page.getByText("X-Tenant: acme", { exact: false })).toBeVisible();

  await page.getByLabel("Enable X-Tenant").uncheck();

  await expect(page.getByText("X-Tenant: acme", { exact: false })).toBeHidden();
});

test("resolves an environment variable into the request", async ({ page }) => {
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");

  await page.goto(`/?route=${route?.id}&tab=try`);

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
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");

  await page.goto(`/?route=${route?.id}&tab=try`);

  await page.getByRole("button", { name: "Add header" }).click();
  await page.getByLabel("Header 1 name").fill("X-Region");
  await page.getByLabel("Header 1 value").fill("{{region}}");

  await expect(page.getByText("Undefined variable: {{region}}")).toBeVisible();
  await expect(page.getByRole("button", { name: "Send" })).toBeDisabled();
});

test("keeps the selected route in the url so it can be shared", async ({ page }) => {
  const route = await bareRoute();
  test.skip(!route, "The API has no route that takes no input");

  await page.goto(`/?route=${route?.id}&tab=try`);

  await expect(page.getByRole("tab", { name: "Try it" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
});

test("blocks Send while a required field is empty", async ({ page }) => {
  const route = await findRoute(requiresFile);
  test.skip(!route, "The API has no upload with a required file");
  if (!route) return;
  const file = route.meta.payload?.fields?.find((field) => field.type === "file" && field.required);

  await page.goto(`/?route=${route.id}&tab=try`);

  // No file has been chosen yet.
  await expect(page.getByText(/Required fields? left empty: /)).toContainText(file?.name ?? "");
  await expect(page.getByRole("button", { name: "Send" })).toBeDisabled();
});

test("renders a field name as the code spells it, and nests an object", async ({ page }) => {
  const route = await findRoute((meta) => nestedLabelOf(meta) !== undefined);
  test.skip(!route, "The API has no form field holding an object");
  if (!route) return;
  const label = nestedLabelOf(route.meta) ?? "";

  await page.goto(`/?route=${route.id}&tab=try`);

  // A nested group has no input of its own — only its leaves, dotted.
  const nested = page.getByLabel(label);
  await expect(nested).toBeVisible();
  await expect(page.getByLabel(label.split(".")[0] ?? "", { exact: true })).toBeHidden();

  // The uppercasing is CSS, so the DOM text cannot reveal it: `userId` rendered
  // as `USERID` loses the word boundary, and only the computed style says so.
  const nestedId = await nested.getAttribute("id");
  const transform = await page
    .locator(`label[for="${nestedId}"]`)
    .evaluate((node) => getComputedStyle(node).textTransform);
  expect(transform).toBe("none");
});

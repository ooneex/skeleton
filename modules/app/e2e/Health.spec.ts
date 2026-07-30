import { expect, test } from "@playwright/test";

test("returns the health payload", async ({ request }) => {
  const response = await request.get("health");

  await expect(response).toBeOK();
  expect(response.headers()["content-type"]).toMatch(/application\/json/i);

  const body = (await response.json()) as {
    success: boolean;
    status: number;
    data: { status: string; timestamp: string };
  };

  expect(body.success).toBe(true);
  expect(body.status).toBe(200);
  expect(body.data.status).toBe("ok");
  expect(new Date(body.data.timestamp).toISOString()).toBe(body.data.timestamp);
});

test("returns 404 for unknown api routes", async ({ request }) => {
  const response = await request.get("missing", { failOnStatusCode: false });

  expect(response.status()).toBe(404);
});

import { describe, expect, test } from "bun:test";
import { app } from "../src/index";

describe("sdk", () => {
  test("should expose an api surface object", () => {
    expect(app).toBeObject();
  });

  test("should expose the healthCheck api method", () => {
    expect(typeof app.api.healthCheck).toBe("function");
  });
});

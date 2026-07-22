import { describe, expect, test } from "bun:test";
import { AppModule } from "@module/app/AppModule";

describe("AppModule", () => {
  test("should have controllers array", () => {
    expect(Array.isArray(AppModule.controllers)).toBe(true);
  });

  test("should have entities array", () => {
    expect(Array.isArray(AppModule.entities)).toBe(true);
  });

  test("should have middlewares array", () => {
    expect(Array.isArray(AppModule.middlewares)).toBe(true);
  });

  test("should have cronJobs array", () => {
    expect(Array.isArray(AppModule.cronJobs)).toBe(true);
  });

  test("should have events array", () => {
    expect(Array.isArray(AppModule.events)).toBe(true);
  });
});

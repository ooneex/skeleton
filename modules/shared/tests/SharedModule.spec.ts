import { describe, expect, test } from "bun:test";
import { SharedModule } from "@module/shared/SharedModule";

describe("SharedModule", () => {
  test("should have controllers array", () => {
    expect(Array.isArray(SharedModule.controllers)).toBe(true);
  });

  test("should have entities array", () => {
    expect(Array.isArray(SharedModule.entities)).toBe(true);
  });

  test("should have middlewares array", () => {
    expect(Array.isArray(SharedModule.middlewares)).toBe(true);
  });

  test("should have cronJobs array", () => {
    expect(Array.isArray(SharedModule.cronJobs)).toBe(true);
  });

  test("should have events array", () => {
    expect(Array.isArray(SharedModule.events)).toBe(true);
  });
});

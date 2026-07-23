import { describe, expect, test } from "bun:test";
import { MicroserviceModule } from "@module/microservice/MicroserviceModule";

describe("MicroserviceModule", () => {
  test("should have controllers array", () => {
    expect(Array.isArray(MicroserviceModule.controllers)).toBe(true);
  });

  test("should have entities array", () => {
    expect(Array.isArray(MicroserviceModule.entities)).toBe(true);
  });

  test("should have middlewares array", () => {
    expect(Array.isArray(MicroserviceModule.middlewares)).toBe(true);
  });

  test("should have cronJobs array", () => {
    expect(Array.isArray(MicroserviceModule.cronJobs)).toBe(true);
  });

  test("should have events array", () => {
    expect(Array.isArray(MicroserviceModule.events)).toBe(true);
  });
});

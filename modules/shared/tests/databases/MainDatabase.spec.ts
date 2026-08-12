import { describe, expect, test } from "bun:test";
import { MainDatabase } from "@module/shared/databases/MainDatabase";

describe("MainDatabase", () => {
  test("should have class name ending with 'Database'", () => {
    expect(MainDatabase.name.endsWith("Database")).toBe(true);
  });

  test("should have 'getSource' method", () => {
    expect(MainDatabase.prototype.getSource).toBeDefined();
    expect(typeof MainDatabase.prototype.getSource).toBe("function");
  });
});

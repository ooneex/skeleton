import { describe, expect, test } from "bun:test";
import { cn } from "../../src/utils/cn";

describe("cn", () => {
  test("should join every truthy class name", () => {
    expect(cn("flex", "items-center", "gap-2")).toBe("flex items-center gap-2");
  });

  test("should keep the last of two conflicting tailwind utilities", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  test("should drop falsy and empty inputs", () => {
    expect(cn("flex", false, null, undefined, "", ["gap-2"])).toBe("flex gap-2");
  });
});

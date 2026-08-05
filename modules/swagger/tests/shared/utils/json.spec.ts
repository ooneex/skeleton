import { describe, expect, test } from "bun:test";
import { formatJson, isValidJson } from "../../../src/shared/utils/json";

describe("formatJson", () => {
  test("should pretty-print a value over two spaces", () => {
    expect(formatJson({ status: "ok" })).toBe('{\n  "status": "ok"\n}');
  });

  test("should return a string untouched — a non-json body is shown as it came", () => {
    expect(formatJson("Not Found")).toBe("Not Found");
  });

  test("should render undefined as an empty editor", () => {
    expect(formatJson(undefined)).toBe("");
  });

  test("should fall back to a plain rendering for a value json cannot hold", () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;

    expect(formatJson(circular)).toBe("[object Object]");
  });
});

describe("isValidJson", () => {
  test("should accept an empty editor — it means no body", () => {
    expect(isValidJson("   ")).toBe(true);
  });

  test("should accept a well-formed payload", () => {
    expect(isValidJson('{"plan":"pro"}')).toBe(true);
  });

  test("should reject a payload the api would refuse", () => {
    expect(isValidJson("{plan:")).toBe(false);
  });
});

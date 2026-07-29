import { describe, expect, test } from "bun:test";
import type { MaxFileSizeType } from "../../../src/components/upload/fileSize";
import { formatBytes, parseFileSize } from "../../../src/components/upload/fileSize";

describe("parseFileSize", () => {
  test("returns numbers unchanged", () => {
    expect(parseFileSize(1024)).toBe(1024);
    expect(parseFileSize(0)).toBe(0);
  });

  test("parses plain byte strings", () => {
    expect(parseFileSize("500B")).toBe(500);
  });

  test("parses KB/MB/GB/TB strings", () => {
    expect(parseFileSize("10KB")).toBe(10 * 1024);
    expect(parseFileSize("5MB")).toBe(5 * 1024 * 1024);
    expect(parseFileSize("1GB")).toBe(1024 * 1024 * 1024);
    expect(parseFileSize("2TB")).toBe(2 * 1024 * 1024 * 1024 * 1024);
  });

  test("is case-insensitive for the unit", () => {
    expect(parseFileSize("5mb" as unknown as MaxFileSizeType)).toBe(5 * 1024 * 1024);
  });

  test("supports decimal values", () => {
    expect(parseFileSize("1.5MB")).toBe(1.5 * 1024 * 1024);
  });

  test("returns 0 for an unparsable string", () => {
    expect(parseFileSize("not-a-size" as unknown as `${number}KB`)).toBe(0);
  });
});

describe("formatBytes", () => {
  test("formats 0 bytes as 0B", () => {
    expect(formatBytes(0)).toBe("0B");
  });

  test("formats plain byte values below 1KB", () => {
    expect(formatBytes(500)).toBe("500B");
  });

  test("formats exact KB boundary", () => {
    expect(formatBytes(1024)).toBe("1KB");
  });

  test("formats exact MB boundary", () => {
    expect(formatBytes(1024 * 1024)).toBe("1MB");
  });

  test("formats exact GB boundary", () => {
    expect(formatBytes(1024 * 1024 * 1024)).toBe("1GB");
  });

  test("formats fractional values with one decimal, trimming trailing .0", () => {
    expect(formatBytes(1536)).toBe("1.5KB");
    expect(formatBytes(2048)).toBe("2KB");
  });

  test("negative bytes are not guarded and produce a non-numeric unit label (defect)", () => {
    // NOTE: `!+bytes` only guards against 0/NaN, not negative numbers, so
    // Math.log(negative) is NaN and the function falls through to "NaNYB".
    // This documents current (buggy) behavior rather than asserting a sane one.
    expect(formatBytes(-5)).toBe("NaNYB");
  });
});

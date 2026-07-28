import { describe, expect, test } from "bun:test";
import { sdk } from "../src/index";

describe("sdk", () => {
  test("should expose an api surface object", () => {
    expect(sdk).toBeObject();
  });

  test("should not carry any api method yet", () => {
    expect(Object.keys(sdk)).toEqual([]);
  });
});

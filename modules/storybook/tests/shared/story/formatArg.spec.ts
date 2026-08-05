import { describe, expect, test } from "bun:test";
import { formatArg } from "../../../src/shared/story/formatArg";

describe("formatArg", () => {
  test("should return a string value as-is", () => {
    expect(formatArg("submit")).toBe("submit");
  });

  test("should stringify null", () => {
    expect(formatArg(null)).toBe("null");
  });

  test("should stringify undefined", () => {
    expect(formatArg(undefined)).toBe("undefined");
  });

  test("should label a named function", () => {
    function onSubmit() {}
    expect(formatArg(onSubmit)).toBe("[Function onSubmit]");
  });

  test("should label an anonymous function", () => {
    expect(formatArg(() => {})).toBe("[Function anonymous]");
  });

  test("should describe a DOM Event instance", () => {
    const event = new Event("click");
    expect(formatArg(event)).toBe("[Event click]");
  });

  test("should describe a React-style synthetic event", () => {
    const syntheticEvent = { nativeEvent: new Event("change"), type: "change" };
    expect(formatArg(syntheticEvent)).toBe("[SyntheticEvent change]");
  });

  test("should JSON-serialize a plain object", () => {
    expect(formatArg({ a: 1, b: "two" })).toBe('{"a":1,"b":"two"}');
  });

  test("should replace a circular reference with a marker", () => {
    const circular: Record<string, unknown> = { name: "root" };
    circular.self = circular;

    expect(formatArg(circular)).toBe('{"name":"root","self":"[Circular]"}');
  });

  test("should fall back to the object tag when JSON.stringify throws", () => {
    const unserializable = { value: 1n };

    expect(formatArg(unserializable)).toBe(Object.prototype.toString.call(unserializable));
  });

  test("should fall back to the object tag when JSON.stringify returns undefined", () => {
    expect(formatArg(() => {})).not.toBeUndefined();
    const withUndefinedToJSON = { toJSON: () => undefined };

    expect(formatArg(withUndefinedToJSON)).toBe(Object.prototype.toString.call(withUndefinedToJSON));
  });
});

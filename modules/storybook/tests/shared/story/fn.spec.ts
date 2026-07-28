import { afterEach, describe, expect, test } from "bun:test";
import { clearActions, getActions } from "../../../src/shared/story/actionLog";
import { fn } from "../../../src/shared/story/fn";

afterEach(() => {
  clearActions();
});

describe("fn", () => {
  test("should record every call with its arguments", () => {
    const spy = fn();

    spy("submit", 42);
    spy();

    expect(spy.calls).toEqual([["submit", 42], []]);
  });

  test("should snapshot the arguments so later mutations do not leak in", () => {
    const spy = fn();
    const args = ["before"];

    spy(...args);
    args[0] = "after";

    expect(spy.calls[0]).toEqual(["before"]);
  });

  test("should mirror each call into the action log", () => {
    const spy = fn();

    spy("submit");

    expect(getActions()[0]?.args).toEqual(["submit"]);
  });

  test("should forget its calls once reset", () => {
    const spy = fn();
    spy("submit");

    spy.reset();

    expect(spy.calls).toEqual([]);
  });

  test("should keep separate call logs per instance", () => {
    const first = fn();
    const second = fn();

    first("a");

    expect(second.calls).toEqual([]);
  });
});

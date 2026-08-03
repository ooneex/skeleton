import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";
import { storyLogger } from "../../../src/shared/story/logger";

describe("storyLogger", () => {
  const DESTINATION = globalThis.console;
  const original = {
    error: DESTINATION.error,
    warn: DESTINATION.warn,
    info: DESTINATION.info,
    debug: DESTINATION.debug,
    log: DESTINATION.log,
  };

  beforeEach(() => {
    DESTINATION.error = mock();
    DESTINATION.warn = mock();
    DESTINATION.info = mock();
    DESTINATION.debug = mock();
    DESTINATION.log = mock();
  });

  afterEach(() => {
    DESTINATION.error = original.error;
    DESTINATION.warn = original.warn;
    DESTINATION.info = original.info;
    DESTINATION.debug = original.debug;
    DESTINATION.log = original.log;
  });

  test("should be a no-op on init", () => {
    expect(() => storyLogger.init()).not.toThrow();
  });

  test("should write error messages to the console", () => {
    storyLogger.error("boom", { code: 1 });

    expect(DESTINATION.error).toHaveBeenCalledWith("[story:error]", "boom", { code: 1 });
  });

  test("should write warn messages to the console", () => {
    storyLogger.warn("careful", { code: 2 });

    expect(DESTINATION.warn).toHaveBeenCalledWith("[story:warn]", "careful", { code: 2 });
  });

  test("should write info messages to the console", () => {
    storyLogger.info("fyi", { code: 3 });

    expect(DESTINATION.info).toHaveBeenCalledWith("[story:info]", "fyi", { code: 3 });
  });

  test("should write debug messages to the console", () => {
    storyLogger.debug("trace", { code: 4 });

    expect(DESTINATION.debug).toHaveBeenCalledWith("[story:debug]", "trace", { code: 4 });
  });

  test("should write log messages to the console", () => {
    storyLogger.log("note", { code: 5 });

    expect(DESTINATION.log).toHaveBeenCalledWith("[story:log]", "note", { code: 5 });
  });

  test("should write success messages as info", () => {
    storyLogger.success("done", { code: 6 });

    expect(DESTINATION.info).toHaveBeenCalledWith("[story:info]", "done", { code: 6 });
  });

  test("should unwrap the message of an IException", () => {
    const exception = {
      key: "boom",
      date: new Date(),
      status: 500,
      data: {},
      message: "structured",
      name: "Exception",
      stackToJson: () => null,
    };

    storyLogger.error(exception as never);

    expect(DESTINATION.error).toHaveBeenCalledWith("[story:error]", "structured", undefined);
  });
});

import { afterEach, describe, expect, test } from "bun:test";
import { clearActions, getActions, recordAction, subscribeActions } from "../../../src/shared/story/actionLog";

afterEach(() => {
  clearActions();
});

describe("recordAction", () => {
  test("should prepend the newest action with its name and arguments", () => {
    recordAction("onClick", ["first"]);
    recordAction("onChange", ["second"]);

    const [newest, oldest] = getActions();

    expect(newest?.name).toBe("onChange");
    expect(newest?.args).toEqual(["second"]);
    expect(oldest?.name).toBe("onClick");
  });

  test("should give every action a unique increasing id", () => {
    recordAction("onClick", []);
    recordAction("onClick", []);

    const [newest, oldest] = getActions();

    expect(newest?.id).toBeGreaterThan(oldest?.id ?? 0);
  });

  test("should notify subscribers until they unsubscribe", () => {
    let notified = 0;
    const unsubscribe = subscribeActions(() => {
      notified += 1;
    });

    recordAction("onClick", []);
    unsubscribe();
    recordAction("onClick", []);

    expect(notified).toBe(1);
  });

  test("should expose an immutable snapshot", () => {
    recordAction("onClick", []);
    const snapshot = getActions();

    recordAction("onChange", []);

    expect(snapshot).toHaveLength(1);
    expect(getActions()).toHaveLength(2);
  });
});

describe("clearActions", () => {
  test("should empty the log and notify subscribers", () => {
    recordAction("onClick", []);
    let notified = 0;
    subscribeActions(() => {
      notified += 1;
    });

    clearActions();

    expect(getActions()).toEqual([]);
    expect(notified).toBe(1);
  });

  test("should not notify when the log is already empty", () => {
    let notified = 0;
    subscribeActions(() => {
      notified += 1;
    });

    clearActions();

    expect(notified).toBe(0);
  });
});

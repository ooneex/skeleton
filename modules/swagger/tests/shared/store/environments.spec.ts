import { describe, expect, test } from "bun:test";
import type { EnvironmentType } from "../../../src/shared/store/environments";
import {
  defaultEnvironment,
  loadActiveId,
  loadEnvironments,
  newEnvironment,
  sanitizeEnvironments,
  saveActiveId,
  saveEnvironments,
  variablesOf,
} from "../../../src/shared/store/environments";

/**
 * `window` does not exist outside a browser, so every storage-backed export
 * degrades to an in-memory default when it is absent — this stubs it back in
 * for the length of one call, the way a real browser's `localStorage` would
 * behave.
 */
const withLocalStorage = <T>(run: () => T): T => {
  const store = new Map<string, string>();
  (globalThis as Record<string, unknown>).window = {
    localStorage: {
      getItem: (key: string): string | null => (store.has(key) ? (store.get(key) as string) : null),
      setItem: (key: string, value: string): void => {
        store.set(key, value);
      },
    },
  };
  try {
    return run();
  } finally {
    delete (globalThis as Record<string, unknown>).window;
  }
};

describe("sanitizeEnvironments", () => {
  test("should keep a well-formed environment as it stands", () => {
    const stored = [{ id: "staging", name: "Staging", baseURL: "https://api.test", token: "t", variables: { a: "1" } }];

    expect(sanitizeEnvironments(stored)).toEqual(stored as EnvironmentType[]);
  });

  test("should reject a store that is not a list", () => {
    expect(sanitizeEnvironments({ id: "local" })).toEqual([]);
    expect(sanitizeEnvironments(null)).toEqual([]);
  });

  test("should drop an entry with no usable id", () => {
    expect(sanitizeEnvironments([{ name: "No id" }, { id: "" }, null])).toEqual([]);
  });

  test("should fall back to the id when the name is missing", () => {
    expect(sanitizeEnvironments([{ id: "staging" }])[0]?.name).toBe("staging");
  });

  test("should replace a non-string base url with the default", () => {
    expect(sanitizeEnvironments([{ id: "a", baseURL: 8030 }])[0]?.baseURL).toBe("http://localhost:8030");
  });

  test("should coerce variable values to strings", () => {
    expect(sanitizeEnvironments([{ id: "a", variables: { retries: 3 } }])[0]?.variables).toEqual({ retries: "3" });
  });

  test("should never carry a non-string token through", () => {
    expect(sanitizeEnvironments([{ id: "a", token: { leaked: true } }])[0]?.token).toBe("");
  });
});

describe("newEnvironment", () => {
  test("should not collide with an id already taken", () => {
    const existing = [defaultEnvironment(), { ...defaultEnvironment(), id: "env-2" }];

    expect(newEnvironment(existing).id).toBe("env-3");
  });

  test("should keep counting up past a gap the guessed index lands on", () => {
    // Three environments guess `env-4` first, but it is already taken — the
    // retry has to walk forward until it finds one that is not.
    const existing = [
      defaultEnvironment(),
      { ...defaultEnvironment(), id: "env-2" },
      { ...defaultEnvironment(), id: "env-4" },
    ];

    expect(newEnvironment(existing).id).toBe("env-5");
  });

  test("should start from the default origin and no credentials", () => {
    const created = newEnvironment([]);

    expect(created.baseURL).toBe("http://localhost:8030");
    expect(created.token).toBe("");
    expect(created.variables).toEqual({});
  });
});

describe("loadEnvironments", () => {
  test("should fall back to the default when storage is unavailable", () => {
    expect(loadEnvironments()).toEqual([defaultEnvironment()]);
  });

  test("should return the stored environments once sanitized", () => {
    const staging = { id: "staging", name: "Staging", baseURL: "https://api.test", token: "", variables: {} };

    const stored = withLocalStorage(() => {
      window.localStorage.setItem("swagger:environments", JSON.stringify([staging]));
      return loadEnvironments();
    });

    expect(stored).toEqual([staging]);
  });

  test("should fall back to the default when the stored value is not valid json", () => {
    const result = withLocalStorage(() => {
      window.localStorage.setItem("swagger:environments", "not json");
      return loadEnvironments();
    });

    expect(result).toEqual([defaultEnvironment()]);
  });
});

describe("saveEnvironments", () => {
  test("should not throw when storage is unavailable", () => {
    expect(() => saveEnvironments([defaultEnvironment()])).not.toThrow();
  });

  test("should persist the environments so they can be read back", () => {
    const round = withLocalStorage(() => {
      saveEnvironments([{ ...defaultEnvironment(), name: "Renamed" }]);
      return loadEnvironments();
    });

    expect(round[0]?.name).toBe("Renamed");
  });
});

describe("loadActiveId", () => {
  test("should fall back to the first environment when storage is unavailable", () => {
    const environments = [defaultEnvironment(), { ...defaultEnvironment(), id: "env-2" }];

    expect(loadActiveId(environments)).toBe("local");
  });

  test("should return an empty string when there is no environment to fall back to", () => {
    expect(loadActiveId([])).toBe("");
  });

  test("should honour the stored id when it still names an environment", () => {
    const environments = [defaultEnvironment(), { ...defaultEnvironment(), id: "env-2" }];

    const active = withLocalStorage(() => {
      window.localStorage.setItem("swagger:active-environment", "env-2");
      return loadActiveId(environments);
    });

    expect(active).toBe("env-2");
  });

  test("should fall back to the first environment when the stored id no longer exists", () => {
    const environments = [defaultEnvironment()];

    const active = withLocalStorage(() => {
      window.localStorage.setItem("swagger:active-environment", "gone");
      return loadActiveId(environments);
    });

    expect(active).toBe("local");
  });
});

describe("saveActiveId", () => {
  test("should not throw when storage is unavailable", () => {
    expect(() => saveActiveId("local")).not.toThrow();
  });

  test("should persist the id so it can be read back", () => {
    const active = withLocalStorage(() => {
      saveActiveId("env-2");
      return loadActiveId([{ ...defaultEnvironment(), id: "env-2" }]);
    });

    expect(active).toBe("env-2");
  });
});

describe("variablesOf", () => {
  test("should expose the base url and the token as variables", () => {
    const environment: EnvironmentType = {
      id: "a",
      name: "A",
      baseURL: "https://api.test",
      token: "abc",
      variables: { tenant: "acme" },
    };

    expect(variablesOf(environment)).toEqual({ tenant: "acme", baseURL: "https://api.test", token: "abc" });
  });

  test("should let an explicit variable win over the derived one", () => {
    const environment: EnvironmentType = {
      id: "a",
      name: "A",
      baseURL: "https://api.test",
      token: "abc",
      variables: {},
    };

    expect(variablesOf(environment).token).toBe("abc");
  });
});

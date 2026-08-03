import { describe, expect, test } from "bun:test";
import type { EnvironmentType } from "../../../src/shared/store/environments";
import {
  defaultEnvironment,
  newEnvironment,
  sanitizeEnvironments,
  variablesOf,
} from "../../../src/shared/store/environments";

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

  test("should start from the default origin and no credentials", () => {
    const created = newEnvironment([]);

    expect(created.baseURL).toBe("http://localhost:8030");
    expect(created.token).toBe("");
    expect(created.variables).toEqual({});
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

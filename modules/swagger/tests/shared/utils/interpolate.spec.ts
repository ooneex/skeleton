import { describe, expect, test } from "bun:test";
import {
  interpolate,
  interpolateAll,
  missingPlaceholders,
  placeholdersIn,
} from "../../../src/shared/utils/interpolate";

const variables = { tenant: "acme", token: "abc" };

describe("interpolate", () => {
  test("should substitute a known variable", () => {
    expect(interpolate("Bearer {{token}}", variables)).toBe("Bearer abc");
  });

  test("should tolerate padding inside the braces", () => {
    expect(interpolate("{{ tenant }}", variables)).toBe("acme");
  });

  test("should substitute every occurrence", () => {
    expect(interpolate("{{tenant}}-{{tenant}}", variables)).toBe("acme-acme");
  });

  test("should leave an unknown variable standing so the gap is visible", () => {
    expect(interpolate("{{missing}}", variables)).toBe("{{missing}}");
  });

  test("should leave a string with no placeholder untouched", () => {
    expect(interpolate("http://localhost:8030", variables)).toBe("http://localhost:8030");
  });
});

describe("interpolateAll", () => {
  test("should resolve every value of the record", () => {
    expect(interpolateAll({ "X-Tenant": "{{tenant}}", Accept: "application/json" }, variables)).toEqual({
      "X-Tenant": "acme",
      Accept: "application/json",
    });
  });
});

describe("placeholdersIn", () => {
  test("should list each name once, in order of first appearance", () => {
    expect(placeholdersIn("{{b}}/{{a}}/{{b}}")).toEqual(["b", "a"]);
  });

  test("should return nothing for a plain string", () => {
    expect(placeholdersIn("/api/v1/health")).toEqual([]);
  });
});

describe("missingPlaceholders", () => {
  test("should report only the names the environment cannot resolve", () => {
    expect(missingPlaceholders(["{{tenant}}", "{{region}}", "{{plan}}"], variables)).toEqual(["region", "plan"]);
  });

  test("should report a name once even when several values reach for it", () => {
    expect(missingPlaceholders(["{{region}}", "{{region}}"], variables)).toEqual(["region"]);
  });

  test("should be empty when everything resolves", () => {
    expect(missingPlaceholders(["{{tenant}}/{{token}}"], variables)).toEqual([]);
  });

  test("should treat a variable set to an empty string as defined", () => {
    expect(missingPlaceholders(["{{blank}}"], { blank: "" })).toEqual([]);
  });
});

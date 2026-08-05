import { describe, expect, test } from "bun:test";
import { flattenFields } from "../../../src/shared/route/fields";

describe("flattenFields", () => {
  test("should leave a flat list alone", () => {
    expect(flattenFields([{ name: "page", type: "number" }])).toEqual([{ name: "page", type: "number" }]);
  });

  test("should name a nested leaf by its dotted path", () => {
    const flat = flattenFields([
      { name: "address", type: "object", fields: [{ name: "city", type: "string", required: true }] },
    ]);

    expect(flat).toEqual([{ name: "address.city", type: "string", required: true }]);
  });

  test("should drop the group itself — a form input holds one scalar", () => {
    const flat = flattenFields([{ name: "a", type: "object", fields: [{ name: "b", type: "string" }] }]);

    expect(flat.map((field) => field.name)).toEqual(["a.b"]);
  });

  test("should recurse through more than one level", () => {
    const flat = flattenFields([
      { name: "a", type: "object", fields: [{ name: "b", type: "object", fields: [{ name: "c", type: "string" }] }] },
    ]);

    expect(flat[0]?.name).toBe("a.b.c");
  });

  test("should keep a required leaf required and name the optional group it sits under", () => {
    // The contract inside the group holds; whether the group is in play at all
    // is a separate question, which `within` lets the validator ask.
    const flat = flattenFields([
      { name: "author", type: "object", required: false, fields: [{ name: "name", type: "string", required: true }] },
    ]);

    expect(flat[0]?.required).toBe(true);
    expect(flat[0]?.within).toBe("author");
  });

  test("should leave a leaf outside any optional group unqualified", () => {
    const flat = flattenFields([
      { name: "author", type: "object", required: true, fields: [{ name: "name", type: "string", required: true }] },
    ]);

    expect(flat[0]?.within).toBeUndefined();
  });

  test("should keep a required leaf of a required group required", () => {
    const flat = flattenFields([
      { name: "author", type: "object", required: true, fields: [{ name: "name", type: "string", required: true }] },
    ]);

    expect(flat[0]?.required).toBe(true);
  });

  test("should return nothing for no fields", () => {
    expect(flattenFields()).toEqual([]);
  });
});

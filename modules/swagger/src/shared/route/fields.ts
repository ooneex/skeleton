import type { FieldType } from "./types";

/** A leaf of a field tree, named by its dotted path. */
export type FlatFieldType = FieldType & {
  /**
   * The dotted path of the nearest optional ancestor, when there is one.
   *
   * `required` states the contract inside the group; this states when the group
   * itself is in play. A leaf marked required under an optional group has to be
   * filled *if the group is used at all* — see `missingRequired`.
   */
  within?: string;
};

/**
 * The leaves of a field tree, each named by its dotted path.
 *
 * A form input holds one scalar, so a nested group has nothing to render for
 * itself — only its leaves do. `address: { city, zip }` therefore becomes
 * `address.city` and `address.zip`, which is also how the values travel: a
 * query string and a `FormData` are both flat, so the dotted name *is* the
 * wire name.
 *
 * A JSON body is the exception and is left alone — its editor is raw text, and
 * nesting expresses itself there natively.
 */
export const flattenFields = (fields: readonly FieldType[] = [], prefix = "", within?: string): FlatFieldType[] =>
  fields.flatMap((field) => {
    const name = prefix === "" ? field.name : `${prefix}.${field.name}`;
    const children = field.fields ?? [];

    if (children.length === 0) {
      return [{ ...field, name, ...(within === undefined ? {} : { within }) }];
    }

    // The nearest optional ancestor is the one that governs the leaves below:
    // an inner group already optional stays the boundary for its own subtree.
    return flattenFields(children, name, field.required === false ? name : within);
  });

import type { FieldType } from "./types";

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
export const flattenFields = (fields: readonly FieldType[] = [], prefix = ""): FieldType[] =>
  fields.flatMap((field) => {
    const name = prefix === "" ? field.name : `${prefix}.${field.name}`;
    const children = field.fields ?? [];

    if (children.length === 0) {
      return [{ ...field, name }];
    }

    // An optional group makes every leaf below it optional too: there is
    // nothing to fill in when the group itself is omitted.
    return flattenFields(
      children.map((child) => (field.required === false ? { ...child, required: false } : child)),
      name,
    );
  });

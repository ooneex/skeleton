import type { FlatFieldType } from "./fields";
import { flattenFields, isFileField } from "./fields";
import type { RequestBodyType } from "./request";
import type { RouteMetaType } from "./types";

/** Everything the try-it form holds, in the shape the check reads it. */
export type FormValuesType = {
  params: Record<string, string>;
  queries: Record<string, string>;
  /** Only the header rows that are enabled and named. */
  headers: Record<string, string>;
  body: RequestBodyType;
};

const isBlank = (value: string | undefined): boolean => (value ?? "").trim() === "";

/**
 * Whether a required leaf is in play, given how its group has been filled.
 *
 * A leaf sitting under an optional group states a contract that only binds once
 * the group is used: `author` may be left out entirely, but an `author` with an
 * `avatarUrl` and no `displayName` is incomplete. So the leaf counts as missing
 * only when a sibling under the same group carries a value.
 */
const isEngaged = (field: FlatFieldType, group: FlatFieldType[], filled: (field: FlatFieldType) => boolean): boolean =>
  field.within === undefined || group.some((sibling) => sibling.within === field.within && filled(sibling));

/** The leaves of one group that are required and still empty. */
const missingIn = (fields: FlatFieldType[], filled: (field: FlatFieldType) => boolean): string[] =>
  fields
    .filter((field) => field.required && !filled(field) && isEngaged(field, fields, filled))
    .map((field) => field.name);

/**
 * The documented values a route requires that the form has left empty.
 *
 * Path parameters count whatever their `required` flag says: they are segments
 * of the URL, and an empty one does not produce an incomplete request — it
 * produces a request to a different, usually non-existent, path.
 */
export const missingRequired = (meta: RouteMetaType, values: FormValuesType): string[] => {
  const missing: string[] = [];

  for (const field of flattenFields(meta.params)) {
    if (isBlank(values.params[field.name])) {
      missing.push(field.name);
    }
  }

  missing.push(...missingIn(flattenFields(meta.queries), (field) => !isBlank(values.queries[field.name])));
  missing.push(...missingIn(flattenFields(meta.headers), (field) => !isBlank(values.headers[field.name])));

  // A JSON body is free text: only its syntax can be checked, which the editor
  // already does. A multipart body is a form, so every field can be.
  if (values.body.kind === "multipart") {
    const body = values.body;
    missing.push(
      ...missingIn(flattenFields(meta.payload?.fields), (field) =>
        isFileField(field) ? Boolean(body.files[field.name]) : !isBlank(body.fields[field.name]),
      ),
    );
  }

  return missing;
};

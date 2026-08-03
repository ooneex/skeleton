import type { RequestBodyType } from "./request";
import type { FieldType, RouteMetaType } from "./types";

/** Everything the try-it form holds, in the shape the check reads it. */
export type FormValuesType = {
  params: Record<string, string>;
  queries: Record<string, string>;
  /** Only the header rows that are enabled and named. */
  headers: Record<string, string>;
  body: RequestBodyType;
};

/** A file field carries a `File`, never a string typed into a box. */
const isFileField = (field: FieldType): boolean => field.type.trim().toLowerCase() === "file";

const isBlank = (value: string | undefined): boolean => (value ?? "").trim() === "";

/**
 * The documented values a route requires that the form has left empty.
 *
 * Path parameters count whatever their `required` flag says: they are segments
 * of the URL, and an empty one does not produce an incomplete request — it
 * produces a request to a different, usually non-existent, path.
 */
export const missingRequired = (meta: RouteMetaType, values: FormValuesType): string[] => {
  const missing: string[] = [];

  for (const field of meta.params ?? []) {
    if (isBlank(values.params[field.name])) {
      missing.push(field.name);
    }
  }

  for (const field of meta.queries ?? []) {
    if (field.required && isBlank(values.queries[field.name])) {
      missing.push(field.name);
    }
  }

  for (const field of meta.headers ?? []) {
    if (field.required && isBlank(values.headers[field.name])) {
      missing.push(field.name);
    }
  }

  // A JSON body is free text: only its syntax can be checked, which the editor
  // already does. A multipart body is a form, so every field can be.
  if (values.body.kind === "multipart") {
    for (const field of meta.payload?.fields ?? []) {
      if (!field.required) {
        continue;
      }
      const filled = isFileField(field)
        ? Boolean(values.body.files[field.name])
        : !isBlank(values.body.fields[field.name]);
      if (!filled) {
        missing.push(field.name);
      }
    }
  }

  return missing;
};

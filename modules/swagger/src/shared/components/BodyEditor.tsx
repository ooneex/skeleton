import { Label } from "@module/design/components/label";
import { Textarea } from "@module/design/components/textarea";
import { useId } from "react";
import type { FieldType, RequestBodyType, RouteMetaType } from "../route";
import { bodyKindOf, flattenFields, isFileField } from "../route";
import { isValidJson } from "../utils/json";
import { FieldInput } from "./FieldInput";
import { FilePicker } from "./FilePicker";

type BodyEditorPropsType = {
  meta: RouteMetaType;
  body: RequestBodyType;
  onChange: (body: RequestBodyType) => void;
  /** Names the route requires that are still empty. */
  missing?: readonly string[];
};

/** The same files without `name` — rebuilt rather than `delete`d, which reshapes the object. */
const withoutFile = (files: Record<string, File>, name: string): Record<string, File> =>
  Object.fromEntries(Object.entries(files).filter(([key]) => key !== name));

type MultipartBodyPropsType = {
  id: string;
  fields: FieldType[];
  body: Extract<RequestBodyType, { kind: "multipart" }>;
  onChange: (body: RequestBodyType) => void;
  missing: readonly string[];
};

/** A multipart body, edited field by field so a `File` stays a `File`. */
const MultipartBody = ({ id, fields, body, onChange, missing }: MultipartBodyPropsType) => (
  <section className="flex flex-col gap-3">
    <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
      Request body · multipart/form-data
    </h3>
    {fields.length === 0 ? (
      <p className="text-xs text-muted-foreground">No field documented — add them to the route meta.</p>
    ) : (
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((field) =>
          isFileField(field) ? (
            <FilePicker
              key={field.name}
              id={`${id}-${field.name}`}
              label={field.name}
              required={field.required}
              invalid={missing.includes(field.name)}
              description={field.description}
              file={body.files[field.name]}
              onPick={(file) =>
                onChange({
                  ...body,
                  files: file ? { ...body.files, [field.name]: file } : withoutFile(body.files, field.name),
                })
              }
            />
          ) : (
            <FieldInput
              key={field.name}
              field={field}
              id={`${id}-${field.name}`}
              value={body.fields[field.name] ?? ""}
              invalid={missing.includes(field.name)}
              onChange={(value) => onChange({ ...body, fields: { ...body.fields, [field.name]: value } })}
            />
          ),
        )}
      </div>
    )}
  </section>
);

type JsonBodyPropsType = {
  id: string;
  /** The documented fields the route declares as base64, each offered a file helper. */
  base64Fields: FieldType[];
  body: Extract<RequestBodyType, { kind: "json" }>;
  onChange: (body: RequestBodyType) => void;
};

/** A raw JSON editor — the only shape that can express an arbitrary nested payload. */
const JsonBody = ({ id, base64Fields, body, onChange }: JsonBodyPropsType) => {
  const valid = isValidJson(body.text);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={`${id}-payload`} className="text-xs font-medium uppercase tracking-wide">
          Request body
        </Label>
        {valid ? null : <span className="text-xs text-destructive">Not valid JSON</span>}
      </div>
      <Textarea
        id={`${id}-payload`}
        value={body.text}
        aria-invalid={!valid}
        spellCheck={false}
        rows={10}
        className="font-mono text-xs"
        onChange={(event) => onChange({ kind: "json", text: event.target.value })}
      />
      {base64Fields.map((field) => (
        <FilePicker
          key={field.name}
          id={`${id}-b64-${field.name}`}
          label={`${field.name} · encode a file to base64`}
          description={field.description}
          encodeToBase64
          onEncoded={(encoded) => {
            // Write straight into the field the meta names, so the reader never
            // has to paste a multi-megabyte string by hand.
            try {
              const parsed = JSON.parse(body.text === "" ? "{}" : body.text) as Record<string, unknown>;
              parsed[field.name] = encoded;
              onChange({ kind: "json", text: JSON.stringify(parsed, null, 2) });
            } catch {
              // The body is mid-edit and unparseable; leave it alone rather than
              // destroy what is being typed.
            }
          }}
        />
      ))}
    </section>
  );
};

/**
 * The request body, in whichever shape the route accepts.
 *
 * `json` is a raw editor — it is the only thing that can express an arbitrary
 * nested payload — with a base64 helper for the fields that need one. A
 * `multipart` body is edited field by field instead, because a file has to stay
 * a `File` all the way to `FormData` and cannot survive a round-trip as text.
 */
export const BodyEditor = ({ meta, body, onChange, missing = [] }: BodyEditorPropsType) => {
  const id = useId();
  const kind = bodyKindOf(meta);
  // A multipart part is flat on the wire, so a nested group becomes dotted leaves.
  const fields = flattenFields(meta.payload?.fields);

  if (kind === "multipart" && body.kind === "multipart") {
    return <MultipartBody id={id} fields={fields} body={body} onChange={onChange} missing={missing} />;
  }

  if (body.kind !== "json") {
    return null;
  }

  const base64Fields = fields.filter((field) => field.type.trim().toLowerCase() === "base64");

  return <JsonBody id={id} base64Fields={base64Fields} body={body} onChange={onChange} />;
};

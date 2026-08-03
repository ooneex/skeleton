import { Label } from "@module/design/components/label";
import { Textarea } from "@module/design/components/textarea";
import { useId } from "react";
import type { FieldType, RequestBodyType, RouteMetaType } from "../route";
import { bodyKindOf } from "../route";
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

/** A field that carries a real file rather than a value typed into a box. */
export const isFileField = (field: FieldType): boolean => field.type.trim().toLowerCase() === "file";

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
  const fields = meta.payload?.fields ?? [];

  if (kind === "multipart" && body.kind === "multipart") {
    return (
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
                  description={field.description}
                  file={body.files[field.name]}
                  onPick={(file) => {
                    const files = { ...body.files };
                    if (file) {
                      files[field.name] = file;
                    } else {
                      delete files[field.name];
                    }
                    onChange({ ...body, files });
                  }}
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
  }

  if (body.kind !== "json") {
    return null;
  }

  const base64Fields = fields.filter((field) => field.type.trim().toLowerCase() === "base64");
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

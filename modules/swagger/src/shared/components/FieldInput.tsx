import { Input } from "@module/design/components/input";
import { Label } from "@module/design/components/label";
import { Select } from "@module/design/components/select";
import { Switch } from "@module/design/components/switch";
import type { FieldType } from "../route";
import { cn } from "../utils/cn";

type FieldInputPropsType = {
  field: FieldType;
  value: string;
  onChange: (value: string) => void;
  id: string;
  /** The route requires this value and it is still empty. */
  invalid?: boolean;
};

/** The literals of a `"draft" | "published"` union, or nothing when it isn't one. */
export const enumOptionsOf = (type: string): string[] => {
  if (!type.includes("|")) {
    return [];
  }
  return type
    .split("|")
    .map((part) => part.trim())
    .filter((part) => /^["'].*["']$/.test(part))
    .map((part) => part.slice(1, -1));
};

/** The HTML input type a declared field type deserves. */
export const inputTypeOf = (type: string): "text" | "number" | "email" | "url" | "date" | "datetime-local" => {
  switch (type.trim().toLowerCase()) {
    case "number":
    case "integer":
    case "int":
    case "float":
      return "number";
    case "email":
      return "email";
    case "url":
      return "url";
    case "date":
      return "date";
    case "datetime":
      return "datetime-local";
    default:
      return "text";
  }
};

const isBoolean = (type: string): boolean => ["boolean", "bool"].includes(type.trim().toLowerCase());

/**
 * One editable value, rendered from the type the route declares: a switch for a
 * boolean, a picker for a union of literals, a number/date/email input for the
 * scalars the browser already validates, text otherwise.
 *
 * Everything is carried as a string — that is what travels on the wire, and it
 * keeps a `{{variable}}` usable in any field regardless of its declared type.
 */
export const FieldInput = ({ field, value, onChange, id, invalid = false }: FieldInputPropsType) => {
  const options = enumOptionsOf(field.type);
  const usesVariable = value.includes("{{");

  return (
    <div className="flex flex-col gap-1">
      {/* `normal-case` and `tracking-normal` undo the design Label's uppercasing:
          a field name is an identifier copied from the route type, and
          `userId` rendered as `USERID` loses the word boundary. The declared
          type is not repeated here — the docs tab has a column for it, and the
          placeholder falls back to it when there is no example. */}
      <Label htmlFor={id} className="gap-1 font-mono text-xs normal-case tracking-normal">
        {field.name}
        {field.required ? <span className="text-destructive">*</span> : null}
      </Label>

      {isBoolean(field.type) ? (
        <div className="flex h-8 items-center gap-2">
          <Switch id={id} checked={value === "true"} onCheckedChange={(checked) => onChange(String(checked))} />
          <span className="text-xs text-muted-foreground">{value === "true" ? "true" : "false"}</span>
        </div>
      ) : options.length > 0 && !usesVariable ? (
        <Select value={value} onValueChange={(next) => onChange(String(next ?? ""))}>
          <Select.Trigger
            id={id}
            size="sm"
            aria-invalid={invalid}
            className={cn("w-full", invalid && "ring-destructive")}
          >
            <Select.Value placeholder="—" />
          </Select.Trigger>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option} value={option}>
                {option}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      ) : (
        <Input
          id={id}
          type={usesVariable ? "text" : inputTypeOf(field.type)}
          value={value}
          placeholder={field.example === undefined ? field.type : String(field.example)}
          aria-invalid={invalid}
          onChange={(event) => onChange(event.target.value)}
          className={cn(usesVariable && "font-mono text-primary", invalid && "ring-destructive")}
        />
      )}

      {field.description ? <p className="text-2xs text-muted-foreground">{field.description}</p> : null}
    </div>
  );
};

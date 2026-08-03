import { Button } from "@module/design/components/button";
import { Input } from "@module/design/components/input";
import { Label } from "@module/design/components/label";
import { useId, useState } from "react";
import type { EnvironmentType } from "../store/environments";

type EnvironmentEditorPropsType = {
  environment: EnvironmentType;
  /** Whether this is the last one — the switcher must never end up empty. */
  removable: boolean;
  onChange: (environment: EnvironmentType) => void;
  onRemove: () => void;
  onClose: () => void;
};

type VariableRowType = { key: string; value: string };

const toRows = (variables: Record<string, string>): VariableRowType[] =>
  Object.entries(variables).map(([key, value]) => ({ key, value }));

const toRecord = (rows: readonly VariableRowType[]): Record<string, string> =>
  Object.fromEntries(rows.filter((row) => row.key.trim() !== "").map((row) => [row.key.trim(), row.value]));

/**
 * The environment's own settings: where it points, what it authenticates with,
 * and the `{{variables}}` every request resolves against.
 *
 * The token is masked by default — this panel is the kind of thing that ends up
 * on a screen share.
 */
export const EnvironmentEditor = ({
  environment,
  removable,
  onChange,
  onRemove,
  onClose,
}: EnvironmentEditorPropsType) => {
  const id = useId();
  const [rows, setRows] = useState<VariableRowType[]>(() => toRows(environment.variables));
  const [revealToken, setRevealToken] = useState(false);

  const commitRows = (next: VariableRowType[]): void => {
    setRows(next);
    onChange({ ...environment, variables: toRecord(next) });
  };

  return (
    <section className="flex flex-col gap-4 border-b border-border bg-muted/20 px-6 py-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="flex flex-col gap-1">
          <Label htmlFor={`${id}-name`} className="text-xs">
            Name
          </Label>
          <Input
            id={`${id}-name`}
            size="xs"
            value={environment.name}
            onChange={(event) => onChange({ ...environment, name: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor={`${id}-url`} className="text-xs">
            Base URL
          </Label>
          <Input
            id={`${id}-url`}
            size="xs"
            value={environment.baseURL}
            placeholder="http://localhost:8030"
            onChange={(event) => onChange({ ...environment, baseURL: event.target.value })}
            className="font-mono"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor={`${id}-token`} className="flex w-full items-center justify-between gap-2 text-xs">
            Bearer token
            <button
              type="button"
              onClick={() => setRevealToken((previous) => !previous)}
              className="cursor-pointer text-2xs font-normal text-muted-foreground hover:text-foreground"
            >
              {revealToken ? "Hide" : "Show"}
            </button>
          </Label>
          <Input
            id={`${id}-token`}
            size="xs"
            type={revealToken ? "text" : "password"}
            value={environment.token}
            placeholder="Paste a session token"
            onChange={(event) => onChange({ ...environment, token: event.target.value })}
            className="font-mono"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Variables</h3>
          <Button variant="outline" size="xs" onClick={() => commitRows([...rows, { key: "", value: "" }])}>
            Add variable
          </Button>
        </div>
        {rows.length === 0 ? (
          <p className="text-xs text-muted-foreground">
            None yet. Reference one as <code className="rounded bg-muted px-1">{"{{name}}"}</code> in any URL, header,
            parameter or body.
          </p>
        ) : (
          rows.map((row, index) => (
            // Position is the identity: a key is edited keystroke by keystroke.
            <div key={`${id}-var-${index}`} className="flex items-center gap-1.5">
              <Input
                size="xs"
                value={row.key}
                placeholder="tenant"
                aria-label={`Variable ${index + 1} name`}
                onChange={(event) =>
                  commitRows(
                    rows.map((entry, position) => (position === index ? { ...entry, key: event.target.value } : entry)),
                  )
                }
                className="w-1/3 font-mono"
              />
              <Input
                size="xs"
                value={row.value}
                placeholder="acme"
                aria-label={`Variable ${index + 1} value`}
                onChange={(event) =>
                  commitRows(
                    rows.map((entry, position) =>
                      position === index ? { ...entry, value: event.target.value } : entry,
                    ),
                  )
                }
                className="flex-1 font-mono"
              />
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label={`Remove variable ${index + 1}`}
                onClick={() => commitRows(rows.filter((_, position) => position !== index))}
              >
                ×
              </Button>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button size="xs" onClick={onClose}>
          Done
        </Button>
        {removable ? (
          <Button variant="destructive" size="xs" onClick={onRemove}>
            Delete environment
          </Button>
        ) : null}
      </div>
    </section>
  );
};

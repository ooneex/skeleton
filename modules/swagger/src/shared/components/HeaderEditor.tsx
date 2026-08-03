import { Button } from "@module/design/components/button";
import { Input } from "@module/design/components/input";
import { useId } from "react";

/** One header row. Kept as a list, not a record, so a half-typed name stays editable. */
export type HeaderRowType = {
  name: string;
  value: string;
  enabled: boolean;
};

type HeaderEditorPropsType = {
  rows: HeaderRowType[];
  onChange: (rows: HeaderRowType[]) => void;
};

/** The rows that actually travel, collapsed into the record the runner wants. */
export const toHeaderRecord = (rows: readonly HeaderRowType[]): Record<string, string> =>
  Object.fromEntries(
    rows.filter((row) => row.enabled && row.name.trim() !== "").map((row) => [row.name.trim(), row.value]),
  );

/**
 * Free-form request headers — add, rename, disable, remove.
 *
 * A row is toggled rather than deleted when you want it out of the way, so a
 * header you are bisecting against survives being turned off. `Authorization`
 * is wired from the environment's token and is not listed here.
 */
export const HeaderEditor = ({ rows, onChange }: HeaderEditorPropsType) => {
  const id = useId();

  const update = (index: number, patch: Partial<HeaderRowType>): void => {
    onChange(rows.map((row, position) => (position === index ? { ...row, ...patch } : row)));
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Headers</h3>
        <Button variant="outline" size="xs" onClick={() => onChange([...rows, { name: "", value: "", enabled: true }])}>
          Add header
        </Button>
      </div>

      {rows.length === 0 ? (
        <p className="text-xs text-muted-foreground">No header set. `Authorization` is added from the environment.</p>
      ) : (
        <div className="flex flex-col gap-1.5">
          {rows.map((row, index) => (
            // The row's position is its identity: names are edited character by
            // character and are empty on a fresh row, so they cannot be keys.
            <div key={`${id}-${index}`} className="flex items-center gap-1.5">
              <input
                type="checkbox"
                checked={row.enabled}
                aria-label={row.name === "" ? `Enable header ${index + 1}` : `Enable ${row.name}`}
                onChange={(event) => update(index, { enabled: event.target.checked })}
                className="size-3.5 shrink-0 accent-primary"
              />
              <Input
                size="xs"
                value={row.name}
                placeholder="X-Tenant"
                aria-label={`Header ${index + 1} name`}
                onChange={(event) => update(index, { name: event.target.value })}
                className="w-1/3 font-mono"
              />
              <Input
                size="xs"
                value={row.value}
                placeholder="acme or {{tenant}}"
                aria-label={`Header ${index + 1} value`}
                onChange={(event) => update(index, { value: event.target.value })}
                className="flex-1 font-mono"
              />
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label={`Remove header ${index + 1}`}
                onClick={() => onChange(rows.filter((_, position) => position !== index))}
              >
                ×
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

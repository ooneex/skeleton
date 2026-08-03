import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@module/design/components/typography";
import { Fragment } from "react";
import type { FieldType } from "../route";

type FieldTablePropsType = {
  title: string;
  fields: readonly FieldType[];
  /** Path parameters are required by construction, so the column is dropped for them. */
  alwaysRequired?: boolean;
};

type FieldRowsPropsType = {
  fields: readonly FieldType[];
  alwaysRequired: boolean;
  depth: number;
};

/**
 * The rows of one group, flattened depth-first.
 *
 * Nesting is shown by indenting the name rather than by nesting tables: a
 * reader scans a single column of names, and the shape stays legible three
 * levels down where a table-in-a-table would not.
 */
const FieldRows = ({ fields, alwaysRequired, depth }: FieldRowsPropsType) => (
  <>
    {fields.map((field) => (
      <Fragment key={`${depth}-${field.name}`}>
        <TableRow>
          <TableCell className="align-top font-mono text-xs">
            <span style={{ paddingLeft: `${depth}rem` }} className="inline-block">
              {field.name}
              {alwaysRequired || field.required ? (
                <span className="ml-1 text-destructive" title="Required">
                  *
                </span>
              ) : null}
            </span>
          </TableCell>
          <TableCell className="align-top font-mono text-xs text-muted-foreground">{field.type}</TableCell>
          <TableCell className="align-top text-sm text-muted-foreground">{field.description ?? ""}</TableCell>
        </TableRow>
        {(field.fields ?? []).length > 0 ? (
          <FieldRows fields={field.fields ?? []} alwaysRequired={false} depth={depth + 1} />
        ) : null}
      </Fragment>
    ))}
  </>
);

/**
 * One documented group of values — path params, queries, headers, payload or
 * response fields.
 *
 * The Description column is always present, empty cells included. A field's
 * description is the JSDoc written above it in the controller's route type,
 * which `talos swagger:create` lifts into the meta — so an empty cell is not a
 * gap in the explorer, it is prose nobody has written yet, and showing the
 * column is what makes that visible.
 */
export const FieldTable = ({ title, fields, alwaysRequired = false }: FieldTablePropsType) => {
  if (fields.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-64">Name</TableHead>
            <TableHead className="w-40">Type</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <FieldRows fields={fields} alwaysRequired={alwaysRequired} depth={0} />
        </TableBody>
      </Table>
    </section>
  );
};

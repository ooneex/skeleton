import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@module/design/components/typography";
import { Fragment } from "react";
import type { FieldType } from "../route";

type FieldTablePropsType = {
  title: string;
  fields: readonly FieldType[];
  /** Path parameters are required by construction, so the column is dropped for them. */
  alwaysRequired?: boolean;
};

/** Whether any field, at any depth, carries a description worth a column. */
const anyDescribed = (fields: readonly FieldType[]): boolean =>
  fields.some((field) => (field.description ?? "") !== "" || anyDescribed(field.fields ?? []));

type FieldRowsPropsType = {
  fields: readonly FieldType[];
  described: boolean;
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
const FieldRows = ({ fields, described, alwaysRequired, depth }: FieldRowsPropsType) => (
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
          {described ? (
            <TableCell className="align-top text-sm text-muted-foreground">{field.description ?? ""}</TableCell>
          ) : null}
        </TableRow>
        {(field.fields ?? []).length > 0 ? (
          <FieldRows fields={field.fields ?? []} described={described} alwaysRequired={false} depth={depth + 1} />
        ) : null}
      </Fragment>
    ))}
  </>
);

/**
 * One documented group of values — path params, queries, headers, payload or
 * response fields.
 *
 * The Description column only appears when at least one field has one. Most of
 * what the generator can read off a controller is name, type and optionality;
 * printing an empty third column for every route would be scaffolding, not
 * documentation.
 */
export const FieldTable = ({ title, fields, alwaysRequired = false }: FieldTablePropsType) => {
  if (fields.length === 0) {
    return null;
  }

  const described = anyDescribed(fields);

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-64">Name</TableHead>
            <TableHead className={described ? "w-40" : undefined}>Type</TableHead>
            {described ? <TableHead>Description</TableHead> : null}
          </TableRow>
        </TableHeader>
        <TableBody>
          <FieldRows fields={fields} described={described} alwaysRequired={alwaysRequired} depth={0} />
        </TableBody>
      </Table>
    </section>
  );
};

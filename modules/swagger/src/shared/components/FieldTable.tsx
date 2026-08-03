import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@module/design/components/typography";
import type { FieldType } from "../route";

type FieldTablePropsType = {
  title: string;
  fields: readonly FieldType[];
  /** Path parameters are required by construction, so the column is dropped for them. */
  alwaysRequired?: boolean;
};

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

  const described = fields.some((field) => (field.description ?? "") !== "");

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">Name</TableHead>
            <TableHead className={described ? "w-40" : undefined}>Type</TableHead>
            {described ? <TableHead>Description</TableHead> : null}
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field) => (
            <TableRow key={field.name}>
              <TableCell className="align-top font-mono text-xs">
                {field.name}
                {alwaysRequired || field.required ? (
                  <span className="ml-1 text-destructive" title="Required">
                    *
                  </span>
                ) : null}
              </TableCell>
              <TableCell className="align-top font-mono text-xs text-muted-foreground">{field.type}</TableCell>
              {described ? (
                <TableCell className="align-top text-sm text-muted-foreground">{field.description ?? ""}</TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

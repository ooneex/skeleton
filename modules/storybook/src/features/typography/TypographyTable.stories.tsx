import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@module/design/components/typography";
import type { Meta } from "../../shared/story";

const rows = [
  { name: "King's Treasure", king: "John", population: "2000" },
  { name: "Enchantia", king: "Larry", population: "15000" },
  { name: "Sunny Kingdom", king: "Louis", population: "6000" },
];

const composed = (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>King's Treasure</TableHead>
        <TableHead>King</TableHead>
        <TableHead>Population</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.king}</TableCell>
          <TableCell>{row.population}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const meta = {
  title: "Table",
  group: "Typography",
  tags: [],
  component: Table,
  usage: [
    "**Table** renders a typographic data table for prose contexts (documentation, changelogs, comparison content) rather than an interactive data grid. It composes from `TableHeader`, `TableBody`, `TableRow`, `TableHead`, and `TableCell` — a scrollable wrapper handles overflow on narrow viewports, and rows get an alternating muted background for scannability.",
    "",
    "**How to use it** — wrap column titles in `TableHeader` > `TableRow` > `TableHead`, and data rows in `TableBody` > `TableRow` > `TableCell`. Keep the content plain text or simple inline elements — this is static content markup, not a sortable/filterable grid.",
    "",
    "**When to use it** — comparison tables in documentation, changelogs, pricing breakdowns, or any tabular reference data embedded in long-form content.",
    "",
    "**When not to use it** — for interactive datasets that need sorting, filtering, pagination, or row selection, use a dedicated data-grid component instead — this `Table` has no such behavior built in.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: composed,
    },
  ],
} satisfies Meta<typeof Table>;

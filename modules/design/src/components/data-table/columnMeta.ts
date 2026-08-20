export type DataTableAlignType = "left" | "center" | "right";

/**
 * The per-column presentation the grid reads when it renders a table instance
 * itself. The column model is the natural place for it — alignment and the odd
 * width class belong to the column, not to the markup that happens to draw it.
 *
 * Type it at the source by declaring the slot on the table's feature set:
 *
 * ```ts
 * const features = tableFeatures({ columnMeta: metaHelper<DataTableColumnMetaType>() });
 * ```
 */
export type DataTableColumnMetaType = {
  align?: DataTableAlignType;
  headClassName?: string;
  cellClassName?: string;
};

/** Reads the grid's presentation meta off a column def, whatever meta slot the table declared. */
export const readColumnMeta = (meta: unknown): DataTableColumnMetaType => (meta ?? {}) as DataTableColumnMetaType;

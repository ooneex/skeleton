import type * as React from "react";

export const PaginationItem = (props: React.ComponentProps<"li">) => <li data-slot="pagination-item" {...props} />;

PaginationItem.displayName = "Pagination.Item";

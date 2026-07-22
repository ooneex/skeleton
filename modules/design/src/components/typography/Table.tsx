import { cn } from "@module/design/utils/cn";
import type { ComponentProps } from "react";

type TablePropsType = ComponentProps<"table">;

export const Table = ({ className, ...props }: TablePropsType) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  );
};

type TableHeaderPropsType = ComponentProps<"thead">;

export const TableHeader = ({ className, ...props }: TableHeaderPropsType) => {
  return <thead className={cn(className)} {...props} />;
};

type TableBodyPropsType = ComponentProps<"tbody">;

export const TableBody = ({ className, ...props }: TableBodyPropsType) => {
  return <tbody className={cn(className)} {...props} />;
};

type TableRowPropsType = ComponentProps<"tr">;

export const TableRow = ({ className, ...props }: TableRowPropsType) => {
  return <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...props} />;
};

type TableHeadPropsType = ComponentProps<"th">;

export const TableHead = ({ className, ...props }: TableHeadPropsType) => {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  );
};

type TableCellPropsType = ComponentProps<"td">;

export const TableCell = ({ className, ...props }: TableCellPropsType) => {
  return (
    <td
      className={cn("border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right", className)}
      {...props}
    />
  );
};

Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableRow.displayName = "TableRow";
TableHead.displayName = "TableHead";
TableCell.displayName = "TableCell";

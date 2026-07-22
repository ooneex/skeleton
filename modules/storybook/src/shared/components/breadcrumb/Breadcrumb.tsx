import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import { BreadcrumbEllipsis } from "./BreadcrumbEllipsis";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbLink } from "./BreadcrumbLink";
import { BreadcrumbList } from "./BreadcrumbList";
import { BreadcrumbPage } from "./BreadcrumbPage";
import { BreadcrumbSeparator } from "./BreadcrumbSeparator";

const BreadcrumbRoot = ({ className, ...props }: ComponentProps<"nav">) => {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" className={cn(className)} {...props} />;
};

/**
 * Breadcrumb compound component.
 *
 * Use the namespaced sub-components: `Breadcrumb.List`, `Breadcrumb.Item`,
 * `Breadcrumb.Link`, `Breadcrumb.Page`, `Breadcrumb.Separator`,
 * `Breadcrumb.Ellipsis`.
 */
export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});

import type { Button } from "@module/design/components/button/Button";
import { ChevronLeftIcon as ChevronLeftIconLg } from "@module/design/icons/outline/arrows/lg/ChevronLeftIcon";
import { ChevronRightIcon as ChevronRightIconLg } from "@module/design/icons/outline/arrows/lg/ChevronRightIcon";
import { ChevronLeftIcon as ChevronLeftIconMd } from "@module/design/icons/outline/arrows/md/ChevronLeftIcon";
import { ChevronRightIcon as ChevronRightIconMd } from "@module/design/icons/outline/arrows/md/ChevronRightIcon";
import { ChevronLeftIcon as ChevronLeftIconSm } from "@module/design/icons/outline/arrows/sm/ChevronLeftIcon";
import { ChevronRightIcon as ChevronRightIconSm } from "@module/design/icons/outline/arrows/sm/ChevronRightIcon";
import type * as React from "react";
import { createContext } from "react";

export type PaginationSizeType = "xs" | "sm" | "md" | "lg";

export const PaginationContext = createContext<PaginationSizeType>("md");

export const contentGapVariants: Record<PaginationSizeType, string> = {
  xs: "gap-0",
  sm: "gap-0.5",
  md: "gap-1",
  lg: "gap-1.5",
};

export const linkIconSizeVariants: Record<PaginationSizeType, React.ComponentProps<typeof Button>["size"]> = {
  xs: "icon-xs",
  sm: "icon-sm",
  md: "icon",
  lg: "icon-lg",
};

export const chevronIconSizeVariants: Record<PaginationSizeType, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export const chevronIconMap: Record<
  PaginationSizeType,
  { ChevronLeftIcon: typeof ChevronLeftIconSm; ChevronRightIcon: typeof ChevronRightIconSm }
> = {
  xs: { ChevronLeftIcon: ChevronLeftIconSm, ChevronRightIcon: ChevronRightIconSm },
  sm: { ChevronLeftIcon: ChevronLeftIconSm, ChevronRightIcon: ChevronRightIconSm },
  md: { ChevronLeftIcon: ChevronLeftIconMd, ChevronRightIcon: ChevronRightIconMd },
  lg: { ChevronLeftIcon: ChevronLeftIconLg, ChevronRightIcon: ChevronRightIconLg },
};

export const ellipsisSizeVariants: Record<PaginationSizeType, string> = {
  xs: "size-6",
  sm: "size-8",
  md: "size-9",
  lg: "size-10",
};

export const linkTextSizeVariants: Record<PaginationSizeType, string> = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

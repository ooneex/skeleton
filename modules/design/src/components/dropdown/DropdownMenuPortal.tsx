import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type DropdownMenuPortalPropsType = {
  children?: ReactNode;
  container?: Element | DocumentFragment | null;
};

export const DropdownMenuPortal = ({ children, container }: DropdownMenuPortalPropsType) => {
  return createPortal(children, container ?? document.body);
};

DropdownMenuPortal.displayName = "DropdownMenu.Portal";

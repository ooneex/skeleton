import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type DrawerPortalPropsType = {
  children?: ReactNode;
  container?: Element | DocumentFragment | null;
};

export const DrawerPortal = ({ children, container }: DrawerPortalPropsType) => {
  return createPortal(children, container ?? document.body);
};
DrawerPortal.displayName = "DrawerPortal";

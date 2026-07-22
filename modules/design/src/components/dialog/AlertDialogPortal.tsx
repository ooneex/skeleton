import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type AlertDialogPortalPropsType = {
  children?: ReactNode;
  container?: Element | DocumentFragment | null;
};

export const AlertDialogPortal = ({ children, container }: AlertDialogPortalPropsType) => {
  return createPortal(children, container ?? document.body);
};
AlertDialogPortal.displayName = "AlertDialogPortal";

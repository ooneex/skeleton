import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type DialogPortalPropsType = {
  children?: ReactNode;
  container?: Element | DocumentFragment | null;
};

export const DialogPortal = ({ children, container }: DialogPortalPropsType) => {
  return createPortal(children, container ?? document.body);
};
DialogPortal.displayName = "DialogPortal";

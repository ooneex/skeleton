import { createContext, useContext } from "react";

export type DialogContextValueType = {
  open: boolean;
  /** Close the dialog, resolving its promise with the dismiss value. */
  dismiss: () => void;
  titleId: string;
  descriptionId: string;
  setHasTitle: (hasTitle: boolean) => void;
  setHasDescription: (hasDescription: boolean) => void;
};

export const DialogContext = createContext<DialogContextValueType | null>(null);

export const useDialogContext = () => useContext(DialogContext);

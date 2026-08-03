import { createContext, useContext } from "react";
import type { CommenterCommentType, CommenterDraftType, CommenterModeType, CommenterRectType } from "./types";
import type { CommenterPatchType } from "./useUpdateComment";

export type CommenterContextValueType = {
  mode: CommenterModeType;
  setMode: (mode: CommenterModeType) => void;
  comments: CommenterCommentType[];
  /** `true` while the comment list is being fetched. */
  loading: boolean;
  /** Last failed read or write, shown in the widget. */
  error: Error | null;
  draft: CommenterDraftType | null;
  setDraft: (draft: CommenterDraftType | null) => void;
  selectedId: string | null;
  select: (id: string | null) => void;
  submit: (body: string) => Promise<void>;
  /** `null` when the host offers no way to edit a comment. */
  update: ((patch: CommenterPatchType) => Promise<void>) | null;
  /** `true` while a create or update request is in flight. */
  saving: boolean;
  /** `null` when the host offers no way to delete a comment. */
  remove: ((id: string) => void) | null;
  /** `true` while an area is being selected or captured — the UI stays out of the shot. */
  hidden: boolean;
  /** `true` while the frame is being grabbed, after the area was selected. */
  shooting: boolean;
  /** Why the last capture produced no image, when it failed. */
  captureError: string | null;
  startCapture: () => void;
  cancelCapture: () => void;
  applyCapture: (rect: CommenterRectType) => Promise<void>;
  close: () => void;
};

export const CommenterContext = createContext<CommenterContextValueType | null>(null);

export const useCommenterContext = (): CommenterContextValueType => {
  const context = useContext(CommenterContext);

  if (!context) {
    throw new Error("Commenter sub-components must be rendered inside <Commenter />.");
  }

  return context;
};

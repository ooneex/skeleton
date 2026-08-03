import type { CommenterBrowserContextType } from "./browserContext";

/** Widget interaction mode. `edit` targets elements, `view` only reads existing comments. */
export type CommenterModeType = "edit" | "view";

/** Rectangle in viewport (client) coordinates. */
export type CommenterRectType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/** Where a comment is pinned in the page. */
export type CommenterAnchorType = {
  /** CSS selector rebuilt from the targeted element. */
  selector: string;
  /** Human readable label of the target, e.g. `button.submit`. */
  label: string;
  /** Click position inside the target, as a 0..1 fraction of its box. */
  offsetX: number;
  offsetY: number;
  /** Document coordinates, used when the selector no longer resolves. */
  pageX: number;
  pageY: number;
};

export type CommenterAuthorType = {
  name: string;
  avatar?: string;
};

export type CommenterCommentType = {
  id: string;
  body: string;
  anchor: CommenterAnchorType;
  /** Browser, page and screen the comment was written in. */
  context?: CommenterBrowserContextType;
  /** Data URL of the captured area, when the author attached one. */
  screenshot?: string;
  author?: CommenterAuthorType;
  createdAt?: string;
  resolved?: boolean;
};

/** A comment being written: everything but the identity the host assigns. */
export type CommenterDraftType = {
  anchor: CommenterAnchorType;
  screenshot?: string;
};

/** Payload handed to `onCreate` and posted to `createUrl` when the author submits. */
export type CommenterSubmitType = CommenterDraftType & {
  body: string;
  /** Browser snapshot taken at submit time. */
  context: CommenterBrowserContextType;
};

export type CommenterShortcutsType = {
  /** Show or hide the widget. Defaults to `mod+shift+c`. */
  toggle?: string;
  /** Switch to edit mode. Defaults to `mod+shift+e`. */
  edit?: string;
  /** Switch to view mode. Defaults to `mod+shift+v`. */
  view?: string;
};

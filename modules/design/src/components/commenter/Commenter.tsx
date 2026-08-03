import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { collectBrowserContext } from "./browserContext";
import { CommenterCaptureOverlay } from "./CommenterCaptureOverlay";
import { CommenterPins } from "./CommenterPins";
import { CommenterTargetPicker } from "./CommenterTargetPicker";
import { CommenterWidget } from "./CommenterWidget";
import { type CommenterCaptureType, captureArea } from "./captureArea";
import { CommenterContext, type CommenterContextValueType } from "./commenterContext";
import { isCommenterEnabled } from "./commenterEnv";
import type { CommenterEndpointsType } from "./commenterRequest";
import type {
  CommenterAnchorType,
  CommenterAuthorType,
  CommenterCommentType,
  CommenterDraftType,
  CommenterModeType,
  CommenterRectType,
  CommenterSubmitType,
} from "./types";
import { useCreateComment } from "./useCreateComment";
import { useDeleteComment } from "./useDeleteComment";
import { useGetComments } from "./useGetComments";
import { type CommenterPatchType, useUpdateComment } from "./useUpdateComment";

export type CommenterPropsType = CommenterEndpointsType & {
  /** Overrides the `VITE_COMMENTER_ENABLED` environment flag. */
  enabled?: boolean;
  /** Page the comments belong to. Defaults to the current pathname. */
  page?: string;
  /** Comments to display. Takes precedence over `listUrl`. */
  comments?: CommenterCommentType[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  mode?: CommenterModeType;
  defaultMode?: CommenterModeType;
  onModeChange?: (mode: CommenterModeType) => void;
  /** Called on every create; when `createUrl` is set it runs after the POST. */
  // biome-ignore lint/suspicious/noConfusingVoidType: the handler may be a plain sync callback or resolve the stored comment
  onCreate?: (comment: CommenterSubmitType) => void | Promise<CommenterCommentType | undefined>;
  /** Called on every edit; when `updateUrl` is set it runs after the PATCH. */
  onUpdate?: (patch: CommenterPatchType) => void;
  /** Called on every delete; when `deleteUrl` is set it runs after the DELETE. */
  onDelete?: (id: string) => void;
  onSelect?: (comment: CommenterCommentType | null) => void;
  /** Author stamped on the comments created from this session. */
  author?: CommenterAuthorType;
  /** Screenshot strategy. Defaults to the native screen-capture API. */
  capture?: CommenterCaptureType;
  /** Reuse the app's query client instead of the widget's own isolated one. */
  queryClient?: QueryClient;
  className?: string;
};

const createId = (): string => {
  return typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `commenter-${Date.now()}`;
};

const CommenterRoot = ({
  page: pageProp,
  listUrl,
  createUrl,
  updateUrl,
  deleteUrl,
  enabled,
  comments: commentsProp,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  mode: modeProp,
  defaultMode = "view",
  onModeChange,
  onCreate,
  onUpdate,
  onDelete,
  onSelect,
  author,
  capture = captureArea,
  className,
}: CommenterPropsType) => {
  const active = enabled ?? isCommenterEnabled();
  const page = pageProp ?? window.location.pathname;

  const [openState, setOpenState] = useState(defaultOpen);
  const [modeState, setModeState] = useState(defaultMode);
  const [ownComments, setOwnComments] = useState<CommenterCommentType[]>([]);
  const [draft, setDraft] = useState<CommenterDraftType | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [capturing, setCapturing] = useState(false);
  const [shooting, setShooting] = useState(false);
  const [captureError, setCaptureError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const query = useGetComments({ listUrl, page });
  const createComment = useCreateComment({ createUrl, listUrl, page });
  const updateComment = useUpdateComment({ updateUrl, listUrl, page });
  const deleteComment = useDeleteComment({ deleteUrl, listUrl, page });

  const open = openProp ?? openState;
  const mode = modeProp ?? modeState;
  const comments = commentsProp ?? (listUrl ? (query.data ?? []) : ownComments);
  const local = !commentsProp && !listUrl;

  const setOpen = useCallback(
    (next: boolean) => {
      setOpenState(next);
      onOpenChange?.(next);
    },
    [onOpenChange],
  );

  const setMode = useCallback(
    (next: CommenterModeType) => {
      setModeState(next);
      onModeChange?.(next);
      if (next === "view") setDraft(null);
    },
    [onModeChange],
  );

  const select = useCallback(
    (id: string | null) => {
      setSelectedId(id);
      onSelect?.(comments.find((comment) => comment.id === id) ?? null);
    },
    [comments, onSelect],
  );

  const submit = useCallback(
    async (body: string) => {
      if (!draft) return;

      const payload: CommenterSubmitType = { ...draft, body, context: collectBrowserContext() };
      setSaving(true);

      try {
        const created = createUrl ? await createComment.mutateAsync(payload) : await onCreate?.(payload);
        if (createUrl) onCreate?.(payload);

        if (local) {
          setOwnComments((current) => [
            ...current,
            created ?? {
              id: createId(),
              body,
              anchor: draft.anchor,
              context: payload.context,
              ...(draft.screenshot ? { screenshot: draft.screenshot } : {}),
              ...(author ? { author } : {}),
              createdAt: new Date().toISOString(),
            },
          ]);
        }

        setDraft(null);
      } finally {
        setSaving(false);
      }
    },
    [draft, createUrl, createComment, onCreate, local, author],
  );

  const update = useCallback(
    async (patch: CommenterPatchType) => {
      setSaving(true);

      try {
        if (updateUrl) await updateComment.mutateAsync(patch);
        onUpdate?.(patch);

        if (local) {
          setOwnComments((current) =>
            current.map((comment) => (comment.id === patch.id ? { ...comment, ...patch } : comment)),
          );
        }
      } finally {
        setSaving(false);
      }
    },
    [updateUrl, updateComment, onUpdate, local],
  );

  const remove = useCallback(
    (id: string) => {
      if (deleteUrl) deleteComment.mutate(id);
      onDelete?.(id);

      if (local) setOwnComments((current) => current.filter((comment) => comment.id !== id));
      setSelectedId((current) => (current === id ? null : current));
    },
    [deleteUrl, deleteComment, onDelete, local],
  );

  const applyCapture = useCallback(
    async (rect: CommenterRectType) => {
      // Stay hidden until the frame is grabbed, so the widget and pins stay out of the shot.
      setCapturing(false);
      setShooting(true);

      try {
        const screenshot = await capture(rect);
        setCaptureError(screenshot ? null : "The screenshot could not be taken. Check the screen-share permission.");
        if (!screenshot) return;

        setDraft((current) => (current ? { ...current, screenshot } : current));
      } finally {
        setShooting(false);
      }
    },
    [capture],
  );

  const onPick = useCallback((anchor: CommenterAnchorType) => setDraft({ anchor }), []);

  const value = useMemo<CommenterContextValueType>(
    () => ({
      mode,
      setMode,
      comments,
      loading: query.isPending && Boolean(listUrl),
      error: query.error ?? createComment.error ?? updateComment.error ?? deleteComment.error ?? null,
      draft,
      setDraft,
      selectedId,
      select,
      submit,
      update: updateUrl || onUpdate || local ? update : null,
      saving,
      remove: deleteUrl || onDelete || local ? remove : null,
      hidden: capturing || shooting,
      shooting,
      captureError,
      startCapture: () => {
        setCaptureError(null);
        setCapturing(true);
      },
      cancelCapture: () => setCapturing(false),
      applyCapture,
      close: () => setOpen(false),
    }),
    [
      mode,
      setMode,
      comments,
      query.isPending,
      query.error,
      createComment.error,
      updateComment.error,
      deleteComment.error,
      listUrl,
      draft,
      selectedId,
      select,
      submit,
      update,
      updateUrl,
      onUpdate,
      saving,
      remove,
      deleteUrl,
      onDelete,
      local,
      capturing,
      shooting,
      captureError,
      applyCapture,
      setOpen,
    ],
  );

  if (!active || !open) return null;

  return (
    <CommenterContext.Provider value={value}>
      <CommenterWidget className={className} />
      {capturing || shooting ? null : (
        <CommenterPins comments={comments} draft={draft} selectedId={selectedId} onSelect={select} />
      )}
      {mode === "edit" && !draft && !capturing && !shooting ? <CommenterTargetPicker onPick={onPick} /> : null}
      {capturing ? <CommenterCaptureOverlay onSelect={applyCapture} onCancel={() => setCapturing(false)} /> : null}
    </CommenterContext.Provider>
  );
};

/**
 * In-page feedback widget: point at any element, write a comment, attach a
 * screenshot of a selected area, and browse what has already been reported.
 *
 * Mount it once, at the root of the app. Give it the four CRUD endpoints and
 * it talks to the backend itself through `@talosjs/fetcher` and TanStack
 * Query — `updateUrl` and `deleteUrl` accept an `:id` placeholder:
 *
 * ```tsx
 * <Commenter
 *   listUrl="/api/comments"
 *   createUrl="/api/comments"
 *   updateUrl="/api/comments/:id"
 *   deleteUrl="/api/comments/:id"
 * />
 * ```
 *
 * Without endpoints it falls back to the `comments` prop and the
 * `onCreate` / `onUpdate` / `onDelete` callbacks, and with neither it simply
 * keeps the comments in memory.
 *
 * It renders nothing unless `VITE_COMMENTER_ENABLED` is truthy (or `enabled`
 * is passed), so production builds stay untouched. The panel is driven from
 * its own header: the edit / view toggles and the close button.
 */
export const Commenter = ({ queryClient, ...props }: CommenterPropsType) => {
  const client = useMemo(
    () => queryClient ?? new QueryClient({ defaultOptions: { queries: { retry: false } } }),
    [queryClient],
  );

  if (!(props.enabled ?? isCommenterEnabled())) return null;

  return (
    <QueryClientProvider client={client}>
      <CommenterRoot {...props} />
    </QueryClientProvider>
  );
};

Commenter.displayName = "Commenter";

import { Fetcher } from "@talosjs/fetcher";
import type { CommenterCommentType } from "./types";

/** The four backend endpoints backing the widget's CRUD operations. */
export type CommenterEndpointsType = {
  /** `GET` — returns the comments of the page. */
  listUrl?: string;
  /** `POST` — receives a new comment and returns the stored one. */
  createUrl?: string;
  /** `PATCH` — receives the patched fields. Supports an `:id` placeholder. */
  updateUrl?: string;
  /** `DELETE` — removes a comment. Supports an `:id` placeholder. */
  deleteUrl?: string;
};

/**
 * Interpolate `:id` in an endpoint template, appending the id when the
 * template has no placeholder: `/comments/:id` and `/comments` both resolve
 * to `/comments/42`.
 */
export const resolveUrl = (template: string, id: string): string => {
  if (template.includes(":id")) return template.replaceAll(":id", encodeURIComponent(id));

  return `${template.replace(/\/$/, "")}/${encodeURIComponent(id)}`;
};

/** Add the page the widget runs on to a list URL, so backends can filter on it. */
export const withPage = (url: string, page: string): string => {
  const separator = url.includes("?") ? "&" : "?";

  return `${url}${separator}page=${encodeURIComponent(page)}`;
};

/**
 * A `Fetcher` bound to `signal`: TanStack Query cancels the request on
 * unmount or refetch, so each call gets its own client.
 */
export const createFetcher = (signal?: AbortSignal): Fetcher => {
  const fetcher = new Fetcher();

  signal?.addEventListener("abort", () => fetcher.abort(), { once: true });

  return fetcher;
};

type ResponseEnvelopeType = {
  success?: boolean;
  message?: string | null;
  data?: unknown;
};

/** Unwrap the `@talosjs/http-response` envelope, throwing on a failed response. */
export const unwrap = <T>(response: unknown): T => {
  const envelope = response as ResponseEnvelopeType;

  if (envelope?.success === false) {
    throw new Error(envelope.message ?? "The commenter request failed.");
  }

  return (envelope?.data ?? envelope) as T;
};

/** Read a comment list out of a response, tolerating `{ data: { comments } }` shapes. */
export const toCommentList = (payload: unknown): CommenterCommentType[] => {
  if (Array.isArray(payload)) return payload as CommenterCommentType[];

  const nested = (payload as { comments?: unknown } | null)?.comments;

  return Array.isArray(nested) ? (nested as CommenterCommentType[]) : [];
};

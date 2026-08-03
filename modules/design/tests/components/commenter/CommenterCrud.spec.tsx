/// <reference lib="dom" />

import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Commenter } from "../../../src/components/commenter/Commenter";
import { resolveUrl, toCommentList, unwrap, withPage } from "../../../src/components/commenter/commenterRequest";
import type { CommenterCommentType } from "../../../src/components/commenter/types";

const ENDPOINTS = {
  listUrl: "/api/comments",
  createUrl: "/api/comments",
  updateUrl: "/api/comments/:id",
  deleteUrl: "/api/comments/:id",
};

const stored: CommenterCommentType = {
  id: "42",
  body: "The label is misaligned",
  anchor: { selector: "#target", label: "div#target", offsetX: 0.5, offsetY: 0.5, pageX: 10, pageY: 20 },
  author: { name: "Ada" },
  createdAt: "2026-01-05T10:00:00.000Z",
};

const envelope = (data: unknown) => ({ success: true, message: null, data, status: 200 });

type CallType = { url: string; method: string; body: unknown };

let calls: CallType[] = [];
const nativeFetch = globalThis.fetch;

const mockFetch = (responder: (call: CallType) => unknown) => {
  globalThis.fetch = mock(async (input: RequestInfo | URL, init?: RequestInit) => {
    const call: CallType = {
      url: String(input),
      method: init?.method ?? "GET",
      body: typeof init?.body === "string" ? JSON.parse(init.body) : init?.body,
    };
    calls.push(call);

    return new Response(JSON.stringify(responder(call)), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as unknown as typeof globalThis.fetch;
};

/** A tiny in-memory backend, so an invalidated refetch reflects the write. */
const mockBackend = (initial: CommenterCommentType[]) => {
  let store = [...initial];

  mockFetch((call) => {
    if (call.method === "POST") {
      const created = { ...stored, ...(call.body as Record<string, unknown>), id: "42" } as CommenterCommentType;
      store = [...store, created];

      return envelope(created);
    }

    if (call.method === "PATCH") {
      const id = call.url.split("/").pop() ?? "";
      store = store.map((comment) =>
        comment.id === id ? { ...comment, ...(call.body as Partial<CommenterCommentType>) } : comment,
      );

      return envelope(store.find((comment) => comment.id === id));
    }

    if (call.method === "DELETE") {
      store = store.filter((comment) => comment.id !== call.url.split("/").pop());

      return envelope({});
    }

    return envelope(store);
  });
};

beforeEach(() => {
  calls = [];
});

afterEach(() => {
  cleanup();
  globalThis.fetch = nativeFetch;
});

describe("Commenter CRUD endpoints", () => {
  test("lists the comments from listUrl, scoped to the page", async () => {
    mockBackend([stored]);
    render(<Commenter enabled defaultOpen page="/checkout" {...ENDPOINTS} />);

    expect(await screen.findByText("The label is misaligned")).toBeInTheDocument();
    expect(calls[0]?.url).toBe("/api/comments?page=%2Fcheckout");
    expect(calls[0]?.method).toBe("GET");
  });

  test("posts a new comment to createUrl and shows what the backend returned", async () => {
    const user = userEvent.setup();
    const target = document.createElement("div");
    target.id = "target";
    document.body.append(target);
    mockBackend([]);

    render(<Commenter enabled defaultOpen defaultMode="edit" page="/checkout" {...ENDPOINTS} />);
    await user.click(target);
    await user.type(await screen.findByRole("textbox", { name: "Comment" }), "Wrong wording");
    await user.click(screen.getByRole("button", { name: "Send" }));

    await waitFor(() => expect(calls.some((call) => call.method === "POST")).toBe(true));
    const post = calls.find((call) => call.method === "POST");
    expect(post?.url).toBe("/api/comments");
    expect(post?.body).toMatchObject({ body: "Wrong wording", page: "/checkout", anchor: { selector: "#target" } });
    expect(await screen.findByText("Wrong wording")).toBeInTheDocument();

    // the browser snapshot travels with the comment
    const context = (post?.body as { context?: Record<string, unknown> } | undefined)?.context;
    expect(context).toMatchObject({
      url: window.location.href,
      userAgent: navigator.userAgent,
      language: navigator.language,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      colorScheme: "light",
    });
    expect(typeof context?.capturedAt).toBe("string");

    target.remove();
  });

  test("patches an edited comment on updateUrl, interpolating the id", async () => {
    const user = userEvent.setup();
    mockBackend([stored]);

    render(<Commenter enabled defaultOpen {...ENDPOINTS} />);
    await user.click(await screen.findByRole("button", { name: "Edit comment 1" }));

    const field = screen.getByRole("textbox", { name: "Edit comment 1" });
    await user.clear(field);
    await user.type(field, "Fixed wording");
    await user.click(screen.getByRole("button", { name: "Save" }));

    await waitFor(() => expect(calls.some((call) => call.method === "PATCH")).toBe(true));
    const patch = calls.find((call) => call.method === "PATCH");
    expect(patch?.url).toBe("/api/comments/42");
    expect(patch?.body).toEqual({ body: "Fixed wording" });
    expect(await screen.findByText("Fixed wording")).toBeInTheDocument();
  });

  test("deletes on deleteUrl and drops the comment from the list", async () => {
    const user = userEvent.setup();
    mockBackend([stored]);

    render(<Commenter enabled defaultOpen {...ENDPOINTS} />);
    await user.click(await screen.findByRole("button", { name: "Delete comment 1" }));

    await waitFor(() => expect(calls.some((call) => call.method === "DELETE")).toBe(true));
    expect(calls.find((call) => call.method === "DELETE")?.url).toBe("/api/comments/42");
    await waitFor(() => expect(screen.queryByText("The label is misaligned")).not.toBeInTheDocument());
  });

  test("surfaces a failed response instead of rendering an empty list", async () => {
    mockFetch(() => ({ success: false, message: "Comments are unavailable", status: 500 }));
    render(<Commenter enabled defaultOpen {...ENDPOINTS} />);

    expect(await screen.findByRole("alert")).toHaveTextContent("Comments are unavailable");
  });

  test("offers no edit or delete action when no endpoint and no callback is given", async () => {
    mockBackend([stored]);
    render(<Commenter enabled defaultOpen listUrl={ENDPOINTS.listUrl} />);

    expect(await screen.findByText("The label is misaligned")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Edit comment 1" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Delete comment 1" })).not.toBeInTheDocument();
  });
});

describe("commenterRequest", () => {
  test("interpolates :id, or appends it when the template has no placeholder", () => {
    expect(resolveUrl("/api/comments/:id", "42")).toBe("/api/comments/42");
    expect(resolveUrl("/api/comments/", "42")).toBe("/api/comments/42");
    expect(resolveUrl("/api/comments/:id/replies/:id", "a b")).toBe("/api/comments/a%20b/replies/a%20b");
  });

  test("appends the page with the right separator", () => {
    expect(withPage("/api/comments", "/home")).toBe("/api/comments?page=%2Fhome");
    expect(withPage("/api/comments?limit=10", "/home")).toBe("/api/comments?limit=10&page=%2Fhome");
  });

  test("unwraps the response envelope and throws on failure", () => {
    expect(unwrap<{ id: string }>(envelope({ id: "1" }))).toEqual({ id: "1" });
    expect(() => unwrap({ success: false, message: "Nope" })).toThrow("Nope");
  });

  test("reads a comment list from either shape", () => {
    expect(toCommentList([stored])).toEqual([stored]);
    expect(toCommentList({ comments: [stored] })).toEqual([stored]);
    expect(toCommentList(null)).toEqual([]);
  });
});

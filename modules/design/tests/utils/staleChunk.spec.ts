import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { isStaleChunkError, reloadIfStaleChunkError } from "../../src/utils/staleChunk";

const RELOAD_GUARD_KEY = "app:stale-chunk-reloaded-at";

type BrowserStubType = {
  store: Map<string, string>;
  reloads: number;
};

const stubBrowser = (): BrowserStubType => {
  const store = new Map<string, string>();
  const stub: BrowserStubType = { store, reloads: 0 };

  globalThis.sessionStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => store.clear(),
    key: (index: number) => [...store.keys()][index] ?? null,
    get length() {
      return store.size;
    },
  } as Storage;

  globalThis.window = {
    location: {
      reload: () => {
        stub.reloads += 1;
      },
    },
  } as unknown as Window & typeof globalThis;

  return stub;
};

let browser: BrowserStubType;

beforeEach(() => {
  browser = stubBrowser();
});

afterEach(() => {
  Reflect.deleteProperty(globalThis, "sessionStorage");
  Reflect.deleteProperty(globalThis, "window");
});

describe("isStaleChunkError", () => {
  test("should recognise a failed dynamic import as a stale chunk", () => {
    const error = new Error("Failed to fetch dynamically imported module: /assets/page-a1b2.js");

    expect(isStaleChunkError(error)).toBe(true);
  });

  test("should recognise a stale chunk reported as a plain string", () => {
    expect(isStaleChunkError("Unable to preload CSS for /assets/page-a1b2.css")).toBe(true);
  });

  test("should reject unrelated errors and non-error values", () => {
    expect(isStaleChunkError(new Error("Network request failed"))).toBe(false);
    expect(isStaleChunkError(undefined)).toBe(false);
    expect(isStaleChunkError({ message: "Importing a module script failed" })).toBe(false);
  });
});

describe("reloadIfStaleChunkError", () => {
  test("should reload the page and stamp the guard on the first stale chunk", () => {
    const reloaded = reloadIfStaleChunkError(new Error("Importing a module script failed"));

    expect(reloaded).toBe(true);
    expect(browser.reloads).toBe(1);
    expect(Number(browser.store.get(RELOAD_GUARD_KEY))).toBeGreaterThan(0);
  });

  test("should not reload twice inside the guard window", () => {
    const error = new Error("error loading dynamically imported module");

    expect(reloadIfStaleChunkError(error)).toBe(true);
    expect(reloadIfStaleChunkError(error)).toBe(false);
    expect(browser.reloads).toBe(1);
  });

  test("should leave unrelated errors alone", () => {
    const reloaded = reloadIfStaleChunkError(new Error("Network request failed"));

    expect(reloaded).toBe(false);
    expect(browser.reloads).toBe(0);
    expect(browser.store.has(RELOAD_GUARD_KEY)).toBe(false);
  });
});

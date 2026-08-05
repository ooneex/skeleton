/// <reference lib="dom" />

import { describe, expect, test } from "bun:test";
import { collectBrowserContext } from "../../../src/components/commenter/browserContext";

describe("collectBrowserContext", () => {
  test("snapshots the page, the browser and the screen", () => {
    document.title = "Checkout";
    const context = collectBrowserContext();

    expect(context).toMatchObject({
      url: window.location.href,
      path: window.location.pathname,
      title: "Checkout",
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezoneOffset: new Date().getTimezoneOffset(),
      viewport: { width: window.innerWidth, height: window.innerHeight },
      screen: { width: window.screen.width, height: window.screen.height },
      devicePixelRatio: window.devicePixelRatio,
      cookiesEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
    });
    expect(context.languages).toEqual([...navigator.languages]);
    expect(Number.isNaN(Date.parse(context.capturedAt))).toBe(false);
  });

  test("reports the scroll position and the touch capability", () => {
    const context = collectBrowserContext();

    expect(context.scroll).toEqual({ x: Math.round(window.scrollX), y: Math.round(window.scrollY) });
    expect(context.touch).toBe(navigator.maxTouchPoints > 0);
  });

  test("falls back to null rather than guessing what the browser withholds", () => {
    const context = collectBrowserContext();

    expect(context.referrer).toBe(document.referrer || null);
    expect(context.deviceMemory === null || typeof context.deviceMemory === "number").toBe(true);
    expect(["dark", "light"]).toContain(context.colorScheme);
  });
});

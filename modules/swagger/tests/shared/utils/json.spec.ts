import { afterEach, describe, expect, test } from "bun:test";
import { copyToClipboard, downloadJson, formatJson, isValidJson } from "../../../src/shared/utils/json";

describe("formatJson", () => {
  test("should pretty-print a value over two spaces", () => {
    expect(formatJson({ status: "ok" })).toBe('{\n  "status": "ok"\n}');
  });

  test("should return a string untouched — a non-json body is shown as it came", () => {
    expect(formatJson("Not Found")).toBe("Not Found");
  });

  test("should render undefined as an empty editor", () => {
    expect(formatJson(undefined)).toBe("");
  });

  test("should fall back to a plain rendering for a value json cannot hold", () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;

    expect(formatJson(circular)).toBe("[object Object]");
  });
});

describe("isValidJson", () => {
  test("should accept an empty editor — it means no body", () => {
    expect(isValidJson("   ")).toBe(true);
  });

  test("should accept a well-formed payload", () => {
    expect(isValidJson('{"plan":"pro"}')).toBe(true);
  });

  test("should reject a payload the api would refuse", () => {
    expect(isValidJson("{plan:")).toBe(false);
  });
});

describe("copyToClipboard", () => {
  afterEach(() => {
    // biome-ignore lint/suspicious/noExplicitAny: restoring the stand-in installed by each test
    delete (navigator as any).clipboard;
  });

  test("should report true once the clipboard api accepts the text", async () => {
    let written: string | undefined;
    // biome-ignore lint/suspicious/noExplicitAny: navigator.clipboard is absent outside a browser
    (navigator as any).clipboard = {
      writeText: async (value: string) => {
        written = value;
      },
    };

    expect(await copyToClipboard("hello")).toBe(true);
    expect(written).toBe("hello");
  });

  test("should report false when the clipboard api refuses", async () => {
    // biome-ignore lint/suspicious/noExplicitAny: navigator.clipboard is absent outside a browser
    (navigator as any).clipboard = {
      writeText: async () => {
        throw new Error("denied");
      },
    };

    expect(await copyToClipboard("hello")).toBe(false);
  });

  test("should report false when there is no clipboard api at all", async () => {
    expect(await copyToClipboard("hello")).toBe(false);
  });
});

describe("downloadJson", () => {
  afterEach(() => {
    delete (globalThis as Record<string, unknown>).document;
  });

  test("should trigger a download of the formatted value", () => {
    const clicked: string[] = [];
    const anchor = {
      href: "",
      download: "",
      click(): void {
        clicked.push(this.download);
      },
    };
    (globalThis as Record<string, unknown>).document = {
      createElement: (tag: string) => {
        expect(tag).toBe("a");
        return anchor;
      },
    };

    downloadJson("openapi.json", { ok: true });

    expect(anchor.download).toBe("openapi.json");
    expect(anchor.href).toContain("blob:");
    expect(clicked).toEqual(["openapi.json"]);
  });
});

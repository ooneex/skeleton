import { useEffect, useState } from "react";
import { createHighlighterCore, createJavaScriptRegexEngine } from "react-shiki/core";

type HighlighterType = Awaited<ReturnType<typeof createHighlighterCore>>;

/**
 * Fine-grained Shiki highlighter: only the `tsx` grammar (which subsumes
 * TypeScript/JSX) and the two GitHub themes we map light/dark onto, driven by
 * the WASM-free JavaScript regex engine. Built once and shared across every
 * code preview so switching variants or themes never re-instantiates it.
 */
let highlighterPromise: Promise<HighlighterType> | undefined;

const loadHighlighter = (): Promise<HighlighterType> => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import("@shikijs/themes/github-light"), import("@shikijs/themes/github-dark")],
      langs: [import("@shikijs/langs/tsx")],
      // `forgiving` skips the rare grammar pattern the JS engine can't compile
      // rather than throwing and losing the whole snippet.
      engine: createJavaScriptRegexEngine({ forgiving: true }),
    });
  }
  return highlighterPromise;
};

/** Resolve the shared highlighter, returning `null` until it is ready. */
export const useCodeHighlighter = (): HighlighterType | null => {
  const [highlighter, setHighlighter] = useState<HighlighterType | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadHighlighter().then((instance) => {
      if (!cancelled) {
        setHighlighter(instance);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return highlighter;
};

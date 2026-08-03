import { useEffect } from "react";

/**
 * Match an event against a shortcut like `mod+shift+c`, where `mod` is the
 * platform command key (⌘ on Apple, Ctrl elsewhere).
 */
export const matchesShortcut = (event: KeyboardEvent, shortcut: string): boolean => {
  const parts = shortcut
    .toLowerCase()
    .split("+")
    .map((part) => part.trim())
    .filter(Boolean);

  const key = parts.at(-1);
  if (!key) return false;

  const modifiers = new Set(parts.slice(0, -1));
  const isApple = /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent);
  const mod = isApple ? event.metaKey : event.ctrlKey;

  if (modifiers.has("mod") !== mod) return false;
  if (modifiers.has("shift") !== event.shiftKey) return false;
  if (modifiers.has("alt") !== event.altKey) return false;
  if (!modifiers.has("mod") && modifiers.has("ctrl") !== event.ctrlKey) return false;

  return event.key.toLowerCase() === key || event.code.toLowerCase() === `key${key}`;
};

/** `true` when the user is typing somewhere and shortcuts should stand down. */
export const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
};

const isPlainCharacterShortcut = (shortcut: string): boolean => !shortcut.includes("+") && shortcut.length === 1;

/**
 * Bind `shortcut → handler` pairs on the document. Entries with an empty
 * shortcut are skipped, so a host can disable one by passing `""`.
 */
export const useShortcuts = (bindings: Record<string, (event: KeyboardEvent) => void>, enabled = true): void => {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      for (const [shortcut, handler] of Object.entries(bindings)) {
        if (!shortcut) continue;
        // A bare printable key must not steal keystrokes from a field; Escape still gets through.
        if (isTypingTarget(event.target) && isPlainCharacterShortcut(shortcut)) continue;
        if (!matchesShortcut(event, shortcut)) continue;

        event.preventDefault();
        handler(event);
        return;
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  });
};

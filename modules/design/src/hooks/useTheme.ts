import {
  type ThemeSchemeType,
  type ThemeType,
  themeLabels,
  themeSchemes,
} from "@module/design/components/theme/ThemeSwitcherOption";
import { useControlledState } from "@module/design/hooks/useControlledState";
import { useEffect, useState } from "react";

/** `localStorage` key under which the last chosen theme is persisted. */
export const THEME_STORAGE_KEY = "theme";

/** Read the persisted theme, ignoring unknown/removed codes and storage errors. */
const readStoredTheme = (): ThemeType | undefined => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored && stored in themeLabels ? (stored as ThemeType) : undefined;
  } catch {
    return undefined;
  }
};

type UseThemeOptionsType = {
  /** Controlled selection; when set, the hook mirrors it instead of owning state. */
  value?: ThemeType;
  /** Initial selection when uncontrolled and nothing is persisted yet. */
  defaultValue?: ThemeType;
  /** Notified whenever the selection changes. */
  onChange?: (theme: ThemeType) => void;
};

type UseThemeReturnType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

/**
 * Own the theme selection: seed it from `localStorage` (falling back to
 * `defaultValue`), mirror it onto `<html data-theme>`, and persist every change
 * so it survives reloads. Supports controlled use via `value`/`onChange`:
 *
 * ```tsx
 * const { theme, setTheme } = useTheme();
 * ```
 */
export const useTheme = ({
  value,
  defaultValue = "system",
  onChange,
}: UseThemeOptionsType = {}): UseThemeReturnType => {
  /** Restore the persisted selection once, seeding the uncontrolled default. */
  const [storedDefault] = useState<ThemeType>(() => readStoredTheme() ?? defaultValue);
  const [theme, setTheme] = useControlledState({ value, defaultValue: storedDefault, onChange });

  /** Persist every selection so it survives reloads. */
  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable (private mode, disabled cookies); ignore.
    }
  }, [theme]);

  /** Reflect the selection on <html> so the `.light`/`.dark` theme stylesheets apply. */
  useApplyTheme(theme);

  return { theme, setTheme };
};

/**
 * Mirror `theme` onto `<html data-theme>` so the matching `.light`/`.dark` theme
 * stylesheet applies, resolving `system` to the OS preference and following it
 * while `system` stays selected:
 *
 * ```tsx
 * useApplyTheme("dark");
 * ```
 */
export const useApplyTheme = (theme: ThemeType): void => {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const resolved = theme === "system" ? (media.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = resolved;
    };

    apply();

    if (theme !== "system") return;

    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);
};

/**
 * Read the resolved light/dark scheme from `<html data-theme>`. The switcher
 * mirrors the active theme (with `system` already resolved) there, so any
 * concrete theme code maps to a scheme; unknown/missing values default to
 * `"light"`.
 */
const readDocumentScheme = (): ThemeSchemeType => {
  if (typeof document === "undefined") return "light";
  const theme = document.documentElement.dataset.theme as ThemeType | undefined;
  return (theme ? themeSchemes[theme] : undefined) ?? "light";
};

/**
 * Track whether the active theme renders on a light or dark surface, following
 * every theme change (not just the base `dark` theme) by observing
 * `<html data-theme>`:
 *
 * ```tsx
 * const scheme = useThemeScheme();
 * const logo = scheme === "dark" ? darkLogo : lightLogo;
 * ```
 */
export const useThemeScheme = (): ThemeSchemeType => {
  const [scheme, setScheme] = useState<ThemeSchemeType>(readDocumentScheme);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setScheme(readDocumentScheme());

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    // Re-read in case the theme changed between render and effect.
    sync();

    return () => observer.disconnect();
  }, []);

  return scheme;
};

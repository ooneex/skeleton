import { Select } from "@module/design/components/select";
import { useControlledState } from "@module/design/hooks/useControlledState";
import { cn } from "@module/design/utils/cn";
import { cva } from "class-variance-authority";
import { Fragment, useEffect, useState } from "react";
import { ThemeSwitcherOption, type ThemeType, themeGroups, themeIcons, themeLabels } from "./ThemeSwitcherOption";

/** localStorage key under which the last picked theme is persisted. */
const THEME_STORAGE_KEY = "theme";

/** Read the persisted theme, ignoring absent/unknown values (e.g. a since-removed theme). */
const readStoredTheme = (): ThemeType | undefined => {
  if (typeof window === "undefined") return undefined;

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored !== null && stored in themeIcons ? (stored as ThemeType) : undefined;
};

const themeIconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "size-3.5",
      sm: "size-4",
      md: "size-4.5",
      lg: "size-5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const themeLabelVariants = cva("text-foreground", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export type ThemeSwitcherPropsType = {
  value?: ThemeType;
  defaultValue?: ThemeType;
  onChange?: (theme: ThemeType) => void;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  /** Applied to the select trigger. */
  className?: string;
};

/**
 * A `Select`-based theme picker. Lists every supported theme (icon + label)
 * and reports the chosen one via `onChange`:
 *
 * ```tsx
 * <ThemeSwitcher defaultValue="system" onChange={(theme) => ...} />
 * ```
 *
 * The selection is controlled via `value` or uncontrolled via `defaultValue`.
 * When uncontrolled, the choice is persisted to `localStorage` and restored on
 * the next visit. The resolved theme is mirrored onto `<html data-theme>`,
 * tracking the OS preference while `system` is selected.
 */
export const ThemeSwitcher = ({
  className,
  value,
  defaultValue = "system",
  onChange,
  size = "sm",
  disabled,
}: ThemeSwitcherPropsType) => {
  /** Restore the persisted choice once, falling back to `defaultValue`. */
  const [initialTheme] = useState(() => readStoredTheme() ?? defaultValue);
  const [theme, setTheme] = useControlledState({ value, defaultValue: initialTheme, onChange });

  /** Persist every selection so it survives reloads. */
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  /** Reflect the selection on <html> so the `.light`/`.dark` theme stylesheets apply. */
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

  const Icon = themeIcons[theme];

  return (
    <Select value={theme} onValueChange={(next) => next && setTheme(next)} disabled={disabled}>
      <Select.Trigger data-slot="theme-switcher" aria-label="Theme" size={size} className={className}>
        <span className="flex items-center gap-2">
          <Icon className={cn(themeIconVariants({ size }))} />
          <span className={cn(themeLabelVariants({ size }))}>{themeLabels[theme]}</span>
        </span>
      </Select.Trigger>
      <Select.Content className="min-w-3xs">
        {themeGroups.map((group, index) => (
          <Fragment key={group.label}>
            {index > 0 && <Select.Separator />}
            <Select.Group>
              <Select.Label>{group.label}</Select.Label>
              {group.themes.map((theme) => (
                <ThemeSwitcherOption key={theme.code} value={theme.code} size={size} />
              ))}
            </Select.Group>
          </Fragment>
        ))}
      </Select.Content>
    </Select>
  );
};
ThemeSwitcher.displayName = "ThemeSwitcher";

import { cva } from "class-variance-authority";
import { Fragment } from "react";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../utils/cn";
import { Select } from "../select";
import { ThemeSwitcherOption, type ThemeType, themeGroups, themeIcons, themeLabels } from "./ThemeSwitcherOption";

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
 * When uncontrolled, the last chosen theme is persisted to `localStorage` and
 * restored on the next visit. The resolved theme is mirrored onto
 * `<html data-theme>`, tracking the OS preference while `system` is selected.
 */
export const ThemeSwitcher = ({
  className,
  value,
  defaultValue = "system",
  onChange,
  size = "xs",
  disabled,
}: ThemeSwitcherPropsType) => {
  /** Restore, persist, and apply the selection; supports controlled use via props. */
  const { theme, setTheme } = useTheme({ value, defaultValue, onChange });

  const Icon = themeIcons[theme];

  return (
    <Select value={theme} onValueChange={(next) => next && setTheme(next)} disabled={disabled}>
      <Select.Trigger
        data-slot="theme-switcher"
        aria-label="Theme"
        size={size}
        className={cn("ring-0 focus-visible:ring-0", className)}
      >
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

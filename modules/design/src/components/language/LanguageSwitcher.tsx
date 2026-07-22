import { Select } from "@module/design/components/select";
import { useControlledState } from "@module/design/hooks/useControlledState";
import { cn } from "@module/design/utils/cn";
import { cva } from "class-variance-authority";
import { useEffect } from "react";
import { LanguageSwitcherOption, type LanguageType, languageFlags, languageLabels } from "./LanguageSwitcherOption";

/** All supported languages, in declaration order. */
const languages = Object.keys(languageLabels) as LanguageType[];

const languageFlagVariants = cva("shrink-0", {
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

const languageLabelVariants = cva("text-foreground", {
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

export type LanguageSwitcherPropsType = {
  value?: LanguageType;
  defaultValue?: LanguageType;
  onChange?: (language: LanguageType) => void;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  /** Applied to the select trigger. */
  className?: string;
};

/**
 * A `Select`-based language picker. Lists every supported language (flag +
 * label) and reports the chosen one via `onChange`:
 *
 * ```tsx
 * <LanguageSwitcher defaultValue="en" onChange={(lang) => ...} />
 * ```
 *
 * The selection is controlled via `value` or uncontrolled via `defaultValue`,
 * and the active language is mirrored onto `<html lang>`.
 */
export const LanguageSwitcher = ({
  className,
  value,
  defaultValue = "en",
  onChange,
  size = "sm",
  disabled,
}: LanguageSwitcherPropsType) => {
  const [language, setLanguage] = useControlledState({ value, defaultValue, onChange });

  /** Reflect the selection on <html lang> so assistive tech and CSS can react to it. */
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const Flag = languageFlags[language];

  return (
    <Select value={language} onValueChange={(next) => next && setLanguage(next)} disabled={disabled}>
      <Select.Trigger data-slot="language-switcher" aria-label="Language" size={size} className={className}>
        <span className="flex items-center gap-2">
          <Flag className={cn(languageFlagVariants({ size }))} />
          <span className={cn(languageLabelVariants({ size }))}>{languageLabels[language]}</span>
        </span>
      </Select.Trigger>
      <Select.Content className="min-w-3xs">
        {languages.map((code) => (
          <LanguageSwitcherOption key={code} value={code} size={size} />
        ))}
      </Select.Content>
    </Select>
  );
};
LanguageSwitcher.displayName = "LanguageSwitcher";

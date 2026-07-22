import { Select } from "@module/design/components/select";
import { cn } from "@module/design/utils/cn";
import { cva } from "class-variance-authority";
import type React from "react";
import { EnglishFlag } from "./flags/EnglishFlag";
import { FranceFlag } from "./flags/FranceFlag";
import { GermanyFlag } from "./flags/GermanyFlag";
import { GreeceFlag } from "./flags/GreeceFlag";
import { PortugalFlag } from "./flags/PortugalFlag";
import { RomaniaFlag } from "./flags/RomaniaFlag";
import { SpainFlag } from "./flags/SpainFlag";
import { SweedenFlag } from "./flags/SweedenFlag";

export type LanguageType = "en" | "fr" | "de" | "el" | "pt" | "ro" | "es" | "sv";

export const languageFlags: Record<LanguageType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  en: EnglishFlag,
  fr: FranceFlag,
  de: GermanyFlag,
  el: GreeceFlag,
  pt: PortugalFlag,
  ro: RomaniaFlag,
  es: SpainFlag,
  sv: SweedenFlag,
};

export const languageLabels: Record<LanguageType, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  el: "Ελληνικά",
  pt: "Português",
  ro: "Română",
  es: "Español",
  sv: "Svenska",
};

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

export type LanguageSwitcherOptionPropsType = Omit<React.ComponentProps<typeof Select.Item>, "value"> & {
  value: LanguageType;
};

export const LanguageSwitcherOption = ({ value, size = "sm", children, ...props }: LanguageSwitcherOptionPropsType) => {
  const Flag = languageFlags[value];

  return (
    <Select.Item data-slot="language-switcher-option" value={value} size={size} {...props}>
      {children ?? (
        <>
          <Flag className={cn(languageFlagVariants({ size }))} />
          {languageLabels[value]}
        </>
      )}
    </Select.Item>
  );
};
LanguageSwitcherOption.displayName = "LanguageSwitcherOption";

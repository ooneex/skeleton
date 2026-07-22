import { LanguageSwitcher } from "@module/design/components/language";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "LanguageSwitcher",
  group: "Components",
  tags: [],
  component: LanguageSwitcher,
  usage: [
    "**LanguageSwitcher** is a `Select`-based picker for the active interface language. It renders the current language as a flag plus its native label (`English`, `Français`, `Deutsch`, `Ελληνικά`, `Português`, `Română`, `Español`, `Svenska`) in the trigger, and lists every supported language — each an `LanguageSwitcherOption` with the same flag-and-label pairing — in the dropdown. Choosing one reports the new `LanguageType` through `onChange` and mirrors it onto `<html lang>` so assistive tech and locale-aware CSS react to the change.",
    "",
    "**How to use it** — drive it uncontrolled with `defaultValue` (defaults to `en`) for a self-contained switcher, or controlled with `value` + `onChange` when the locale lives in app state or a router param; persist the chosen `LanguageType` and load the matching translations on change. Match `size` to the chrome it sits in — a compact `xs`/`sm` in a top bar, a larger `md`/`lg` on a settings page. Set `disabled` while locale data is still loading.",
    "",
    "**When to use it** — in a header, footer, or account/settings screen wherever the user picks the language of the UI. The native-label list lets speakers recognize their own language regardless of the current locale.",
    "",
    "**When not to use it** — do not use it to pick a content language, region, or currency that is distinct from the UI locale (use a purpose-built selector), and do not use it for a two-language toggle where a single inline switch reads faster than a dropdown.",
  ].join("\n"),
  props: [
    {
      name: "defaultValue",
      control: "select",
      options: [
        {
          name: "en",
          usage: "English. The default locale — reach for it as the fallback when no user preference is known.",
        },
        {
          name: "fr",
          usage:
            "French (`Français`). Use for French-speaking users across France, Belgium, Canada, and francophone regions.",
        },
        {
          name: "de",
          usage: "German (`Deutsch`). Use for German-speaking audiences in Germany, Austria, and Switzerland.",
        },
        {
          name: "el",
          usage:
            "Greek (`Ελληνικά`). Use for Greek-speaking users — also a good check that non-Latin scripts render correctly.",
        },
        {
          name: "pt",
          usage: "Portuguese (`Português`). Use for Portugal- and Brazil-facing experiences.",
        },
        {
          name: "ro",
          usage: "Romanian (`Română`). Use for Romanian-speaking users.",
        },
        {
          name: "es",
          usage: "Spanish (`Español`). Use for Spanish-speaking audiences across Spain and Latin America.",
        },
        {
          name: "sv",
          usage: "Swedish (`Svenska`). Use for Swedish-speaking users in the Nordic region.",
        },
      ],
      default: "en",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage:
            "Smallest. Use in dense top bars and toolbars where the switcher sits inline beside other compact controls.",
        },
        {
          name: "sm",
          usage: "Compact. The default — fits standard headers, footers, and menu rows.",
        },
        {
          name: "md",
          usage: "Standard. Use on settings pages and forms where the language choice is a first-class field.",
        },
        {
          name: "lg",
          usage: "Prominent. Use on onboarding or account screens where the language choice leads the layout.",
        },
      ],
      default: "sm",
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onChange",
      callback: (language: string) => language,
    },
  ],
} satisfies Meta<typeof LanguageSwitcher>;

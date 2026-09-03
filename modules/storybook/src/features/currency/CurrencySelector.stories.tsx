import { CurrencySelector } from "@module/design/components/currency";
import type { MetaType } from "../../shared/story";

export const meta = {
  title: "CurrencySelector",
  group: "Components",
  tags: [],
  component: CurrencySelector,
  usage: [
    "**CurrencySelector** is a `Select`-based picker backed by the complete `@talosjs/currencies` catalog. Its trigger pairs the active currency's flag with its ISO code, while each option adds the full currency name so similar symbols remain unambiguous.",
    "",
    "**How to use it** — use `defaultValue` for a self-contained selector, or `value` with `onChange` when currency belongs to form or application state. Match `size` to the surrounding controls and set `disabled` while monetary settings are unavailable. The popup automatically portals into an active drawer when necessary.",
    "",
    "**When to use it** — for choosing the currency of a price, balance, report, transaction filter, or account preference where the ISO code must be explicit.",
    "",
    "**When not to use it** — do not use it for entering an amount, converting between two currencies, or choosing a country or locale; pair it with an amount input or use the dedicated country and language controls instead.",
  ].join("\n"),
  props: [
    {
      name: "defaultValue",
      control: "select",
      options: [
        {
          name: "USD",
          usage: "US Dollar. The default and a useful fallback for dollar-denominated international products.",
        },
        {
          name: "EUR",
          usage: "Euro. Use for eurozone pricing, balances, and regional account preferences.",
        },
        {
          name: "GBP",
          usage: "British Pound Sterling. Use for United Kingdom pricing and financial reporting.",
        },
        {
          name: "JPY",
          usage: "Japanese Yen. Use for Japan-facing prices and a representative zero-decimal currency.",
        },
        {
          name: "RON",
          usage: "Romanian Leu. Use for Romania-facing prices and account preferences.",
        },
      ],
      default: "USD",
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest. Use in dense table toolbars and compact transaction filters.",
        },
        {
          name: "sm",
          usage: "Compact. The default for headers, forms, and standard settings rows.",
        },
        {
          name: "md",
          usage: "Standard. Use when currency is a prominent form field or account preference.",
        },
        {
          name: "lg",
          usage: "Prominent. Use on onboarding and focused financial setup screens.",
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
      callback: (currency: string) => currency,
    },
  ],
} satisfies MetaType<typeof CurrencySelector>;

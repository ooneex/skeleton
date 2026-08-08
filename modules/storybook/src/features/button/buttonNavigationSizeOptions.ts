/**
 * The `size` control shared by `ButtonBack` and `ButtonNext` — the two ends of the same
 * paginator/wizard footer, so their size guidance reads identically.
 */
export const BUTTON_NAVIGATION_SIZE_PROP = {
  name: "size",
  control: "select",
  options: [
    { name: "xs", usage: "Smallest (24px). Use in dense toolbars and inline paginators." },
    { name: "sm", usage: "Compact (32px). The default — fits forms and card footers." },
    { name: "md", usage: "Standard (36px). Use where the action is a focal point of the section." },
    { name: "lg", usage: "Prominent (40px). Use on spacious wizard footers and hero flows." },
  ],
  default: "sm",
} as const;

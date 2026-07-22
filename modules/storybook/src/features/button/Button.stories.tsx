import { Button } from "@module/design/components/button";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Button",
  group: "Components",
  tags: [],
  component: Button,
  usage: [
    '**Button** is the primary way a user triggers an action. It renders a Base UI button with the design system\'s focus ring, disabled handling, and tight icon sizing built in, and it colors and sizes itself through the `variant` and `size` scales. Drop an `svg` before or after the label and the button reserves the right padding for it; pair it with the `data-icon="inline-start"`/`inline-end` attribute to tune that spacing.',
    "",
    '**How to use it** — write a short, verb-led label (`Save`, `Add member`, `Delete`). Choose the `variant` by emphasis: one high-emphasis `default` button per view for the main action, `outline`/`secondary` for supporting actions, `ghost` for low-emphasis or toolbar actions, `destructive` for dangerous ones, and `link` for navigation styled as a button. Use an icon-only `size` (`icon`, `icon-sm`, …) only with an `aria-label`. For grouped segmented controls, wrap several buttons in a `data-slot="button-group"` container.',
    "",
    "**When to use it** — for actions that change state, submit data, or advance a flow: submitting forms, opening dialogs, confirming or cancelling, running a command. Reach for the preset buttons (`ButtonSave`, `ButtonDelete`, `ButtonBack`, …) when one matches the intent, so the icon and variant stay consistent across the app.",
    "",
    "**When not to use it** — do not use a button for plain navigation between pages (use a link, or the `link` variant only when it must look like a button), and do not stack many high-emphasis `default` buttons together — competing primary actions leave the user unsure what to do.",
  ].join("\n"),
  props: [
    {
      name: "children",
      control: "text",
      default: "Button",
    },
    {
      name: "variant",
      control: "select",
      options: [
        {
          name: "default",
          usage:
            "Solid primary fill. Use for the single most important action in a view — submit, confirm, continue. Keep it to one per screen.",
        },
        {
          name: "outline",
          usage:
            "Bordered, no fill. Use for secondary actions that sit beside the primary one (Cancel next to Save) without competing with it.",
        },
        {
          name: "secondary",
          usage:
            "Muted filled tone. Use for supporting actions that are more prominent than ghost but should not read as the primary action.",
        },
        {
          name: "ghost",
          usage:
            "No border or fill until hovered. Use for low-emphasis and toolbar actions, icon buttons, and menu items where chrome would add noise.",
        },
        {
          name: "destructive",
          usage:
            "Tinted danger styling. Use for irreversible or harmful actions — delete, remove, revoke — so the risk reads before the click.",
        },
        {
          name: "link",
          usage:
            "Underline-on-hover, no chrome. Use when an action must visually read as a text link but still behaves as a button.",
        },
      ],
      default: "default",
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "xs",
          usage: "Smallest text button (24px). Use in dense toolbars, table rows, and inline controls.",
        },
        {
          name: "sm",
          usage: "Compact (32px). The default — fits forms, cards, and most page chrome.",
        },
        {
          name: "md",
          usage: "Standard (36px). Use where the action is a focal point of the section.",
        },
        {
          name: "lg",
          usage: "Prominent (40px). Use for hero calls-to-action and primary actions on spacious pages.",
        },
        {
          name: "icon",
          usage: "Square 36px icon-only button. Use for a single-glyph action with an `aria-label` and no text.",
        },
        {
          name: "icon-xs",
          usage: "Smallest square icon button (24px). Use in dense toolbars and inline next to compact controls.",
        },
        {
          name: "icon-sm",
          usage: "Compact square icon button (32px). Use for icon actions in standard toolbars and menus.",
        },
        {
          name: "icon-lg",
          usage: "Large square icon button (40px). Use for prominent icon actions in headers and empty states.",
        },
      ],
      default: "sm",
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof Button>;

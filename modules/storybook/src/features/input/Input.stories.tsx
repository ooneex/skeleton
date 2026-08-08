import {
  Input,
  InputCreditCard,
  InputDescription,
  InputEmail,
  InputFirstName,
  InputGroup,
  InputLastName,
  InputNumeric,
  InputOTP,
  InputPassword,
  InputPrice,
  InputSearch,
  InputSearchLight,
  InputSearchWithKbd,
  InputUrl,
} from "@module/design/components/input";
import type { ReactNode } from "react";
import { type ShowcaseExampleType, ShowcaseGallery } from "../../shared/components/ShowcaseGallery";
import type { MetaType } from "../../shared/story";

const examples: ShowcaseExampleType[] = [
  {
    title: "Basic",
    description: "The base single-line text field — a styled `<input>` that fills its container.",
    example: <Input placeholder="Enter text…" />,
  },
  {
    title: "Sizes",
    description: "Four heights — `xs`, `sm`, `md`, `lg` — to match the surrounding form density.",
    example: (
      <div className="flex flex-col gap-2">
        <Input size="xs" placeholder="Extra small" />
        <Input size="sm" placeholder="Small (default)" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
      </div>
    ),
  },
  {
    title: "States",
    description: "Toggle `disabled` to mute the field, or `aria-invalid` to surface the destructive ring.",
    example: (
      <div className="flex flex-col gap-2">
        <Input placeholder="Disabled" disabled />
        <Input defaultValue="Invalid value" aria-invalid="true" />
      </div>
    ),
  },
  {
    title: "File",
    description: 'Set `type="file"` and the native file-picker button picks up the field styling.',
    example: <Input type="file" />,
  },
  {
    title: "Group with prefix & action",
    description: "Wrap the field in `InputGroup` with `InputGroup.Addon`s for a prefix and a trailing action.",
    example: (
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input placeholder="example.com" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button variant="ghost">Copy</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    ),
  },
  {
    title: "Group with unit text",
    description: "Frame the value with `InputGroup.Text` — a currency prefix and a unit suffix.",
    example: (
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input placeholder="0.00" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>USD</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup>
    ),
  },
  {
    title: "Group with inline button",
    description: "Bind an action to the field with an `inline-end` `InputGroup.Button`.",
    example: (
      <InputGroup>
        <InputGroup.Input placeholder="Add a tag…" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button variant="secondary">Add</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    ),
  },
  {
    title: "Group with textarea",
    description: "Compose a multi-line `InputGroup.Textarea` with a `block-end` toolbar and counter.",
    example: (
      <InputGroup>
        <InputGroup.Textarea placeholder="Write a message…" rows={3} />
        <InputGroup.Addon align="block-end">
          <InputGroup.Text>0 / 280</InputGroup.Text>
          <InputGroup.Button variant="secondary" className="ml-auto">
            Send
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    ),
  },
  {
    title: "Email",
    description: '`InputEmail` — a leading envelope icon over a `type="email"` field.',
    example: <InputEmail />,
  },
  {
    title: "Password",
    description: '`InputPassword` — a leading lock icon over a masked `type="password"` field.',
    example: <InputPassword />,
  },
  {
    title: "First & last name",
    description: "`InputFirstName` and `InputLastName` — user-icon fields with the right `autoComplete`.",
    example: (
      <div className="flex flex-col gap-2">
        <InputFirstName autoComplete="given-name" />
        <InputLastName autoComplete="family-name" />
      </div>
    ),
  },
  {
    title: "URL",
    description: '`InputUrl` — a leading link icon over a `type="url"` field that validates the format.',
    example: <InputUrl />,
  },
  {
    title: "Credit card",
    description: "`InputCreditCard` — a card-icon field for the primary account number.",
    example: <InputCreditCard />,
  },
  {
    title: "Search",
    description: "`InputSearch` — the standard bordered search box with a leading magnifier.",
    example: <InputSearch />,
  },
  {
    title: "Search (light)",
    description: "`InputSearchLight` — a borderless, chromeless search that leans on its surface.",
    example: <InputSearchLight />,
  },
  {
    title: "Search with shortcut",
    description: "`InputSearchWithKbd` — a search field with a trailing `⌘K` keyboard hint.",
    example: <InputSearchWithKbd />,
  },
  {
    title: "Numeric stepper",
    description: "`InputNumeric` — a bounded, clamped stepper flanked by minus and plus buttons.",
    example: <InputNumeric defaultValue={3} min={0} max={10} />,
  },
  {
    title: "Price",
    description: "`InputPrice` — a money field with a leading `Combobox` currency picker.",
    example: <InputPrice currency="USD" />,
  },
  {
    title: "One-time passcode",
    description: "`InputOTP` — each character in its own box, split into groups with a separator.",
    example: (
      <InputOTP maxLength={6}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
    ),
  },
  {
    title: "Description",
    description: "`InputDescription` — a stripped-down `Editor` for a longer free-form paragraph.",
    example: <InputDescription placeholder="Describe this item…" />,
  },
];

/**
 * A gallery of every input in the design system, each shown inside a `Card` with the variant it
 * demonstrates. The controls panel is intentionally empty — this story documents the family of
 * inputs rather than a single configurable instance. `children` is accepted only so the code panel
 * can serialize the examples; the rendered gallery ignores it and builds its own cards from `examples`.
 */
const InputShowcase = (_props: { children?: ReactNode }) => <ShowcaseGallery examples={examples} />;
InputShowcase.displayName = "Input";

export const meta = {
  title: "Input",
  group: "Components",
  tags: [],
  component: InputShowcase,
  usage: [
    "**Input** is the base single-line text field of the design system — a styled `<input>` built on Base UI that grows to fill its container, shows a muted placeholder, brightens its ring on hover and focus, and turns destructive when `aria-invalid` is set. Around it the system ships `InputGroup` for adornments and a family of ready-made specialized inputs — email, password, name, URL, credit card, search, numeric, price, OTP, and description — each previewed in the cards here.",
    "",
    "**How to use it** — for a plain field, set the `type` to match the data, give it a `placeholder`, and pick a `size` that matches the form density. When a field needs a leading icon, a prefix/suffix, or a trailing button, wrap it in `InputGroup` with `InputGroup.Addon` slots. For common patterns (email, password, search, price, …) reach for the matching specialized input instead of re-assembling the group yourself.",
    "",
    "**When to use it** — for any free-form single-line value in a form: names, emails, tokens, search terms, URLs, amounts. It is the default field you reach for first.",
    "",
    "**When not to use it** — do not use it for multi-line text (use `Textarea`, or `InputGroup.Textarea` / `InputDescription` for composed variants), for a value chosen from a fixed set (use `Select` / `Combobox` / `RadioGroup`), or for on/off state (use `Checkbox` / `Switch`).",
  ].join("\n"),
  props: [
    // Drives only the code panel: the showcase renders its own cards, but the snippet
    // serializer reads `children`, so every input example appears in the code view.
    {
      name: "children",
      default: <>{examples.map((item) => item.example)}</>,
    },
  ],
} satisfies MetaType<typeof InputShowcase>;

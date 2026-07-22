import { Card } from "@module/design/components/card";
import { Checkbox } from "@module/design/components/checkbox";
import { Field } from "@module/design/components/field";
import { Input } from "@module/design/components/input";
import { ScrollArea } from "@module/design/components/scroll-area";
import { Switch } from "@module/design/components/switch";
import type { ReactNode } from "react";
import type { Meta } from "../../shared/story";

type FieldExampleType = {
  /** Heading naming the composition being shown. */
  title: string;
  /** One line on when to reach for this shape. */
  description: string;
  /** The live `Field` composition. */
  example: ReactNode;
};

const examples: FieldExampleType[] = [
  {
    title: "Basic",
    description: "Label, control, and helper text stacked vertically — the default for most inputs.",
    example: (
      <Field>
        <Field.Label htmlFor="field-email" required>
          Email
        </Field.Label>
        <Input id="field-email" type="email" placeholder="ada@example.com" />
        <Field.Description>We only use it to send account notifications — never marketing.</Field.Description>
      </Field>
    ),
  },
  {
    title: "With error",
    description: "Set `data-invalid` on the field and add a `Field.Error` to surface validation feedback.",
    example: (
      <Field data-invalid="true">
        <Field.Label htmlFor="field-username" required>
          Username
        </Field.Label>
        <Input id="field-username" defaultValue="ada lovelace" aria-invalid="true" />
        <Field.Error>Username can't contain spaces.</Field.Error>
      </Field>
    ),
  },
  {
    title: "Horizontal with content",
    description: "A leading control beside a `Field.Content` wrapping the label and description.",
    example: (
      <Field orientation="horizontal">
        <Checkbox id="field-newsletter" defaultChecked />
        <Field.Content>
          <Field.Label htmlFor="field-newsletter">Send me the weekly newsletter</Field.Label>
          <Field.Description>Product updates and tips, once a week. Unsubscribe anytime.</Field.Description>
        </Field.Content>
      </Field>
    ),
  },
  {
    title: "Inline title",
    description: "Use `Field.Title` for a trailing control whose label isn't tied to a single input.",
    example: (
      <Field orientation="horizontal">
        <Field.Content>
          <Field.Title>Two-factor authentication</Field.Title>
          <Field.Description>Require a one-time code at sign-in.</Field.Description>
        </Field.Content>
        <Switch id="field-2fa" defaultChecked />
      </Field>
    ),
  },
  {
    title: "Group",
    description: "Stack several fields with consistent spacing using `Field.Group`.",
    example: (
      <Field.Group>
        <Field>
          <Field.Label htmlFor="field-first">First name</Field.Label>
          <Input id="field-first" placeholder="Ada" />
        </Field>
        <Field>
          <Field.Label htmlFor="field-last">Last name</Field.Label>
          <Input id="field-last" placeholder="Lovelace" />
        </Field>
      </Field.Group>
    ),
  },
  {
    title: "With separator",
    description: "Divide a group with `Field.Separator`, optionally captioned with centered content.",
    example: (
      <Field.Group>
        <Field>
          <Field.Label htmlFor="field-work">Work email</Field.Label>
          <Input id="field-work" type="email" placeholder="ada@acme.com" />
        </Field>
        <Field.Separator>Or</Field.Separator>
        <Field>
          <Field.Label htmlFor="field-personal">Personal email</Field.Label>
          <Input id="field-personal" type="email" placeholder="ada@example.com" />
        </Field>
      </Field.Group>
    ),
  },
  {
    title: "Set with legend",
    description: "Caption a related cluster of fields with `Field.Set` and `Field.Legend`.",
    example: (
      <Field.Set>
        <Field.Legend>Notifications</Field.Legend>
        <Field.Description>Choose how you'd like to hear from us.</Field.Description>
        <Field orientation="horizontal">
          <Checkbox id="field-notify-email" defaultChecked />
          <Field.Content>
            <Field.Label htmlFor="field-notify-email">Email</Field.Label>
          </Field.Content>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-notify-sms" />
          <Field.Content>
            <Field.Label htmlFor="field-notify-sms">SMS</Field.Label>
          </Field.Content>
        </Field>
      </Field.Set>
    ),
  },
  {
    title: "Responsive",
    description: "Vertical on narrow containers, flipping to horizontal at the group's `@md` breakpoint.",
    example: (
      <Field.Group>
        <Field orientation="responsive">
          <Field.Label htmlFor="field-plan">Plan</Field.Label>
          <Input id="field-plan" placeholder="Team" />
          <Field.Description>Resize the panel to see the layout adapt.</Field.Description>
        </Field>
      </Field.Group>
    ),
  },
];

/**
 * A gallery of every `Field` composition, each shown inside a `Card` with the shape it demonstrates.
 * The controls panel is intentionally empty — this story documents the building blocks rather than a
 * single configurable instance. `children` is accepted only so the code panel can serialize the
 * compositions; the rendered gallery ignores it and builds its own cards from `examples`.
 */
const FieldShowcase = (_props: { children?: ReactNode }) => {
  return (
    <ScrollArea className="h-full w-full" viewportClassName="h-full">
      <div className="grid gap-6 p-6 md:grid-cols-2">
        {examples.map((item) => (
          <Card key={item.title} className="w-full">
            <Card.Header>
              <Card.Title>{item.title}</Card.Title>
              <Card.Description>{item.description}</Card.Description>
            </Card.Header>
            <Card.Content>{item.example}</Card.Content>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};
FieldShowcase.displayName = "Field";

export const meta = {
  title: "Field",
  group: "Components",
  tags: [],
  component: FieldShowcase,
  usage: [
    "**Field** is the building block for a single form control: it binds a label, the control itself, and its helper or validation text into one accessible unit (rendered as a `fieldset`) and lays them out via `orientation`. It is the compound root that its parts attach to — `Field.Label`, `Field.Title`, `Field.Description`, `Field.Error`, `Field.Content`, `Field.Group`, `Field.Set`, `Field.Legend`, and `Field.Separator`.",
    "",
    '**How to use it** — put a `Field.Label` (link it to the control with `htmlFor`) above the control (`Input`, `Checkbox`, `Select`…), then a `Field.Description` for helper text or a `Field.Error` for validation. For a leading/trailing control such as a checkbox, switch to `orientation="horizontal"` and wrap the label and description in a `Field.Content`. Stack several fields with a `Field.Group`, divide them with a `Field.Separator`, and group related fields under a `Field.Set` with a `Field.Legend`. The cards in this preview show each of these shapes.',
    "",
    "**When to use it** — for any labeled form control that needs its label, description, and error text kept together and accessible: text inputs, selects, checkboxes, radio groups, and switches across settings pages, dialogs, and onboarding flows.",
    "",
    "**When not to use it** — for a bare input whose label lives elsewhere (use `Label` and `Input` directly), or for non-form layout — `Field` carries fieldset semantics and screen readers announce it as a form grouping.",
  ].join("\n"),
  props: [
    // Drives only the code panel: the showcase renders its own cards, but the snippet
    // serializer reads `children`, so every `Field` composition appears in the code view.
    {
      name: "children",
      default: <>{examples.map((item) => item.example)}</>,
    },
  ],
} satisfies Meta<typeof FieldShowcase>;

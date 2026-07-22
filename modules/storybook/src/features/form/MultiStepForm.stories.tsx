import { Card } from "@module/design/components/card";
import { Field } from "@module/design/components/field";
import { MultiStepForm } from "@module/design/components/form";
import { Input } from "@module/design/components/input";
import type { Meta } from "../../shared/story";

type MultiStepFormDemoPropsType = {
  /** Label on the final-step submit button. */
  submitLabel?: string;
  /** Label shown on the submit button while `isSubmitting` is true. */
  submittingLabel?: string;
  /** Freezes the final step in its pending state to preview the submitting UI. */
  isSubmitting?: boolean;
  /** Called when the user submits the final step. */
  onSubmit?: () => void;
};

const steps = [
  {
    title: "Your details",
    description: "Tell us who you are.",
    content: (
      <Field.Group>
        <Field>
          <Field.Label htmlFor="msf-name" required>
            Full name
          </Field.Label>
          <Input id="msf-name" placeholder="Ada Lovelace" />
        </Field>
        <Field>
          <Field.Label htmlFor="msf-email" required>
            Email
          </Field.Label>
          <Input id="msf-email" type="email" placeholder="ada@example.com" />
        </Field>
      </Field.Group>
    ),
  },
  {
    title: "Workspace",
    description: "Name your workspace and pick a URL.",
    content: (
      <Field.Group>
        <Field>
          <Field.Label htmlFor="msf-workspace">Workspace name</Field.Label>
          <Input id="msf-workspace" placeholder="Analytical Engines" />
        </Field>
        <Field>
          <Field.Label htmlFor="msf-slug">Workspace URL</Field.Label>
          <Input id="msf-slug" placeholder="acme" />
          <Field.Description>Used in your public links, e.g. app.ooneex.com/acme.</Field.Description>
        </Field>
      </Field.Group>
    ),
  },
  {
    title: "Review",
    description: "Confirm and create your account.",
    content: (
      <Field.Group>
        <Field>
          <Field.Label htmlFor="msf-password" required>
            Password
          </Field.Label>
          <Input id="msf-password" type="password" placeholder="••••••••" />
          <Field.Description>At least 12 characters.</Field.Description>
        </Field>
      </Field.Group>
    ),
  },
];

/**
 * `MultiStepForm` renders inside a card and drives its own step navigation, so the preview
 * wraps it in a `Card` and feeds it a fixed set of steps and an `onSubmit` handler. Use the
 * Continue / Back buttons to move between steps.
 */
const MultiStepFormDemo = ({ submitLabel, submittingLabel, isSubmitting, onSubmit }: MultiStepFormDemoPropsType) => {
  return (
    <Card className="w-md gap-0 p-0">
      <MultiStepForm
        steps={steps}
        onSubmit={onSubmit ?? (() => {})}
        isSubmitting={isSubmitting}
        submitLabel={submitLabel}
        submittingLabel={submittingLabel}
      />
    </Card>
  );
};
MultiStepFormDemo.displayName = "MultiStepForm";

export const meta = {
  title: "MultiStepForm",
  group: "Components",
  tags: [],
  component: MultiStepFormDemo,
  usage: [
    "**MultiStepForm** turns a set of steps into an animated wizard inside a card: a title and description, a dot indicator that fills for the current step, the step's content sliding in horizontally, and a footer with Back plus a Continue button that becomes a Save on the last step. It owns the step index, direction, and height animation, and calls `onSubmit` when the user saves the final step.",
    "",
    "**How to use it** — render it inside a `Card` and pass a `steps` array, each with a `title`, `description`, and `content` (usually a `Field.Group` of controls). Provide `onSubmit` to run when the last step is saved; drive the button copy with `submitLabel` / `submittingLabel` and reflect an in-flight request with `isSubmitting`, which disables Save and swaps its label. The component handles Back/Continue navigation and the slide/height transitions for you.",
    "",
    "**When to use it** — for onboarding, account creation, checkout, and any form long enough to benefit from being broken into a guided, progress-indicated sequence rather than one tall page.",
    "",
    "**When not to use it** — for a short form that fits on one screen (a single `Field.Group` is simpler), or when the user needs to jump freely between non-linear sections (use tabs or a stepper with clickable steps instead).",
  ].join("\n"),
  props: [
    {
      name: "submitLabel",
      control: "text",
      default: "Create account",
    },
    {
      name: "submittingLabel",
      control: "text",
      default: "Creating...",
    },
    {
      name: "isSubmitting",
      control: "boolean",
      default: false,
    },
    {
      name: "onSubmit",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof MultiStepFormDemo>;

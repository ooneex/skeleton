import { Accordion } from "@module/design/components/accordion";
import type { Meta } from "../../shared/story";

const faq = (
  <Accordion defaultValue={["shipping"]}>
    <Accordion.Item value="shipping">
      <Accordion.Trigger>How long does shipping take?</Accordion.Trigger>
      <Accordion.Content>
        <p>Orders placed before 2pm ship the same business day and arrive within three to five working days.</p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="returns">
      <Accordion.Trigger>What is your return policy?</Accordion.Trigger>
      <Accordion.Content>
        <p>Unused items can be returned within 30 days for a full refund, no questions asked.</p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="support">
      <Accordion.Trigger>How do I contact support?</Accordion.Trigger>
      <Accordion.Content>
        <p>
          Email <a href="#contact">support@example.com</a> or use the in-app chat — we reply within one business day.
        </p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export const meta = {
  title: "Accordion",
  group: "Components",
  tags: [],
  component: Accordion,
  usage: [
    "**Accordion** stacks a set of collapsible sections in a single column, each pairing a clickable header (`Accordion.Trigger`) with a panel of content (`Accordion.Content`) that expands and collapses with a height animation. It is built on Base UI's Accordion primitive, so open state, focus movement, and keyboard navigation (arrow keys, Home/End) are handled for you — consumers never wire that up themselves.",
    "",
    "**How to use it** — nest one `Accordion.Item` per section, each with a unique `value`, and inside it an `Accordion.Trigger` (the header text) followed by an `Accordion.Content` (the body). Pass `defaultValue` to open one or more sections on first render. Set `multiple` to let several panels stay open at once, or leave it off for a one-at-a-time reveal. Use `disabled` to freeze the whole group while data loads.",
    "",
    "**When to use it** — for progressive disclosure of secondary content that would otherwise crowd the page: FAQs, grouped settings, filter panels, or long forms broken into stages. It keeps a scannable list of titles visible while hiding detail until the user asks for it.",
    "",
    "**When not to use it** — do not use it for primary navigation between peer views (use tabs), for a single section that should always be visible (just render the content), or when users need to compare content across sections at the same time — collapsing hides what they are trying to weigh against each other.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: faq,
    },
    {
      name: "multiple",
      control: "boolean",
      default: true,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
    {
      name: "onValueChange",
      callback: (value: string | readonly string[]) => value,
    },
  ],
} satisfies Meta<typeof Accordion>;

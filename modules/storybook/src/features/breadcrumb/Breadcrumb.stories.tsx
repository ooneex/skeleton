import { Breadcrumb } from "@module/design/components/breadcrumb";
import type { Meta } from "../../shared/story";

const trail = (
  <Breadcrumb>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Ellipsis />
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb>
);

export const meta = {
  title: "Breadcrumb",
  group: "Components",
  tags: [],
  component: Breadcrumb,
  usage: [
    "**Breadcrumb** shows the user where the current page sits in the site hierarchy and gives them a one-click path back up it. It is a compound component: the `Breadcrumb` root is the labelled `nav` landmark, `Breadcrumb.List` is the ordered row inside it, and each step is a `Breadcrumb.Item` wrapping either a `Breadcrumb.Link` (an ancestor you can navigate to) or a `Breadcrumb.Page` (the current page, non-interactive). `Breadcrumb.Separator` draws the chevron between steps, and `Breadcrumb.Ellipsis` collapses a long middle into a single `…` marker.",
    "",
    "**How to use it** — nest one `Breadcrumb.List` in the root, then alternate `Breadcrumb.Item` and `Breadcrumb.Separator`. Make every step except the last a `Breadcrumb.Link`; make the last step a `Breadcrumb.Page` so it reads as the current location and stays unclickable. When the trail is deep, replace the overflowing middle items with a single `Breadcrumb.Item` holding a `Breadcrumb.Ellipsis` (optionally wire it to a menu). Keep the `size` consistent across `List`, `Item`, and `Separator` so the row stays aligned.",
    "",
    "**When to use it** — on pages that live several levels down a hierarchy the user navigates: catalog → category → product, docs sections, nested settings, file browsers. It complements primary navigation by making the current depth and the way back obvious.",
    "",
    "**When not to use it** — do not use it on flat, single-level apps where there is no hierarchy to express, as a substitute for primary or tab navigation between peer views, or to show a linear step sequence (use a stepper/progress indicator instead). It reflects location, not a wizard's progress.",
  ].join("\n"),
  props: [
    {
      name: "children",
      default: trail,
    },
  ],
} satisfies Meta<typeof Breadcrumb>;

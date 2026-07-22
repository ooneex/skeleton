import { Badge } from "@module/design/components/badge";
import { Button } from "@module/design/components/button";
import { Card } from "@module/design/components/card";
import type { Meta } from "../../shared/story";

const plan = (
  <Card className="w-80">
    <Card.Header>
      <Card.Title>Team plan</Card.Title>
      <Card.Description>Everything your team needs to ship, billed monthly.</Card.Description>
      <Card.Action>
        <Badge variant="secondary">Popular</Badge>
      </Card.Action>
    </Card.Header>
    <Card.Content>
      <p className="text-muted-foreground">Unlimited projects, shared workspaces, and priority support.</p>
    </Card.Content>
    <Card.Footer>
      <Button className="w-full">Upgrade</Button>
    </Card.Footer>
  </Card>
);

export const meta = {
  title: "Card",
  group: "Components",
  tags: [],
  component: Card,
  usage: [
    "**Card** is a bordered surface that groups related content into a single, self-contained unit. It stacks its sub-components vertically inside a rounded, ring-bordered container: `Card.Header` (holding `Card.Title`, `Card.Description`, and an optional `Card.Action`), `Card.Content` for the body, and `Card.Footer` for actions. A leading full-bleed image is supported automatically. Set `hoverable` to make the whole card an interactive target.",
    "",
    '**How to use it** — compose it from the sub-components rather than hand-rolling divs, so spacing and slots line up. Put the heading and supporting line in `Card.Header`; pin a badge, menu, or toggle to the top-right with `Card.Action`; keep the main body in `Card.Content`; and reserve `Card.Footer` for the primary action. Use `size="sm"` in dense dashboards and `hoverable` when the card links somewhere.',
    "",
    "**When to use it** — to present a discrete entity the user scans and acts on as a whole: a plan, a product, a summary tile, a settings section, a list item with structure. It works standalone or tiled in a grid.",
    "",
    '**When not to use it** — do not nest cards inside cards (the double border reads as clutter), and do not use one as a generic full-width page section wrapper — reach for a plain container or panel when there is no self-contained "thing" being framed.',
  ].join("\n"),
  props: [
    {
      name: "children",
      default: plan,
    },
    {
      name: "size",
      control: "select",
      options: [
        {
          name: "default",
          usage: "Standard padding and gaps. Use for most cards — detail panels, plan cards, standalone tiles.",
        },
        {
          name: "sm",
          usage: "Tighter vertical rhythm for compact contexts — dashboard grids and dense lists of many cards.",
        },
      ],
      default: "default",
    },
    {
      name: "hoverable",
      control: "boolean",
      default: false,
    },
    {
      name: "onClick",
      callback: () => undefined,
    },
  ],
} satisfies Meta<typeof Card>;

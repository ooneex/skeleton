import { Card } from "@module/design/components/card";
import { ScrollArea } from "@module/design/components/scroll-area";
import { Skeleton } from "@module/design/components/skeleton";
import type { ReactNode } from "react";
import type { Meta } from "../../shared/story";

type SkeletonExampleType = {
  /** Heading naming the composition being shown. */
  title: string;
  /** One line on when to reach for this shape. */
  description: string;
  /** The live skeleton composition. */
  example: ReactNode;
};

const examples: SkeletonExampleType[] = [
  {
    title: "Text lines",
    description: "Staggered bars mimicking a heading over two lines of body copy.",
    example: (
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2 rounded-md" />
        <Skeleton className="h-3 w-full rounded-md" />
        <Skeleton className="h-3 w-4/5 rounded-md" />
      </div>
    ),
  },
  {
    title: "Avatar with text",
    description: "A circular avatar beside two lines — the shape of a comment or list row while it loads.",
    example: (
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-1/3 rounded-md" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
        </div>
      </div>
    ),
  },
  {
    title: "Media card",
    description: "A full-bleed image block over a heading and description — a card waiting on remote content.",
    example: (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-32 w-full rounded-xl" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
        <Skeleton className="h-3 w-full rounded-md" />
      </div>
    ),
  },
  {
    title: "Profile header",
    description: "An avatar, name, and action button — the shape of a profile card or settings header.",
    example: (
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-24 rounded-md" />
            <Skeleton className="h-3 w-16 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    ),
  },
  {
    title: "List rows",
    description: "Several avatar-and-text rows stacked together — a list or table body still loading.",
    example: (
      <div className="flex flex-col gap-3">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-3 flex-1 rounded-md" />
          </div>
        ))}
      </div>
    ),
  },
];

/**
 * A gallery of every `Skeleton` composition, each shown inside a `Card` with the loading shape it
 * demonstrates. The controls panel is intentionally empty — this story documents common shapes
 * rather than a single configurable instance. `children` is accepted only so the code panel can
 * serialize the examples; the rendered gallery ignores it and builds its own cards from `examples`.
 */
const SkeletonShowcase = (_props: { children?: ReactNode }) => {
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
SkeletonShowcase.displayName = "Skeleton";

export const meta = {
  title: "Skeleton",
  group: "Components",
  tags: [],
  component: SkeletonShowcase,
  usage: [
    "**What** — `Skeleton` is the design system's neutral loading placeholder. It renders a muted block with a pulse animation and no intrinsic size, so you shape it with `className` to mimic the card, line, avatar, or media that will eventually load in that exact spot.",
    "",
    "**How to use it** — size each skeleton to the real content you are waiting on: a short bar for a heading, several staggered lines for body copy, a square or circle for media, or a full card stack for a list row. Combine several `Skeleton` blocks to mirror the finished layout instead of showing one generic rectangle. The cards in this preview show these shapes — text lines, an avatar with text, a media card, a profile header, and stacked list rows — each wrapped in a `Card` the way it would appear while its real content loads.",
    "",
    "**When to use it** — during short loading windows where keeping the page structure visible helps the user understand what is coming: dashboards, table rows, profile headers, message lists, and cards with asynchronous data.",
    "",
    "**When not to use it** — do not leave skeletons on screen once you know loading has failed or will take a long time; switch to an error, empty, or progress state instead. Do not use it as decorative chrome when nothing is actually pending.",
  ].join("\n"),
  props: [
    // Drives only the code panel: the showcase renders its own cards, but the snippet
    // serializer reads `children`, so every skeleton composition appears in the code view.
    {
      name: "children",
      default: <>{examples.map((item) => item.example)}</>,
    },
  ],
} satisfies Meta<typeof SkeletonShowcase>;

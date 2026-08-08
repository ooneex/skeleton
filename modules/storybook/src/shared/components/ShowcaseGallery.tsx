import { Card } from "@module/design/components/card";
import { ScrollArea } from "@module/design/components/scroll-area";
import type { ReactNode } from "react";

export type ShowcaseExampleType = {
  /** Heading naming the composition being shown. */
  title: string;
  /** One line on when to reach for this shape. */
  description: string;
  /** The live composition. */
  example: ReactNode;
};

type ShowcaseGalleryPropsType = {
  examples: readonly ShowcaseExampleType[];
};

/**
 * A grid of `Card`s, one per `examples` entry, each pairing a title/description with its live
 * composition — the shared shape behind every "gallery of variants" story (`Field`, `Input`,
 * `Skeleton`, …).
 */
export const ShowcaseGallery = ({ examples }: ShowcaseGalleryPropsType) => (
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

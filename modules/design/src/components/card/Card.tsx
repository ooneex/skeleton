import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { CardAction } from "./CardAction";
import { CardContent } from "./CardContent";
import { CardDescription } from "./CardDescription";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardTitle } from "./CardTitle";

type CardPropsType = React.ComponentProps<"div"> & {
  size?: "default" | "sm";
  hoverable?: boolean;
};

const CardRoot = ({ className, size = "default", hoverable = false, ...props }: CardPropsType) => {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "bg-card text-card-foreground gap-4 overflow-hidden rounded p-4 text-sm has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 group/card flex flex-col ring-[0.4px] ring-ring border-none",
        hoverable && "hover:ring-ring-active cursor-pointer",
        className,
      )}
      {...props}
    />
  );
};

/**
 * Card compound component.
 *
 * Use the compound pattern via attached sub-components:
 * `Card`, `Card.Header`, `Card.Title`, `Card.Description`,
 * `Card.Action`, `Card.Content`, `Card.Footer`.
 */
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Action: CardAction,
  Content: CardContent,
  Footer: CardFooter,
});

CardRoot.displayName = "Card";

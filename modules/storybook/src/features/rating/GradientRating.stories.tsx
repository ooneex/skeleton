import { GradientRating } from "@module/design/components/rating/RatingGradient";
import { RatingSparkles } from "@module/design/components/rating/RatingSparkles";
import { StarIcon } from "@module/design/icons/fill/holidays/sm/StarIcon";
import { useEffect, useRef, useState } from "react";
import type { MetaType } from "../../shared/story";

type GradientRatingDemoPropsType = {
  value?: number;
  count?: number;
  readOnly?: boolean;
  disabled?: boolean;
};

const GradientRatingDemo = ({
  value = 3,
  count = 5,
  readOnly = false,
  disabled = false,
}: GradientRatingDemoPropsType) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isConfirming, setIsConfirming] = useState(false);
  const [sparklePosition, setSparklePosition] = useState<{ top: number; left: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center gap-4 rounded border border-border p-6">
      <GradientRating
        value={currentValue}
        count={count}
        readOnly={readOnly}
        disabled={disabled}
        isConfirming={isConfirming}
        setIsConfirming={setIsConfirming}
        setSparklePosition={setSparklePosition}
        containerRef={containerRef}
        Icon={StarIcon}
        colors={{ fill: "text-warning", empty: "text-muted-foreground/25" }}
        onValueChange={setCurrentValue}
      />
      <p className="text-sm text-muted-foreground">
        Current score: {currentValue} / {count}
      </p>
      {sparklePosition ? (
        <RatingSparkles position={sparklePosition} onComplete={() => setSparklePosition(null)} />
      ) : null}
    </div>
  );
};

GradientRatingDemo.displayName = "GradientRating";

export const meta = {
  title: "Rating.Gradient",
  group: "Components",
  tags: [],
  component: GradientRatingDemo,
  usage: [
    "**GradientRating** is the large single-icon slider behind the rating component's `gradient` variant, and **RatingSparkles** is the celebratory burst that fires when the user lands on the maximum score. Together they create the playful, vertically fillable rating mode in the design system.",
    "",
    "**How to use it** — treat `GradientRating` as an internal building block unless you are composing a custom rating surface. Pass the current numeric value, total count, disabled/read-only flags, and a container ref so the sparkle animation can position itself correctly. Use `RatingSparkles` only when you want the max-score celebration and clear it on animation completion.",
    "",
    "**When to use it** — in branded feedback moments where a single large interactive icon feels warmer than a row of stars, such as post-purchase or post-support satisfaction prompts.",
    "",
    "**When not to use it** — do not use it when users need precise, conventional star-by-star comparison across many items. The standard `Rating` variants are clearer in dense review lists.",
  ].join("\n"),
  props: [
    {
      name: "value",
      control: "number",
      default: 3,
    },
    {
      name: "count",
      control: "number",
      default: 5,
    },
    {
      name: "readOnly",
      control: "boolean",
      default: false,
    },
    {
      name: "disabled",
      control: "boolean",
      default: false,
    },
  ],
} satisfies MetaType<typeof GradientRatingDemo>;

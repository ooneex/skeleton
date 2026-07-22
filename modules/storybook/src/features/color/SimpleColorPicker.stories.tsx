import { Button } from "@module/design/components/button";
import { pickColor, SimpleColorPicker } from "@module/design/components/color";
import { cn } from "@module/design/utils/cn";
import type { SimpleColorType } from "@ooneex/color";
import { useState } from "react";
import type { Meta } from "../../shared/story";

type SimpleColorPickerDemoPropsType = {
  /** Heading shown above the swatch grid inside the dialog. */
  title?: string;
};

/**
 * `SimpleColorPicker` is an imperative dialog — it renders nothing until `pickColor()`
 * is awaited — so the preview wraps it in a small demo: mount the Root once, then open it
 * from a button and show the resolved color.
 */
const SimpleColorPickerDemo = ({ title }: SimpleColorPickerDemoPropsType) => {
  const [color, setColor] = useState<SimpleColorType | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <SimpleColorPicker />
      <div className="flex items-center gap-3">
        <div
          className={cn("size-9 rounded-full ring ring-ring-active", !color && "bg-transparent")}
          style={color ? { backgroundColor: color } : undefined}
        />
        <Button
          onClick={async () => {
            const picked = await pickColor({ value: color ?? undefined, title });
            setColor(picked);
          }}
        >
          Pick a color
        </Button>
      </div>
    </div>
  );
};
SimpleColorPickerDemo.displayName = "SimpleColorPicker";

export const meta = {
  title: "SimpleColorPicker",
  group: "Components",
  tags: [],
  component: SimpleColorPickerDemo,
  usage: [
    "**SimpleColorPicker** is an imperative color-picker dialog built on `react-call`. It shows a grid of preset swatches from `@ooneex/color`, highlights the current value, and resolves the color you click; a **Reset** action resolves `null`. You do not render it inline — you mount the Root once near the top of your app and open it on demand with `await pickColor({ value })`.",
    "",
    "**How to use it** — place `<SimpleColorPicker />` once at the app root. Anywhere you need a color, call `const color = await pickColor({ value: current })`; it resolves with the picked `SimpleColorType`, or `null` when the user presses Reset or dismisses (Escape / outside click), so branch on the result before applying it. Pass a `title` to label the dialog, or a custom `colors` array to narrow the palette. This preview wires that flow to a button and a swatch.",
    "",
    "**When to use it** — for quick, constrained color choices from a curated palette: tagging a label, theming a board column, marking a category. The fixed swatch set keeps colors consistent across the product.",
    "",
    "**When not to use it** — do not use it when the user needs an arbitrary color (a full hex/HSL picker is the right tool), or for a color that should be chosen inline without a modal — embed a swatch row instead of opening a dialog.",
  ].join("\n"),
  props: [
    {
      name: "title",
      control: "text",
      default: "Pick a color",
    },
  ],
} satisfies Meta<typeof SimpleColorPickerDemo>;

import { Button } from "@module/design/components/button/Button";
import { createDialog } from "@module/design/components/dialog/Dialog";
import { DialogHeader } from "@module/design/components/dialog/DialogHeader";
import { DialogTitle } from "@module/design/components/dialog/DialogTitle";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { CircleMinusIcon as RemoveIcon } from "@module/design/icons/outline/ui-layout/sm/CircleMinusIcon";
import { cn } from "@module/design/utils/cn";
import { SIMPLE_COLOR_NAMES, SIMPLE_COLORS, type SimpleColorType } from "@ooneex/color";
import type { ReactNode } from "react";

export type SimpleColorPickerPropsType = {
  /** Currently selected color, highlighted in the grid. */
  value?: SimpleColorType;
  /** Palette to render. Defaults to the full `SIMPLE_COLORS` set. */
  colors?: readonly SimpleColorType[];
  /** Heading shown above the swatch grid. */
  title?: ReactNode;
};

/**
 * Imperative color picker dialog built on `react-call`.
 *
 * Mount the Root once near the top of your app:
 *
 * ```tsx
 * <SimpleColorPicker />
 * ```
 *
 * Then await a color from anywhere:
 *
 * ```tsx
 * const color = await pickColor({ value: current })
 * if (color) editor.setColor(color)
 * ```
 *
 * Resolves with the clicked color, or `null` when Reset is pressed or the
 * dialog is dismissed (Escape / outside click).
 */
export const SimpleColorPicker = createDialog<SimpleColorPickerPropsType, SimpleColorType | null>(
  ({ call, value, colors = SIMPLE_COLORS, title }) => {
    return (
      <>
        {title ? (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        ) : null}
        <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(2rem, 1fr))" }}>
          {colors.map((color) => {
            const isSelected = color === value;
            return (
              <button
                key={color}
                type="button"
                onClick={() => call.end(color)}
                title={SIMPLE_COLOR_NAMES[color]}
                className={cn(
                  "size-8 rounded-full cursor-pointer transition-all flex items-center justify-center",
                  "motion-safe:hover:scale-110",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
                  color === "#FFFFFF" && !isSelected && "ring ring-ring-active",
                )}
                style={{ backgroundColor: color }}
              >
                {isSelected && <CheckIcon className="size-4 text-white drop-shadow-sm" />}
              </button>
            );
          })}
        </div>
        <Button variant="ghost" onClick={() => call.end(null)} className="w-full">
          <RemoveIcon className="size-6" />
          Reset
        </Button>
      </>
    );
  },
  { dismissValue: null, className: "max-w-xs" },
);
SimpleColorPicker.displayName = "SimpleColorPicker";

/** Await a color choice. Resolves the clicked color, or `null` on reset/dismiss. */
export const pickColor = (props: SimpleColorPickerPropsType = {}) => SimpleColorPicker.call(props);

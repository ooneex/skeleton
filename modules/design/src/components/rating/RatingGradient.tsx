import { cn } from "@module/design/utils/cn";
import { motion } from "motion/react";
import {
  type Dispatch,
  type ElementType,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
  type SetStateAction,
  useCallback,
  useRef,
} from "react";
import type { ClickPositionType } from "./RatingSparkles";

const FILL_CLIP_STYLE = { clipPath: "inset(100% 0 0 0)" };

export type GradientRatingPropsType = {
  value: number;
  count: number;
  readOnly: boolean;
  disabled: boolean;
  isConfirming: boolean;
  setIsConfirming: Dispatch<SetStateAction<boolean>>;
  setSparklePosition: Dispatch<SetStateAction<ClickPositionType | null>>;
  containerRef: RefObject<HTMLDivElement | null>;
  Icon: ElementType<{ className?: string }>;
  colors: { fill: string; empty: string };
  onValueChange?: (value: number) => void;
};

export const GradientRating = (props: GradientRatingPropsType) => {
  const {
    value,
    count,
    readOnly,
    disabled,
    isConfirming,
    setIsConfirming,
    setSparklePosition,
    containerRef,
    Icon,
    colors,
    onValueChange,
  } = props;
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const prevValueRef = useRef(value);

  const interactive = !disabled && !readOnly;
  const fillInset = 100 - (value / count) * 100;

  const updateValue = useCallback(
    (newValue: number) => {
      onValueChange?.(newValue);

      if (interactive && prevValueRef.current < count && newValue === count) {
        const iconRect = iconContainerRef.current?.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (iconRect && containerRect) {
          setIsConfirming(true);
          setSparklePosition({
            top: iconRect.top - containerRect.top + iconRect.height / 2,
            left: iconRect.left - containerRect.left + iconRect.width / 2,
          });
        }
      }
      prevValueRef.current = newValue;
    },
    [onValueChange, interactive, count, containerRef, setIsConfirming, setSparklePosition],
  );

  const handlePointerInteraction = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (readOnly || disabled || isConfirming) return;
      const rect = iconContainerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pointerY = e.clientY - rect.top;
      const percentage = Math.max(0, Math.min(1, 1 - pointerY / rect.height));
      updateValue(Math.round(percentage * count));
    },
    [readOnly, disabled, isConfirming, count, updateValue],
  );

  const handlePointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (e.buttons === 1) handlePointerInteraction(e);
    },
    [handlePointerInteraction],
  );

  const handleKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (readOnly || disabled || isConfirming) return;
      if (e.key === "ArrowUp" || e.key === "ArrowRight") {
        e.preventDefault();
        updateValue(Math.min(count, value + 1));
      } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
        e.preventDefault();
        updateValue(Math.max(0, value - 1));
      }
    },
    [readOnly, disabled, isConfirming, count, value, updateValue],
  );

  return (
    <div
      ref={iconContainerRef}
      className={cn("relative h-8 w-8 rating-item", {
        "cursor-pointer": interactive,
        "cursor-not-allowed opacity-50": disabled || readOnly,
      })}
      onPointerDown={handlePointerInteraction}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
      aria-label="Gradient rating"
      role="slider"
      tabIndex={interactive ? 0 : -1}
      aria-valuemin={0}
      aria-valuemax={count}
      aria-valuenow={value}
    >
      <Icon className={cn("h-full w-full", colors.empty)} />
      <motion.div
        className="absolute top-0 left-0 h-full w-full"
        style={FILL_CLIP_STYLE}
        animate={{ clipPath: `inset(${fillInset}% 0 0 0)` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Icon className={cn("h-full w-full", colors.fill)} />
      </motion.div>
    </div>
  );
};
GradientRating.displayName = "GradientRating";

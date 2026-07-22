import { StarIcon } from "@module/design/icons/outline/holidays/sm/StarIcon";
import { cn } from "@module/design/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import {
  type ComponentProps,
  type Dispatch,
  type ElementType,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
  type SetStateAction,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

const DEFAULT_COLORS = {
  fill: "text-yellow-500 fill-yellow-500",
  empty: "text-muted",
};

const DEFAULT_EMOJIS = ["😡", "😟", "😐", "😊", "😍"];

const FILL_CLIP_STYLE = { clipPath: "inset(100% 0 0 0)" };

type ClickPositionType = { top: number; left: number };

export type RatingPropsType = ComponentProps<"div"> & {
  value: number;
  onValueChange?: (value: number) => void;
  count?: number;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: ElementType<{ className?: string }>;
  variant?: "star" | "gradient" | "text" | "emoji";
  colors?: { fill: string; empty: string };
  labels?: string[];
  emojis?: string[];
  tooltips?: string[];
};

export const Rating = ({
  ref,
  className,
  variant = "star",
  value = 0,
  onValueChange,
  count = 5,
  readOnly = false,
  disabled = false,
  icon: Icon = StarIcon,
  colors = DEFAULT_COLORS,
  labels,
  emojis,
  tooltips,
  ...props
}: RatingPropsType) => {
  const [hoverValue, setHoverValue] = useState(0);
  const [isConfirming, setIsConfirming] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [sparklePosition, setSparklePosition] = useState<ClickPositionType | null>(null);

  const id = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastClickPosition = useRef<ClickPositionType | null>(null);

  const interactive = !disabled && !readOnly;

  const handleMouseEnter = useCallback(
    (itemValue: number) => {
      if (disabled || readOnly || isConfirming) return;
      setHoverValue(itemValue);
      const tooltip = tooltips?.[itemValue - 1];
      if (tooltip) {
        setTooltipText(tooltip);
        setIsTooltipVisible(true);
      }
    },
    [disabled, readOnly, isConfirming, tooltips],
  );

  const handleMouseLeave = useCallback(() => {
    if (disabled || readOnly) return;
    setHoverValue(0);
    setIsTooltipVisible(false);
  }, [disabled, readOnly]);

  const recordClickPosition = useCallback((e: ReactMouseEvent<HTMLButtonElement>) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    lastClickPosition.current = {
      top: rect.top - containerRect.top + rect.height / 2,
      left: rect.left - containerRect.left + rect.width / 2,
    };
  }, []);

  const handleSelect = useCallback(
    (newValue: number) => {
      if (readOnly || disabled || isConfirming) return;
      onValueChange?.(newValue);

      setHoverValue(0);
      setIsTooltipVisible(false);

      if (newValue < 3) return;
      if (lastClickPosition.current) {
        setIsConfirming(true);
        setSparklePosition(lastClickPosition.current);
        lastClickPosition.current = null;
      }
    },
    [readOnly, disabled, isConfirming, onValueChange],
  );

  const handleItemClick = useCallback(
    (itemValue: number) => (e: ReactMouseEvent<HTMLButtonElement>) => {
      recordClickPosition(e);
      handleSelect(itemValue);
    },
    [recordClickPosition, handleSelect],
  );

  const handleSparkleComplete = useCallback(() => {
    setIsConfirming(false);
    setSparklePosition(null);
  }, []);

  const textLabels = useMemo(() => labels ?? Array.from({ length: count }, (_, i) => String(i + 1)), [labels, count]);
  const emojiSet = useMemo(() => emojis ?? DEFAULT_EMOJIS, [emojis]);

  const displayValue = hoverValue || value;

  const radioGroupProps = {
    role: "radiogroup" as const,
    "aria-label": "Rating",
    "aria-disabled": disabled || undefined,
    className: "flex items-center gap-2",
  };

  const starItems = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const itemValue = index + 1;
        const isFilled = itemValue <= displayValue;
        const isHovered = interactive && itemValue === hoverValue;
        const uniqueId = `rating-star-${id}-${itemValue}`;
        return (
          <motion.button
            key={uniqueId}
            type="button"
            role="radio"
            id={uniqueId}
            aria-checked={itemValue === value}
            aria-label={String(itemValue)}
            disabled={disabled}
            tabIndex={interactive ? 0 : -1}
            className={cn("rating-item rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring", {
              "cursor-pointer": interactive,
              "cursor-not-allowed opacity-50": disabled || readOnly,
            })}
            onMouseEnter={() => handleMouseEnter(itemValue)}
            onMouseLeave={handleMouseLeave}
            onClick={handleItemClick(itemValue)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1.15 : 1,
              y: isHovered ? -4 : 0,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: index * 0.04 }}
          >
            <Icon className={cn("h-6 w-6 transition-colors", isFilled ? colors.fill : colors.empty)} />
          </motion.button>
        );
      }),
    [
      count,
      displayValue,
      hoverValue,
      value,
      id,
      colors,
      Icon,
      disabled,
      readOnly,
      interactive,
      handleMouseEnter,
      handleMouseLeave,
      handleItemClick,
    ],
  );

  const textItems = useMemo(
    () =>
      textLabels.map((label, index) => {
        const itemValue = index + 1;
        const isHighlighted = itemValue === displayValue;
        const isHovered = interactive && itemValue === hoverValue;
        const uniqueId = `rating-text-${id}-${itemValue}`;
        return (
          <motion.button
            key={uniqueId}
            type="button"
            role="radio"
            id={uniqueId}
            aria-checked={itemValue === value}
            disabled={disabled}
            tabIndex={interactive ? 0 : -1}
            className={cn(
              "rating-item text-center font-medium rounded-md px-3 py-1 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
              {
                "cursor-pointer": interactive,
                "cursor-not-allowed opacity-50": disabled || readOnly,
              },
              isHighlighted
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
            onMouseEnter={() => handleMouseEnter(itemValue)}
            onMouseLeave={handleMouseLeave}
            onClick={handleItemClick(itemValue)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovered ? 1.15 : 1, y: isHovered ? -4 : 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: index * 0.04 }}
          >
            {label}
          </motion.button>
        );
      }),
    [
      textLabels,
      displayValue,
      hoverValue,
      value,
      id,
      disabled,
      readOnly,
      interactive,
      handleMouseEnter,
      handleMouseLeave,
      handleItemClick,
    ],
  );

  const emojiItems = useMemo(
    () =>
      emojiSet.map((emoji, index) => {
        const itemValue = index + 1;
        const isSelected = itemValue === value;
        const isActive = isSelected || itemValue === hoverValue;
        const uniqueId = `rating-emoji-${id}-${itemValue}`;
        return (
          <motion.button
            key={uniqueId}
            type="button"
            role="radio"
            id={uniqueId}
            aria-checked={isSelected}
            disabled={disabled}
            tabIndex={interactive ? 0 : -1}
            className={cn(
              "rating-item text-3xl leading-none transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md",
              {
                "cursor-pointer": interactive,
                "cursor-not-allowed": disabled || readOnly,
                "grayscale-0 opacity-100": isActive,
                "grayscale opacity-60": !isActive,
                "opacity-50! grayscale!": disabled || readOnly,
              },
            )}
            onMouseEnter={() => handleMouseEnter(itemValue)}
            onMouseLeave={handleMouseLeave}
            onClick={handleItemClick(itemValue)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: interactive && isActive ? 1.25 : 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: index * 0.04 }}
          >
            {emoji}
          </motion.button>
        );
      }),
    [
      emojiSet,
      value,
      hoverValue,
      id,
      disabled,
      readOnly,
      interactive,
      handleMouseEnter,
      handleMouseLeave,
      handleItemClick,
    ],
  );

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div ref={containerRef} className={cn("relative flex items-center", className)} {...props}>
        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              key="rating-tooltip"
              className="absolute bottom-full mb-2 bg-popover text-popover-foreground text-xs font-semibold px-2 py-1 rounded-md pointer-events-none"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -8 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {tooltipText}
            </motion.div>
          )}
        </AnimatePresence>

        {sparklePosition && <Sparkles position={sparklePosition} onComplete={handleSparkleComplete} />}

        {variant === "gradient" ? (
          <GradientRating
            value={value}
            count={count}
            readOnly={readOnly}
            disabled={disabled}
            isConfirming={isConfirming}
            setIsConfirming={setIsConfirming}
            setSparklePosition={setSparklePosition}
            containerRef={containerRef}
            Icon={Icon}
            colors={colors}
            onValueChange={onValueChange}
          />
        ) : (
          <div {...radioGroupProps}>
            {variant === "text" && textItems}
            {variant === "emoji" && emojiItems}
            {variant === "star" && starItems}
          </div>
        )}
      </div>
    </div>
  );
};

type GradientRatingPropsType = {
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

const SPARKLE_COLORS = ["#F778BA", "#63D2F2", "#F9DD70", "#A57BF1", "#72E8A4"];
const PARTICLE_COUNT = 12;

type SparklesPropsType = {
  position: ClickPositionType;
  onComplete: () => void;
};

const Sparkles = ({ position, onComplete }: SparklesPropsType) => {
  const angleOffset = useMemo(() => Math.random() * 360, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{ top: position.top, left: position.left, transform: "translate(-50%, -50%)" }}
    >
      {Array.from({ length: PARTICLE_COUNT }, (_, index) => {
        const angle = (360 / PARTICLE_COUNT) * index + angleOffset;
        const radius = 50;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const color = SPARKLE_COLORS[index % SPARKLE_COLORS.length];
        return (
          <motion.svg
            key={index}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="absolute top-1/2 left-1/2"
            style={{ x: "-50%", y: "-50%" }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: angle - 90 }}
            animate={{ x, y, scale: [0, 1, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 0.7, ease: "easeOut", times: [0, 0.5, 1] }}
            onAnimationComplete={index === 0 ? onComplete : undefined}
          >
            <path
              d="M6 0L7.34315 4.65685L12 6L7.34315 7.34315L6 12L4.65685 7.34315L0 6L4.65685 4.65685L6 0Z"
              fill={color}
            />
          </motion.svg>
        );
      })}
    </div>
  );
};
Rating.displayName = "Rating";

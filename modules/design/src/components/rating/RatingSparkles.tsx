import { motion } from "motion/react";
import { useMemo } from "react";

const SPARKLE_COLORS = [
  "var(--color-sparkle-pink)",
  "var(--color-sparkle-cyan)",
  "var(--color-sparkle-yellow)",
  "var(--color-sparkle-purple)",
  "var(--color-sparkle-green)",
];
const PARTICLE_COUNT = 12;

export type ClickPositionType = { top: number; left: number };

export type RatingSparklesPropsType = {
  position: ClickPositionType;
  onComplete: () => void;
};

export const RatingSparkles = ({ position, onComplete }: RatingSparklesPropsType) => {
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
RatingSparkles.displayName = "RatingSparkles";

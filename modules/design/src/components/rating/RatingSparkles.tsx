import { motion, type Transition } from "motion/react";
import { useMemo } from "react";

const SPARKLE_COLORS = [
  "var(--color-sparkle-pink)",
  "var(--color-sparkle-cyan)",
  "var(--color-sparkle-yellow)",
  "var(--color-sparkle-purple)",
  "var(--color-sparkle-green)",
];
const PARTICLE_COUNT = 12;

const PARTICLE_RADIUS = 50;
const PARTICLE_STYLE = { x: "-50%", y: "-50%" } as const;
const PARTICLE_TRANSITION: Transition = { duration: 0.7, ease: "easeOut", times: [0, 0.5, 1] };

export type ClickPositionType = { top: number; left: number };

export type RatingSparklesPropsType = {
  position: ClickPositionType;
  onComplete: () => void;
};

type ParticleType = {
  /** Stable across the burst's lifetime — each particle owns one slot of the ring. */
  id: string;
  color: string | undefined;
  initial: { x: number; y: number; scale: number; opacity: number; rotate: number };
  animate: { x: number; y: number; scale: number[]; opacity: number[] };
};

/** Lay the burst out once: one particle per slot of a ring rotated by `angleOffset`. */
const buildParticles = (angleOffset: number): ParticleType[] =>
  Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const angle = (360 / PARTICLE_COUNT) * index + angleOffset;
    const x = Math.cos((angle * Math.PI) / 180) * PARTICLE_RADIUS;
    const y = Math.sin((angle * Math.PI) / 180) * PARTICLE_RADIUS;

    return {
      id: `sparkle-${index}`,
      color: SPARKLE_COLORS[index % SPARKLE_COLORS.length],
      initial: { x: 0, y: 0, scale: 0, opacity: 1, rotate: angle - 90 },
      animate: { x, y, scale: [0, 1, 0], opacity: [1, 1, 0] },
    };
  });

export const RatingSparkles = ({ position, onComplete }: RatingSparklesPropsType) => {
  const particles = useMemo(() => buildParticles(Math.random() * 360), []);
  const containerStyle = useMemo(
    () => ({ top: position.top, left: position.left, transform: "translate(-50%, -50%)" }),
    [position.top, position.left],
  );

  return (
    <div className="absolute pointer-events-none" style={containerStyle}>
      {particles.map((particle, index) => (
        <motion.svg
          key={particle.id}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="absolute top-1/2 left-1/2"
          style={PARTICLE_STYLE}
          initial={particle.initial}
          animate={particle.animate}
          transition={PARTICLE_TRANSITION}
          onAnimationComplete={index === 0 ? onComplete : undefined}
        >
          <path
            d="M6 0L7.34315 4.65685L12 6L7.34315 7.34315L6 12L4.65685 7.34315L0 6L4.65685 4.65685L6 0Z"
            fill={particle.color}
          />
        </motion.svg>
      ))}
    </div>
  );
};
RatingSparkles.displayName = "RatingSparkles";

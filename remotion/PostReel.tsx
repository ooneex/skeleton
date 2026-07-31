import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "./brand";

export type PostReelProps = {
  title: string;
  lines: string[];
  accent: string;
  durationInSeconds: number;
};

export const postReelDefaults: PostReelProps = {
  title: "",
  lines: [],
  accent: brand.accent,
  durationInSeconds: 10,
};

const Line: React.FC<{
  text: string;
  delay: number;
  size: number;
  weight: number;
  color: string;
}> = ({ text, delay, size, weight, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - delay, fps, config: { damping: 200 } });

  return (
    <div
      style={{
        fontSize: size,
        fontWeight: weight,
        lineHeight: 1.15,
        color,
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [size / 2, 0])}px)`,
      }}
    >
      {text}
    </div>
  );
};

export const PostReel: React.FC<PostReelProps> = ({ title, lines, accent }) => {
  const { width, durationInFrames } = useVideoConfig();
  const unit = width / 100;
  // Spread the reveals across the clip so the last line lands with time left to
  // read it, whatever duration the post asks for.
  const titleDelay = durationInFrames * 0.04;
  const step = (durationInFrames * 0.62) / Math.max(lines.length, 1);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: brand.background,
        fontFamily: brand.font,
        padding: unit * 8,
        justifyContent: "center",
        gap: unit * 4,
      }}
    >
      <div
        style={{
          width: unit * 8,
          height: unit * 0.7,
          borderRadius: unit * 0.35,
          backgroundColor: accent,
        }}
      />
      <Line text={title} delay={0} size={unit * 7} weight={700} color={brand.text} />
      {lines.map((line, index) => (
        <Line
          key={line}
          text={line}
          delay={titleDelay + step * (index + 1)}
          size={unit * 3.2}
          weight={400}
          color={brand.muted}
        />
      ))}
    </AbsoluteFill>
  );
};

import { AbsoluteFill, useVideoConfig } from "remotion";
import { brand } from "./brand";
import { StorybookUi } from "./StorybookUi";

export type PostCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent: string;
};

export const postCardDefaults: PostCardProps = {
  eyebrow: "",
  title: "",
  subtitle: "",
  accent: brand.accent,
};

export const PostCard: React.FC<PostCardProps> = ({ eyebrow, title, subtitle, accent }) => {
  const { width, height } = useVideoConfig();
  const unit = width / 100;
  const isVertical = height > width;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: brand.background,
        color: brand.text,
        fontFamily: brand.font,
        padding: unit * 6,
        justifyContent: "center",
        gap: unit * 3,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 50% 50%, ${brand.muted} 0%, transparent 60%)`,
          opacity: 0.55,
        }}
      />
      <div
        style={{ position: "relative", display: "flex", flexDirection: "column", gap: unit * 3 }}
      >
        <div
          style={{
            width: unit * 8,
            height: unit * 0.7,
            borderRadius: unit * 0.35,
            backgroundColor: accent,
          }}
        />
        {eyebrow ? (
          <div
            style={{
              fontSize: unit * 1.9,
              letterSpacing: unit * 0.14,
              textTransform: "uppercase",
              color: brand.mutedText,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div style={{ fontSize: unit * 6, fontWeight: 700, lineHeight: 1.05, textWrap: "balance" }}>
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              fontSize: unit * 2.8,
              lineHeight: 1.35,
              color: brand.mutedText,
              maxWidth: "85%",
            }}
          >
            {subtitle}
          </div>
        ) : null}
        <StorybookUi
          unit={unit * 0.84}
          canvasHeight={isVertical ? unit * 40 : unit * 24}
          selectedIndex={0}
          variantProgress={0}
          statesProgress={1}
          accent={accent}
        />
      </div>
    </AbsoluteFill>
  );
};

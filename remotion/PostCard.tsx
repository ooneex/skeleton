import { AbsoluteFill, useVideoConfig } from "remotion";
import { brand } from "./brand";

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
  const { width } = useVideoConfig();
  const unit = width / 100;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: brand.background,
        color: brand.text,
        fontFamily: brand.font,
        padding: unit * 8,
        justifyContent: "center",
        gap: unit * 3,
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
      {eyebrow ? (
        <div
          style={{
            fontSize: unit * 2.2,
            letterSpacing: unit * 0.15,
            textTransform: "uppercase",
            color: brand.muted,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div style={{ fontSize: unit * 7, fontWeight: 700, lineHeight: 1.05, textWrap: "balance" }}>
        {title}
      </div>
      {subtitle ? (
        <div style={{ fontSize: unit * 3.2, lineHeight: 1.35, color: brand.muted, maxWidth: "85%" }}>
          {subtitle}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

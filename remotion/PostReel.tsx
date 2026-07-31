import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { brand } from "./brand";
import { StorybookUi } from "./StorybookUi";

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
  durationInSeconds: 15,
};

/**
 * The reel is a guided tour of the Storybook UI: the caption names the step and
 * the mock UI performs it. Scene boundaries are fractions of the total duration,
 * so the same choreography holds at any length.
 */
const SCENES = [
  { at: 0.0, caption: "Every component, on its own page" },
  { at: 0.22, caption: "Pick one from the sidebar" },
  { at: 0.42, caption: "Change its props, live" },
  { at: 0.66, caption: "See every state at once" },
  { at: 0.86, caption: "Ship it with confidence" },
] as const;

const Caption: React.FC<{ unit: number; text: string; enter: number }> = ({
  unit,
  text,
  enter,
}) => (
  <div
    style={{
      fontSize: unit * 3.6,
      fontWeight: 700,
      lineHeight: 1.1,
      color: brand.text,
      textWrap: "balance",
      opacity: enter,
      transform: `translateY(${interpolate(enter, [0, 1], [unit * 1.6, 0])}px)`,
    }}
  >
    {text}
  </div>
);

const Cursor: React.FC<{ unit: number; x: number; y: number; opacity: number }> = ({
  unit,
  x,
  y,
  opacity,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: unit * 2.4,
      height: unit * 2.4,
      opacity,
      pointerEvents: "none",
    }}
  >
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <title>cursor</title>
      <path
        d="M5 2 L5 20 L10 15.5 L13 22 L16 20.5 L13 14.5 L19.5 14 Z"
        fill={brand.text}
        stroke={brand.background}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const PostReel: React.FC<PostReelProps> = ({ title, accent }) => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const unit = width / 100;
  const isVertical = height > width;
  // The mock's layout is width-driven, so a tall frame gets a taller canvas
  // rather than a zoom, which would push the side panels out of frame.
  const uiZoom = 1;

  const at = (fraction: number): number => Math.round(durationInFrames * fraction);
  const progressBetween = (from: number, to: number): number =>
    interpolate(frame, [at(from), at(to)], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.ease),
    });

  const activeScene = SCENES.reduce(
    (found, scene, index) => (frame >= at(scene.at) ? index : found),
    0,
  );
  const scene = SCENES[activeScene] ?? SCENES[0];
  const captionEnter = spring({
    frame: frame - at(scene.at),
    fps,
    config: { damping: 200 },
  });

  // Sidebar selection walks Button → Checkbox → Input during scene 2.
  const selectionProgress = progressBetween(0.24, 0.42);
  const selectedIndex = Math.min(2, Math.floor(selectionProgress * 3));

  const variantProgress = progressBetween(0.46, 0.64);
  const statesProgress = progressBetween(0.68, 0.84);

  const uiEnter = spring({ frame: frame - at(0.04), fps, config: { damping: 200 } });
  const uiScale = interpolate(uiEnter, [0, 1], [0.94, 1]);

  // The cursor travels to the sidebar, then over to the controls panel.
  const cursorToSidebar = progressBetween(0.2, 0.3);
  const cursorToControls = progressBetween(0.44, 0.52);
  const cursorX = interpolate(
    cursorToControls,
    [0, 1],
    [interpolate(cursorToSidebar, [0, 1], [width * 0.55, width * 0.2]), width * 0.82],
  );
  const cursorY = interpolate(
    cursorToControls,
    [0, 1],
    [interpolate(cursorToSidebar, [0, 1], [height * 0.72, height * 0.46]), height * 0.5],
  );
  const cursorOpacity = interpolate(
    frame,
    [at(0.18), at(0.22), at(0.64), at(0.68)],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const outro = progressBetween(0.86, 0.95);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: brand.background,
        fontFamily: brand.font,
        padding: unit * 6,
        justifyContent: "center",
        gap: unit * 3.5,
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
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: unit * 3.5,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: unit * 1.4 }}>
          <div
            style={{
              width: unit * 8,
              height: unit * 0.7,
              borderRadius: unit * 0.35,
              backgroundColor: accent,
            }}
          />
          <div
            style={{
              fontSize: unit * 1.9,
              letterSpacing: unit * 0.14,
              textTransform: "uppercase",
              color: brand.mutedText,
            }}
          >
            {title}
          </div>
          <Caption unit={unit} text={scene.caption} enter={captionEnter} />
        </div>
        <div
          style={{
            opacity: uiEnter,
            transform: `scale(${uiZoom * uiScale * interpolate(outro, [0, 1], [1, 0.97])})`,
          }}
        >
          <StorybookUi
            unit={unit * 0.84}
            canvasHeight={isVertical ? unit * 44 : unit * 26}
            selectedIndex={selectedIndex}
            variantProgress={variantProgress}
            statesProgress={statesProgress}
            accent={accent}
          />
        </div>
      </div>
      <Cursor unit={unit} x={cursorX} y={cursorY} opacity={cursorOpacity} />
    </AbsoluteFill>
  );
};

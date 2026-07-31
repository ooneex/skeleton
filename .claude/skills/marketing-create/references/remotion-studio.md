# Remotion studio — bootstrap and render

The `var/remotion/` folder is the **one** Remotion project for the whole monorepo. Every marketing image and video is a render of a composition in it, parameterised with `--props` — you never write a new component per post unless the post needs a genuinely new visual.

`var/` is gitignored, so the project is scratch space: it is not committed, and a fresh checkout has to bootstrap it again (§2). That is cheap — the seven files below are the whole project — and it keeps generated tooling out of the repo alongside the renders it produces.

> **Licence:** Remotion is source-available, not MIT. Free for individuals and companies of up to 3 people; larger teams need a company licence (<https://remotion.pro>). Mention this once if you are the one adding the dependency.

## 0. Portability rules

Every command in this file has to run unchanged on macOS, Linux and Windows — the same repo is checked out on all three, and the shell may be zsh, bash, PowerShell or `cmd.exe`. So:

- **One command per line.** No `\` line continuations (PowerShell uses a backtick, `cmd` a caret) and no `&&` chaining (missing in PowerShell 5.1).
- **Double quotes only, never single quotes.** `'...'` is not a quoting character in `cmd.exe` and behaves differently in PowerShell.
- **Never inline JSON into `--props`.** Escaping a JSON string differs in every shell. Write the props to a file and pass its path — see §3.
- **No shell utilities** — no `ls`, `mkdir -p`, `cp`, `rm`, `cat`. Use the Read/Glob/Write tools instead; they are the same everywhere and create parent folders for you.
- **Forward slashes in paths.** Bun, Node and Remotion accept them on Windows; a backslash breaks on POSIX.
- **`bunx`, never `npx`.** Bun is this monorepo's runtime and package manager, and `bunx` works the same on all three platforms. Remotion's own docs say `npx`; substitute `bunx` everywhere.

**System requirements** (Remotion, not this skill): Node ≥ 16 or Bun ≥ 1.0.3. macOS 15 (Sequoia) or later — older macOS is unsupported. On Linux, libc ≥ 2.35 plus the Chrome shared libraries: `libnss3 libdbus-1-3 libatk1.0-0 libasound2t64 libxrandr2 libxkbcommon-dev libxfixes3 libxcomposite1 libxdamage1 libgbm-dev libcups2 libcairo2 libpango-1.0-0 libatk-bridge2.0-0` on Ubuntu 22.04+ (`libasound2` on older releases and on Debian; the `mesa-libgbm nss atk at-spi2-atk cups-libs pango alsa-lib` set on Amazon Linux/Fedora). Alpine and nixOS are **not supported** — render elsewhere. Windows needs nothing extra.

## 0.1 The quality bar

A dark rectangle with white text centred on it is not a marketing asset — it is a slide, and it dies in a feed. Everything rendered here has to survive next to a designer's work at 300px wide on a phone. The components in §2 are built to that bar; when you change them, hold the bar.

**Non-negotiable in every render:**

- **Depth, not flatness.** A layered backdrop — base colour, two soft accent blooms, a masked grid, a vignette — so the frame has a light source and a focal point instead of being one uniform slab.
- **Grain.** A film-grain overlay at low opacity. It is the single cheapest quality tell: it kills the banding that large dark gradients produce in h264 and reads as photographic rather than generated.
- **The project's own typeface, loaded from disk.** The `.ttf` files in `modules/design/src/fonts/` — never `system-ui`, and never a Google-hosted lookalike. A system stack renders as SF on macOS and something else on the Linux CI box, so the same composition would ship two different-looking assets; a substitute face makes the card look like someone else's product.
- **Display typography.** The title is set large with negative tracking and tight leading, and it is optically balanced (`textWrap: "balance"`). Body copy is dimmed, never pure white — the contrast step is what creates hierarchy.
- **One accent, two hues.** A single accent colour drives the whole frame, with one adjacent hue for the second bloom and the gradient sheen. Three or more competing colours is the fastest way to look generic.
- **Thumbnail legibility.** Squint at the render. If the claim is not readable at 300px, the title is too long or too small — fix the copy, not the font size.
- **Motion with intent.** Springs and blur-ins that resolve, plus a slow camera push. Nothing spins, bounces, flies in from off-screen, or uses a stock transition.
- **Scenes, not a slide that fills up.** A video cuts: the claim, then each beat alone on screen at display size, then the call to action. Text that stacks up on one held frame is a slide with a timer on it, and it is why most generated reels look generated. One idea per scene, and the scene ends when that idea has landed.
- **A continuous world.** The backdrop, camera push and HUD run underneath the cuts and never restart. Cutting the background along with the foreground is what makes a reel feel like a slideshow instead of a film.

**Never:** stock templates, emoji as decoration, drop shadows on text, more than one weight of the same size, centre-aligned body copy, or a logo scaled larger than the claim.

Pull the palette from the design module's tokens (`modules/design/src/styles/`) — never invent one. If a post needs a genuinely new visual that these two components cannot express, build a new composition to the same bar rather than compromising the copy to fit an existing one.

## 1. Is it already there?

Glob for `var/remotion/Root.tsx`. Present → skip to §3. Missing → §2.

## 2. Bootstrap (once per checkout)

```bash
bun add --exact remotion @remotion/cli @remotion/fonts @remotion/transitions
```

Run that from the repo root — the dependency belongs in the root `package.json`, and `var/remotion/` resolves `node_modules` upwards from there. All three packages must be on the **same exact version**. Optionally install the agent skills Remotion ships (`bunx remotion skills add`) — they cover animation APIs in far more depth than this file.

Then write the seven files below with the Write tool; it creates `var/remotion/` for you. They are the whole project.

### `var/remotion/index.ts`

```ts
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

registerRoot(RemotionRoot);
```

### `var/remotion/brand.ts`

Pull the real values from the design module's tokens (`modules/design/src/styles/`) — never invent a palette. `accentAlt` is the second bloom and the gradient sheen: pick the token adjacent to the accent on the wheel, not its complement.

The typeface is the project's own, loaded from the `.ttf` files the design module already ships. **Do not hard-code the family below — read it from the project.** Glob `modules/design/src/fonts/*/*.css`, and the `@font-face` blocks give you the family name and the weight-to-file mapping verbatim; mirror them here. In this repo that is `modules/design/src/fonts/space-grotesk/space-grotesk.css` → Space Grotesk at 300/400/500/600/700, of which the compositions use four.

`staticFile()` resolves against Remotion's public dir, and every command in §3 points that at `modules/design/src/fonts` — so the fonts are read straight from the design module and nothing is ever copied into `var/`. `delayRender` holds the first frame until the faces are ready; without it the render races the font and ships a frame set in the fallback.

```ts
import { loadFont } from "@remotion/fonts";
import { cancelRender, continueRender, delayRender, staticFile } from "remotion";

const family = "Space Grotesk";

const weights = [
  ["400", "space-grotesk/space-grotesk-regular.ttf"],
  ["500", "space-grotesk/space-grotesk-medium.ttf"],
  ["600", "space-grotesk/space-grotesk-semi-bold.ttf"],
  ["700", "space-grotesk/space-grotesk-bold.ttf"],
];

const handle = delayRender(`Loading ${family}`);

Promise.all(weights.map(([weight, file]) => loadFont({ family, weight, url: staticFile(file) })))
  .then(() => continueRender(handle))
  .catch((error) => cancelRender(error));

export const brand = {
  font: `"${family}", sans-serif`,
  base: "#07080c",
  surface: "#10131b",
  text: "#ffffff",
  textDim: "#aeb7c6",
  muted: "#6b7688",
  accent: "#4f8cff",
  accentAlt: "#a855f7",
  line: "rgba(255, 255, 255, 0.08)",
  wordmark: "talos",
} as const;
```

### `var/remotion/Backdrop.tsx`

The frame's depth, shared by the still and the video: base wash, two blurred accent blooms, a grid masked to a soft ellipse, a vignette, and grain on top. Nothing here is decorative — each layer exists to stop the render reading as a flat slide.

It reads `useCurrentFrame()`, so the still simply renders its frame-0 pose while the video drifts the blooms on slow sine paths.

```tsx
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "./brand";

const Bloom: React.FC<{ color: string; size: number; x: number; y: number; opacity: number }> = ({
  color,
  size,
  x,
  y,
  opacity,
}) => (
  <div
    style={{
      position: "absolute",
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      borderRadius: "50%",
      opacity,
      background: `radial-gradient(circle at 50% 50%, ${color} 0%, rgba(0, 0, 0, 0) 70%)`,
      filter: `blur(${size * 0.1}px)`,
    }}
  />
);

export const Backdrop: React.FC<{ accent: string; accentAlt: string }> = ({ accent, accentAlt }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const unit = width / 100;
  const seconds = frame / fps;
  const drift = (phase: number, amount: number) =>
    Math.sin((seconds * Math.PI * 2) / 22 + phase) * amount;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.base, overflow: "hidden" }}>
      <Bloom
        color={accent}
        size={width * 1.15}
        x={width * 0.18 + drift(0, unit * 4)}
        y={height * 0.12 + drift(1.2, unit * 3)}
        opacity={0.5}
      />
      <Bloom
        color={accentAlt}
        size={width * 0.95}
        x={width * 0.92 + drift(2.4, unit * 5)}
        y={height * 0.86 + drift(3.6, unit * 4)}
        opacity={0.35}
      />
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${brand.line} 1px, transparent 1px), linear-gradient(90deg, ${brand.line} 1px, transparent 1px)`,
          backgroundSize: `${unit * 6}px ${unit * 6}px`,
          maskImage: "radial-gradient(ellipse at 50% 40%, black 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 0%, transparent 72%)",
          opacity: 0.55,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0.82) 100%)",
        }}
      />
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.16, mixBlendMode: "overlay" }}
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </AbsoluteFill>
  );
};
```

### `var/remotion/PostCard.tsx`

The still: one claim, one supporting line, one accent chip, one footer. It has to read at thumbnail size.

Every size derives from the composition width, so one component serves all four formats. The title carries a top-to-bottom gradient so it does not sit on the backdrop as flat white, and the footer hairline gives the frame an edge instead of letting the text float.

```tsx
import { AbsoluteFill } from "remotion";
import { Backdrop } from "./Backdrop";
import { brand } from "./brand";

export type PostCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  footnote: string;
  accent: string;
  accentAlt: string;
};

export const postCardDefaults: PostCardProps = {
  eyebrow: "",
  title: "",
  subtitle: "",
  footnote: brand.wordmark,
  accent: brand.accent,
  accentAlt: brand.accentAlt,
};

export const PostCard: React.FC<PostCardProps> = ({
  eyebrow,
  title,
  subtitle,
  footnote,
  accent,
  accentAlt,
}) => {
  return (
    <AbsoluteFill style={{ fontFamily: brand.font }}>
      <Backdrop accent={accent} accentAlt={accentAlt} />
      <AbsoluteFill
        style={{
          padding: "9%",
          justifyContent: "space-between",
          containerType: "size",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.4cqw" }}>
          <div
            style={{
              width: "1.1cqw",
              height: "1.1cqw",
              borderRadius: "50%",
              backgroundColor: accent,
              boxShadow: `0 0 2cqw ${accent}`,
            }}
          />
          {eyebrow ? (
            <div
              style={{
                fontSize: "2.1cqw",
                fontWeight: 500,
                letterSpacing: "0.28cqw",
                textTransform: "uppercase",
                color: brand.textDim,
                padding: "0.9cqw 1.8cqw",
                borderRadius: "99cqw",
                border: `1px solid ${brand.line}`,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3cqw" }}>
          <div
            style={{
              fontSize: "8cqw",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.18cqw",
              textWrap: "balance",
              maxWidth: "94%",
              backgroundImage: `linear-gradient(170deg, ${brand.text} 30%, ${brand.textDim} 100%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: "3.1cqw",
                fontWeight: 400,
                lineHeight: 1.4,
                color: brand.textDim,
                maxWidth: "78%",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${brand.line}`,
            paddingTop: "2.6cqw",
            fontSize: "2.1cqw",
            letterSpacing: "0.1cqw",
            color: brand.muted,
          }}
        >
          <span>{footnote}</span>
          <div
            style={{
              width: "7cqw",
              height: "0.5cqw",
              borderRadius: "99cqw",
              background: `linear-gradient(90deg, ${accent}, ${accentAlt})`,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
```

`cqw` units resolve against the composition box (`containerType: "size"`), so the layout is identical in all four formats without a single hard-coded pixel.

### `var/remotion/Scenes.tsx`

The reel is **cut**, not accumulated. An earlier version of this file revealed every beat onto one frame and held the full stack until the end; at 20 seconds that is dull and at 45 it is dead air with text on it. Each beat now owns the screen for its own scene, so a 45s cut is a dozen distinct frames rather than one frame filling up.

Three scene types cover every post: a **hook** (the claim, word by word), one **beat** per line (a single idea, alone, at display size), and an **outro** (the call to action). Each scene reads its own local frame — inside a `TransitionSeries.Sequence`, `useCurrentFrame()` restarts at 0 — so a scene's entrance animation is written once and plays wherever it lands in the cut.

```tsx
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "./brand";

type Palette = { accent: string; accentAlt: string };

export const Reveal: React.FC<{ delay: number; children: React.ReactNode; inline?: boolean }> = ({
  delay,
  children,
  inline,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - delay, fps, config: { damping: 200, mass: 0.6 } });

  return (
    <span
      style={{
        display: inline ? "inline-block" : "block",
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [0.9, 0])}em)`,
        filter: `blur(${interpolate(enter, [0, 1], [0.14, 0])}em)`,
      }}
    >
      {children}
    </span>
  );
};

const AccentBar: React.FC<Palette & { width: string }> = ({ accent, accentAlt, width }) => (
  <div
    style={{
      width,
      height: "0.6cqw",
      borderRadius: "99cqw",
      background: `linear-gradient(90deg, ${accent}, ${accentAlt})`,
    }}
  />
);

const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        padding: "9%",
        justifyContent: "center",
        gap: "4cqw",
        containerType: "size",
        transform: `translateY(${interpolate(frame, [0, durationInFrames], [0, -1.4], {
          extrapolateRight: "clamp",
        })}%)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export const HookScene: React.FC<Palette & { title: string }> = ({ title, accent, accentAlt }) => (
  <Stage>
    <Reveal delay={0}>
      <AccentBar accent={accent} accentAlt={accentAlt} width="9cqw" />
    </Reveal>
    <div
      style={{
        fontSize: "9cqw",
        fontWeight: 700,
        lineHeight: 1.02,
        letterSpacing: "-0.2cqw",
        textWrap: "balance",
        color: brand.text,
      }}
    >
      {title.split(" ").map((word, index) => (
        <Reveal key={`${word}-${index}`} delay={4 + index * 2.5} inline>
          {word}&nbsp;
        </Reveal>
      ))}
    </div>
  </Stage>
);

export const BeatScene: React.FC<Palette & { text: string; index: number; total: number }> = ({
  text,
  index,
  total,
  accent,
  accentAlt,
}) => (
  <AbsoluteFill style={{ containerType: "size" }}>
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "flex-end", paddingRight: "4%" }}>
      <Reveal delay={0}>
        <div
          style={{
            fontSize: "42cqw",
            fontWeight: 700,
            lineHeight: 0.8,
            color: "transparent",
            WebkitTextStroke: `0.2cqw ${brand.line}`,
          }}
        >
          {index + 1}
        </div>
      </Reveal>
    </AbsoluteFill>
    <Stage>
      <Reveal delay={2}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.6cqw",
            fontSize: "2.1cqw",
            fontWeight: 500,
            letterSpacing: "0.28cqw",
            textTransform: "uppercase",
            color: brand.muted,
          }}
        >
          <AccentBar accent={accent} accentAlt={accentAlt} width="4cqw" />
          <span>{`${index + 1} / ${total}`}</span>
        </div>
      </Reveal>
      <div
        style={{
          fontSize: "6.4cqw",
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.12cqw",
          textWrap: "balance",
          color: brand.text,
          maxWidth: "88%",
        }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <Reveal key={`${word}-${wordIndex}`} delay={6 + wordIndex * 2} inline>
            {word}&nbsp;
          </Reveal>
        ))}
      </div>
    </Stage>
  </AbsoluteFill>
);

export const OutroScene: React.FC<Palette & { title: string; cta: string; footnote: string }> = ({
  title,
  cta,
  footnote,
  accent,
  accentAlt,
}) => (
  <Stage>
    <Reveal delay={0}>
      <div style={{ fontSize: "3.1cqw", color: brand.textDim, lineHeight: 1.3 }}>{title}</div>
    </Reveal>
    <Reveal delay={6}>
      <div
        style={{
          fontSize: "8cqw",
          fontWeight: 700,
          lineHeight: 1.02,
          letterSpacing: "-0.18cqw",
          textWrap: "balance",
          backgroundImage: `linear-gradient(170deg, ${brand.text} 30%, ${brand.textDim} 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {cta}
      </div>
    </Reveal>
    <Reveal delay={14}>
      <div style={{ display: "flex", alignItems: "center", gap: "2.4cqw" }}>
        <AccentBar accent={accent} accentAlt={accentAlt} width="9cqw" />
        <span style={{ fontSize: "2.6cqw", letterSpacing: "0.1cqw", color: brand.muted }}>
          {footnote}
        </span>
      </div>
    </Reveal>
  </Stage>
);
```

### `var/remotion/PostReel.tsx`

The video: hook → one scene per beat → outro, assembled with `TransitionSeries`. The backdrop sits **outside** the series and runs the whole cut, so the camera push and the drifting blooms are continuous while the foreground cuts — the frame never blinks to black between scenes. A persistent HUD (wordmark, progress bar, scene counter) rides on top for the same reason.

Scene lengths are derived, never hard-coded: the hook takes 22% of the cut, the outro 18%, and the beats split the rest evenly. That is what lets one component pace both lengths — a 20s cut with five beats gives each beat ~2.4s, a 45s cut with ten gives ~2.7s, and neither needs a different component.

Transitions are deliberately boring: a fade into the beats and out to the outro, one consistent upward slide between beats. Rotating through four presentations is the fastest way to make a reel look like a template.

```tsx
import { linearTiming, springTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Backdrop } from "./Backdrop";
import { brand } from "./brand";
import { BeatScene, HookScene, OutroScene } from "./Scenes";

export type PostReelProps = {
  title: string;
  lines: string[];
  cta: string;
  footnote: string;
  accent: string;
  accentAlt: string;
  durationInSeconds: number;
};

export const postReelDefaults: PostReelProps = {
  title: "",
  lines: [],
  cta: "",
  footnote: brand.wordmark,
  accent: brand.accent,
  accentAlt: brand.accentAlt,
  durationInSeconds: 20,
};

export const PostReel: React.FC<PostReelProps> = ({
  title,
  lines,
  cta,
  footnote,
  accent,
  accentAlt,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // A transition overlaps its two neighbours, so the sequences have to over-allocate by exactly
  // the total transition time for the series to land on durationInFrames.
  const transition = Math.round(fps * 0.4);
  const budget = durationInFrames + transition * (lines.length + 1);
  const hook = Math.round(budget * 0.22);
  const beat = lines.length ? Math.floor((budget - hook - Math.round(budget * 0.18)) / lines.length) : 0;
  const outro = budget - hook - beat * lines.length;

  const push = interpolate(frame, [0, durationInFrames], [1, 1.06], {
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ fontFamily: brand.font, backgroundColor: brand.base }}>
      <AbsoluteFill style={{ transform: `scale(${push})` }}>
        <Backdrop accent={accent} accentAlt={accentAlt} />
      </AbsoluteFill>

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={hook}>
          <HookScene title={title} accent={accent} accentAlt={accentAlt} />
        </TransitionSeries.Sequence>
        {lines.flatMap((line, index) => [
          <TransitionSeries.Transition
            key={`transition-${line}`}
            presentation={index === 0 ? fade() : slide({ direction: "from-bottom" })}
            timing={
              index === 0
                ? linearTiming({ durationInFrames: transition })
                : springTiming({ config: { damping: 200 }, durationInFrames: transition })
            }
          />,
          <TransitionSeries.Sequence key={`scene-${line}`} durationInFrames={beat}>
            <BeatScene
              text={line}
              index={index}
              total={lines.length}
              accent={accent}
              accentAlt={accentAlt}
            />
          </TransitionSeries.Sequence>,
        ])}
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transition })}
        />
        <TransitionSeries.Sequence durationInFrames={outro}>
          <OutroScene
            title={title}
            cta={cta}
            footnote={footnote}
            accent={accent}
            accentAlt={accentAlt}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      <AbsoluteFill style={{ justifyContent: "flex-end", padding: "9%", containerType: "size" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.4cqw",
            fontSize: "2.1cqw",
            color: brand.muted,
          }}
        >
          <span>{footnote}</span>
          <div
            style={{
              flex: 1,
              height: "0.25cqw",
              borderRadius: "99cqw",
              backgroundColor: brand.line,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: `linear-gradient(90deg, ${accent}, ${accentAlt})`,
              }}
            />
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
```

### `var/remotion/Root.tsx`

Four still formats and three video formats. Every dimension is even — h264 requires it. The reel's `durationInFrames` is only the fallback for a props-less preview; `calculateMetadata` derives the real length from `durationInSeconds`, so a 20s cut is 600 frames and a 45s cut is 1350.

```tsx
import { Composition } from "remotion";
import { PostCard, postCardDefaults } from "./PostCard";
import { PostReel, postReelDefaults } from "./PostReel";

const CARD_FORMATS = [
  { id: "card-landscape", width: 1600, height: 900 },
  { id: "card-square", width: 1080, height: 1080 },
  { id: "card-portrait", width: 1080, height: 1350 },
  { id: "card-vertical", width: 1080, height: 1920 },
] as const;

const REEL_FORMATS = [
  { id: "reel-landscape", width: 1920, height: 1080 },
  { id: "reel-square", width: 1080, height: 1080 },
  { id: "reel-vertical", width: 1080, height: 1920 },
] as const;

export const RemotionRoot: React.FC = () => (
  <>
    {CARD_FORMATS.map((format) => (
      <Composition
        key={format.id}
        id={format.id}
        component={PostCard}
        width={format.width}
        height={format.height}
        fps={30}
        durationInFrames={1}
        defaultProps={postCardDefaults}
      />
    ))}
    {REEL_FORMATS.map((format) => (
      <Composition
        key={format.id}
        id={format.id}
        component={PostReel}
        width={format.width}
        height={format.height}
        fps={30}
        durationInFrames={600}
        defaultProps={postReelDefaults}
        calculateMetadata={({ props }) => ({
          durationInFrames: Math.round(props.durationInSeconds * 30),
        })}
      />
    ))}
  </>
);
```

Check it loads:

```bash
bunx remotion compositions var/remotion/index.ts --public-dir="modules/design/src/fonts"
```

## 3. Render

Render into `var/marketing/` — it is gitignored, and the `--image`/`--video` flags of `talos marketing:create` copy the file into the post and rename it to the required 6 `a-f0-9` characters. **Never render straight into `modules/<module>/marketing/`.**

First write the props with the **Write tool** — that creates `var/marketing/` for you and sidesteps every shell's JSON escaping. `--props` accepts a JSON string or a path to a JSON file; only the file form is portable.

`var/marketing/<slug>-card.json`:

```json
{
  "eyebrow": "Auth",
  "title": "Passwordless sign-in is live",
  "subtitle": "Request a code, paste it, done.",
  "footnote": "talos",
  "accent": "#4f8cff",
  "accentAlt": "#a855f7"
}
```

`var/marketing/<slug>-reel.json`:

```json
{
  "title": "Passwordless sign-in is live",
  "lines": ["Request a code", "Paste it", "You are in", "No password to forget"],
  "cta": "Ship it this week",
  "footnote": "talos",
  "accent": "#4f8cff",
  "accentAlt": "#a855f7",
  "durationInSeconds": 20
}
```

**`durationInSeconds` is 20 or 45 — nothing in between and nothing shorter.** 20s is the default cut: one claim, 4–6 beats, the length a feed scroll tolerates. 45s is the long cut for a launch or a walkthrough that genuinely has more to say — 8–12 beats, or the scenes stretch and the video reads as padding.

`lines` is a **scene list**, not a paragraph split up. Each entry gets the screen to itself, so give every one a single idea that stands alone at display size, and count them against the length: the beats share 60% of the cut, so five beats in 20s is ~2.4s each — enough to read a short line once — while three beats in 45s leaves each one on screen for nine seconds, which is where a viewer scrolls away. If you cannot find enough beats to fill 45 seconds, the post wants the 20s cut.

Then render — one line each, no continuations:

```bash
bunx remotion still var/remotion/index.ts card-landscape "var/marketing/<slug>-card.png" --props="var/marketing/<slug>-card.json" --public-dir="modules/design/src/fonts" --scale=2
```

```bash
bunx remotion render var/remotion/index.ts reel-vertical "var/marketing/<slug>-reel.mp4" --props="var/marketing/<slug>-reel.json" --public-dir="modules/design/src/fonts" --crf=18
```

- **`--scale=2` on every still.** It rasterises at twice the composition size, so a `card-landscape` lands at 3200×1800. Every platform downsamples rather than upscales, and the type edges survive their recompression — this is most of the difference between a crisp card and a mushy one.
- **`--public-dir="modules/design/src/fonts"` on every command**, including `compositions` and `studio`. It is what makes `staticFile()` in `brand.ts` resolve to the design module's `.ttf` files. Drop it and the faces 404, `cancelRender` fires, and the render dies rather than silently falling back — which is the behaviour you want.
- **`--crf=18` on every video.** Remotion's default (23) leaves visible blocking in the dark gradients this design is built on. 18 is near-transparent quality at a modest size increase; do not go below 16, the file stops being worth it.
- A card composition is one frame long, so `--frame` stays at 0 for a still you are shipping; the flag only earns its keep when you are sampling a scene out of a reel to check it. h264 into `.mp4` is the default codec for that extension, on every platform.
- Input props override `defaultProps`; anything you omit falls back to the default.
- `--log=verbose` when a render fails.
- First render downloads Chrome Headless Shell — that is expected, not an error. It needs network access and a few hundred MB. The fonts are local, so nothing else is fetched.
- Remotion creates the output file's parent folder, but write the props file first anyway and the folder is already there.

**Look at what you rendered.** Read the PNG back with the Read tool before attaching it to a post. Check the claim is legible small, that no line has orphaned a single word, that the subtitle has not overflowed its column, and that the blooms have not washed out the type. Fix the copy or the accent and re-render — shipping an unviewed asset is how a broken layout reaches a feed.

For a reel, check it **per scene** rather than watching the whole file: render a still of the same composition at one frame inside each scene and read those back. The hook lands around 10% of the cut, the beats at even intervals through the middle 60%, the outro around 92% — so for a 20s (600-frame) cut, `--frame=60`, then every ~72 frames, then `--frame=550`. A beat with a too-long line only breaks in its own scene, and a full render is a slow way to discover it.

```bash
bunx remotion still var/remotion/index.ts reel-vertical "var/marketing/<slug>-check.png" --props="var/marketing/<slug>-reel.json" --public-dir="modules/design/src/fonts" --frame=60
```

Preview interactively while iterating on a visual:

```bash
bunx remotion studio var/remotion/index.ts --public-dir="modules/design/src/fonts"
```

## 4. Formats per platform

| Platform | Still | Video |
|----------|-------|-------|
| X | `card-landscape` | `reel-landscape` |
| LinkedIn, Facebook, Medium, Reddit, Discord, Telegram, WhatsApp, Messenger | `card-landscape` | `reel-landscape` |
| Instagram (feed), Threads | `card-portrait` | `reel-vertical` |
| Instagram (story/reel), TikTok | `card-vertical` | `reel-vertical` |

One post, one format — pick the format of the post's **primary** platform. A campaign that needs both a landscape and a vertical cut is two posts.

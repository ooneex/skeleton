# Remotion studio — bootstrap and render

The repo-root `remotion/` folder is the **one** Remotion project for the whole monorepo. Every marketing image and video is a render of a composition in it, parameterised with `--props` — you never write a new component per post unless the post needs a genuinely new visual.

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

## 1. Is it already there?

Glob for `remotion/Root.tsx`. Present → skip to §3. Missing → §2.

## 2. Bootstrap (once per repo)

```bash
bun add --exact remotion @remotion/cli
```

Both packages must be on the **same exact version**. Optionally install the agent skills Remotion ships (`bunx remotion skills add`) — they cover animation APIs in far more depth than this file.

Then write the five files below. They are the whole project.

### `remotion/index.ts`

```ts
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

registerRoot(RemotionRoot);
```

### `remotion/brand.ts`

Pull the real values from the design module's tokens (`modules/design/src/styles/`) — never invent a palette.

```ts
export const brand = {
  background: "#0b0d12",
  surface: "#141822",
  text: "#f5f7fa",
  muted: "#9aa4b2",
  accent: "#4f8cff",
  font: "Inter, system-ui, -apple-system, Segoe UI, sans-serif",
} as const;
```

### `remotion/PostCard.tsx`

The still: one claim, one supporting line, one accent bar. It has to read at thumbnail size.

Every size is derived from the composition width, so one component serves all four formats.

```tsx
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
```

### `remotion/PostReel.tsx`

The video: the same claim, revealed line by line. No stock motion — one spring per line, nothing spins.

```tsx
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

const Line: React.FC<{ text: string; delay: number; size: number; weight: number; color: string }> = ({
  text,
  delay,
  size,
  weight,
  color,
}) => {
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
  const { width } = useVideoConfig();
  const unit = width / 100;

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
          delay={12 + index * 10}
          size={unit * 3.2}
          weight={400}
          color={brand.muted}
        />
      ))}
    </AbsoluteFill>
  );
};
```

### `remotion/Root.tsx`

Four still formats and three video formats. Every dimension is even — h264 requires it.

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
        durationInFrames={300}
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
bunx remotion compositions remotion/index.ts
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
  "accent": "#4f8cff"
}
```

`var/marketing/<slug>-reel.json`:

```json
{
  "title": "Passwordless sign-in is live",
  "lines": ["Request a code", "Paste it", "You are in"],
  "accent": "#4f8cff",
  "durationInSeconds": 8
}
```

Then render — one line each, no continuations:

```bash
bunx remotion still remotion/index.ts card-landscape "var/marketing/<slug>-card.png" --props="var/marketing/<slug>-card.json"
```

```bash
bunx remotion render remotion/index.ts reel-vertical "var/marketing/<slug>-reel.mp4" --props="var/marketing/<slug>-reel.json"
```

- A still is one frame, so `--frame` stays at 0. h264 into `.mp4` is the default codec for that extension, on every platform.
- Input props override `defaultProps`; anything you omit falls back to the default.
- `--log=verbose` when a render fails; `--scale` only if you need a larger raster than the composition.
- First render downloads Chrome Headless Shell — that is expected, not an error. It needs network access and a few hundred MB.
- Remotion creates the output file's parent folder, but write the props file first anyway and the folder is already there.

Preview interactively while iterating on a visual:

```bash
bunx remotion studio remotion/index.ts
```

## 4. Formats per platform

| Platform | Still | Video |
|----------|-------|-------|
| X | `card-landscape` | `reel-landscape` |
| LinkedIn, Facebook, Medium, Reddit, Discord, Telegram, WhatsApp, Messenger | `card-landscape` | `reel-landscape` |
| Instagram (feed), Threads | `card-portrait` | `reel-vertical` |
| Instagram (story/reel), TikTok | `card-vertical` | `reel-vertical` |

One post, one format — pick the format of the post's **primary** platform. A campaign that needs both a landscape and a vertical cut is two posts.

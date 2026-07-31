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

import { Muted } from "@module/design/components/typography";
import { cn } from "@module/design/utils/cn";
import { getEmbedUrl, getId } from "@ooneex/youtube-utils";

type VideoPlayerPropsType = {
  src?: string;
  youtubeId?: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
};

export const VideoPlayer = ({ src, youtubeId, title, autoPlay = false, className }: VideoPlayerPropsType) => {
  const ytId = youtubeId ?? (src ? getId(src) : null);

  if (ytId) {
    const base = getEmbedUrl(ytId);
    const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
    if (autoPlay) {
      params.set("autoplay", "1");
      params.set("mute", "1");
    }
    if (base)
      return (
        <iframe
          src={`${base}?${params}`}
          title={title ?? "Video"}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className={cn("w-full h-full border-0", className)}
        />
      );
  }

  if (src) {
    if (src.includes("mediadelivery.net")) {
      const url = new URL(src.replace(/\/(play|embed)\//, "/embed/"));
      if (autoPlay) {
        url.searchParams.set("autoplay", "true");
        url.searchParams.set("muted", "true");
      }
      return (
        <iframe
          src={url.toString()}
          title={title ?? "Video"}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className={cn("w-full h-full border-0", className)}
        />
      );
    }

    return (
      // biome-ignore lint/a11y/useMediaCaption: captions not required for library video player
      <video
        src={src}
        title={title}
        controls
        autoPlay={autoPlay}
        playsInline
        className={cn("w-full h-full bg-black", className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center justify-center w-full h-full", className)}>
      <Muted>No video available</Muted>
    </div>
  );
};
VideoPlayer.displayName = "VideoPlayer";

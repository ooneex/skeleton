import type { CommenterRectType } from "./types";

/** Signature of the `capture` prop, so hosts can plug in their own screenshotter. */
export type CommenterCaptureType = (rect: CommenterRectType) => Promise<string | null>;

/** How long to wait for the first decoded frame before giving up. */
const FRAME_TIMEOUT = 3000;

type FrameVideoType = HTMLVideoElement & {
  requestVideoFrameCallback?: (callback: () => void) => number;
};

const withTimeout = (register: (done: () => void) => void): Promise<void> => {
  return new Promise((resolve) => {
    const timer = setTimeout(resolve, FRAME_TIMEOUT);
    register(() => {
      clearTimeout(timer);
      resolve();
    });
  });
};

/**
 * `play()` resolves as soon as playback starts, before a frame is decoded —
 * measuring there gives `videoWidth === 0` and crops a blank 1×1 image. Wait
 * for the metadata, then for an actual painted frame.
 */
const waitForFrame = async (video: FrameVideoType): Promise<void> => {
  if (!video.videoWidth) {
    await withTimeout((done) => {
      video.addEventListener("loadedmetadata", done, { once: true });
      video.addEventListener("resize", done, { once: true });
    });
  }

  await withTimeout((done) => {
    if (video.requestVideoFrameCallback) {
      video.requestVideoFrameCallback(done);
      return;
    }

    video.addEventListener("timeupdate", done, { once: true });
    requestAnimationFrame(() => requestAnimationFrame(done));
  });
};

/**
 * Capture `rect` (viewport coordinates) as a PNG data URL using the native
 * screen-capture API — the user picks the current tab once, we grab a single
 * frame and crop it. Returns `null` when the browser has no support, the user
 * dismisses the share prompt, or no frame arrives in time.
 *
 * The crop maps viewport coordinates onto the frame, so it is accurate when
 * the shared surface is the tab itself (what `preferCurrentTab` asks for).
 * Pass a `capture` prop to `<Commenter />` to swap in a DOM-to-canvas renderer
 * instead.
 */
export const captureArea: CommenterCaptureType = async (rect) => {
  const media = navigator.mediaDevices;
  if (!media?.getDisplayMedia) return null;

  let stream: MediaStream;
  try {
    stream = await media.getDisplayMedia({
      video: { displaySurface: "browser" },
      audio: false,
      preferCurrentTab: true,
    } as DisplayMediaStreamOptions);
  } catch {
    return null;
  }

  const video: FrameVideoType = document.createElement("video");
  // Some browsers never decode a frame for a video that is not in the document.
  video.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none";
  video.muted = true;
  video.playsInline = true;
  document.body.append(video);

  try {
    video.srcObject = stream;
    await video.play();
    await waitForFrame(video);

    if (!video.videoWidth || !video.videoHeight) return null;

    const scaleX = video.videoWidth / window.innerWidth;
    const scaleY = video.videoHeight / window.innerHeight;
    const width = Math.max(1, Math.round(rect.width * scaleX));
    const height = Math.max(1, Math.round(rect.height * scaleY));

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) return null;

    context.drawImage(video, rect.x * scaleX, rect.y * scaleY, width, height, 0, 0, width, height);

    return canvas.toDataURL("image/png");
  } catch {
    return null;
  } finally {
    for (const track of stream.getTracks()) track.stop();
    video.srcObject = null;
    video.remove();
  }
};

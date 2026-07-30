/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { isValidElement } from "react";
import { VideoPlayer } from "../../../src/components/video/VideoPlayer";

// Note: a real browser media engine would be required to actually play video;
// these are smoke tests asserting rendered structure/props only.

afterEach(cleanup);

describe("VideoPlayer", () => {
  test("renders a fallback message when no src/youtubeId is provided", () => {
    render(<VideoPlayer />);
    expect(screen.getByText("No video available")).toBeInTheDocument();
  });

  test("renders a native video element with correct src for direct video URLs", () => {
    render(<VideoPlayer src="https://cdn.example.com/movie.mp4" title="My movie" />);
    const video = document.querySelector("video");
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute("src", "https://cdn.example.com/movie.mp4");
    expect(video).toHaveAttribute("controls");
    expect(video).toHaveAttribute("title", "My movie");
  });

  test("applies autoPlay attribute to the native video element", () => {
    render(<VideoPlayer src="https://cdn.example.com/movie.mp4" autoPlay />);
    const video = document.querySelector("video");
    expect(video).toHaveAttribute("autoplay");
  });

  test("renders an iframe embed for youtube ids", () => {
    const element = VideoPlayer({ youtubeId: "dQw4w9WgXcQ", title: "Youtube video" });

    expect(isValidElement(element)).toBe(true);
    expect(element?.type).toBe("iframe");
    expect(element?.props.title).toBe("Youtube video");
    expect(element?.props.src).toContain("dQw4w9WgXcQ");
  });

  test("renders an iframe embed for mediadelivery.net sources", () => {
    const element = VideoPlayer({
      src: "https://iframe.mediadelivery.net/play/12345/abcde",
      title: "Delivery video",
    });

    expect(isValidElement(element)).toBe(true);
    expect(element?.type).toBe("iframe");
    expect(element?.props.title).toBe("Delivery video");
    expect(element?.props.src).toContain("/embed/");
  });
});

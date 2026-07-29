/// <reference lib="dom" />

import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { openYouTubeDialog, YouTubeDialog } from "../../../src/components/editor/YouTubeDialog";

afterEach(cleanup);

describe("YouTubeDialog", () => {
  test("renders its title, description, and Cancel/Embed actions", async () => {
    render(<YouTubeDialog />);
    const resultPromise = openYouTubeDialog();

    expect(await screen.findByText("Embed YouTube Video")).toBeInTheDocument();
    expect(screen.getByText("Enter the URL of the YouTube video you want to embed.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Embed" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(await resultPromise).toBeNull();
  });

  test("rejects a URL that does not resolve to a YouTube video id", async () => {
    render(<YouTubeDialog />);
    const resultPromise = openYouTubeDialog();
    await screen.findByText("Embed YouTube Video");

    const input = screen.getByPlaceholderText("https://www.youtube.com/watch?v=...");
    fireEvent.change(input, { target: { value: "not a url" } });
    fireEvent.click(screen.getByRole("button", { name: "Embed" }));

    expect(await screen.findByText("Please enter a valid YouTube URL")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await resultPromise;
  });

  test("resolves with the entered URL once it contains a valid YouTube video id", async () => {
    render(<YouTubeDialog />);
    const resultPromise = openYouTubeDialog();
    await screen.findByText("Embed YouTube Video");

    const input = screen.getByPlaceholderText("https://www.youtube.com/watch?v=...");
    const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    fireEvent.change(input, { target: { value: url } });
    fireEvent.click(screen.getByRole("button", { name: "Embed" }));

    expect(await resultPromise).toBe(url);
  });

  test("clears the error message once the input changes again", async () => {
    render(<YouTubeDialog />);
    const resultPromise = openYouTubeDialog();
    await screen.findByText("Embed YouTube Video");

    const input = screen.getByPlaceholderText("https://www.youtube.com/watch?v=...");
    fireEvent.change(input, { target: { value: "bad" } });
    fireEvent.click(screen.getByRole("button", { name: "Embed" }));
    expect(await screen.findByText("Please enter a valid YouTube URL")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "still typing" } });
    expect(screen.queryByText("Please enter a valid YouTube URL")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await resultPromise;
  });
});

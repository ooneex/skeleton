/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageUploader } from "../../../src/components/upload/ImageUploader";

afterEach(cleanup);

const createFile = (name: string, type: string, sizeBytes: number) => {
  const file = new File([new Uint8Array(sizeBytes)], name, { type });
  return file;
};

describe("ImageUploader", () => {
  test("renders an add-image button and existing images", () => {
    render(<ImageUploader images={["https://example.com/a.png"]} onAdd={() => {}} onRemove={() => {}} />);
    expect(screen.getByRole("button", { name: "Add image" })).toBeInTheDocument();
    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
  });

  test("calls onAdd with a valid selected image file", async () => {
    const onAdd = mock(() => {});
    render(<ImageUploader images={[]} onAdd={onAdd} onRemove={() => {}} />);

    const input = screen.getByLabelText("Image upload") as HTMLInputElement;
    const file = createFile("photo.png", "image/png", 100);
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(onAdd).toHaveBeenCalledTimes(1));
    expect(onAdd).toHaveBeenCalledWith(file);
  });

  test("rejects non-image files with an error message", async () => {
    const onAdd = mock(() => {});
    render(<ImageUploader images={[]} onAdd={onAdd} onRemove={() => {}} />);

    const input = screen.getByLabelText("Image upload") as HTMLInputElement;
    const file = createFile("doc.txt", "text/plain", 100);
    fireEvent.change(input, { target: { files: [file] } });

    expect(await screen.findByText("Only image files are accepted")).toBeInTheDocument();
    expect(onAdd).not.toHaveBeenCalled();
  });

  test("rejects oversized files with an error message", async () => {
    const onAdd = mock(() => {});
    render(<ImageUploader images={[]} onAdd={onAdd} onRemove={() => {}} maxFileSize="1KB" />);

    const input = screen.getByLabelText("Image upload") as HTMLInputElement;
    const file = createFile("big.png", "image/png", 2048);
    fireEvent.change(input, { target: { files: [file] } });

    expect(await screen.findByText(/File exceeds/)).toBeInTheDocument();
    expect(onAdd).not.toHaveBeenCalled();
  });

  test("calls onRemove with the image index when its remove button is clicked", () => {
    const onRemove = mock(() => {});
    render(
      <ImageUploader
        images={["https://example.com/a.png", "https://example.com/b.png"]}
        onAdd={() => {}}
        onRemove={onRemove}
      />,
    );

    const removeButtons = screen.getAllByRole("button").filter((btn) => btn.querySelector("svg"));
    fireEvent.click(removeButtons[1] as HTMLElement);
    expect(onRemove).toHaveBeenCalledWith(1);
  });

  test("supports drag-and-drop file handling", async () => {
    const onAdd = mock(() => {});
    render(<ImageUploader images={[]} onAdd={onAdd} onRemove={() => {}} />);

    const dropZone = screen.getByRole("button", { name: "Add image" });
    const file = createFile("dropped.png", "image/png", 100);

    fireEvent.dragOver(dropZone, { dataTransfer: { files: [file] } });
    fireEvent.drop(dropZone, { dataTransfer: { files: [file] } });

    await waitFor(() => expect(onAdd).toHaveBeenCalledTimes(1));
  });
});

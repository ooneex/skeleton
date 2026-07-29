/// <reference lib="dom" />

import { afterEach, describe, expect, mock, test } from "bun:test";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FileUpload } from "../../../src/components/upload/FileUpload";

afterEach(cleanup);

const createFile = (name: string, type: string, sizeBytes: number) =>
  new File([new Uint8Array(sizeBytes)], name, { type });

describe("FileUpload", () => {
  test("renders the idle upload prompt by default", () => {
    render(<FileUpload uploadDelay={0} />);
    expect(screen.getByText("Click to upload or drag & drop")).toBeInTheDocument();
    expect(screen.getByLabelText("File input")).toBeInTheDocument();
  });

  test("uploads a valid file and calls onUploadSuccess (no delay)", async () => {
    const onUploadSuccess = mock(() => {});
    render(<FileUpload uploadDelay={0} onUploadSuccess={onUploadSuccess} />);

    const input = screen.getByLabelText("File input") as HTMLInputElement;
    const file = createFile("report.pdf", "application/pdf", 1024);
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(onUploadSuccess).toHaveBeenCalledTimes(1));
    expect(onUploadSuccess).toHaveBeenCalledWith(file);
    expect(await screen.findByText("report.pdf")).toBeInTheDocument();
  });

  test("rejects files exceeding maxFileSize", async () => {
    const onUploadError = mock((_error: { message: string; code: string }) => {});
    render(<FileUpload uploadDelay={0} maxFileSize="1KB" onUploadError={onUploadError} />);

    const input = screen.getByLabelText("File input") as HTMLInputElement;
    const file = createFile("big.bin", "application/octet-stream", 2048);
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(onUploadError).toHaveBeenCalledTimes(1));
    expect(onUploadError.mock.calls[0]?.[0]).toEqual({
      message: "File size exceeds 1KB",
      code: "FILE_TOO_LARGE",
    });
    expect(await screen.findByText("File size exceeds 1KB")).toBeInTheDocument();
  });

  test("rejects files not matching acceptedFileTypes", async () => {
    const onUploadError = mock((_error: { message: string; code: string }) => {});
    render(<FileUpload uploadDelay={0} acceptedFileTypes={["pdf"]} onUploadError={onUploadError} />);

    const input = screen.getByLabelText("File input") as HTMLInputElement;
    const file = createFile("image.png", "image/png", 100);
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(onUploadError).toHaveBeenCalledTimes(1));
    expect(onUploadError.mock.calls[0]?.[0]).toEqual({
      message: "File type must be PDF",
      code: "INVALID_FILE_TYPE",
    });
  });

  test("respects a custom validateFile function", async () => {
    const onUploadError = mock(() => {});
    const onUploadSuccess = mock(() => {});
    const validateFile = () => ({ message: "Custom rejection", code: "CUSTOM" });
    render(
      <FileUpload
        uploadDelay={0}
        validateFile={validateFile}
        onUploadError={onUploadError}
        onUploadSuccess={onUploadSuccess}
      />,
    );

    const input = screen.getByLabelText("File input") as HTMLInputElement;
    const file = createFile("doc.pdf", "application/pdf", 100);
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(onUploadError).toHaveBeenCalledTimes(1));
    expect(onUploadError).toHaveBeenCalledWith({ message: "Custom rejection", code: "CUSTOM" });
    expect(onUploadSuccess).not.toHaveBeenCalled();
  });

  test("removing an uploaded file calls onFileRemove and returns to the idle state", async () => {
    const onFileRemove = mock(() => {});
    render(<FileUpload uploadDelay={0} onFileRemove={onFileRemove} />);

    const input = screen.getByLabelText("File input") as HTMLInputElement;
    const file = createFile("notes.txt", "text/plain", 50);
    fireEvent.change(input, { target: { files: [file] } });

    await screen.findByText("notes.txt");
    fireEvent.click(screen.getByRole("button", { name: "Remove file" }));

    expect(onFileRemove).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText("Click to upload or drag & drop")).toBeInTheDocument());
  });

  test("supports drag-and-drop upload", async () => {
    const onUploadSuccess = mock(() => {});
    render(<FileUpload uploadDelay={0} onUploadSuccess={onUploadSuccess} />);

    const dropZone = screen.getByText("Click to upload or drag & drop").closest("button") as HTMLElement;
    const file = createFile("dropped.pdf", "application/pdf", 100);

    fireEvent.dragOver(dropZone, { dataTransfer: { files: [file] } });
    fireEvent.drop(dropZone, { dataTransfer: { files: [file] } });

    await waitFor(() => expect(onUploadSuccess).toHaveBeenCalledTimes(1));
  });

  test("shows an uploading progress state when uploadDelay is greater than 0", async () => {
    render(<FileUpload uploadDelay={100} />);

    const input = screen.getByLabelText("File input") as HTMLInputElement;
    const file = createFile("video.mp4", "video/mp4", 100);
    fireEvent.change(input, { target: { files: [file] } });

    expect(await screen.findByText("video.mp4")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });
});

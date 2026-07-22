import { FileUpload } from "@module/design/components/upload";
import type { Meta } from "../../shared/story";

export const meta = {
  title: "Upload",
  group: "Components",
  tags: [],
  component: FileUpload,
  usage: [
    "**FileUpload** is the full-size drag-and-drop upload surface in the upload component family. It validates file type and size, simulates or reflects upload progress, previews completed files with image/PDF/generic states, and can switch from a single replacement flow to a growing multi-file list.",
    "",
    "**How to use it** — configure `acceptedFileTypes` and `maxFileSize` to match the backend contract, then wire `onUploadSuccess`, `onUploadError`, and `onFileRemove` into your form or mutation flow. Use `uploadDelay` only for demos or optimistic UX simulation; in a real app you would usually replace it with the actual async lifecycle. Toggle `multiple` when the user should build up a small set instead of replacing one file.",
    "",
    "**When to use it** — for document submission, media attachment, or evidence upload screens where the file picker itself is a primary part of the workflow and deserves a large, explicit drop zone.",
    "",
    "**When not to use it** — do not use it for tiny avatar or thumbnail pickers embedded inline in a form. When the only need is a compact image tray, the specialized `ImageUploader` is lighter and clearer.",
  ].join("\n"),
  props: [
    {
      name: "acceptedFileTypes",
      default: ["image", "pdf", "document"],
    },
    {
      name: "maxFileSize",
      control: "text",
      default: "10MB",
    },
    {
      name: "uploadDelay",
      control: "number",
      default: 1200,
    },
    {
      name: "height",
      control: "text",
      default: "h-60",
    },
    {
      name: "multiple",
      control: "boolean",
      default: true,
    },
    {
      name: "onUploadSuccess",
      callback: (file: File) => file,
    },
    {
      name: "onUploadError",
      callback: (error: { message: string; code: string }) => error,
    },
    {
      name: "onFileRemove",
      callback: () => {},
    },
  ],
} satisfies Meta<typeof FileUpload>;

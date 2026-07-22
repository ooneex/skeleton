import { ImageUploader } from "@module/design/components/upload";
import { type ComponentProps, useEffect, useState } from "react";
import type { Meta } from "../../shared/story";

type ImageUploaderDemoPropsType = Pick<
  ComponentProps<typeof ImageUploader>,
  "maxFileSize" | "multiple" | "onAdd" | "onRemove"
> & {
  initialImages?: string[];
};

const seededImages = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=256&q=80",
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=256&q=80",
];

const ImageUploaderDemo = ({
  initialImages = seededImages,
  maxFileSize = "10MB",
  multiple = true,
  onAdd,
  onRemove,
}: ImageUploaderDemoPropsType) => {
  const [images, setImages] = useState<string[]>(initialImages);

  useEffect(() => {
    setImages(initialImages);
  }, [initialImages]);

  return (
    <ImageUploader
      images={images}
      maxFileSize={maxFileSize}
      multiple={multiple}
      onAdd={(file) => {
        const next = URL.createObjectURL(file);
        setImages((current) => (multiple ? [...current, next] : [next]));
        onAdd?.(file);
      }}
      onRemove={(index) => {
        setImages((current) => current.filter((_, currentIndex) => currentIndex !== index));
        onRemove?.(index);
      }}
    />
  );
};

ImageUploaderDemo.displayName = "ImageUploader";

export const meta = {
  title: "Upload.ImageUploader",
  group: "Components",
  tags: [],
  component: ImageUploaderDemo,
  usage: [
    "**ImageUploader** is the compact image-specific uploader in the upload family. It renders an existing gallery as small zoomable thumbnails, adds a single dashed upload tile, validates image mime types and file size, and lets the user remove individual images in place.",
    "",
    "**How to use it** — keep the `images` array in parent state, convert newly added files into preview URLs or persisted media URLs, and remove by index when the user deletes one. Use `multiple` for gallery-building flows and keep it `false` when only one cover image or avatar is allowed. This story manages the image list locally so you can add and remove previews directly in the canvas.",
    "",
    "**When to use it** — for product galleries, article covers, profile media, and any compact image tray where existing images and the add affordance should live in one tight row.",
    "",
    "**When not to use it** — do not use it for PDFs, videos, or mixed document uploads, and do not use it when the upload surface needs large drag-and-drop guidance or progress UI. In those cases, use `FileUpload` instead.",
  ].join("\n"),
  props: [
    {
      name: "initialImages",
      default: seededImages,
    },
    {
      name: "maxFileSize",
      control: "text",
      default: "10MB",
    },
    {
      name: "multiple",
      control: "boolean",
      default: true,
    },
    {
      name: "onAdd",
      callback: (file: File) => file,
    },
    {
      name: "onRemove",
      callback: (index: number) => index,
    },
  ],
} satisfies Meta<typeof ImageUploaderDemo>;

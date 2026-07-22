import { Button } from "@module/design/components/button/Button";
import { ImageZoom } from "@module/design/components/image/ImageZoom";
import { ImagePlusIcon } from "@module/design/icons/outline/photography-video/sm/ImagePlusIcon";
import { TrashIcon } from "@module/design/icons/outline/ui-layout/sm/TrashIcon";
import { cn } from "@module/design/utils/cn";
import { type DragEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatBytes, type MaxFileSizeType, parseFileSize } from "./fileSize";

const IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
type ImageUploaderPropsType = {
  images: string[];
  onAdd: (file: File) => void;
  onRemove: (index: number) => void;
  maxFileSize?: MaxFileSizeType;
  multiple?: boolean;
  className?: string;
};
export const ImageUploader = ({
  images,
  onAdd,
  onRemove,
  maxFileSize = "10MB",
  multiple = false,
  className,
}: ImageUploaderPropsType) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const maxFileSizeBytes = parseFileSize(maxFileSize);
  const objectUrls = useMemo(() => {
    return images.map((src) => (src.startsWith("blob:") ? src : null));
  }, [images]);
  useEffect(() => {
    return () => {
      for (const url of objectUrls) {
        if (url) URL.revokeObjectURL(url);
      }
    };
  }, [objectUrls]);
  const validate = useCallback(
    (file: File): string | null => {
      if (file.size > maxFileSizeBytes) return `File exceeds ${formatBytes(maxFileSizeBytes)}`;
      const mime = file.type.toLowerCase();
      const name = file.name.toLowerCase();
      const valid = IMAGE_MIME_TYPES.some((m) => mime === m) || IMAGE_EXTENSIONS.some((ext) => name.endsWith(ext));
      if (!valid) return "Only image files are accepted";
      return null;
    },
    [maxFileSizeBytes],
  );
  const handleFile = useCallback(
    (file: File | null | undefined) => {
      if (!file) return;
      const err = validate(file);
      if (err) {
        setError(err);
        setTimeout(() => setError(null), 3000);
        return;
      }
      onAdd(file);
    },
    [validate, onAdd],
  );
  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  const handleFiles = useCallback(
    (fileList: FileList | null | undefined) => {
      if (!fileList) return;
      const files = multiple ? Array.from(fileList) : [fileList[0]].filter(Boolean);
      for (const file of files) handleFile(file);
    },
    [handleFile, multiple],
  );
  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles],
  );
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      if (e.target) e.target.value = "";
    },
    [handleFiles],
  );
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex flex-wrap gap-3">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <ImageZoom src={src} alt={`Image ${index + 1}`} className="size-16 object-cover rounded" />
            <Button
              onClick={() => onRemove(index)}
              className="absolute -top-1.5 -right-1.5 size-5 bg-destructive hover:bg-destructive text-white rounded-full"
              variant="destructive"
            >
              <TrashIcon className="size-2.5" />
            </Button>
          </div>
        ))}
        <div
          className={cn(
            "group relative size-16 shrink-0 cursor-pointer overflow-hidden rounded border border-dashed border-border transition-all duration-200",
            isDragging ? "border-ring-active bg-muted/40" : "hover:border-ring-active hover:bg-muted/20",
            error && "border-destructive",
          )}
          onClick={() => fileInputRef.current?.click()}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className={cn("flex size-full items-center justify-center", isDragging && "opacity-30")}>
            <ImagePlusIcon className="size-5 text-primary transition-colors duration-200 group-hover:text-primary/70" />
          </div>
          <input
            ref={fileInputRef}
            accept={IMAGE_EXTENSIONS.join(",")}
            aria-label="Image upload"
            className="sr-only"
            multiple={multiple}
            type="file"
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

ImageUploader.displayName = "ImageUploader";

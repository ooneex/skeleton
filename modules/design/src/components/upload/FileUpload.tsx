import { Button } from "@module/design/components/button/Button";
import { Muted, Small } from "@module/design/components/typography";
import { CloudUploadIcon } from "@module/design/icons/outline/arrows/sm/CloudUploadIcon";
import { FilePdfIcon } from "@module/design/icons/outline/design-development/sm/FilePdfIcon";
import { PlusIcon } from "@module/design/icons/outline/ui-layout/sm/PlusIcon";
import { TrashIcon } from "@module/design/icons/outline/ui-layout/sm/TrashIcon";
import { cn } from "@module/design/utils/cn";
import { type DragEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatBytes, type MaxFileSizeType, parseFileSize } from "./fileSize";

type FileStatusType = "idle" | "dragging" | "uploading" | "completed" | "error";

type AcceptedFileType = "image" | "pdf" | "video" | "audio" | "document" | "spreadsheet" | "archive";

const FILE_TYPE_MAP: Record<AcceptedFileType, { mimeTypes: string[]; extensions: string[]; label: string }> = {
  image: {
    mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"],
    extensions: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
    label: "Images",
  },
  pdf: {
    mimeTypes: ["application/pdf"],
    extensions: [".pdf"],
    label: "PDF",
  },
  video: {
    mimeTypes: ["video/mp4", "video/webm", "video/ogg", "video/quicktime"],
    extensions: [".mp4", ".webm", ".ogg", ".mov"],
    label: "Videos",
  },
  audio: {
    mimeTypes: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/webm"],
    extensions: [".mp3", ".wav", ".ogg", ".webm"],
    label: "Audio",
  },
  document: {
    mimeTypes: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ],
    extensions: [".doc", ".docx", ".txt"],
    label: "Documents",
  },
  spreadsheet: {
    mimeTypes: [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ],
    extensions: [".xls", ".xlsx", ".csv"],
    label: "Spreadsheets",
  },
  archive: {
    mimeTypes: ["application/zip", "application/x-rar-compressed", "application/x-7z-compressed"],
    extensions: [".zip", ".rar", ".7z"],
    label: "Archives",
  },
};

type FileErrorType = {
  message: string;
  code: string;
};

type FileUploadPropsType = {
  onUploadSuccess?: (file: File) => void;
  onUploadError?: (error: FileErrorType) => void;
  /** Accepted file types: "image", "pdf", "video", "audio", "document", "spreadsheet", "archive" */
  acceptedFileTypes?: AcceptedFileType[];
  /** Custom accept attribute for the file input (e.g., ".pdf,.doc,.docx") */
  accept?: string;
  /** Max file size. Can be a number (bytes) or string like "5MB", "500KB", "1GB" */
  maxFileSize?: MaxFileSizeType;
  currentFile?: File | null;
  onFileRemove?: () => void;
  /** Duration in milliseconds for the upload simulation. Defaults to 2000ms (2s), 0 for no simulation */
  uploadDelay?: number;
  validateFile?: (file: File) => FileErrorType | null;
  /** Height of the upload container. Defaults to "h-60" */
  height?: string;
  /** Allow multiple file uploads */
  multiple?: boolean;
  className?: string;
};

const DEFAULT_MAX_FILE_SIZE: MaxFileSizeType = "5MB";
const UPLOAD_STEP_SIZE = 5;

const UploadingAnimation = ({ progress }: { progress: number }) => (
  <div className="relative h-16 w-16">
    <svg
      aria-label={`Upload progress: ${Math.round(progress)}%`}
      className="h-full w-full"
      fill="none"
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Upload Progress Indicator</title>

      <defs>
        <mask id="progress-mask">
          <rect fill="black" height="240" width="240" />
          <circle
            cx="120"
            cy="120"
            fill="white"
            r="120"
            strokeDasharray={`${(progress / 100) * 754}, 754`}
            transform="rotate(-90 120 120)"
          />
        </mask>
      </defs>

      <style>
        {`
                    @keyframes rotate-cw {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes rotate-ccw {
                        from { transform: rotate(360deg); }
                        to { transform: rotate(0deg); }
                    }
                    .g-spin circle {
                        transform-origin: 120px 120px;
                    }
                    .g-spin circle:nth-child(1) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(2) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(3) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(4) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(5) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(6) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(7) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(8) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(9) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(10) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(11) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(12) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(13) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(14) { animation: rotate-ccw 8s linear infinite; }

                    .g-spin circle:nth-child(2n) { animation-delay: 0.2s; }
                    .g-spin circle:nth-child(3n) { animation-delay: 0.3s; }
                    .g-spin circle:nth-child(5n) { animation-delay: 0.5s; }
                    .g-spin circle:nth-child(7n) { animation-delay: 0.7s; }
                `}
      </style>

      <g className="g-spin" mask="url(#progress-mask)" strokeDasharray="18% 40%" strokeWidth="10">
        <circle cx="120" cy="120" opacity="0.95" r="150" stroke="#FF2E7E" />
        <circle cx="120" cy="120" opacity="0.95" r="140" stroke="#FFD600" />
        <circle cx="120" cy="120" opacity="0.95" r="130" stroke="#00E5FF" />
        <circle cx="120" cy="120" opacity="0.95" r="120" stroke="#FF3D71" />
        <circle cx="120" cy="120" opacity="0.95" r="110" stroke="#4ADE80" />
        <circle cx="120" cy="120" opacity="0.95" r="100" stroke="#2196F3" />
        <circle cx="120" cy="120" opacity="0.95" r="90" stroke="#FFA726" />
        <circle cx="120" cy="120" opacity="0.95" r="80" stroke="#FF1493" />
        <circle cx="120" cy="120" opacity="0.95" r="70" stroke="#FFEB3B" />
        <circle cx="120" cy="120" opacity="0.95" r="60" stroke="#00BCD4" />
        <circle cx="120" cy="120" opacity="0.95" r="50" stroke="#FF4081" />
        <circle cx="120" cy="120" opacity="0.95" r="40" stroke="#76FF03" />
        <circle cx="120" cy="120" opacity="0.95" r="30" stroke="#448AFF" />
        <circle cx="120" cy="120" opacity="0.95" r="20" stroke="#FF3D00" />
      </g>
    </svg>
  </div>
);

const FileUpload = ({
  onUploadSuccess = () => {},
  onUploadError = () => {},
  acceptedFileTypes = [],
  accept,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  currentFile: initialFile = null,
  onFileRemove = () => {},
  uploadDelay = 2000,
  validateFile = () => null,
  height = "h-60",
  multiple = false,
  className,
}: FileUploadPropsType) => {
  const [files, setFiles] = useState<File[]>(initialFile ? [initialFile] : []);
  const [status, setStatus] = useState<FileStatusType>("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<FileErrorType | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);

  const previewUrls = useMemo(() => {
    return files.map((file) => (file.type.startsWith("image/") ? URL.createObjectURL(file) : null));
  }, [files]);

  useEffect(() => {
    return () => {
      for (const url of previewUrls) {
        if (url) URL.revokeObjectURL(url);
      }
    };
  }, [previewUrls]);

  useEffect(
    () => () => {
      if (uploadIntervalRef.current) {
        clearInterval(uploadIntervalRef.current);
      }
    },
    [],
  );

  const maxFileSizeBytes = parseFileSize(maxFileSize);

  const validateFileSize = useCallback(
    (file: File): FileErrorType | null => {
      if (file.size > maxFileSizeBytes) {
        return {
          message: `File size exceeds ${formatBytes(maxFileSizeBytes)}`,
          code: "FILE_TOO_LARGE",
        };
      }
      return null;
    },
    [maxFileSizeBytes],
  );

  const validateFileType = useCallback(
    (file: File): FileErrorType | null => {
      if (!acceptedFileTypes?.length) return null;

      const fileMimeType = file.type.toLowerCase();
      const fileName = file.name.toLowerCase();

      const isValid = acceptedFileTypes.some((type) => {
        const config = FILE_TYPE_MAP[type];
        return (
          config.mimeTypes.some((mime) => fileMimeType === mime) ||
          config.extensions.some((ext) => fileName.endsWith(ext))
        );
      });

      if (!isValid) {
        const labels = acceptedFileTypes.map((type) => FILE_TYPE_MAP[type].label).join(", ");
        return {
          message: `File type must be ${labels}`,
          code: "INVALID_FILE_TYPE",
        };
      }
      return null;
    },
    [acceptedFileTypes],
  );

  const handleError = useCallback(
    (error: FileErrorType) => {
      setError(error);
      setStatus("error");
      onUploadError?.(error);

      setTimeout(() => {
        setError(null);
        setStatus("idle");
      }, 3000);
    },
    [onUploadError],
  );

  const simulateUpload = useCallback(
    (fileToUpload: File) => {
      // Skip animation if uploadDelay is 0
      if (uploadDelay === 0) {
        setProgress(100);
        setFiles((prev) => (multiple ? [...prev, fileToUpload] : [fileToUpload]));
        setStatus("completed");
        onUploadSuccess?.(fileToUpload);
        return;
      }

      let currentProgress = 0;
      setUploadingFile(fileToUpload);

      if (uploadIntervalRef.current) {
        clearInterval(uploadIntervalRef.current);
      }

      uploadIntervalRef.current = setInterval(
        () => {
          currentProgress += UPLOAD_STEP_SIZE;
          if (currentProgress >= 100) {
            if (uploadIntervalRef.current) {
              clearInterval(uploadIntervalRef.current);
            }
            setProgress(100);
            setFiles((prev) => (multiple ? [...prev, fileToUpload] : [fileToUpload]));
            setStatus("completed");
            setUploadingFile(null);
            onUploadSuccess?.(fileToUpload);
          } else {
            setStatus((prevStatus) => {
              if (prevStatus === "uploading") {
                setProgress(currentProgress);
                return "uploading";
              }
              if (uploadIntervalRef.current) {
                clearInterval(uploadIntervalRef.current);
              }
              return prevStatus;
            });
          }
        },
        uploadDelay / (100 / UPLOAD_STEP_SIZE),
      );
    },
    [onUploadSuccess, uploadDelay, multiple],
  );

  const handleFileSelect = useCallback(
    (selectedFile: File | null) => {
      if (!selectedFile) return;

      // Reset error state
      setError(null);

      // Validate file
      const sizeError = validateFileSize(selectedFile);
      if (sizeError) {
        handleError(sizeError);
        return;
      }

      const typeError = validateFileType(selectedFile);
      if (typeError) {
        handleError(typeError);
        return;
      }

      const customError = validateFile?.(selectedFile);
      if (customError) {
        handleError(customError);
        return;
      }

      if (uploadDelay > 0) {
        setStatus("uploading");
        setProgress(0);
      }
      simulateUpload(selectedFile);
    },
    [simulateUpload, validateFileSize, validateFileType, validateFile, handleError, uploadDelay],
  );

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus((prev) => (prev !== "uploading" ? "dragging" : prev));
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus((prev) => (prev === "dragging" ? "idle" : prev));
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (status === "uploading") return;
      setStatus("idle");
      const droppedFile = e.dataTransfer.files?.[0];
      if (droppedFile) handleFileSelect(droppedFile);
    },
    [status, handleFileSelect],
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      handleFileSelect(selectedFile || null);
      if (e.target) e.target.value = "";
    },
    [handleFileSelect],
  );

  const triggerFileInput = useCallback(() => {
    if (status === "uploading") return;
    fileInputRef.current?.click();
  }, [status]);

  const removeFile = useCallback(
    (index: number) => {
      setFiles((prev) => {
        const newFiles = prev.filter((_, i) => i !== index);
        if (newFiles.length === 0) {
          setStatus("idle");
        }
        return newFiles;
      });
      onFileRemove?.();
    },
    [onFileRemove],
  );

  const resetState = useCallback(() => {
    setFiles([]);
    setStatus("idle");
    setProgress(0);
    onFileRemove?.();
  }, [onFileRemove]);

  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <div
        className={cn(
          "group relative w-full overflow-hidden rounded-xl bg-white border border-dashed border-border p-2 transition-all duration-200",
          status === "dragging" ? "border-ring-active" : "hover:border-ring-active",
          error && "border-destructive",
        )}
      >
        <div className={cn("relative", height, status === "dragging" && "opacity-20")}>
          {(status === "idle" || status === "dragging") && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer"
              onClick={triggerFileInput}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="size-11 rounded bg-muted/60 group-hover:bg-muted/90 flex items-center justify-center transition-colors duration-200">
                <CloudUploadIcon className="size-5 text-primary" />
              </div>

              <div className="text-center space-y-0.5">
                <p className="text-sm font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors duration-200">
                  Click to upload or drag & drop
                </p>
                <p className="text-2xs text-muted-foreground">
                  {acceptedFileTypes?.length
                    ? acceptedFileTypes.map((type) => FILE_TYPE_MAP[type].label).join(", ")
                    : "Any file"}
                  {maxFileSize && ` — up to ${formatBytes(maxFileSizeBytes)}`}
                </p>
              </div>

              <input
                accept={
                  acceptedFileTypes?.length
                    ? acceptedFileTypes.flatMap((type) => FILE_TYPE_MAP[type].extensions).join(",")
                    : undefined
                }
                aria-label="File input"
                className="sr-only"
                onChange={handleFileInputChange}
                ref={fileInputRef}
                type="file"
              />
            </div>
          )}

          {status === "uploading" && uploadingFile && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="mb-4">
                <UploadingAnimation progress={progress} />
              </div>

              <div className="mb-4 space-y-1.5 text-center">
                <Small className="truncate">{uploadingFile.name}</Small>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <Muted>{formatBytes(uploadingFile.size)}</Muted>
                  <span className="font-medium text-foreground">{Math.round(progress)}%</span>
                </div>
              </div>

              <Button className="w-4/5" onClick={resetState} variant="secondary">
                Cancel
              </Button>
            </div>
          )}

          {status === "completed" && files.length > 0 && (
            <div className="absolute inset-0 flex flex-col justify-between p-2 overflow-y-auto">
              <div className="flex flex-col gap-2">
                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex w-full items-center gap-4 rounded-lg bg-background p-3"
                  >
                    {previewUrls[index] ? (
                      <img
                        alt={file.name}
                        className="h-14 w-14 rounded-md object-cover"
                        src={previewUrls[index] ?? undefined}
                      />
                    ) : file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf") ? (
                      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted">
                        <FilePdfIcon className="size-8 text-muted-foreground" />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted">
                        <Small className="text-muted-foreground uppercase">
                          {file.name.split(".").pop()?.slice(0, 4)}
                        </Small>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col gap-1 overflow-hidden">
                      <Small className="truncate font-medium">{file.name}</Small>
                      <div className="flex items-center gap-2">
                        <Muted className="text-xs">{formatBytes(file.size)}</Muted>
                        <Muted className="text-xs">{file.type || "Unknown type"}</Muted>
                      </div>
                    </div>
                    <Button
                      aria-label="Remove file"
                      onClick={() => removeFile(index)}
                      size="icon-sm"
                      variant="destructive"
                    >
                      <TrashIcon className="size-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {multiple && (
                <Button className="w-full mt-4" onClick={triggerFileInput} variant="secondary">
                  <PlusIcon />
                  <span>Add more files</span>
                </Button>
              )}

              <input
                accept={
                  accept ??
                  (acceptedFileTypes?.length
                    ? acceptedFileTypes.flatMap((type) => FILE_TYPE_MAP[type].extensions).join(",")
                    : undefined)
                }
                aria-label="File input"
                className="sr-only"
                onChange={handleFileInputChange}
                ref={fileInputRef}
                type="file"
              />
            </div>
          )}
        </div>

        {error && (
          <div className="-translate-x-1/2 absolute bottom-4 left-1/2 transform rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-2">
            <Small className="text-destructive">{error.message}</Small>
          </div>
        )}
      </div>
    </div>
  );
};

FileUpload.displayName = "FileUpload";

export { FileUpload };

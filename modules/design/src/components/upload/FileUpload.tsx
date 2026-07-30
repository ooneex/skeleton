import { Button } from "@module/design/components/button/Button";
import { Muted, Small } from "@module/design/components/typography";
import { CloudUploadIcon } from "@module/design/icons/outline/arrows/sm/CloudUploadIcon";
import { FilePdfIcon } from "@module/design/icons/outline/design-development/sm/FilePdfIcon";
import { PlusIcon } from "@module/design/icons/outline/ui-layout/sm/PlusIcon";
import { TrashIcon } from "@module/design/icons/outline/ui-layout/sm/TrashIcon";
import { cn } from "@module/design/utils/cn";
import { type DragEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FileUploadProgress } from "./FileUploadProgress";
import { formatBytes, type MaxFileSizeType, parseFileSize } from "./fileSize";
import { type AcceptedFileType, FILE_TYPE_MAP } from "./fileTypes";

type FileStatusType = "idle" | "dragging" | "uploading" | "completed" | "error";

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

  const handleDragOver = useCallback((e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus((prev) => (prev !== "uploading" ? "dragging" : prev));
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus((prev) => (prev === "dragging" ? "idle" : prev));
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLButtonElement>) => {
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
            <button
              type="button"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer"
              onClick={triggerFileInput}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <span className="size-11 rounded bg-muted/60 group-hover:bg-muted/90 flex items-center justify-center transition-colors duration-200">
                <CloudUploadIcon className="size-5 text-primary" />
              </span>

              <span className="text-center space-y-0.5">
                <span className="block text-sm font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors duration-200">
                  Click to upload or drag &amp; drop
                </span>
                <span className="block text-2xs text-muted-foreground">
                  {acceptedFileTypes?.length
                    ? acceptedFileTypes.map((type) => FILE_TYPE_MAP[type].label).join(", ")
                    : "Any file"}
                  {maxFileSize && ` — up to ${formatBytes(maxFileSizeBytes)}`}
                </span>
              </span>
            </button>
          )}

          {(status === "idle" || status === "dragging") && (
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
          )}

          {status === "uploading" && uploadingFile && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="mb-4">
                <FileUploadProgress progress={progress} />
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
                        height={56}
                        src={previewUrls[index] ?? undefined}
                        width={56}
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

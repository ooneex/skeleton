import { Button } from "@module/design/components/button";
import { Label } from "@module/design/components/label";
import { XmarkIcon } from "@module/design/icons/outline/ui-layout/sm/XmarkIcon";
import { useRef, useState } from "react";
import { cn } from "../utils/cn";

type FilePickerPropsType = {
  id: string;
  label: string;
  required?: boolean;
  description?: string;
  /** The route requires this file and none has been chosen. */
  invalid?: boolean;
  /** The picked file, for a multipart field. */
  file?: File;
  onPick?: (file: File | undefined) => void;
  /** Encode the pick instead of keeping it, for a base64 JSON field. */
  encodeToBase64?: boolean;
  onEncoded?: (encoded: string) => void;
};

/** Bytes, rendered the way a file manager does. */
export const humanSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${bytes} B`;
};

/**
 * Read a file as base64, without the `data:…;base64,` prefix.
 *
 * The prefix is a browser convention for embedding, not part of the encoding —
 * an API expecting base64 wants the payload alone.
 */
export const encodeFileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error ?? new Error("The file could not be read."));
    reader.onload = () => {
      const result = String(reader.result);
      const comma = result.indexOf(",");
      resolve(comma === -1 ? result : result.slice(comma + 1));
    };
    reader.readAsDataURL(file);
  });

/**
 * Pick a file — either to travel as-is in a `multipart` body, or to be encoded
 * into a base64 JSON field.
 */
export const FilePicker = ({
  id,
  label,
  required,
  invalid = false,
  description,
  file,
  onPick,
  encodeToBase64,
  onEncoded,
}: FilePickerPropsType) => {
  const input = useRef<HTMLInputElement>(null);
  const [picked, setPicked] = useState<File>();
  const [error, setError] = useState<string>();
  const shown = file ?? picked;

  const handle = (chosen: File | undefined): void => {
    setError(undefined);
    setPicked(chosen);

    if (!encodeToBase64) {
      onPick?.(chosen);
      return;
    }
    if (!chosen) {
      return;
    }
    encodeFileToBase64(chosen)
      .then((encoded) => onEncoded?.(encoded))
      .catch((failure: Error) => setError(failure.message));
  };

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id} className="flex items-baseline gap-1.5 font-mono text-xs">
        {label}
        {required ? <span className="text-destructive">*</span> : null}
      </Label>
      <div className="flex items-center gap-2">
        <input
          ref={input}
          id={id}
          type="file"
          className="sr-only"
          onChange={(event) => handle(event.target.files?.[0])}
        />
        <Button
          variant="outline"
          size="xs"
          aria-invalid={invalid}
          className={cn(invalid && "ring-1 ring-destructive")}
          onClick={() => input.current?.click()}
        >
          Choose file
        </Button>
        {shown ? (
          <>
            <span className="truncate font-mono text-2xs text-muted-foreground" title={shown.name}>
              {shown.name} · {humanSize(shown.size)}
            </span>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label={`Remove ${shown.name}`}
              onClick={() => {
                if (input.current) {
                  input.current.value = "";
                }
                handle(undefined);
              }}
            >
              <XmarkIcon />
            </Button>
          </>
        ) : (
          <span className="text-2xs text-muted-foreground">No file chosen</span>
        )}
      </div>
      {error ? <p className="text-2xs text-destructive">{error}</p> : null}
      {description ? <p className="text-2xs text-muted-foreground">{description}</p> : null}
    </div>
  );
};

import { Input } from "@module/design/components/input/Input";
import type { RefObject } from "react";

type UrlDialogFieldPropsType = {
  ref: RefObject<HTMLInputElement | null>;
  placeholder: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

/**
 * Shared "enter a URL" field for the editor's imperative dialogs ({@link LinkDialog},
 * {@link YouTubeDialog}): a text input that submits on Enter and shows a validation
 * error below it. Not part of the module's public surface.
 */
export const UrlDialogField = ({ ref, placeholder, value, error, onChange, onSubmit }: UrlDialogFieldPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onSubmit();
          }
        }}
      />
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
};

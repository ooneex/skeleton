import { Editor } from "@module/design/components/editor/Editor";
import { cn } from "@module/design/utils/cn";

type InputDescriptionPropsType = {
  content?: string;
  placeholder?: string;
  onContentChange?: (content: string | undefined) => void;
  className?: string;
};

export const InputDescription = ({
  content = "",
  placeholder,
  onContentChange,
  className,
}: InputDescriptionPropsType) => {
  return (
    <Editor
      content={content}
      placeholder={placeholder}
      onContentChange={(value) => onContentChange?.(value || undefined)}
      className={cn(
        "min-h-20 rounded border border-border p-2 transition-[color,box-shadow] hover:border-ring-active focus-within:border-ring-active",
        className,
      )}
      showSlashMenu={false}
      showHeadings={false}
      showHistory={false}
      showMedia={false}
      showToolbar={false}
    />
  );
};

InputDescription.displayName = "InputDescription";

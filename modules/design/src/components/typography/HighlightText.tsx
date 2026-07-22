import { cn } from "@module/design/utils/cn";

type HighlightTextPropsType = {
  text: string;
  query?: string;
  className?: string;
};

export const HighlightText = ({ text, query, className }: HighlightTextPropsType) => {
  if (!query || query.trim() === "") {
    return <>{text}</>;
  }

  const trimmed = query.trim();
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === trimmed.toLowerCase() ? (
          <mark key={i} className={cn("bg-warning-200 rounded px-0", className)}>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
};

HighlightText.displayName = "HighlightText";

import { CopyIcon } from "@module/design/icons/outline/design-development/sm/CopyIcon";
import { CheckIcon } from "@module/design/icons/outline/ui-layout/sm/CheckIcon";
import { useMemo, useState } from "react";
import { useThemeScheme } from "../hooks/useTheme";
import { cn } from "../utils/cn";
import { Button } from "./button";
import { useCodeHighlighter } from "./codeHighlighter";

const codePanelClass =
  "flex-1 overflow-auto rounded-lg bg-muted p-4 font-mono text-xs [&_pre]:!bg-transparent [&_pre]:m-0";

const CodeFallback = ({ code }: { code: string }) => (
  <pre className={cn(codePanelClass, "text-foreground")}>
    <code>{code}</code>
  </pre>
);

const HighlightedCode = ({
  code,
  highlighter,
}: {
  code: string;
  highlighter: NonNullable<ReturnType<typeof useCodeHighlighter>>;
}) => {
  const scheme = useThemeScheme();
  const highlighted = useMemo(
    () => highlighter.codeToHtml(code, { lang: "tsx", theme: scheme === "dark" ? "github-dark" : "github-light" }),
    [code, highlighter, scheme],
  );

  return highlighted ? (
    <div className={codePanelClass} dangerouslySetInnerHTML={{ __html: highlighted }} />
  ) : (
    <CodeFallback code={code} />
  );
};

const CopyCodeButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon-xs"
      className="absolute top-2 right-2 shrink-0"
      onClick={copy}
      aria-label="Copy code"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
};

export const CanvasCodePreview = ({ code }: { code: string }) => {
  const highlighter = useCodeHighlighter();

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <CopyCodeButton code={code} />
      {highlighter ? <HighlightedCode code={code} highlighter={highlighter} /> : <CodeFallback code={code} />}
    </div>
  );
};

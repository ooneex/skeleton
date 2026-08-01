import { Button } from "@module/design/components/button";
import { useState } from "react";
import { cn } from "../utils/cn";
import { copyToClipboard, formatJson } from "../utils/json";

type JsonBlockPropsType = {
  /** Rendered pretty-printed; a string is shown as-is (a non-JSON body, a curl line). */
  value: unknown;
  label?: string;
  className?: string;
};

/**
 * A read-only code surface with a copy button — every place the explorer shows
 * a body, an example or a snippet. Copy feedback lives here rather than in a
 * toast: the confirmation belongs next to the thing that was copied.
 */
export const JsonBlock = ({ value, label, className }: JsonBlockPropsType) => {
  const [copied, setCopied] = useState(false);
  const text = formatJson(value);

  const copy = (): void => {
    void copyToClipboard(text).then((done) => {
      setCopied(done);
      window.setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className={cn("relative overflow-hidden rounded border border-border bg-muted/40", className)}>
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-1.5">
        <span className="text-2xs font-medium uppercase tracking-wide text-muted-foreground">{label ?? "JSON"}</span>
        <Button variant="ghost" size="xs" onClick={copy} aria-label={`Copy ${label ?? "JSON"}`}>
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="max-h-96 overflow-auto px-3 py-2 font-mono text-xs leading-relaxed text-foreground">{text}</pre>
    </div>
  );
};

import { Badge } from "@module/design/components/badge";
import type { RequestResultType } from "../route";
import { JsonBlock } from "./JsonBlock";

type ResponseViewerPropsType = {
  result?: RequestResultType;
  /** Set when the request never reached a status — a dead origin, a CORS refusal, a bad payload. */
  error?: string;
  running: boolean;
};

const statusVariant = (status: number): "success" | "warning" | "danger" => {
  if (status < 300) {
    return "success";
  }
  return status < 400 ? "warning" : "danger";
};

/** What came back, once. Empty until the first Send, so the panel never lies about a stale run. */
export const ResponseViewer = ({ result, error, running }: ResponseViewerPropsType) => {
  if (running && !result) {
    return <p className="text-sm text-muted-foreground">Waiting for the API…</p>;
  }

  if (error) {
    return (
      <section className="flex flex-col gap-2">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Response</h3>
        <p className="rounded border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      </section>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Response</h3>
        <Badge size="sm" variant={statusVariant(result.status)}>
          {result.status} {result.statusText}
        </Badge>
        <span className="text-xs text-muted-foreground">{result.duration} ms</span>
      </div>
      <JsonBlock label="Body" value={result.body ?? result.raw} />
      <JsonBlock label="Headers" value={result.headers} />
    </section>
  );
};

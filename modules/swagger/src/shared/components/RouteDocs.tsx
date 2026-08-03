import { Badge } from "@module/design/components/badge";
import type { RouteMetaType } from "../route";
import { hasBody, transportOf } from "../route";
import { Markdown } from "../utils/Markdown";
import { FieldTable } from "./FieldTable";
import { JsonBlock } from "./JsonBlock";

type RouteDocsPropsType = {
  meta: RouteMetaType;
};

/** How a transport answers, spelled out where a reader will look for it. */
const TRANSPORT_HINT: Record<string, string> = {
  stream: "Answers with a newline-delimited stream — the runner appends each chunk as it arrives.",
  sse: "Answers with Server-Sent Events — the runner appends each `data:` frame as it arrives.",
  socket: "A WebSocket route. It is documented here; open a socket client to exercise it.",
};

/** The contract half of a route: what it is, what it takes, what it answers. */
export const RouteDocs = ({ meta }: RouteDocsPropsType) => {
  const transport = transportOf(meta);
  const hint = TRANSPORT_HINT[transport];
  const takesNothing =
    (meta.params ?? []).length === 0 &&
    (meta.queries ?? []).length === 0 &&
    (meta.headers ?? []).length === 0 &&
    !(hasBody(meta.method) && meta.payload);

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="sm" variant={meta.roles.length > 0 ? "warning" : "success"}>
            {meta.roles.length > 0 ? meta.roles.join(" · ") : "Public"}
          </Badge>
          <Badge size="sm" variant="neutral">
            v{meta.version}
          </Badge>
          <Badge size="sm" variant="ghost">
            {meta.key}
          </Badge>
          {meta.deprecated ? (
            <Badge size="sm" variant="destructive">
              Deprecated
            </Badge>
          ) : null}
          {(meta.tags ?? []).map((tag) => (
            <Badge key={tag} size="sm" variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        {meta.summary ? <p className="text-sm text-foreground">{meta.summary}</p> : null}
        {meta.description ? <Markdown content={meta.description} /> : null}
        {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="border-b border-border pb-1 text-xs font-semibold uppercase tracking-wide text-foreground">
          Input
        </h2>
        {takesNothing ? (
          <p className="text-sm text-muted-foreground">This route takes no parameter and no body.</p>
        ) : null}

        <FieldTable title="Path parameters" fields={meta.params ?? []} alwaysRequired />
        <FieldTable title="Query parameters" fields={meta.queries ?? []} />
        <FieldTable title="Headers" fields={meta.headers ?? []} />

        {hasBody(meta.method) && meta.payload ? (
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Request body</h3>
            {meta.payload.description ? <Markdown content={meta.payload.description} /> : null}
            <FieldTable title="Fields" fields={meta.payload.fields ?? []} />
            {meta.payload.example === undefined ? null : (
              <JsonBlock label="Example request" value={meta.payload.example} />
            )}
          </div>
        ) : null}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="border-b border-border pb-1 text-xs font-semibold uppercase tracking-wide text-foreground">
          Output
        </h2>
        {transport === "http" ? (
          <p className="text-xs text-muted-foreground">
            Examples show the <code className="rounded bg-muted px-1 py-0.5">data</code> payload — what the SDK returns.
            On the wire it arrives wrapped in the standard envelope (
            <code className="rounded bg-muted px-1 py-0.5">success</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5">status</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5">message</code>, …), which is what the runner shows.
          </p>
        ) : null}
        {(meta.responses ?? []).length === 0 ? (
          <p className="text-sm text-muted-foreground">No response documented yet.</p>
        ) : (
          (meta.responses ?? []).map((response) => (
            <div key={response.status} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge size="sm" variant={response.status < 400 ? "success" : "danger"}>
                  {response.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{response.description ?? ""}</span>
              </div>
              {response.example === undefined ? null : (
                <JsonBlock label={`${response.status} data`} value={response.example} />
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

import { Button } from "@module/design/components/button";
import { Input } from "@module/design/components/input";
import { Label } from "@module/design/components/label";
import { Textarea } from "@module/design/components/textarea";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { FieldType, RequestErrorType, RequestInputType, RequestResultType, RouteMetaType } from "../route";
import { hasBody, isProtected, sendRequest, toCurl, transportOf } from "../route";
import { formatJson, isValidJson } from "../utils/json";
import type { AuthStateType } from "./AuthButton";
import { JsonBlock } from "./JsonBlock";
import { ResponseViewer } from "./ResponseViewer";

type TryItPropsType = {
  meta: RouteMetaType;
  baseURL: string;
  auth: AuthStateType;
};

/** Seed every documented field with its example, so Send works before anything is typed. */
const seedValues = (fields: readonly FieldType[] = []): Record<string, string> =>
  Object.fromEntries(fields.map((field) => [field.name, field.example === undefined ? "" : String(field.example)]));

type FieldInputsPropsType = {
  title: string;
  fields: readonly FieldType[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
  idPrefix: string;
};

const FieldInputs = ({ title, fields, values, onChange, idPrefix }: FieldInputsPropsType) => {
  if (fields.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</h3>
      <div className="grid gap-2 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <Label htmlFor={`${idPrefix}-${field.name}`} className="font-mono text-xs">
              {field.name}
              {field.required ? <span className="ml-1 text-destructive">*</span> : null}
            </Label>
            <Input
              id={`${idPrefix}-${field.name}`}
              value={values[field.name] ?? ""}
              placeholder={field.type}
              onChange={(event) => onChange(field.name, event.target.value)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * The executable half of a route: fill in what it takes, send it at a real
 * backend, and read what came back.
 *
 * Streaming and SSE routes append each chunk as it lands instead of waiting for
 * the body to close, which is the only way a long-lived route shows anything at
 * all before it finishes.
 */
export const TryIt = ({ meta, baseURL, auth }: TryItPropsType) => {
  const id = useId();
  const [params, setParams] = useState<Record<string, string>>(() => seedValues(meta.params));
  const [queries, setQueries] = useState<Record<string, string>>(() => seedValues(meta.queries));
  const [headers, setHeaders] = useState<Record<string, string>>(() => seedValues(meta.headers));
  const [payload, setPayload] = useState<string>(() => formatJson(meta.payload?.example));
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<RequestResultType>();
  const [error, setError] = useState<string>();
  const [chunks, setChunks] = useState<unknown[]>([]);
  const controller = useRef<AbortController>(undefined);

  // A new route means a new form: reset rather than carry the previous route's values over.
  useEffect(() => {
    setParams(seedValues(meta.params));
    setQueries(seedValues(meta.queries));
    setHeaders(seedValues(meta.headers));
    setPayload(formatJson(meta.payload?.example));
    setResult(undefined);
    setError(undefined);
    setChunks([]);
  }, [meta]);

  useEffect(() => () => controller.current?.abort(), []);

  const transport = transportOf(meta);
  const needsToken = isProtected(meta);
  const canSend = transport !== "socket" && (!needsToken || auth.status === "signed-in") && baseURL.trim() !== "";
  const payloadValid = isValidJson(payload);

  const request = useMemo(
    (): Omit<RequestInputType, "bearerToken" | "signal" | "onChunk"> => ({
      baseURL,
      meta,
      params,
      queries,
      headers,
      payload: hasBody(meta.method) ? payload : undefined,
    }),
    [baseURL, meta, params, queries, headers, payload],
  );

  const send = async (): Promise<void> => {
    controller.current?.abort();
    const next = new AbortController();
    controller.current = next;

    setRunning(true);
    setResult(undefined);
    setError(undefined);
    setChunks([]);

    try {
      const bearerToken = await auth.getToken?.();
      const response = await sendRequest({
        ...request,
        bearerToken,
        signal: next.signal,
        onChunk: (chunk) => setChunks((previous) => [...previous, chunk]),
      });
      setResult(response);
    } catch (failure) {
      setError((failure as RequestErrorType).message ?? "The request failed.");
    } finally {
      setRunning(false);
    }
  };

  const blockedReason = (): string | undefined => {
    if (transport === "socket") {
      return "A socket route is documented here, not executed.";
    }
    if (baseURL.trim() === "") {
      return "Set the API base URL in the header first.";
    }
    if (needsToken && auth.status === "unavailable") {
      return `This route requires ${meta.roles.join(" or ")} — set VITE_CLERK_PUBLISHABLE_KEY to sign in.`;
    }
    if (needsToken && auth.status !== "signed-in") {
      return `This route requires ${meta.roles.join(" or ")} — sign in to run it.`;
    }
    return undefined;
  };

  const blocked = blockedReason();

  return (
    <div className="flex flex-col gap-6">
      <FieldInputs
        title="Path parameters"
        fields={meta.params ?? []}
        values={params}
        onChange={(name, value) => setParams((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-param`}
      />
      <FieldInputs
        title="Query parameters"
        fields={meta.queries ?? []}
        values={queries}
        onChange={(name, value) => setQueries((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-query`}
      />
      <FieldInputs
        title="Headers"
        fields={meta.headers ?? []}
        values={headers}
        onChange={(name, value) => setHeaders((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-header`}
      />

      {hasBody(meta.method) ? (
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor={`${id}-payload`} className="text-xs font-medium uppercase tracking-wide">
              Request body
            </Label>
            {payloadValid ? null : <span className="text-xs text-destructive">Not valid JSON</span>}
          </div>
          <Textarea
            id={`${id}-payload`}
            value={payload}
            aria-invalid={!payloadValid}
            spellCheck={false}
            rows={10}
            className="font-mono text-xs"
            onChange={(event) => setPayload(event.target.value)}
          />
        </section>
      ) : null}

      <section className="flex flex-wrap items-center gap-3">
        <Button size="sm" disabled={!canSend || !payloadValid || running} onClick={() => void send()}>
          {running ? "Sending…" : "Send"}
        </Button>
        {running ? (
          <Button size="sm" variant="outline" onClick={() => controller.current?.abort()}>
            Stop
          </Button>
        ) : null}
        {blocked ? <span className="text-xs text-muted-foreground">{blocked}</span> : null}
      </section>

      <JsonBlock label="curl" value={toCurl({ ...request, bearerToken: needsToken ? "<token>" : undefined })} />

      {chunks.length > 0 ? <JsonBlock label={`${chunks.length} chunks`} value={chunks} /> : null}

      <ResponseViewer result={result} error={error} running={running} />
    </div>
  );
};

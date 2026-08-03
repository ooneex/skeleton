import { Button } from "@module/design/components/button";
import { Label } from "@module/design/components/label";
import { Textarea } from "@module/design/components/textarea";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { FieldType, RequestErrorType, RequestResultType, RouteMetaType } from "../route";
import { hasBody, isProtected, sendRequest, toCurl, transportOf } from "../route";
import type { EnvironmentType } from "../store/environments";
import { variablesOf } from "../store/environments";
import { interpolate, interpolateAll, missingPlaceholders } from "../utils/interpolate";
import { formatJson, isValidJson } from "../utils/json";
import { FieldInput } from "./FieldInput";
import type { HeaderRowType } from "./HeaderEditor";
import { HeaderEditor, toHeaderRecord } from "./HeaderEditor";
import { JsonBlock } from "./JsonBlock";
import { ResponseViewer } from "./ResponseViewer";

type TryItPropsType = {
  meta: RouteMetaType;
  environment: EnvironmentType;
};

/** Seed every documented field with its example, so Send works before anything is typed. */
const seedValues = (fields: readonly FieldType[] = []): Record<string, string> =>
  Object.fromEntries(fields.map((field) => [field.name, field.example === undefined ? "" : String(field.example)]));

/** The route's own documented headers become the editor's starting rows. */
const seedHeaders = (fields: readonly FieldType[] = []): HeaderRowType[] =>
  fields.map((field) => ({
    name: field.name,
    value: field.example === undefined ? "" : String(field.example),
    enabled: field.required ?? false,
  }));

type FieldGroupPropsType = {
  title: string;
  fields: readonly FieldType[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
  idPrefix: string;
};

const FieldGroup = ({ title, fields, values, onChange, idPrefix }: FieldGroupPropsType) => {
  if (fields.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((field) => (
          <FieldInput
            key={field.name}
            field={field}
            id={`${idPrefix}-${field.name}`}
            value={values[field.name] ?? ""}
            onChange={(value) => onChange(field.name, value)}
          />
        ))}
      </div>
    </section>
  );
};

/**
 * The executable half of a route: fill in what it takes, send it at the active
 * environment, and read what came back.
 *
 * Every value passes through `{{variable}}` resolution first, so one form can
 * be replayed against local, staging and production by switching environment.
 */
export const TryIt = ({ meta, environment }: TryItPropsType) => {
  const id = useId();
  const [params, setParams] = useState<Record<string, string>>(() => seedValues(meta.params));
  const [queries, setQueries] = useState<Record<string, string>>(() => seedValues(meta.queries));
  const [headers, setHeaders] = useState<HeaderRowType[]>(() => seedHeaders(meta.headers));
  const [payload, setPayload] = useState<string>(() => formatJson(meta.payload?.example));
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<RequestResultType>();
  const [error, setError] = useState<string>();
  const [chunks, setChunks] = useState<unknown[]>([]);
  const controller = useRef<AbortController>(undefined);

  // A new route means a new form: reset rather than carry the previous one over.
  useEffect(() => {
    setParams(seedValues(meta.params));
    setQueries(seedValues(meta.queries));
    setHeaders(seedHeaders(meta.headers));
    setPayload(formatJson(meta.payload?.example));
    setResult(undefined);
    setError(undefined);
    setChunks([]);
  }, [meta]);

  useEffect(() => () => controller.current?.abort(), []);

  const transport = transportOf(meta);
  const needsToken = isProtected(meta);
  const payloadValid = isValidJson(payload);
  const variables = useMemo(() => variablesOf(environment), [environment]);

  /** What actually travels: every value with its `{{variables}}` resolved. */
  const resolved = useMemo(() => {
    const headerRecord = toHeaderRecord(headers);
    return {
      baseURL: interpolate(environment.baseURL, variables),
      meta,
      params: interpolateAll(params, variables),
      queries: interpolateAll(queries, variables),
      headers: interpolateAll(headerRecord, variables),
      payload: hasBody(meta.method) ? interpolate(payload, variables) : undefined,
    };
  }, [environment.baseURL, variables, meta, params, queries, headers, payload]);

  const missing = useMemo(
    () =>
      missingPlaceholders(
        [
          environment.baseURL,
          payload,
          ...Object.values(params),
          ...Object.values(queries),
          ...headers.map((row) => row.value),
        ],
        variables,
      ),
    [environment.baseURL, payload, params, queries, headers, variables],
  );

  const blockedReason = (): string | undefined => {
    if (transport === "socket") {
      return "A socket route is documented here, not executed.";
    }
    if (resolved.baseURL.trim() === "") {
      return "The active environment has no base URL.";
    }
    if (needsToken && environment.token.trim() === "") {
      return `This route requires ${meta.roles.join(" or ")} — set a bearer token on the environment to run it.`;
    }
    if (missing.length > 0) {
      return `Undefined variable${missing.length > 1 ? "s" : ""}: ${missing.map((name) => `{{${name}}}`).join(", ")}`;
    }
    return undefined;
  };

  const blocked = blockedReason();

  const send = async (): Promise<void> => {
    controller.current?.abort();
    const next = new AbortController();
    controller.current = next;

    setRunning(true);
    setResult(undefined);
    setError(undefined);
    setChunks([]);

    try {
      const response = await sendRequest({
        ...resolved,
        bearerToken: needsToken ? environment.token : undefined,
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

  return (
    <div className="flex flex-col gap-6">
      <FieldGroup
        title="Path parameters"
        fields={meta.params ?? []}
        values={params}
        onChange={(name, value) => setParams((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-param`}
      />
      <FieldGroup
        title="Query parameters"
        fields={meta.queries ?? []}
        values={queries}
        onChange={(name, value) => setQueries((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-query`}
      />

      <HeaderEditor rows={headers} onChange={setHeaders} />

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
        <Button size="sm" disabled={Boolean(blocked) || !payloadValid || running} onClick={() => void send()}>
          {running ? "Sending…" : "Send"}
        </Button>
        {running ? (
          <Button size="sm" variant="outline" onClick={() => controller.current?.abort()}>
            Stop
          </Button>
        ) : null}
        {blocked ? <span className="text-xs text-muted-foreground">{blocked}</span> : null}
      </section>

      <JsonBlock label="curl" value={toCurl({ ...resolved, bearerToken: needsToken ? "<token>" : undefined })} />

      {chunks.length > 0 ? <JsonBlock label={`${chunks.length} chunks`} value={chunks} /> : null}

      <ResponseViewer result={result} error={error} running={running} />
    </div>
  );
};

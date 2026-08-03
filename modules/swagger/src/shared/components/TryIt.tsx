import { Button } from "@module/design/components/button";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { FieldType, RequestBodyType, RequestErrorType, RequestResultType, RouteMetaType } from "../route";
import {
  bodyKindOf,
  hasBody,
  isProtected,
  missingRequired,
  sendRequest,
  socketUrl,
  toCurl,
  transportOf,
} from "../route";
import type { EnvironmentType } from "../store/environments";
import { variablesOf } from "../store/environments";
import { interpolate, interpolateAll, missingPlaceholders } from "../utils/interpolate";
import { formatJson, isValidJson } from "../utils/json";
import { BodyEditor, isFileField } from "./BodyEditor";
import { FieldInput } from "./FieldInput";
import type { HeaderRowType } from "./HeaderEditor";
import { HeaderEditor, toHeaderRecord } from "./HeaderEditor";
import { JsonBlock } from "./JsonBlock";
import { ResponseViewer } from "./ResponseViewer";
import { SocketPanel } from "./SocketPanel";

type TryItPropsType = {
  meta: RouteMetaType;
  environment: EnvironmentType;
};

/** Seed every documented field with its example, so Send works before anything is typed. */
const seedValues = (fields: readonly FieldType[] = []): Record<string, string> =>
  Object.fromEntries(fields.map((field) => [field.name, field.example === undefined ? "" : String(field.example)]));

/** Resolve `{{variables}}` inside a body, whichever shape it has. Files pass through. */
const resolveBody = (body: RequestBodyType, variables: Record<string, string>): RequestBodyType =>
  body.kind === "json"
    ? { kind: "json", text: interpolate(body.text, variables) }
    : { kind: "multipart", fields: interpolateAll(body.fields, variables), files: body.files };

/** The body starts in whichever shape the route accepts, seeded from its example. */
const seedBody = (meta: RouteMetaType): RequestBodyType =>
  bodyKindOf(meta) === "multipart"
    ? {
        kind: "multipart",
        // A file field carries a `File`, never a seeded string — seeding one
        // would put an empty `-F avatar=` on the wire.
        fields: seedValues((meta.payload?.fields ?? []).filter((field) => !isFileField(field))),
        files: {},
      }
    : { kind: "json", text: formatJson(meta.payload?.example) };

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
  /** Names the route requires that are still empty. */
  missing: readonly string[];
};

const FieldGroup = ({ title, fields, values, onChange, idPrefix, missing }: FieldGroupPropsType) => {
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
            invalid={missing.includes(field.name)}
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
  const [body, setBody] = useState<RequestBodyType>(() => seedBody(meta));
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
    setBody(seedBody(meta));
    setResult(undefined);
    setError(undefined);
    setChunks([]);
  }, [meta]);

  useEffect(() => () => controller.current?.abort(), []);

  const transport = transportOf(meta);
  const needsToken = isProtected(meta);
  // Only the routes that declare roles carry the token. A public route is
  // exercised as an anonymous caller would exercise it, which is what makes its
  // result trustworthy — and it keeps a credential away from every endpoint
  // that has no business seeing one.
  const bearerToken = needsToken && environment.token.trim() !== "" ? environment.token : undefined;
  const payloadValid = body.kind !== "json" || isValidJson(body.text);
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
      body: hasBody(meta.method) ? resolveBody(body, variables) : undefined,
    };
  }, [environment.baseURL, variables, meta, params, queries, headers, body]);

  const missing = useMemo(
    () =>
      missingPlaceholders(
        [
          environment.baseURL,
          ...(body.kind === "json" ? [body.text] : Object.values(body.fields)),
          ...Object.values(params),
          ...Object.values(queries),
          ...headers.map((row) => row.value),
        ],
        variables,
      ),
    [environment.baseURL, body, params, queries, headers, variables],
  );

  /** Documented values the route requires that are still empty. */
  const required = useMemo(
    () =>
      missingRequired(meta, {
        params,
        queries,
        headers: toHeaderRecord(headers),
        body,
      }),
    [meta, params, queries, headers, body],
  );

  const blockedReason = (): string | undefined => {
    if (resolved.baseURL.trim() === "") {
      return "The active environment has no base URL.";
    }
    if (needsToken && environment.token.trim() === "") {
      return `This route requires ${meta.roles.join(" or ")} — set a bearer token on the environment to run it.`;
    }
    if (missing.length > 0) {
      return `Undefined variable${missing.length > 1 ? "s" : ""}: ${missing.map((name) => `{{${name}}}`).join(", ")}`;
    }
    if (required.length > 0) {
      return `Required field${required.length > 1 ? "s" : ""} left empty: ${required.join(", ")}`;
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

  if (transport === "socket") {
    return (
      <SocketPanel url={socketUrl({ ...resolved, bearerToken })} example={meta.payload?.example} blocked={blocked} />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <FieldGroup
        title="Path parameters"
        fields={meta.params ?? []}
        values={params}
        onChange={(name, value) => setParams((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-param`}
        missing={required}
      />
      <FieldGroup
        title="Query parameters"
        fields={meta.queries ?? []}
        values={queries}
        onChange={(name, value) => setQueries((previous) => ({ ...previous, [name]: value }))}
        idPrefix={`${id}-query`}
        missing={required}
      />

      <HeaderEditor rows={headers} onChange={setHeaders} />

      {hasBody(meta.method) ? <BodyEditor meta={meta} body={body} onChange={setBody} missing={required} /> : null}

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

      {/* The real token, not a placeholder: a curl line that 401s when pasted is
          worse than no curl line at all. It is the reader's own credential, and
          the same panel already reveals it behind Show. */}
      <JsonBlock label="curl" value={toCurl({ ...resolved, bearerToken })} />

      {chunks.length > 0 ? <JsonBlock label={`${chunks.length} chunks`} value={chunks} /> : null}

      <ResponseViewer result={result} error={error} running={running} />
    </div>
  );
};

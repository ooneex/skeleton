import type { RouteEntryType } from "./navigation";
import { hasBody, isProtected, transportOf } from "./request";
import type { FieldType, RouteMetaType } from "./types";

type SchemaType = Record<string, unknown>;

/** The `type:` names a route meta uses, mapped onto their JSON Schema type. */
const SCALARS: Record<string, string> = {
  string: "string",
  uuid: "string",
  email: "string",
  url: "string",
  date: "string",
  datetime: "string",
  number: "number",
  integer: "integer",
  int: "integer",
  float: "number",
  boolean: "boolean",
  bool: "boolean",
};

/** The `format:` a scalar name implies, where JSON Schema has one for it. */
const FORMATS: Record<string, string> = {
  uuid: "uuid",
  email: "email",
  url: "uri",
  date: "date",
  datetime: "date-time",
};

/**
 * Turn a declared `type` into a schema. A union of quoted literals becomes an
 * `enum`, a trailing `[]` becomes an array of the element type, and anything
 * else falls back to a free-form value rather than guessing wrong.
 */
export const schemaOfType = (type: string): SchemaType => {
  const declared = type.trim();

  if (declared.endsWith("[]")) {
    return { type: "array", items: schemaOfType(declared.slice(0, -2)) };
  }

  if (declared.includes("|")) {
    const literals = declared
      .split("|")
      .map((part) => part.trim())
      .filter((part) => /^["'].*["']$/.test(part))
      .map((part) => part.slice(1, -1));
    if (literals.length > 0) {
      return { type: "string", enum: literals };
    }
  }

  const scalar = SCALARS[declared.toLowerCase()];
  if (!scalar) {
    return {};
  }

  const format = FORMATS[declared.toLowerCase()];
  return format ? { type: scalar, format } : { type: scalar };
};

/** The schema an example value describes, used where no field list is documented. */
export const schemaOfExample = (value: unknown): SchemaType => {
  if (value === null || value === undefined) {
    return {};
  }
  if (Array.isArray(value)) {
    return { type: "array", items: value.length > 0 ? schemaOfExample(value[0]) : {} };
  }
  switch (typeof value) {
    case "string":
      return { type: "string" };
    case "number":
      return { type: Number.isInteger(value) ? "integer" : "number" };
    case "boolean":
      return { type: "boolean" };
    case "object": {
      const properties: SchemaType = {};
      for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
        properties[key] = schemaOfExample(entry);
      }
      return { type: "object", properties };
    }
    default:
      return {};
  }
};

const parameter = (field: FieldType, location: "path" | "query" | "header"): SchemaType => ({
  name: field.name,
  in: location,
  required: location === "path" ? true : (field.required ?? false),
  ...(field.description ? { description: field.description } : {}),
  schema: schemaOfType(field.type),
  ...(field.example === undefined ? {} : { example: field.example }),
});

const parametersOf = (meta: RouteMetaType): SchemaType[] => [
  ...(meta.params ?? []).map((field) => parameter(field, "path")),
  ...(meta.queries ?? []).map((field) => parameter(field, "query")),
  ...(meta.headers ?? []).map((field) => parameter(field, "header")),
];

const requestBodyOf = (meta: RouteMetaType): SchemaType | undefined => {
  if (!hasBody(meta.method) || !meta.payload) {
    return undefined;
  }

  const { fields, example, description } = meta.payload;
  const schema =
    fields && fields.length > 0
      ? {
          type: "object",
          properties: Object.fromEntries(fields.map((field) => [field.name, schemaOfType(field.type)])),
          required: fields.filter((field) => field.required).map((field) => field.name),
        }
      : schemaOfExample(example);

  return {
    required: true,
    ...(description ? { description } : {}),
    content: {
      "application/json": {
        schema,
        ...(example === undefined ? {} : { example }),
      },
    },
  };
};

/** The media type a transport answers with. */
const mediaType = (meta: RouteMetaType): string => {
  const transport = transportOf(meta);
  if (transport === "sse") {
    return "text/event-stream";
  }
  return transport === "stream" ? "application/x-ndjson" : "application/json";
};

const responsesOf = (meta: RouteMetaType): SchemaType => {
  const documented = meta.responses ?? [];
  if (documented.length === 0) {
    return { "200": { description: "Successful response" } };
  }

  const responses: SchemaType = {};
  for (const response of documented) {
    responses[String(response.status)] = {
      description: response.description ?? "",
      ...(response.example === undefined
        ? {}
        : {
            content: {
              [mediaType(meta)]: {
                schema: schemaOfExample(response.example),
                example: response.example,
              },
            },
          }),
    };
  }
  return responses;
};

export const operationOf = (meta: RouteMetaType): SchemaType => ({
  operationId: meta.key,
  summary: meta.summary ?? meta.title,
  ...(meta.description ? { description: meta.description } : {}),
  tags: [meta.group ?? "API"],
  ...(meta.deprecated ? { deprecated: true } : {}),
  ...(parametersOf(meta).length > 0 ? { parameters: parametersOf(meta) } : {}),
  ...(requestBodyOf(meta) ? { requestBody: requestBodyOf(meta) } : {}),
  responses: responsesOf(meta),
  ...(isProtected(meta) ? { security: [{ bearerAuth: [] }] } : { security: [] }),
});

type DocumentInputType = {
  title: string;
  version: string;
  description?: string;
  /** The server the operations are served from, e.g. `http://localhost:3000`. */
  baseURL?: string;
};

/**
 * Build the OpenAPI 3.1 document the documented routes add up to.
 *
 * A socket route has no HTTP operation to publish, so it is documented in the
 * explorer and left out of the specification — the same rule the `openapi`
 * project check applies from the controller side.
 */
export const toOpenApiDocument = (routes: RouteEntryType[], input: DocumentInputType): SchemaType => {
  const paths: SchemaType = {};

  for (const { meta } of routes) {
    if (meta.method === "socket") {
      continue;
    }
    // OpenAPI spells a path parameter `{id}`, a route decorator spells it `:id`.
    const path = meta.path.replace(/:(\w+)/g, "{$1}");
    const item = (paths[path] as SchemaType | undefined) ?? {};
    item[meta.method] = operationOf(meta);
    paths[path] = item;
  }

  return {
    openapi: "3.1.0",
    info: {
      title: input.title,
      version: input.version,
      ...(input.description ? { description: input.description } : {}),
    },
    ...(input.baseURL ? { servers: [{ url: input.baseURL }] } : {}),
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
    paths,
  };
};

import { Button } from "@module/design/components/button";
import { ThemeSwitcher } from "@module/design/components/theme";
import type { RouteEntryType, RouteMetaType } from "../route";
import { toOpenApiDocument } from "../route";
import type { EnvironmentType } from "../store/environments";
import { downloadJson } from "../utils/json";
import { MethodBadge } from "./MethodBadge";

type TopbarPropsType = {
  meta?: RouteMetaType;
  routes: RouteEntryType[];
  environments: EnvironmentType[];
  environment: EnvironmentType;
  onSelectEnvironment: (id: string) => void;
  onCreateEnvironment: () => void;
  editorOpen: boolean;
  onToggleEditor: () => void;
};

/**
 * The selected route's identity, plus the environment every request is sent
 * against — the one setting that changes what "Send" actually does.
 */
export const Topbar = ({
  meta,
  routes,
  environments,
  environment,
  onSelectEnvironment,
  onCreateEnvironment,
  editorOpen,
  onToggleEditor,
}: TopbarPropsType) => {
  const exportSpec = (): void => {
    downloadJson(
      "openapi.json",
      toOpenApiDocument(routes, { title: "API", version: "1.0.0", baseURL: environment.baseURL }),
    );
  };

  return (
    <header className="flex shrink-0 flex-col gap-2 border-b border-border px-6 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {meta ? (
          <>
            <MethodBadge method={meta.method} className="px-2 py-1 text-xs" />
            <span className="truncate font-mono text-sm text-foreground">{meta.path}</span>
            <span className="truncate text-sm text-muted-foreground">{meta.title}</span>
          </>
        ) : (
          <span className="text-sm text-muted-foreground">Select a route</span>
        )}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="xs" onClick={exportSpec}>
            OpenAPI
          </Button>
          <ThemeSwitcher size="xs" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="swagger-environment" className="text-xs text-muted-foreground">
          Environment
        </label>
        <select
          id="swagger-environment"
          value={environment.id}
          onChange={(event) => {
            if (event.target.value === "__new") {
              onCreateEnvironment();
              return;
            }
            onSelectEnvironment(event.target.value);
          }}
          className="ring-ring hover:ring-ring-active focus-visible:ring-ring-active h-6 rounded-[min(var(--radius-md),8px)] bg-transparent px-2 text-xs ring outline-none"
        >
          {environments.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.name}
            </option>
          ))}
          <option value="__new">+ New environment…</option>
        </select>

        <Button variant="ghost" size="xs" aria-expanded={editorOpen} onClick={onToggleEditor}>
          {editorOpen ? "Close" : "Edit"}
        </Button>

        <span className="truncate font-mono text-2xs text-muted-foreground">
          {environment.baseURL}
          {meta?.path ?? ""}
        </span>

        <span className="ml-auto text-2xs text-muted-foreground">
          {environment.token.trim() === ""
            ? "No token — protected routes cannot run"
            : "Requests are signed with the environment token"}
        </span>
      </div>
    </header>
  );
};

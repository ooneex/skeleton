import { Button } from "@module/design/components/button";
import { Input } from "@module/design/components/input";
import { ThemeSwitcher } from "@module/design/components/theme";
import { useId } from "react";
import type { RouteEntryType, RouteMetaType } from "../route";
import { toOpenApiDocument } from "../route";
import { downloadJson } from "../utils/json";
import type { AuthStateType } from "./AuthButton";
import { AuthButton } from "./AuthButton";
import { MethodBadge } from "./MethodBadge";

type TopbarPropsType = {
  meta?: RouteMetaType;
  routes: RouteEntryType[];
  baseURL: string;
  onBaseURLChange: (value: string) => void;
  auth: AuthStateType;
  onAuthChange: (state: AuthStateType) => void;
};

/**
 * The selected route's identity plus the two settings every request depends on:
 * where the API lives, and who is calling it.
 */
export const Topbar = ({ meta, routes, baseURL, onBaseURLChange, auth, onAuthChange }: TopbarPropsType) => {
  const id = useId();

  const exportSpec = (): void => {
    downloadJson("openapi.json", toOpenApiDocument(routes, { title: "API", version: "1.0.0", baseURL }));
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
          <AuthButton onChange={onAuthChange} />
          <ThemeSwitcher size="xs" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor={id} className="text-xs text-muted-foreground">
          API base URL
        </label>
        <Input
          id={id}
          size="xs"
          value={baseURL}
          placeholder="http://localhost:8030"
          className="max-w-72 font-mono"
          onChange={(event) => onBaseURLChange(event.target.value)}
        />
        {meta ? (
          // The template, not a filled-in URL: the try-it panel owns the values,
          // and showing `/users/` for an unfilled `:id` reads as a broken route.
          <span className="truncate font-mono text-2xs text-muted-foreground">
            {`${baseURL.replace(/\/$/, "")}${meta.path}`}
          </span>
        ) : null}
        {auth.status === "signed-in" ? (
          <span className="ml-auto text-2xs text-muted-foreground">Requests are signed with your session token</span>
        ) : null}
      </div>
    </header>
  );
};

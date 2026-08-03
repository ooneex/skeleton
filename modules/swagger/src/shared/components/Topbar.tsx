import { Button } from "@module/design/components/button";
import { Popover } from "@module/design/components/popover";
import { Select } from "@module/design/components/select";
import { ThemeSwitcher } from "@module/design/components/theme";
import { DownloadIcon } from "@module/design/icons/outline/arrows/sm/DownloadIcon";
import { GearIcon } from "@module/design/icons/outline/ui-layout/sm/GearIcon";
import type { RouteEntryType, RouteMetaType } from "../route";
import { toOpenApiDocument } from "../route";
import type { EnvironmentType } from "../store/environments";
import { downloadJson } from "../utils/json";
import { EnvironmentEditor } from "./EnvironmentEditor";
import { MethodBadge } from "./MethodBadge";

/** Sentinel value of the "create one" entry, kept out of the environment ids. */
const NEW_ENVIRONMENT = "__new";

type TopbarPropsType = {
  meta?: RouteMetaType;
  routes: RouteEntryType[];
  environments: EnvironmentType[];
  environment: EnvironmentType;
  onSelectEnvironment: (id: string) => void;
  onCreateEnvironment: () => void;
  onChangeEnvironment: (environment: EnvironmentType) => void;
  onRemoveEnvironment: () => void;
  editorOpen: boolean;
  onEditorOpenChange: (open: boolean) => void;
};

/**
 * One line: the selected route on the left, and on the right everything that
 * governs how it runs — which environment, the spec export, the theme.
 *
 * The environment's own settings live in a popover rather than an inline panel:
 * they are edited once and then left alone, so they should not push the
 * documentation down the page for the rest of the session.
 */
export const Topbar = ({
  meta,
  routes,
  environments,
  environment,
  onSelectEnvironment,
  onCreateEnvironment,
  onChangeEnvironment,
  onRemoveEnvironment,
  editorOpen,
  onEditorOpenChange,
}: TopbarPropsType) => {
  const exportSpec = (): void => {
    downloadJson(
      "openapi.json",
      toOpenApiDocument(routes, { title: "API", version: "1.0.0", baseURL: environment.baseURL }),
    );
  };

  return (
    <header className="flex shrink-0 flex-wrap items-center gap-3 border-b border-border px-6 py-3">
      {meta ? (
        <>
          <MethodBadge method={meta.method} className="px-2 py-1 text-xs" />
          <span className="truncate font-mono text-sm text-foreground">{meta.path}</span>
        </>
      ) : (
        <span className="text-sm text-muted-foreground">Select a route</span>
      )}

      <div className="ml-auto flex items-center gap-2">
        <Select
          value={environment.id}
          onValueChange={(next) => {
            const id = String(next ?? "");
            if (id === NEW_ENVIRONMENT) {
              onCreateEnvironment();
              return;
            }
            onSelectEnvironment(id);
          }}
        >
          <Select.Trigger id="swagger-environment" size="xs" aria-label="Environment" className="min-w-36">
            <Select.Value size="xs" />
          </Select.Trigger>
          <Select.Content>
            {environments.map((entry) => (
              <Select.Item key={entry.id} value={entry.id} size="xs">
                {entry.name}
              </Select.Item>
            ))}
            <Select.Separator />
            <Select.Item value={NEW_ENVIRONMENT} size="xs">
              New environment…
            </Select.Item>
          </Select.Content>
        </Select>

        <Popover open={editorOpen} onOpenChange={onEditorOpenChange}>
          <Popover.Trigger
            render={
              <Button variant="outline" size="xs" aria-label="Edit environment">
                <GearIcon />
              </Button>
            }
          />
          <Popover.Content align="end" className="w-[min(32rem,90vw)] p-0">
            <EnvironmentEditor
              environment={environment}
              removable={environments.length > 1}
              onChange={onChangeEnvironment}
              onRemove={onRemoveEnvironment}
              onClose={() => onEditorOpenChange(false)}
            />
          </Popover.Content>
        </Popover>

        <Button variant="outline" size="xs" onClick={exportSpec}>
          <DownloadIcon />
          OpenAPI
        </Button>
        <ThemeSwitcher size="xs" />
      </div>
    </header>
  );
};

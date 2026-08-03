import { Empty } from "@module/design/components/empty";
import { ScrollArea } from "@module/design/components/scroll-area";
import { Tabs } from "@module/design/components/tabs";
import { InlineCode } from "@module/design/components/typography";
import { PaperPlaneIcon } from "@module/design/icons/outline/communication/sm/PaperPlaneIcon";
import { BookOpenIcon } from "@module/design/icons/outline/school-education/sm/BookOpenIcon";
import { getRouteApi } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { filterRoutes, findRoute, loadRoutes } from "../route";
import type { EnvironmentType } from "../store/environments";
import {
  defaultEnvironment,
  loadActiveId,
  loadEnvironments,
  newEnvironment,
  saveActiveId,
  saveEnvironments,
} from "../store/environments";
import { CommandPalette } from "./CommandPalette";
import { RouteDocs } from "./RouteDocs";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { TryIt } from "./TryIt";

const route = getRouteApi("/");

/** The active tab carries its own underline — see the `Tabs.List` comment below. */
const TAB_CLASS =
  "-mb-px flex-none border-b-2 border-transparent px-3 pb-2 data-active:border-primary data-active:text-foreground";

/**
 * The explorer.
 *
 * Selection and the search live in the URL, so a route is shareable and the
 * back button works. Environments live in `localStorage`: they hold a token and
 * point at one developer's machine, so they must not travel in a shared link.
 */
export const SwaggerApp = () => {
  const { q, route: routeId, tab } = route.useSearch();
  const navigate = route.useNavigate();

  const query = q ?? "";
  const routes = useMemo(() => loadRoutes(), []);
  const visibleRoutes = useMemo(() => filterRoutes(routes, query), [routes, query]);
  const selected = useMemo(() => findRoute(routes, routeId) ?? visibleRoutes[0], [routes, routeId, visibleRoutes]);

  const [paletteOpen, setPaletteOpen] = useState(false);
  const [environments, setEnvironments] = useState<EnvironmentType[]>(() => loadEnvironments());
  const [activeId, setActiveId] = useState<string>(() => loadActiveId(loadEnvironments()));
  const [editorOpen, setEditorOpen] = useState(false);

  const environment = environments.find((entry) => entry.id === activeId) ?? environments[0] ?? defaultEnvironment();

  useEffect(() => {
    saveEnvironments(environments);
  }, [environments]);

  useEffect(() => {
    saveActiveId(activeId);
  }, [activeId]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectRoute = (id: string): void => {
    navigate({ search: (previous) => ({ ...previous, route: id }) });
  };

  const setQuery = (value: string): void => {
    navigate({ search: (previous) => ({ ...previous, q: value === "" ? undefined : value }) });
  };

  const setTab = (value: string): void => {
    navigate({ search: (previous) => ({ ...previous, tab: value === "docs" ? undefined : "try" }) });
  };

  const createEnvironment = (): void => {
    const created = newEnvironment(environments);
    setEnvironments((previous) => [...previous, created]);
    setActiveId(created.id);
    setEditorOpen(true);
  };

  const updateEnvironment = (next: EnvironmentType): void => {
    setEnvironments((previous) => previous.map((entry) => (entry.id === next.id ? next : entry)));
  };

  const removeEnvironment = (): void => {
    const remaining = environments.filter((entry) => entry.id !== environment.id);
    setEnvironments(remaining);
    setActiveId(remaining[0]?.id ?? "");
    setEditorOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar
        routes={visibleRoutes}
        selectedId={selected?.id ?? ""}
        query={query}
        onQueryChange={setQuery}
        onSelect={selectRoute}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          meta={selected?.meta}
          routes={routes}
          environments={environments}
          environment={environment}
          onSelectEnvironment={setActiveId}
          onCreateEnvironment={createEnvironment}
          onChangeEnvironment={updateEnvironment}
          onRemoveEnvironment={removeEnvironment}
          editorOpen={editorOpen}
          onEditorOpenChange={setEditorOpen}
        />
        {selected ? (
          <Tabs value={tab ?? "docs"} onValueChange={(value) => setTab(String(value))} className="min-h-0 flex-1">
            {/* No `Tabs.Indicator`: the design system's is unusable in both variants —
                `default` paints with the undefined `tabs-accent` token, and `line` has
                its `h-0.5` overridden by the inline height the primitive sets. The
                active state is carried by the trigger itself instead. */}
            <Tabs.List variant="line" size="md" className="mx-6 mt-3 w-full justify-start border-b border-border">
              <Tabs.Trigger value="docs" className={TAB_CLASS}>
                <BookOpenIcon />
                Documentation
              </Tabs.Trigger>
              <Tabs.Trigger value="try" className={TAB_CLASS}>
                <PaperPlaneIcon />
                Try it
              </Tabs.Trigger>
            </Tabs.List>
            <ScrollArea className="min-h-0 flex-1">
              <Tabs.Content value="docs" className="px-6 py-4">
                <RouteDocs meta={selected.meta} />
              </Tabs.Content>
              <Tabs.Content value="try" className="px-6 py-4">
                <TryIt meta={selected.meta} environment={environment} />
              </Tabs.Content>
            </ScrollArea>
          </Tabs>
        ) : (
          <div className="flex flex-1 items-center justify-center p-6">
            <Empty>
              <Empty.Header>
                <Empty.Title>No route documented yet</Empty.Title>
                <Empty.Description>
                  Run <InlineCode>talos swagger:create</InlineCode> to generate one meta per registered controller.
                </Empty.Description>
              </Empty.Header>
            </Empty>
          </div>
        )}
      </div>

      <CommandPalette
        routes={routes}
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onSelect={(id) => {
          setPaletteOpen(false);
          selectRoute(id);
        }}
      />
    </div>
  );
};

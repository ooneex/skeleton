import { ScrollArea } from "@module/design/components/scroll-area";
import { Tabs } from "@module/design/components/tabs";
import { PaperPlaneIcon } from "@module/design/icons/outline/communication/sm/PaperPlaneIcon";
import { BookOpenIcon } from "@module/design/icons/outline/school-education/sm/BookOpenIcon";
import { getRouteApi } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePersistentState } from "../hooks/usePersistentState";
import { filterRoutes, findRoute, loadRoutes } from "../route";
import { isClerkConfigured } from "../utils/clerk";
import type { AuthStateType } from "./AuthButton";
import { CommandPalette } from "./CommandPalette";
import { RouteDocs } from "./RouteDocs";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { TryIt } from "./TryIt";

const route = getRouteApi("/");

/** `localStorage` key for the API origin, so it survives a reload. */
const BASE_URL_KEY = "swagger:base-url";

/** The active tab carries its own underline — see the `Tabs.List` comment below. */
const TAB_CLASS =
  "-mb-px flex-none border-b-2 border-transparent px-3 pb-2 data-active:border-primary data-active:text-foreground";

/**
 * The explorer.
 *
 * Selection and the search live in the URL, so a route is shareable and the
 * back button works; the API origin lives in `localStorage`, because it is a
 * property of the reader's machine rather than of the link they send someone.
 */
export const SwaggerApp = () => {
  const { q, route: routeId, tab } = route.useSearch();
  const navigate = route.useNavigate();

  const query = q ?? "";
  const routes = useMemo(() => loadRoutes(), []);
  const visibleRoutes = useMemo(() => filterRoutes(routes, query), [routes, query]);
  const selected = useMemo(() => findRoute(routes, routeId) ?? visibleRoutes[0], [routes, routeId, visibleRoutes]);

  const [paletteOpen, setPaletteOpen] = useState(false);
  // Matches the `app.port` an api module ships with in `.env.example.yml`, so
  // the explorer talks to a freshly started backend without being reconfigured.
  const [baseURL, setBaseURL] = usePersistentState(BASE_URL_KEY, "http://localhost:8030");
  const [auth, setAuth] = useState<AuthStateType>(() => ({
    status: isClerkConfigured ? "signed-out" : "unavailable",
  }));

  const onAuthChange = useCallback((state: AuthStateType) => setAuth(state), []);

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
          baseURL={baseURL}
          onBaseURLChange={setBaseURL}
          auth={auth}
          onAuthChange={onAuthChange}
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
                <TryIt meta={selected.meta} baseURL={baseURL} auth={auth} />
              </Tabs.Content>
            </ScrollArea>
          </Tabs>
        ) : (
          <div className="flex flex-1 items-center justify-center text-muted-foreground">No routes documented yet.</div>
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

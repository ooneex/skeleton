import { createFileRoute } from "@tanstack/react-router";
import { StorybookApp } from "../shared/components/StorybookApp";

/** Tab sections of the Controls panel, persisted in the URL query search. */
export const STORY_TABS = ["controls", "description", "usage", "logs"] as const;
export type StoryTabType = (typeof STORY_TABS)[number];

/** Navigation state persisted in the URL query search — shareable and back/forward aware. */
export type StorySearchType = {
  /** Free-text query matched against title, tags, variants and props. */
  q?: string;
  /** Id of the selected variant. */
  story?: string;
  /** Prop overrides applied to the selected variant's controls. */
  props?: Record<string, unknown>;
  /** Active Controls panel tab. */
  tab?: StoryTabType;
};

const validateSearch = (search: Record<string, unknown>): StorySearchType => {
  const q = typeof search.q === "string" && search.q !== "" ? search.q : undefined;
  const story = typeof search.story === "string" && search.story !== "" ? search.story : undefined;
  const props =
    typeof search.props === "object" && search.props !== null ? (search.props as Record<string, unknown>) : undefined;
  const tab = STORY_TABS.includes(search.tab as StoryTabType) ? (search.tab as StoryTabType) : undefined;

  return { q, story, props, tab };
};

export const Route = createFileRoute("/")({
  validateSearch,
  component: StorybookApp,
});

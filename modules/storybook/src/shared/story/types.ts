import type { ComponentType } from "react";

export type ControlKindType = "text" | "boolean" | "number" | "color" | "select" | "radio";

type PropsOfType<Component> = Component extends ComponentType<infer Props> ? Props : never;

export type PropOptionType = {
  /** The value applied to the prop when this option is selected. */
  name: string;
  /** Markdown format — guidance on when to reach for this option. */
  usage?: string;
};

export type PropType<Props> = {
  /** The component prop this knob drives. */
  name: keyof Props & string;
  /** Editable control rendered in the panel. Omit for callback-only props. */
  control?: ControlKindType;
  /** Choices for `select` / `radio` controls. */
  options?: readonly PropOptionType[];
  /** Initial value applied to the rendered component. */
  default?: unknown;
  /** Event handler wired to the component (actions are logged). */
  // biome-ignore lint/suspicious/noExplicitAny: accepts arbitrary handler signatures (onClick, onChange, …)
  callback?: (...args: readonly any[]) => unknown;
};

export type MetaType<Component, StoryComponent = Component> = {
  title: string;
  /** Sidebar grouping this component belongs to. */
  group?: string;
  tags?: readonly string[];
  component: Component;
  /** Optional story-specific preview component when the documented component needs a heavier demo wrapper. */
  storyComponent?: StoryComponent;
  /** Markdown format — guidance on when to reach for this component. */
  usage?: string;
  props?: readonly PropType<PropsOfType<StoryComponent>>[];
};

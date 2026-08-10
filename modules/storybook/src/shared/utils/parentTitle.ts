/**
 * The parent of a dot-namespaced story title — `Foo.Bar` is filed under `Foo`.
 * Returns undefined when the title carries no namespace.
 */
export const parentTitle = (title: string): string | undefined => {
  const dot = title.indexOf(".");
  return dot > 0 ? title.slice(0, dot) : undefined;
};

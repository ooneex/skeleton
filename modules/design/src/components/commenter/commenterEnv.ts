/**
 * Environment flag deciding whether the commenter mounts at all.
 *
 * Set `VITE_COMMENTER_ENABLED=true` (Vite exposes it on `import.meta.env`) to
 * ship the widget on staging or preview builds and leave it out of production.
 * The `enabled` prop on `<Commenter />` overrides this.
 */
export const isCommenterEnabled = (): boolean => {
  const env = import.meta.env as Record<string, string | boolean | undefined> | undefined;
  const flag = env?.VITE_COMMENTER_ENABLED;

  return flag === true || flag === "true" || flag === "1";
};

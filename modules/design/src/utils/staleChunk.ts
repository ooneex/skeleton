const STALE_CHUNK_PATTERNS = [
  "Failed to fetch dynamically imported module",
  "Importing a module script failed",
  "error loading dynamically imported module",
  "Unable to preload CSS",
];

const RELOAD_GUARD_KEY = "app:stale-chunk-reloaded-at";
const RELOAD_GUARD_WINDOW_MS = 10_000;

export const isStaleChunkError = (error: unknown): boolean => {
  const message = error instanceof Error ? error.message : typeof error === "string" ? error : "";
  if (!message) return false;
  return STALE_CHUNK_PATTERNS.some((pattern) => message.includes(pattern));
};

export const reloadIfStaleChunkError = (error: unknown): boolean => {
  if (!isStaleChunkError(error)) return false;
  const now = Date.now();
  const lastReload = Number(sessionStorage.getItem(RELOAD_GUARD_KEY) ?? 0);
  if (Number.isFinite(lastReload) && now - lastReload < RELOAD_GUARD_WINDOW_MS) return false;
  sessionStorage.setItem(RELOAD_GUARD_KEY, String(now));
  window.location.reload();
  return true;
};

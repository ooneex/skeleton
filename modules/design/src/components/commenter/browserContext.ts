/** Everything the widget knows about the browser a comment was written in. */
export type CommenterBrowserContextType = {
  url: string;
  path: string;
  referrer: string | null;
  title: string;
  userAgent: string;
  /** Client Hints brands, when the browser exposes `navigator.userAgentData`. */
  brands?: string[];
  platform: string;
  mobile?: boolean;
  vendor: string | null;
  language: string;
  languages: string[];
  timezone: string | null;
  timezoneOffset: number;
  viewport: { width: number; height: number };
  screen: { width: number; height: number };
  scroll: { x: number; y: number };
  devicePixelRatio: number;
  colorDepth: number;
  orientation: string | null;
  colorScheme: "dark" | "light";
  reducedMotion: boolean;
  touch: boolean;
  cookiesEnabled: boolean;
  online: boolean;
  hardwareConcurrency: number | null;
  /** Approximate RAM in GiB, Chromium only. */
  deviceMemory: number | null;
  /** Network Information API, Chromium only. */
  connection?: { effectiveType?: string; downlink?: number; rtt?: number; saveData?: boolean };
  capturedAt: string;
};

type NavigatorExtrasType = Navigator & {
  userAgentData?: { brands?: { brand: string; version: string }[]; mobile?: boolean; platform?: string };
  deviceMemory?: number;
  connection?: { effectiveType?: string; downlink?: number; rtt?: number; saveData?: boolean };
};

const matches = (query: string): boolean => {
  return typeof window.matchMedia === "function" && window.matchMedia(query).matches;
};

const timezone = (): string | null => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
  } catch {
    return null;
  }
};

/**
 * Snapshot the environment a comment was written in — page, browser, screen,
 * locale and network — so a report can be reproduced without asking its
 * author what they were running. Everything the browser withholds comes back
 * as `null` or is left out rather than guessed.
 */
export const collectBrowserContext = (): CommenterBrowserContextType => {
  const agent = navigator as NavigatorExtrasType;
  const brands = agent.userAgentData?.brands?.map(({ brand, version }) => `${brand} ${version}`);

  return {
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer || null,
    title: document.title,
    userAgent: navigator.userAgent,
    ...(brands?.length ? { brands } : {}),
    platform: agent.userAgentData?.platform ?? navigator.platform,
    ...(agent.userAgentData ? { mobile: Boolean(agent.userAgentData.mobile) } : {}),
    vendor: navigator.vendor || null,
    language: navigator.language,
    languages: [...(navigator.languages ?? [])],
    timezone: timezone(),
    timezoneOffset: new Date().getTimezoneOffset(),
    viewport: { width: window.innerWidth, height: window.innerHeight },
    screen: { width: window.screen?.width ?? 0, height: window.screen?.height ?? 0 },
    scroll: { x: Math.round(window.scrollX), y: Math.round(window.scrollY) },
    devicePixelRatio: window.devicePixelRatio,
    colorDepth: window.screen?.colorDepth ?? 0,
    orientation: window.screen?.orientation?.type ?? null,
    colorScheme: matches("(prefers-color-scheme: dark)") ? "dark" : "light",
    reducedMotion: matches("(prefers-reduced-motion: reduce)"),
    touch: navigator.maxTouchPoints > 0,
    cookiesEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency ?? null,
    deviceMemory: agent.deviceMemory ?? null,
    ...(agent.connection
      ? {
          connection: {
            effectiveType: agent.connection.effectiveType,
            downlink: agent.connection.downlink,
            rtt: agent.connection.rtt,
            saveData: agent.connection.saveData,
          },
        }
      : {}),
    capturedAt: new Date().toISOString(),
  };
};

export type IconSizeType = "sm" | "md" | "lg";
export type IconStyleType = "fill" | "outline";

type RawIconEntryType = {
  n: string;
  c: string;
  t: readonly string[];
  o?: Partial<Record<IconSizeType, string>>;
  f?: Partial<Record<IconSizeType, string>>;
};

type RawIconManifestType = {
  icons: RawIconEntryType[];
};

export type IconEntryType = {
  name: string;
  category: string;
  categoryLabel: string;
  label: string;
  tags: readonly string[];
  sizes: readonly IconSizeType[];
  svgs: Partial<Record<IconStyleType, Partial<Record<IconSizeType, string>>>>;
};

const ICON_MANIFEST_URL = "/icons.manifest.json.br";

/** Category folder names that need custom casing beyond simple title-casing. */
const CATEGORY_LABEL_OVERRIDES: Readonly<Record<string, string>> = {
  "ar-vr": "AR & VR",
  "ui-layout": "UI & Layout",
  "touch gestures": "Touch Gestures",
  "real estate": "Real Estate",
};

const categoryLabel = (category: string): string => {
  const preset = CATEGORY_LABEL_OVERRIDES[category];
  if (preset) {
    return preset;
  }
  return category
    .split(/[-\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const nameWords = (name: string): string[] => {
  const trimmed = name.endsWith("Icon") ? name.slice(0, -4) : name;
  const spaced = trimmed
    .replace(/(?<!^)(?<![A-Z0-9])(?=[A-Z])/g, " ")
    .replace(/(?<=[A-Za-z])(?=[0-9])/g, " ")
    .replace(/(?<=[0-9])(?=[A-Za-z])/g, " ");
  return spaced.split(" ").filter(Boolean);
};

const iconLabel = (name: string): string => nameWords(name).join(" ");

const toIconEntry = (icon: RawIconEntryType): IconEntryType => {
  const sizes = Array.from(new Set([...Object.keys(icon.o ?? {}), ...Object.keys(icon.f ?? {})])) as IconSizeType[];

  return {
    name: icon.n,
    category: icon.c,
    categoryLabel: categoryLabel(icon.c),
    label: iconLabel(icon.n),
    tags: icon.t,
    sizes,
    svgs: {
      outline: icon.o,
      fill: icon.f,
    },
  };
};

let manifestPromise: Promise<readonly IconEntryType[]> | undefined;

/**
 * A static file server that recognizes the `.br` extension (e.g. Vite's dev server) sends this
 * response with a `Content-Encoding: br` header, which `fetch` transparently decodes before the
 * bytes ever reach JS — leaving plain JSON, starting with `{`. A host that serves it as an opaque
 * file instead hands over the raw Brotli stream, which never starts with `{`. Browsers have no
 * built-in Brotli decoder for that case (`DecompressionStream` only implements
 * `gzip`/`deflate`/`deflate-raw` — https://developer.mozilla.org/docs/Web/API/DecompressionStream),
 * so a small WASM decoder is lazy-loaded only when actually needed, instead of shipping an
 * uncompressed (~7x larger) manifest.
 */
const isPlainJson = (bytes: Uint8Array): boolean => bytes[0] === 0x7b; /* "{" */

const readManifestBytes = async (response: Response): Promise<Uint8Array> => {
  if (!response.ok) {
    throw new Error(`Failed to load icon manifest (${response.status})`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  if (isPlainJson(bytes)) {
    return bytes;
  }

  const { default: brotliPromise } = await import("brotli-dec-wasm");
  const brotli = await brotliPromise;
  return brotli.decompress(bytes);
};

/** Loads the compressed icon manifest the first time the icon gallery is opened. */
export const loadIconManifest = async (): Promise<readonly IconEntryType[]> => {
  manifestPromise ??= fetch(ICON_MANIFEST_URL)
    .then(readManifestBytes)
    .then((bytes) => {
      const payload = new TextDecoder().decode(bytes);
      const manifest = JSON.parse(payload) as RawIconManifestType;
      return manifest.icons.map(toIconEntry);
    });

  return manifestPromise;
};

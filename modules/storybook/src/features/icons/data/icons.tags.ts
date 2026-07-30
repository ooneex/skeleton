import { ICON_TAGS_1 } from "./icons.tags.1";
import { ICON_TAGS_2 } from "./icons.tags.2";
import { ICON_TAGS_3 } from "./icons.tags.3";
import { ICON_TAGS_4 } from "./icons.tags.4";
import { ICON_TAGS_5 } from "./icons.tags.5";
import { ICON_TAGS_6 } from "./icons.tags.6";
import { ICON_TAGS_7 } from "./icons.tags.7";

/** Curated search tags for every icon, keyed by `"<category>/<name>"` — deliberately distinct from the
 * icon's own name words so search surfaces related concepts, synonyms, and use cases instead of an echo.
 */
export const ICON_TAGS: Readonly<Record<string, readonly string[]>> = {
  ...ICON_TAGS_1,
  ...ICON_TAGS_2,
  ...ICON_TAGS_3,
  ...ICON_TAGS_4,
  ...ICON_TAGS_5,
  ...ICON_TAGS_6,
  ...ICON_TAGS_7,
};

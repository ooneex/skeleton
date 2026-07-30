import { ICON_PAIRS_1 } from "./icons.pairs.1";
import { ICON_PAIRS_2 } from "./icons.pairs.2";
import { ICON_PAIRS_3 } from "./icons.pairs.3";
import { ICON_PAIRS_4 } from "./icons.pairs.4";
import { ICON_PAIRS_5 } from "./icons.pairs.5";
import { ICON_PAIRS_6 } from "./icons.pairs.6";
import { ICON_PAIRS_7 } from "./icons.pairs.7";

/** [name, category] pairs — the source of truth every `IconEntryType` is derived from. */
export const ICON_PAIRS: readonly (readonly [string, string])[] = [
  ...ICON_PAIRS_1,
  ...ICON_PAIRS_2,
  ...ICON_PAIRS_3,
  ...ICON_PAIRS_4,
  ...ICON_PAIRS_5,
  ...ICON_PAIRS_6,
  ...ICON_PAIRS_7,
];

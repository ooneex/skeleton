import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { ComboboxChip } from "./ComboboxChip";
import { ComboboxChips } from "./ComboboxChips";
import { ComboboxChipsInput } from "./ComboboxChipsInput";
import { ComboboxClear } from "./ComboboxClear";
import { ComboboxCollection } from "./ComboboxCollection";
import { ComboboxContent } from "./ComboboxContent";
import { ComboboxEmpty } from "./ComboboxEmpty";
import { ComboboxGroup } from "./ComboboxGroup";
import { ComboboxInput } from "./ComboboxInput";
import { ComboboxItem } from "./ComboboxItem";
import { ComboboxLabel } from "./ComboboxLabel";
import { ComboboxList } from "./ComboboxList";
import { ComboboxSeparator } from "./ComboboxSeparator";
import { ComboboxTrigger } from "./ComboboxTrigger";
import { ComboboxValue } from "./ComboboxValue";

/**
 * Combobox compound component.
 *
 * The root is `ComboboxPrimitive.Root` with all subcomponents attached via
 * `Object.assign` to preserve base-ui's generic typing. Use as:
 * `Combobox`, `Combobox.Value`, `Combobox.Trigger`, `Combobox.Clear`,
 * `Combobox.Input`, `Combobox.Content`, `Combobox.List`, `Combobox.Item`,
 * `Combobox.Group`, `Combobox.Label`, `Combobox.Collection`, `Combobox.Empty`,
 * `Combobox.Separator`, `Combobox.Chips`, `Combobox.Chip`, `Combobox.ChipsInput`.
 */
export const Combobox = Object.assign(ComboboxPrimitive.Root, {
  displayName: "Combobox",
  Value: ComboboxValue,
  Trigger: ComboboxTrigger,
  Clear: ComboboxClear,
  Input: ComboboxInput,
  Content: ComboboxContent,
  List: ComboboxList,
  Item: ComboboxItem,
  Group: ComboboxGroup,
  Label: ComboboxLabel,
  Collection: ComboboxCollection,
  Empty: ComboboxEmpty,
  Separator: ComboboxSeparator,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipsInput: ComboboxChipsInput,
});

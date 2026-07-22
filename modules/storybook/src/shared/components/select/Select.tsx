import { Select as SelectPrimitive } from "@base-ui/react/select";
import { SelectContent } from "./SelectContent";
import { SelectGroup } from "./SelectGroup";
import { SelectItem } from "./SelectItem";
import { SelectLabel } from "./SelectLabel";
import { SelectSeparator } from "./SelectSeparator";
import { SelectTrigger } from "./SelectTrigger";
import { SelectValue } from "./SelectValue";

/** Compound select component. Root is the base-ui primitive with parts attached. */
export const Select = Object.assign(SelectPrimitive.Root, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
});

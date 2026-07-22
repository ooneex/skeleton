import { useMemo } from "react";
import { DropdownMenuRadioGroupContext, type DropdownMenuRadioGroupContextValueType } from "./dropdownMenuContext";

type DropdownMenuRadioGroupPropsType = React.ComponentProps<"div"> & {
  value?: string;
  onValueChange?: (value: string) => void;
};

export const DropdownMenuRadioGroup = ({ value, onValueChange, ...props }: DropdownMenuRadioGroupPropsType) => {
  const contextValue = useMemo<DropdownMenuRadioGroupContextValueType>(
    () => ({ value, onValueChange }),
    [value, onValueChange],
  );
  return (
    <DropdownMenuRadioGroupContext.Provider value={contextValue}>
      {/* biome-ignore lint/a11y/useSemanticElements: fieldset is not valid inside a menu; role="group" is the ARIA menu grouping pattern */}
      <div role="group" data-slot="dropdown-menu-radio-group" {...props} />
    </DropdownMenuRadioGroupContext.Provider>
  );
};

DropdownMenuRadioGroup.displayName = "DropdownMenu.RadioGroup";

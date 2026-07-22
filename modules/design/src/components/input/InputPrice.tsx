import { Combobox } from "@module/design/components/combobox/Combobox";
import { ComboboxContent } from "@module/design/components/combobox/ComboboxContent";
import { ComboboxItem } from "@module/design/components/combobox/ComboboxItem";
import { ComboboxList } from "@module/design/components/combobox/ComboboxList";
import { ComboboxTrigger } from "@module/design/components/combobox/ComboboxTrigger";
import { InputGroup } from "@module/design/components/input/InputGroup";
import { InputGroupAddon } from "@module/design/components/input/InputGroupAddon";
import { InputGroupInput } from "@module/design/components/input/InputGroupInput";
import { CURRENCIES, type CurrencyCodeType } from "@ooneex/currencies";
import { type ComponentProps, useMemo, useState } from "react";

type InputPricePropsType = Omit<ComponentProps<typeof InputGroupInput>, "type"> & {
  currency?: CurrencyCodeType;
  onCurrencyChange?: (currency: CurrencyCodeType) => void;
  groupClassName?: string;
};

export const InputPrice = ({
  placeholder = "0.00",
  currency: currencyProp = "USD",
  onCurrencyChange,
  className,
  groupClassName,
  ...props
}: InputPricePropsType) => {
  const [currency, setCurrency] = useState<CurrencyCodeType>(currencyProp);
  const [searchValue, setSearchValue] = useState("");

  const filteredCurrencies = useMemo(() => {
    if (!searchValue) return CURRENCIES;
    const search = searchValue.toLowerCase();
    return CURRENCIES.filter((c) => c.code.toLowerCase().includes(search) || c.name.toLowerCase().includes(search));
  }, [searchValue]);

  const selectedCurrency = CURRENCIES.find((c) => c.code === currency);

  const handleCurrencyChange = (value: CurrencyCodeType) => {
    setCurrency(value);
    onCurrencyChange?.(value);
  };

  return (
    <InputGroup className={groupClassName}>
      <InputGroupInput type="number" placeholder={placeholder} className={className} {...props} />
      <InputGroupAddon align="inline-start">
        <Combobox
          value={currency}
          onValueChange={(value) => handleCurrencyChange(value as CurrencyCodeType)}
          inputValue={searchValue}
          onInputValueChange={setSearchValue}
        >
          <ComboboxTrigger className="flex h-7 items-center gap-1 rounded px-2 text-xs hover:bg-accent">
            <span>{selectedCurrency?.icon}</span>
            <span>{selectedCurrency?.code}</span>
          </ComboboxTrigger>
          <ComboboxContent align="start" className="w-56 shadow-none ring ring-ring-active p-1">
            <ComboboxList>
              {filteredCurrencies.map((c) => (
                <ComboboxItem key={c.code} value={c.code}>
                  <span>{c.icon}</span>
                  <span>{c.code}</span>
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </InputGroupAddon>
    </InputGroup>
  );
};

InputPrice.displayName = "InputPrice";

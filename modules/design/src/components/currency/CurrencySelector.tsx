import { useDrawerContentRef } from "@module/design/components/drawer";
import { Select } from "@module/design/components/select";
import { useControlledState } from "@module/design/hooks/useControlledState";
import { CURRENCIES, type CurrencyCodeType } from "@talosjs/currencies";

export type CurrencySelectorPropsType = {
  value?: CurrencyCodeType;
  defaultValue?: CurrencyCodeType;
  onChange?: (currency: CurrencyCodeType) => void;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  /** Applied to the select trigger. */
  className?: string;
};

/**
 * A currency picker backed by the ISO currency catalog from
 * `@talosjs/currencies`.
 *
 * The selection is controlled via `value` or uncontrolled via `defaultValue`.
 */
export const CurrencySelector = ({
  className,
  value,
  defaultValue = "USD",
  onChange,
  size = "sm",
  disabled,
}: CurrencySelectorPropsType) => {
  const [currencyCode, setCurrencyCode] = useControlledState({ value, defaultValue, onChange });
  const drawerContentRef = useDrawerContentRef();
  const selectedCurrency = CURRENCIES.find((currency) => currency.code === currencyCode) ?? CURRENCIES[0];

  return (
    <Select value={currencyCode} onValueChange={(next) => next && setCurrencyCode(next)} disabled={disabled}>
      <Select.Trigger data-slot="currency-selector" aria-label="Currency" size={size} className={className}>
        <Select.Value>
          <span aria-hidden="true">{selectedCurrency.icon}</span>
          <span>{selectedCurrency.code}</span>
        </Select.Value>
      </Select.Trigger>
      <Select.Content container={drawerContentRef} className="min-w-64">
        {CURRENCIES.map((currency) => (
          <Select.Item key={currency.code} value={currency.code} size={size}>
            <span aria-hidden="true">{currency.icon}</span>
            <span>{currency.code}</span>
            <span className="text-muted-foreground">{currency.name}</span>
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  );
};

CurrencySelector.displayName = "CurrencySelector";

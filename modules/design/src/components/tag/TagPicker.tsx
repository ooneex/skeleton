import { Combobox } from "@module/design/components/combobox/Combobox";
import { ComboboxChip } from "@module/design/components/combobox/ComboboxChip";
import { ComboboxChips } from "@module/design/components/combobox/ComboboxChips";
import { ComboboxChipsInput } from "@module/design/components/combobox/ComboboxChipsInput";
import { ComboboxContent } from "@module/design/components/combobox/ComboboxContent";
import { ComboboxEmpty } from "@module/design/components/combobox/ComboboxEmpty";
import { ComboboxItem } from "@module/design/components/combobox/ComboboxItem";
import { ComboboxList } from "@module/design/components/combobox/ComboboxList";
import { ComboboxValue } from "@module/design/components/combobox/ComboboxValue";
import { useComboboxAnchor } from "@module/design/components/combobox/useComboboxAnchor";
import { TagIcon } from "@module/design/icons/outline/shopping/sm/TagIcon";
import { PlusIcon as AddIcon } from "@module/design/icons/outline/ui-layout/sm/PlusIcon";
import { cn } from "@module/design/utils/cn";
import { useDebouncedValue } from "@tanstack/react-pacer";
import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode, useMemo, useState } from "react";

const tagPickerChipsVariants = cva("flex-wrap items-center gap-1.5", {
  variants: {
    size: {
      xs: "min-h-6 px-2 py-0.5 text-xs",
      sm: "min-h-8 px-2.5 py-1 text-sm",
      md: "min-h-9 px-2.5 py-1 text-base",
      lg: "min-h-10 px-3 py-1.5 text-base",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const tagPickerIconVariants = cva("text-foreground pointer-events-none shrink-0", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-3.5",
      md: "size-4",
      lg: "size-4.5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const tagPickerCreateOptionVariants = cva(
  "flex w-[calc(100%-0.5rem)] items-center gap-2 px-2 py-1.5 cursor-pointer hover:bg-accent rounded mx-1 mt-1",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export type TagPickerPropsType = VariantProps<typeof tagPickerChipsVariants> & {
  value?: string[];
  onChange: (tags: string[]) => void;
  suggestedTags?: string[];
  allowCreate?: boolean;
  placeholder?: string;
  isPending?: boolean;
  className?: string;
  contentClassName?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/** Controlled chip field for selecting, filtering, and optionally creating tags. */
export const TagPicker = ({
  value = [],
  onChange,
  suggestedTags = [],
  allowCreate = true,
  placeholder = "Add tags...",
  isPending = false,
  className,
  contentClassName,
  size = "sm",
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: TagPickerPropsType): ReactNode => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue] = useDebouncedValue(inputValue, { wait: 300 });
  const [customTags, setCustomTags] = useState<string[]>([]);
  const anchorRef = useComboboxAnchor();

  const allSuggestedTags = useMemo(() => [...suggestedTags, ...customTags], [suggestedTags, customTags]);

  const filteredTags = useMemo(() => {
    const baseTags = debouncedInputValue.trim()
      ? allSuggestedTags.filter((tag) => tag.toLowerCase().includes(debouncedInputValue.toLowerCase()))
      : allSuggestedTags;
    const missingTags = value.filter((tag) => !baseTags.includes(tag));
    return [...baseTags, ...missingTags];
  }, [debouncedInputValue, allSuggestedTags, value]);

  const showCreateOption = useMemo(() => {
    if (!allowCreate) return false;
    if (!debouncedInputValue.trim()) return false;
    const query = debouncedInputValue.toLowerCase();
    const existsInSuggested = allSuggestedTags.some((tag) => tag.toLowerCase() === query);
    const existsInSelected = value.some((tag) => tag.toLowerCase() === query);
    return !existsInSuggested && !existsInSelected;
  }, [allowCreate, debouncedInputValue, allSuggestedTags, value]);

  const handleCreateTag = (): void => {
    const newTag = inputValue.trim();
    if (newTag) {
      setCustomTags((prev) => [...prev, newTag]);
      onChange([...value, newTag]);
      setInputValue("");
    }
  };

  return (
    <Combobox
      multiple
      autoHighlight
      items={filteredTags}
      value={value}
      onValueChange={(tags) => onChange(tags)}
      inputValue={inputValue}
      onInputValueChange={setInputValue}
    >
      <ComboboxChips ref={anchorRef} className={cn(tagPickerChipsVariants({ size }), className)}>
        <ComboboxValue>
          {(values) => (
            <>
              {values.map((tag: string) => (
                <ComboboxChip key={tag}>{tag}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder={placeholder} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} />
            </>
          )}
        </ComboboxValue>
        <TagIcon className={cn(tagPickerIconVariants({ size }))} />
      </ComboboxChips>
      {(isPending || filteredTags.length > 0 || showCreateOption || inputValue.trim() !== "") && (
        <ComboboxContent anchor={anchorRef} className={contentClassName}>
          {isPending && <ComboboxEmpty>Loading tags…</ComboboxEmpty>}
          {!isPending && showCreateOption && (
            <button type="button" className={cn(tagPickerCreateOptionVariants({ size }))} onClick={handleCreateTag}>
              <AddIcon className={cn(tagPickerIconVariants({ size }))} />
              <span>
                Create "<span className="font-medium">{inputValue.trim()}</span>"
              </span>
            </button>
          )}
          {!isPending && !showCreateOption && <ComboboxEmpty>No matching tags</ComboboxEmpty>}
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item} size={size}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      )}
    </Combobox>
  );
};

export { tagPickerChipsVariants, tagPickerCreateOptionVariants, tagPickerIconVariants };

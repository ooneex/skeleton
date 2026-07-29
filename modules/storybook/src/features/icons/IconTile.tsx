import { useEffect, useState } from "react";
import { Badge } from "../../shared/components/badge";
import type { IconEntryType, IconSizeType, IconStyleType } from "./icons.data";
import { type IconComponentType, loadIcon } from "./icons.loader";

/** Each icon variant is authored at its own pixel size — the svg itself declares 16px, so the tile sets it. */
const SIZE_CLASSES: Record<IconSizeType, string> = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
};

type IconTilePropsType = {
  icon: IconEntryType;
  style: IconStyleType;
  size: IconSizeType;
  activeTag: string | undefined;
  onTagSelect: (tag: string) => void;
};

/** One icon in the gallery grid: the glyph itself (lazily loaded), its label, and up to three clickable search tags. */
export const IconTile = ({ icon, style, size, activeTag, onTagSelect }: IconTilePropsType) => {
  const [Icon, setIcon] = useState<IconComponentType>();

  useEffect(() => {
    let cancelled = false;
    setIcon(undefined);
    loadIcon(style, icon.category, size, icon.name).then((loaded) => {
      if (!cancelled) {
        setIcon(() => loaded);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [style, size, icon.category, icon.name]);

  return (
    <div
      className="flex flex-col items-center gap-2 rounded-lg border-[0.3px] border-border bg-card p-3 text-center text-card-foreground transition-colors hover:bg-muted/50"
      title={`${icon.label} (${icon.name})`}
    >
      <div className="flex h-10 w-10 items-center justify-center text-foreground">
        {Icon ? (
          <Icon className={SIZE_CLASSES[size]} />
        ) : (
          <div className={`${SIZE_CLASSES[size]} animate-pulse rounded bg-muted`} />
        )}
      </div>
      <span className="w-full truncate text-xs font-medium text-foreground">{icon.label}</span>
      <div className="flex flex-wrap justify-center gap-1">
        {icon.tags.slice(0, 3).map((tag) => (
          <button key={tag} type="button" onClick={() => onTagSelect(tag)}>
            <Badge variant={tag === activeTag ? "default" : "ghost"} size="xs" className="cursor-pointer">
              {tag}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  );
};

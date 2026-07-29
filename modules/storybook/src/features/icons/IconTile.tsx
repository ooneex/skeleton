import { useEffect, useState } from "react";
import { Badge } from "../../shared/components/badge";
import type { IconEntryType, IconSizeType, IconStyleType } from "./icons.data";
import { type IconComponentType, loadIcon } from "./icons.loader";

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
      className="flex flex-col items-center gap-2 rounded-lg border border-border p-3 text-center transition-colors hover:bg-muted/50"
      title={`${icon.label} (${icon.name})`}
    >
      <div className="flex h-10 w-10 items-center justify-center text-foreground">
        {Icon ? <Icon className="size-6" /> : <div className="size-6 animate-pulse rounded bg-muted" />}
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

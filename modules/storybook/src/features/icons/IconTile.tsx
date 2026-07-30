import { Badge } from "../../shared/components/badge";
import type { IconEntryType, IconSizeType } from "./icons.manifest";

/** Each icon variant is authored at its own pixel size — the svg itself declares 16px, so the tile sets it. */
const SIZE_CLASSES: Record<IconSizeType, string> = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
};

type IconTilePropsType = {
  icon: IconEntryType;
  svg: string | undefined;
  size: IconSizeType;
  activeTag: string | undefined;
  onTagSelect: (tag: string) => void;
};

/** One icon in the gallery grid: the glyph itself (lazily loaded), its label, and up to three clickable search tags. */
export const IconTile = ({ icon, svg, size, activeTag, onTagSelect }: IconTilePropsType) => {
  return (
    <div
      className="flex flex-col items-center gap-2 rounded-lg border-[0.3px] border-border bg-card p-3 text-center text-card-foreground transition-colors hover:bg-muted/50"
      title={`${icon.label} (${icon.name})`}
    >
      <div className="flex h-10 w-10 items-center justify-center text-foreground">
        {svg ? (
          <div
            className={`${SIZE_CLASSES[size]} [&_svg]:h-full [&_svg]:w-full`}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
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

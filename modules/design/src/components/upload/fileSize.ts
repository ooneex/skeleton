export type FileSizeUnitType = "B" | "KB" | "MB" | "GB" | "TB";

export type MaxFileSizeType = number | `${number}${FileSizeUnitType}`;

const SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] as const;

export const parseFileSize = (size: MaxFileSizeType): number => {
  if (typeof size === "number") return size;
  const match = size.match(/^(\d+(?:\.\d+)?)(B|KB|MB|GB|TB)$/i);
  if (!match) return 0;
  const value = Number.parseFloat(match[1] ?? "0");
  const unit = (match[2] ?? "B").toUpperCase();
  const multipliers: Record<string, number> = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  };
  return value * (multipliers[unit] ?? 1);
};

export const formatBytes = (bytes: number): string => {
  if (!+bytes) return "0B";
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const unit = SIZE_UNITS[i] || SIZE_UNITS[SIZE_UNITS.length - 1];
  const value = bytes / k ** i;
  const formatted = value % 1 === 0 ? value.toString() : value.toFixed(1).replace(/\.0$/, "");
  return `${formatted}${unit}`;
};

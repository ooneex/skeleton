import { type ChartConfigType, THEMES } from "./chartContext";

export const ChartStyle = ({ id, config }: { id: string; config: ChartConfigType }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
  if (!colorConfig.length) {
    return null;
  }
  const cssVars = Object.entries(THEMES)
    .map(
      ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
    )
    .join("\n");
  // biome-ignore lint/security/noDangerouslySetInnerHtml: shadcn chart component injects CSS variables for theme support
  return <style dangerouslySetInnerHTML={{ __html: cssVars }} />;
};
ChartStyle.displayName = "Chart.Style";

import { cn } from "@module/design/utils/cn";
import type * as React from "react";
import { getPayloadConfigFromPayload, useChart } from "./chartContext";

type ChartLegendPayloadItemType = {
  value?: string;
  type?: string;
  id?: string;
  color?: string;
  dataKey?: string | number;
  inactive?: boolean;
};

type ChartLegendContentPropsType = React.ComponentProps<"div"> & {
  payload?: ChartLegendPayloadItemType[];
  verticalAlign?: "top" | "bottom" | "middle";
  hideIcon?: boolean;
  nameKey?: string;
};

export const ChartLegendContent = ({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: ChartLegendContentPropsType) => {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return (
    <div className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return (
            <div
              key={item.value}
              className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div className="h-2 w-2 shrink-0 rounded-xs" style={{ backgroundColor: item.color }} />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
};
ChartLegendContent.displayName = "Chart.LegendContent";

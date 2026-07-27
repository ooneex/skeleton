#![allow(non_snake_case)]

pub mod Chart;
pub mod ChartContainer;
pub mod ChartLegend;
pub mod ChartLegendContent;
pub mod ChartStyle;
pub mod ChartTooltip;
pub mod ChartTooltipContent;
pub mod chartContext;

pub use Chart::{ChartContainer as Chart, ChartContainerProps as ChartProps};
pub use ChartContainer::{ChartContainer, ChartContainerProps};
// ChartLegend.rs and ChartTooltip.rs are stubs (recharts re-exports have no Rust
// equivalent). The legend/tooltip content components are aliased here instead.
pub use ChartLegendContent::{
    ChartLegendContent, ChartLegendContent as ChartLegend, ChartLegendContentProps,
    ChartLegendContentProps as ChartLegendProps, ChartLegendPayloadItemType,
    LegendVerticalAlignType,
};
pub use ChartStyle::{ChartStyle, ChartStyleProps};
pub use ChartTooltipContent::{
    ChartTooltipContent, ChartTooltipContent as ChartTooltip, ChartTooltipContentProps,
    ChartTooltipContentProps as ChartTooltipProps, ChartTooltipPayloadItemType, IndicatorType,
};
pub use chartContext::{
    ChartConfigItemType, ChartConfigType, ChartContextType, get_payload_config, resolve_color,
};

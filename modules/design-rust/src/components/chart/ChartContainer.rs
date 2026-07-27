use dioxus::prelude::*;

use super::ChartStyle::ChartStyle;
use super::chartContext::{ChartConfigType, ChartContextType};
use crate::hooks::use_id;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ChartContainerProps {
    /// Optional stable id suffix; auto-generated when omitted.
    #[props(default)]
    pub id: Option<String>,
    /// Series configuration forwarded to `ChartStyle` and made available
    /// through context to tooltip/legend sub-components.
    pub config: ChartConfigType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    /// Chart content — typically an SVG chart or any Dioxus element that
    /// consumes the chart context through `use_context::<ChartContextType>()`.
    ///
    /// Note: `recharts` has no Rust equivalent. Pass plain SVG or a custom
    /// chart component here; the container provides the correct sizing wrapper
    /// and CSS custom properties only.
    pub children: Element,
}

/// Root container for the chart component family.
///
/// Provides a `ChartContextType` context consumed by `ChartTooltipContent`
/// and `ChartLegendContent`, injects per-series CSS color variables via
/// `ChartStyle`, and applies the standard chart wrapper classes.
#[component]
pub fn ChartContainer(props: ChartContainerProps) -> Element {
    let unique_id = use_id("chart");
    let chart_id = props
        .id
        .as_ref()
        .map(|id| format!("chart-{id}"))
        .unwrap_or_else(|| unique_id.clone());

    use_context_provider(|| ChartContextType {
        config: props.config.clone(),
    });

    rsx! {
        div {
            "data-slot": "chart",
            "data-chart": chart_id.clone(),
            class: cn([
                "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            ChartStyle { id: chart_id.clone(), config: props.config }
            {props.children}
        }
    }
}

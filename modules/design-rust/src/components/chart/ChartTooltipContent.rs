use dioxus::prelude::*;

use super::chartContext::{ChartContextType, get_payload_config};
use crate::utils::cn;

/// A single series entry in the tooltip payload.
#[derive(Clone, PartialEq, Default)]
pub struct ChartTooltipPayloadItemType {
    pub value: Option<f64>,
    pub name: Option<String>,
    pub data_key: Option<String>,
    pub r#type: Option<String>,
    pub color: Option<String>,
    pub fill: Option<String>,
}

/// Shape of the indicator drawn next to each series row.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum IndicatorType {
    #[default]
    Dot,
    Line,
    Dashed,
}

#[derive(Props, Clone, PartialEq)]
pub struct ChartTooltipContentProps {
    /// Whether the tooltip is currently active (visible).
    #[props(default = false)]
    pub active: bool,
    /// Series data rows from the chart.
    #[props(default)]
    pub payload: Vec<ChartTooltipPayloadItemType>,
    /// Label shown at the top of the tooltip.
    #[props(default)]
    pub label: Option<String>,
    /// Extra classes for the label element.
    #[props(default)]
    pub label_class: Option<String>,
    /// Suppresses the label row.
    #[props(default = false)]
    pub hide_label: bool,
    /// Suppresses the coloured indicator.
    #[props(default = false)]
    pub hide_indicator: bool,
    /// Indicator shape.
    #[props(default)]
    pub indicator: IndicatorType,
    /// Key in the payload that identifies the series label.
    #[props(default)]
    pub name_key: Option<String>,
    /// Key in the payload used to look up the top-level label.
    #[props(default)]
    pub label_key: Option<String>,
    /// Override colour applied to every indicator in this tooltip.
    #[props(default)]
    pub color: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Styled tooltip body, mirroring the TS `ChartTooltipContent`.
///
/// Reads `ChartContextType` (from `ChartContainer`) to resolve series labels
/// and colours from the config map.
#[component]
pub fn ChartTooltipContent(props: ChartTooltipContentProps) -> Element {
    let ctx = use_context::<ChartContextType>();

    let payload: Vec<_> = props
        .payload
        .iter()
        .filter(|item| item.r#type.as_deref() != Some("none"))
        .collect();

    if !props.active || payload.is_empty() {
        return rsx! {};
    }

    let nest_label = payload.len() == 1 && !matches!(props.indicator, IndicatorType::Dot);

    // Compute the top-level label value.
    let tooltip_label: Option<String> = if props.hide_label {
        None
    } else if let Some(first) = payload.first() {
        let key = props
            .label_key
            .as_deref()
            .or(first.data_key.as_deref())
            .or(first.name.as_deref())
            .unwrap_or("value");
        let item_config = get_payload_config(&ctx.config, key);
        let raw_label = props.label.as_deref();
        let cfg_label = item_config.and_then(|c| c.label.as_deref());
        cfg_label.or(raw_label).map(str::to_string)
    } else {
        None
    };

    rsx! {
        div {
            class: cn([
                "grid min-w-48 items-start gap-1.5 rounded bg-white text-foreground px-2.5 py-1.5 text-xs ring-[0.4px] ring-ring-active border-none shadow-none",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            // Top-level label (skipped when nest_label puts it inside the first row)
            if !nest_label {
                if let Some(ref lbl) = tooltip_label {
                    div {
                        class: cn(["font-medium", props.label_class.as_deref().unwrap_or_default()]),
                        "{lbl}"
                    }
                }
            }
            div { class: "grid gap-1.5",
                for item in &payload {
                    {
                        let key = props.name_key
                            .as_deref()
                            .or(item.name.as_deref())
                            .or(item.data_key.as_deref())
                            .unwrap_or("value");
                        let item_config = get_payload_config(&ctx.config, key);
                        let indicator_color = props.color
                            .as_deref()
                            .or(item.fill.as_deref())
                            .or(item.color.as_deref())
                            .unwrap_or_default();
                        let label_str = item_config
                            .and_then(|c| c.label.as_deref())
                            .or(item.name.as_deref())
                            .unwrap_or_default()
                            .to_string();
                        let value_str = item.value.map(|v| format!("{v}")).unwrap_or_default();
                        let is_dot = matches!(props.indicator, IndicatorType::Dot);
                        let is_line = matches!(props.indicator, IndicatorType::Line);
                        let is_dashed = matches!(props.indicator, IndicatorType::Dashed);
                        rsx! {
                            div {
                                key: "{item.data_key:?}",
                                class: cn([
                                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                                    if is_dot { "items-center" } else { "" },
                                ]),
                                if !props.hide_indicator {
                                    div {
                                        class: cn([
                                            "shrink-0 rounded-xs bg-(--color-bg) border-border",
                                            if is_dot { "h-2.5 w-2.5" } else { "" },
                                            if is_line { "w-1" } else { "" },
                                            if is_dashed { "w-0 border-[1.5px] border-dashed bg-transparent" } else { "" },
                                            if nest_label && is_dashed { "my-0.5" } else { "" },
                                        ]),
                                        style: format!(
                                            "--color-bg: {indicator_color}; --color-border: {indicator_color}",
                                        ),
                                    }
                                }
                                div {
                                    class: cn([
                                        "flex flex-1 justify-between leading-none",
                                        if nest_label { "items-end" } else { "items-center" },
                                    ]),
                                    div { class: "grid gap-1.5",
                                        if nest_label {
                                            if let Some(ref lbl) = tooltip_label {
                                                div {
                                                    class: cn(["font-medium", props.label_class.as_deref().unwrap_or_default()]),
                                                    "{lbl}"
                                                }
                                            }
                                        }
                                        span {
                                            class: "text-muted-foreground",
                                            "{label_str}"
                                        }
                                    }
                                    if item.value.is_some() {
                                        span {
                                            class: "font-mono font-medium text-foreground tabular-nums",
                                            "{value_str}"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

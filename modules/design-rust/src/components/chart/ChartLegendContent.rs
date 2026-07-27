use dioxus::prelude::*;

use super::chartContext::{ChartContextType, get_payload_config};
use crate::utils::cn;

/// A single item in the legend payload.
#[derive(Clone, PartialEq, Default)]
pub struct ChartLegendPayloadItemType {
    pub value: Option<String>,
    pub r#type: Option<String>,
    pub id: Option<String>,
    pub color: Option<String>,
    pub data_key: Option<String>,
    pub inactive: bool,
}

/// Vertical alignment of the legend block.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum LegendVerticalAlignType {
    Top,
    #[default]
    Bottom,
    Middle,
}

#[derive(Props, Clone, PartialEq)]
pub struct ChartLegendContentProps {
    /// Payload entries provided by the chart (or built manually).
    #[props(default)]
    pub payload: Vec<ChartLegendPayloadItemType>,
    /// Block placement relative to the chart.
    #[props(default)]
    pub vertical_align: LegendVerticalAlignType,
    /// When `true` the coloured icon is not rendered.
    #[props(default = false)]
    pub hide_icon: bool,
    /// Key in the payload that identifies the series name.
    #[props(default)]
    pub name_key: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Styled legend row list, mirroring the TS `ChartLegendContent`.
///
/// Reads the `ChartContextType` context (populated by `ChartContainer`) to
/// resolve labels and icons from the config.
#[component]
pub fn ChartLegendContent(props: ChartLegendContentProps) -> Element {
    let ctx = use_context::<ChartContextType>();

    let payload: Vec<_> = props
        .payload
        .iter()
        .filter(|item| item.r#type.as_deref() != Some("none"))
        .collect();

    if payload.is_empty() {
        return rsx! {};
    }

    rsx! {
        div {
            class: cn([
                "flex items-center justify-center gap-4",
                if matches!(props.vertical_align, LegendVerticalAlignType::Top) { "pb-3" } else { "pt-3" },
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            for item in payload {
                {
                    let key = props.name_key
                        .as_deref()
                        .or(item.data_key.as_deref())
                        .unwrap_or("value");
                    let item_config = get_payload_config(&ctx.config, key);
                    let label = item_config
                        .and_then(|c| c.label.as_deref())
                        .or(item.value.as_deref())
                        .unwrap_or_default()
                        .to_string();
                    let color = item.color.clone();
                    rsx! {
                        div {
                            key: "{item.value:?}",
                            class: "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
                            if !props.hide_icon {
                                div {
                                    class: "h-2 w-2 shrink-0 rounded-xs",
                                    style: color.as_ref().map(|c| format!("background-color: {c}")).unwrap_or_default(),
                                }
                            }
                            "{label}"
                        }
                    }
                }
            }
        }
    }
}

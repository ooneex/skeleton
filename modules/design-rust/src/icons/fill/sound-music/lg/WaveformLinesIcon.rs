use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WaveformLinesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WaveformLinesIcon(props: WaveformLinesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.5 2L18.5 46L15.5 46L15.5 2L18.5 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 9L25.5 39L22.5 39L22.5 9L25.5 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39.5 14L39.5 34L36.5 34L36.5 14L39.5 14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32.5 20L32.5 28L29.5 28L29.5 20L32.5 20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46.5 21L46.5 27L43.5 27L43.5 21L46.5 21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 11L11.5 37L8.5 37L8.5 11L11.5 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.5 20L4.5 28L1.5 28L1.5 20L4.5 20Z",
                fill: "currentColor",
            }
        }
    }
}

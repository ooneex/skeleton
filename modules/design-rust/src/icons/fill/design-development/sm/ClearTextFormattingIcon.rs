use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClearTextFormattingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClearTextFormattingIcon(props: ClearTextFormattingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 12V4H13V12H11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 3H20V5H3V3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 16.69V22H11V16.69H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4142 3.00003L3 22.4142L1.58579 21L21 1.58582L22.4142 3.00003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

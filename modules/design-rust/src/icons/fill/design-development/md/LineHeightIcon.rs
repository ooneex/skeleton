use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LineHeightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LineHeightIcon(props: LineHeightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 20H11V18H21V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 3H30V5H2V3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 27H30V29H2V27Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.5382 7H17.4618L24.4618 25H21.8954V23.9187L16.0937 9H15.9063L10.1184 23.8832V25H7.53815L14.5382 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

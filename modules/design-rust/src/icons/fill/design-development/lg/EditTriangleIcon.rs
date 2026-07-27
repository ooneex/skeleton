use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EditTriangleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EditTriangleIcon(props: EditTriangleIconProps) -> Element {
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
                d: "M24.7187 12.7798L38.7187 35.7798L41.2812 34.22L27.2812 11.22L24.7187 12.7798Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.2813 12.7798L9.28135 35.7798L6.71875 34.22L20.7188 11.22L23.2813 12.7798Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.5 37.5H39.5V40.5H8.5V37.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 3H29V13H19V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M37 34H47V44H37V34Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 34H11V44H1V34Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

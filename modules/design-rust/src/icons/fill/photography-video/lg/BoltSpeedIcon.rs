use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoltSpeedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoltSpeedIcon(props: BoltSpeedIconProps) -> Element {
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
                d: "M30.6273 3.21448L29.3503 19.0905H45.2975L21.3727 44.7856L22.6497 28.9095H6.70253L30.6273 3.21448Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 8H18V11H11V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 8H8.01V11H5V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 37H18V40H7V37Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 18L1 18L0.999992 15L6.99999 15L7 18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

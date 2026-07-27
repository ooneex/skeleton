use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoIntercomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoIntercomIcon(props: VideoIntercomIconProps) -> Element {
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
                d: "M7 2C8.65685 2 10 3.34315 10 5L10 19C10 20.6569 8.65685 22 7 22L5 22C3.34315 22 2 20.6569 2 19L2 5C2 3.34314 3.34315 2 5 2L7 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.0004 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H11.0004C11.6281 2.83566 12 3.87439 12 5L12 19C12 20.1256 11.6281 21.1643 11.0004 22ZM20 6V12L14 12L14 6L20 6ZM20 18V16H17V18H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

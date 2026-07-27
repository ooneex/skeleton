use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretMaximizeDiagonalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretMaximizeDiagonalIcon(props: CaretMaximizeDiagonalIconProps) -> Element {
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
                d: "M8.43359 5.74731L20.2166 3.78348L18.2527 15.5665L8.43359 5.74731Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.74731 8.43359L3.78348 20.2166L15.5665 18.2527L5.74731 8.43359Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretRightFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretRightFromLineIcon(props: CaretRightFromLineIconProps) -> Element {
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
                d: "M3 30L5 30L5 2L3 2L3 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M9 28L9 4L27 16L9 28Z",
                fill: "currentColor",
            }
        }
    }
}

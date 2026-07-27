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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 4L6 44L9 44L9 4L6 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M14 41L14 7L40 24L14 41Z",
                fill: "currentColor",
            }
        }
    }
}

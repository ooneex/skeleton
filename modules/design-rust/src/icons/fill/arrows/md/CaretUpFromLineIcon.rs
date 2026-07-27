use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretUpFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretUpFromLineIcon(props: CaretUpFromLineIconProps) -> Element {
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
                d: "M30 29L30 27L2 27L2 29L30 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M28 23L4 23L16 5L28 23Z",
                fill: "currentColor",
            }
        }
    }
}

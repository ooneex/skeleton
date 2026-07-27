use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretLeftToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretLeftToLineIcon(props: CaretLeftToLineIconProps) -> Element {
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
                d: "M9 44L9.00001 4L6.00001 4L6 44L9 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 7.15137L15.1727 24L41 40.8486L41 7.15137Z",
                fill: "currentColor",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DoubleChevronLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DoubleChevronLeftIcon(props: DoubleChevronLeftIconProps) -> Element {
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
                d: "M24 43.1213L4.8787 24L24 4.87866L26.1213 6.99998L9.12134 24L26.1213 41L24 43.1213Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39 43.1213L19.8787 24L39 4.87866L41.1213 6.99998L24.1213 24L41.1213 41L39 43.1213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowUpIcon(props: SquareArrowUpIconProps) -> Element {
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
                d: "M4 10C4 6.68629 6.68629 4 10 4H38C41.3137 4 44 6.68629 44 10V38C44 41.3137 41.3137 44 38 44H10C6.68629 44 4 41.3137 4 38V10ZM25.5 37V15.6213L35 25.1213L37.1213 23L24 9.87868L10.8787 23L13 25.1213L22.5 15.6213V37H25.5Z",
                fill: "currentColor",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquarePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquarePlusIcon(props: SquarePlusIconProps) -> Element {
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
                d: "M10 4C6.68629 4 4 6.68629 4 10V38C4 41.3137 6.68629 44 10 44H38C41.3137 44 44 41.3137 44 38V10C44 6.68629 41.3137 4 38 4H10ZM25.5 14V22.5H34V25.5H25.5V34H22.5V25.5H14V22.5H22.5V14H25.5Z",
                fill: "currentColor",
            }
        }
    }
}

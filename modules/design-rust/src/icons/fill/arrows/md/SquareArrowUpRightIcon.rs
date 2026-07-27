use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowUpRightIcon(props: SquareArrowUpRightIconProps) -> Element {
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
                d: "M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6ZM12.5858 18L22.5858 8H14V6H26V18H24V9.41421L14 19.4142L12.5858 18Z",
                fill: "currentColor",
            }
        }
    }
}

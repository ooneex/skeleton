use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowUp2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowUp2Icon(props: SquareArrowUp2IconProps) -> Element {
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
                d: "M2 26C2 28.2091 3.79086 30 6 30L26 30C28.2091 30 30 28.2091 30 26L30 6C30 3.79086 28.2091 2 26 2L6 2C3.79086 2 2 3.79086 2 6L2 26ZM17 25L17 16.9999L24 16.9999L16 6.33325L8 16.9999L15 16.9999L15 25L17 25Z",
                fill: "currentColor",
            }
        }
    }
}

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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 19C2 20.6569 3.34315 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34314 20.6569 2 19 2L5 2C3.34314 2 2 3.34315 2 5L2 19ZM7 12.5L12 5.83333L17 12.5L13 12.5L13 18L11 18L11 12.5L7 12.5Z",
                fill: "currentColor",
            }
        }
    }
}

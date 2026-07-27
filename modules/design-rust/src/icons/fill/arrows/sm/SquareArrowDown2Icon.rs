use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowDown2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowDown2Icon(props: SquareArrowDown2IconProps) -> Element {
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
                d: "M22 5C22 3.34315 20.6569 2 19 2L5 2C3.34315 2 2 3.34314 2 5L2 19C2 20.6569 3.34314 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 5ZM17 11.5L12 18.1667L7 11.5L11 11.5L11 5.99998L13 5.99998L13 11.5L17 11.5Z",
                fill: "currentColor",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowDownLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowDownLeftIcon(props: SquareArrowDownLeftIconProps) -> Element {
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
                d: "M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6ZM19.4142 14L18.7071 14.7071L9.41421 24H17H18V26H17H7H6V25V15V14H8V15V22.5858L17.2929 13.2929L18 12.5858L19.4142 14Z",
                fill: "currentColor",
            }
        }
    }
}

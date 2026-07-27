use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareArrowDownRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareArrowDownRightIcon(props: SquareArrowDownRightIconProps) -> Element {
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
                d: "M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6ZM12.5858 14L13.2929 14.7071L22.5858 24H15H14V26H15H25H26V25V15V14H24V15V22.5858L14.7071 13.2929L14 12.5858L12.5858 14Z",
                fill: "currentColor",
            }
        }
    }
}

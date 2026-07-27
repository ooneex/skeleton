use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ReceiptIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ReceiptIcon(props: ReceiptIconProps) -> Element {
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
                d: "M41 8C41 4.68629 38.3137 2 35 2H13C9.68629 2 7 4.68629 7 8V46L12 42.25L16 45.25L20 42.25L24 45.25L28 42.25L32 45.25L36 42.25L41 46L41 8ZM15 16H26V13H15V16ZM15 24V21H26V24H15ZM33 16H29V13H33V16ZM33 24V21H29V24H33ZM15 32H26V29H15V32ZM33 32V29H29V32H33Z",
                fill: "currentColor",
            }
        }
    }
}

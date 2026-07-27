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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 6C28 3.79086 26.2091 2 24 2H8C5.79086 2 4 3.79086 4 6V31.9227L10.5 27.3643L16 31.2214L21.5 27.3643L28 31.9227L28 6ZM9.00006 8H10.0001H15.0001H16.0001V10H15.0001H10.0001H9.00006V8ZM20.0001 8H19.0001V10H20.0001H22.0001H23.0001V8H22.0001H20.0001ZM9 14H10H15H16V16H15H10H9V14ZM20 14H19V16H20H22H23V14H22H20ZM9 20H10H15H16V22H15H10H9V20ZM20 20H19V22H20H22H23V20H22H20Z",
                fill: "currentColor",
            }
        }
    }
}

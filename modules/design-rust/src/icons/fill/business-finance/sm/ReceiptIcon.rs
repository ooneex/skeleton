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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V23.118L7.94559 20.6452L12 23.1792L16.0544 20.6452L21 23.118V4ZM7 6H12V8H7V6ZM7 10V12H12V10H7ZM7 14H12V16H7V14ZM14 6V8H17V6H14ZM14 10H17V12H14V10ZM14 14V16H17V14H14Z",
                fill: "currentColor",
            }
        }
    }
}

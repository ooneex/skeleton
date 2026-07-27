use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InvoiceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InvoiceIcon(props: InvoiceIconProps) -> Element {
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
                d: "M3 1H21V22.8874L16 21.0901L12 23.1518L8 21.0901L3 22.8874V1ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8ZM17 17V15H11.5V17H17ZM9.5 17V15H7V17H9.5Z",
                fill: "currentColor",
            }
        }
    }
}

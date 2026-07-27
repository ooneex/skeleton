use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BootIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BootIcon(props: BootIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 10H13V12H18V14H13V16H18L23.1426 16.876C26.8136 17.4058 29.6011 20.376 29.96 24H3V7H18V10Z",
                fill: "currentColor",
            }
            path {
                d: "M30 27C30 28.6569 28.6569 30 27 30H7C4.79086 30 3 28.2091 3 26H30V27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M18 5H3V2H18V5Z",
                fill: "currentColor",
            }
        }
    }
}

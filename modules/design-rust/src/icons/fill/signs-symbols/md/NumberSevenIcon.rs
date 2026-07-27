use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberSevenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberSevenIcon(props: NumberSevenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 29C13 21.2661 15.2595 13.7005 19.501 7.2334L21.6221 4H8V2H24V4.02051L21.1738 8.33008C17.146 14.4713 15 21.6557 15 29V30H13V29Z",
                fill: "currentColor",
            }
        }
    }
}

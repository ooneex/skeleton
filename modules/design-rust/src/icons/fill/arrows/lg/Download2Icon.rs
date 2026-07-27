use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Download2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Download2Icon(props: Download2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.5 24H33L24 35L15 24H22.5V6H8C4.68629 6 2 8.68629 2 12L2 36C2 39.3137 4.68629 42 8 42L40 42C43.3137 42 46 39.3137 46 36L46 12C46 8.68629 43.3137 6 40 6L25.5 6V24Z",
                fill: "currentColor",
            }
        }
    }
}

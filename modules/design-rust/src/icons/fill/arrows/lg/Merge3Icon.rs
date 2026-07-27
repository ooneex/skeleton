use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Merge3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Merge3Icon(props: Merge3IconProps) -> Element {
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
                d: "M36.7279 15.6067L24 2.87873L11.2721 15.6067L13.3934 17.728L24 7.12137L34.6066 17.728L36.7279 15.6067Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 24.6214L6.00001 44.1213L3.87869 42L22.5 23.3787L22.5001 5L25.5001 5L25.5 24.6214Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 44.1213L28.8787 31L31 28.8787L44.1213 42L42 44.1213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

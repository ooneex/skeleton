use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronExpandYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronExpandYIcon(props: ChevronExpandYIconProps) -> Element {
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
                d: "M24.0001 5.87869L34.0608 15.9394L31.9395 18.0607L24.0001 10.1213L16.0608 18.0607L13.9395 15.9394L24.0001 5.87869Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.0001 42.1213L34.0608 32.0606L31.9395 29.9393L24.0001 37.8787L16.0608 29.9393L13.9395 32.0606L24.0001 42.1213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

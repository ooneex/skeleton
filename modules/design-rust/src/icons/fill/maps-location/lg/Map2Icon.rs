use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Map2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Map2Icon(props: Map2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M46 42.4784L36.5 37.0159V3.63184L46 8.38184V42.4784Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M14.5 37.3275L22.5 43.1456V8.8602L14.5 3.76929V37.3275Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11.5 3.63184L2 8.38184V42.4784L11.5 37.0159V3.63184Z",
                fill: "currentColor",
            }
            path {
                d: "M25.5 8.8602L33.5 3.76929V37.3275L25.5 43.1456V8.8602Z",
                fill: "currentColor",
            }
        }
    }
}

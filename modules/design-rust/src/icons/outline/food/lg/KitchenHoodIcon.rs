use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KitchenHoodIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KitchenHoodIcon(props: KitchenHoodIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32.5 14.426V5H15.5V14.426L3 22.6154V31H45V22.6154L32.5 14.426Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 26L25 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 26L32 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 26L18 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 36.5L23.7901 36.7332C22.8032 37.8297 22.8974 39.5199 24 40.5V40.5C25.1026 41.4801 25.1968 43.1703 24.2099 44.2668L24 44.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 36.5L16.7901 36.7332C15.8032 37.8297 15.8974 39.5199 17 40.5V40.5C18.1026 41.4801 18.1968 43.1703 17.2099 44.2668L17 44.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31 36.5L30.7901 36.7332C29.8032 37.8297 29.8974 39.5199 31 40.5V40.5C32.1026 41.4801 32.1968 43.1703 31.2099 44.2668L31 44.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

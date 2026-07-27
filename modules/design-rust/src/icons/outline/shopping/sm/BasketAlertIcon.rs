use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BasketAlertIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BasketAlertIcon(props: BasketAlertIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.51 12H3.5L4.30232 19.2209C4.41486 20.2337 5.27099 21 6.29009 21H8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 13V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M2 8H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M8.75 1.5L5 8H6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M15.25 1.5L19 8H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
            path {
                d: "M13.5 21L13.2661 21C12.4889 21 12.0088 20.152 12.4087 19.4855L16.6425 12.4291C17.0309 11.7818 17.9691 11.7818 18.3575 12.4292L22.5913 19.4855C22.9912 20.152 22.5111 21 21.7338 21H21.4993",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17.5 17V18.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17.5 23C18.1904 23 18.75 22.4404 18.75 21.75C18.75 21.0596 18.1904 20.5 17.5 20.5C16.8096 20.5 16.25 21.0596 16.25 21.75C16.25 22.4404 16.8096 23 17.5 23Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}

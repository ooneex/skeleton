use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MapPin2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MapPin2Icon(props: MapPin2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 24V43V42",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 24V36V35",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M37.4122 9.70991L45 7V38L31 43L17 36L3 41V10L11.1645 7.0841",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 23C28.947 19.6031 32.5 15.7364 32.5 11.2051C32.5 6.67385 28.6941 3 24 3C19.3059 3 15.5 6.67385 15.5 11.2051C15.5 15.7364 19.053 19.6031 24 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 13C24.8284 13 25.5 12.3284 25.5 11.5C25.5 10.6716 24.8284 10 24 10C23.1716 10 22.5 10.6716 22.5 11.5C22.5 12.3284 23.1716 13 24 13Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ImageMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ImageMinusIcon(props: ImageMinusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M40 41L27.5493 24L18.9296 36.2778L14.1408 30.6111L6 41",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M37 20C41.9706 20 46 15.9706 46 11C46 6.02944 41.9706 2 37 2C32.0294 2 28 6.02944 28 11C28 15.9706 32.0294 20 37 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M33 11H41",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 7L8 7C5.23858 7 3 9.23858 3 12L3 36C3 38.7614 5.23857 41 8 41L40 41C42.7614 41 45 38.7614 45 36L45 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 23C16.2091 23 18 21.2091 18 19C18 16.7909 16.2091 15 14 15C11.7909 15 10 16.7909 10 19C10 21.2091 11.7909 23 14 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

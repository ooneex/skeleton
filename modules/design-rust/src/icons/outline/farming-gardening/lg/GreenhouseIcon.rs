use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GreenhouseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GreenhouseIcon(props: GreenhouseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24.059 43L24.059 33.5925",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24.059 34.53C24.059 34.53 24.7312 29.9659 27.8882 28.1432C31.0452 26.3205 35 27.8884 35 27.8884C35 27.8884 34.6053 32.617 31.5047 34.4071C28.3477 36.2298 24.059 34.53 24.059 34.53Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.8899 34.53C23.8899 34.53 23.2176 29.9659 20.0606 28.1432C16.9036 26.3205 12.9489 27.8884 12.9489 27.8884C12.9489 27.8884 13.3435 32.617 16.4442 34.4071C19.6012 36.2298 23.8899 34.53 23.8899 34.53Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 23.0006V38.0006C8 40.762 10.2386 43.0006 13 43.0006H35C37.7614 43.0006 40 40.762 40 38.0006V23.0006",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 20.5006L24 4.00058L45 20.5006",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 26C24 26 27.5006 23.5795 27.5 20.4995C27.4995 17.4195 23.998 15 23.998 15C23.998 15 20.4995 17.4745 20.5 20.4995C20.5006 23.5795 24 26 24 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

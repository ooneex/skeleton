use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CoinsPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CoinsPlusIcon(props: CoinsPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
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
                d: "M37 7L37 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 30.5V38C3 40.7614 7.70101 43 13.5 43C19.299 43 24 40.7614 24 38V30.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 24V31C3 33.7614 7.70101 36 13.5 36C19.299 36 24 33.7614 24 31V24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M34.5 36C40.299 36 45 33.7614 45 31C45 28.2386 40.299 26 34.5 26C28.701 26 24 28.2386 24 31C24 33.7614 28.701 36 34.5 36Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 31V38C24 40.7614 28.701 43 34.5 43C40.299 43 45 40.7614 45 38V31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M13.5 29C19.299 29 24 26.7614 24 24C24 21.2386 19.299 19 13.5 19C7.70101 19 3 21.2386 3 24C3 26.7614 7.70101 29 13.5 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M33 31H36",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 24H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

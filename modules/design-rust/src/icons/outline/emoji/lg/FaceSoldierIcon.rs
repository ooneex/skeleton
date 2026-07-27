use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceSoldierIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceSoldierIcon(props: FaceSoldierIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 31L7.15472 32C8.62996 39.9667 15.6108 45.5 24 45.5C32.3892 45.5 39.37 39.9667 40.8453 32L41 31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 3C11.8497 3 3 12.6431 3 24.5385V31H5.61484C7.65936 31 9.4979 29.7552 10.2572 27.857L11 26H37L37.7428 27.857C38.5021 29.7552 40.3406 31 42.3852 31H45V24.5385C45 12.6431 36.1503 3 24 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 34H28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 13L24 9L28 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 20L24 16L28 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

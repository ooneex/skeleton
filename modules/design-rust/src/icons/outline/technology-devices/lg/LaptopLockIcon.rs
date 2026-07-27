use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopLockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopLockIcon(props: LaptopLockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 34V38C3 39.6569 4.34315 41 6 41H42C43.6569 41 45 39.6569 45 38V34H32V35C32 36.1046 31.1046 37 30 37H18C16.8954 37 16 36.1046 16 35V34H3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 29V12C5 9.23858 7.23858 7 10 7H24.9885",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M42.5 13H29.5C28.1193 13 27 14.1193 27 15.5V21.5C27 22.8807 28.1193 24 29.5 24H42.5C43.8807 24 45 22.8807 45 21.5V15.5C45 14.1193 43.8807 13 42.5 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M31.5 13V9.5C31.5 7.01472 33.5147 5 36 5V5C38.4853 5 40.5 7.01472 40.5 9.5V13",
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

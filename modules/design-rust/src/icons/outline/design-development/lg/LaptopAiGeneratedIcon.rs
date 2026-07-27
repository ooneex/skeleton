use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopAiGeneratedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopAiGeneratedIcon(props: LaptopAiGeneratedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.15 14.85L14.5 11L12.85 14.85L9 16.5L12.85 18.15L14.5 22L16.15 18.15L20 16.5L16.15 14.85Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M43.0001 29H42.4292L33.6302 18.3325L25.0235 28.0704L20.6141 23.8962L15.5001 29.0102",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 29V12C5 9.23858 7.23858 7 10 7H38C40.7614 7 43 9.23858 43 12V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 34V38C3 39.6569 4.34315 41 6 41H42C43.6569 41 45 39.6569 45 38V34H32V35C32 36.1046 31.1046 37 30 37H18C16.8954 37 16 36.1046 16 35V34H3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

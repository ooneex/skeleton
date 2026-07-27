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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 15V22V21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M1 11L12 2L23 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M1.61108 10.5L12 2L22.3889 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 14V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 14.25C8 11.125 12 8 12 8C12 8 16 11.125 16 14.25C16 16.75 14.2088 18 12 18C9.7912 18 8 16.75 8 14.25Z",
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

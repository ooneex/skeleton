use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HousePinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HousePinIcon(props: HousePinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 13V20C4 21.1046 4.89543 22 6 22H12.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 22.75C21.328 21.094 23 19.209 23 17C23 14.791 21.209 13 19 13C16.791 13 15 14.791 15 17C15 19.209 16.672 21.094 19 22.75Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 18C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M9 22V15H11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M1.5 10.5L12 2L22.5 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OilCanDropIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OilCanDropIcon(props: OilCanDropIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 8V4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14.5655 18.5052C14.201 18.8242 13.733 19 13.2485 19H4C2.89543 19 2 18.1046 2 17V10C2 8.89543 2.89543 8 4 8H11L14 12L22 10.5V12L14.5655 18.5052Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 4H10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 15H8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 18C22.0388 18.8333 23 20.0833 23 21.1571C23 22.2899 22.1045 23 21 23C19.8955 23 19 22.2899 19 21.1571C19 20.0833 19.9719 18.8333 21 18Z",
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

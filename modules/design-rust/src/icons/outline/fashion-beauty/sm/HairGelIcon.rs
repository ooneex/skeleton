use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HairGelIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HairGelIcon(props: HairGelIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.76389 8C6.28885 7.46924 6 6.76835 6 6C6 4.34315 7.34315 3 9 3H11C13.5 3 15 2.5 15.5 1H16C16 1 18 3 18 5C18 6.11575 17.582 7.2315 16.9247 8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 12V8H5V12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 17H16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 12H4C2.89543 12 2 12.8954 2 14V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V14C22 12.8954 21.1046 12 20 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

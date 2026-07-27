use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MagnifierSlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MagnifierSlashIcon(props: MagnifierSlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "20.5",
                y1: "20.5",
                x2: "15",
                y2: "15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m16.892,8.766c.071.401.108.813.108,1.234,0,3.866-3.134,7-7,7-.421,0-.833-.037-1.234-.108",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m5.05,14.95c-1.267-1.267-2.05-3.017-2.05-4.95,0-3.866,3.134-7,7-7,1.933,0,3.683.783,4.95,2.05",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "18",
                y1: "2",
                x2: "2",
                y2: "18",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}

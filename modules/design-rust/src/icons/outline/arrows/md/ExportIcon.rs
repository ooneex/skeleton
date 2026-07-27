use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ExportIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ExportIcon(props: ExportIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "21",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polyline {
                points: "10 8 16 2 22 8",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m21,13h4c1.6569,0,3,1.3431,3,3v10c0,1.6569-1.3431,3-3,3H7c-1.6569,0-3-1.3431-3-3v-10c0-1.6569,1.3431-3,3-3h4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}

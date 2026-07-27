use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MakeupCreamIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MakeupCreamIcon(props: MakeupCreamIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 10L2.00001 19C2.00001 20.6569 5.02944 22 10 22C14.9706 22 18 20.6569 18 19L18 10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10 18C5.02944 18 2 16.6569 2 15L2.00001 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            ellipse {
                cx: "10",
                cy: "10",
                rx: "8",
                ry: "3",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 12.876C22.6372 11.7278 23 10.4063 23 9C23 4.58172 19.4183 1 15 1C12.9711 1 11.1186 1.75527 9.70837 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Clone3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Clone3Icon(props: Clone3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17,7h2.5c.828,0,1.5.672,1.5,1.5v11c0,.828-.672,1.5-1.5,1.5h-11c-.828,0-1.5-.672-1.5-1.5v-2.5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            rect {
                x: "3",
                y: "3",
                width: "14",
                height: "14",
                rx: "1.5",
                ry: "1.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}

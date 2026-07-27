use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Paintbrush3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Paintbrush3Icon(props: Paintbrush3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 15V3H9.5L12.3333 8L15.5 3H27V15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 17.2344V15H27V17.2344C27 18.2431 26.2489 19.0939 25.2481 19.219L19 20L19.6379 27.0164C19.8323 29.1556 18.148 31 16 31C13.852 31 12.1677 29.1556 12.3621 27.0164L13 20L6.75193 19.219C5.75107 19.0939 5 18.2431 5 17.2344Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

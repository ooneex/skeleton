use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flask2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flask2Icon(props: Flask2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.22208 20H24.8319",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19 2V11.5263L27.7734 24.3017C29.1405 26.2923 27.7153 29 25.3004 29H6.69955C4.28471 29 2.8595 26.2923 4.22656 24.3017L13 11.5263V2H19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

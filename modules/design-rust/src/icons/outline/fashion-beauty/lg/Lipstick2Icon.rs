use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Lipstick2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Lipstick2Icon(props: Lipstick2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9.00002 26L9 20H19L19 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 36H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 15L10 11C10 9.11146 10.8892 7.33313 12.4 6.2L14.8 4.4C16.1185 3.41115 18 4.35191 18 6L18 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 40.5C27 41.8807 28.1193 43 29.5 43H38.5C39.8807 43 41 41.8807 41 40.5L41 20H27L27 40.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.00002 40.5C7.00002 41.8807 8.11931 43 9.50002 43H18.5C19.8807 43 21 41.8807 21 40.5L21 26H7L7.00002 40.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

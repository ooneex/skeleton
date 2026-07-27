use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TabletMobileIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TabletMobileIcon(props: TabletMobileIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 37L10 37C7.23858 37 5 34.7614 5 32L5 9.99999C5 7.23857 7.23858 5 10 5L36 5C38.7614 5 41 7.23858 41 10L41 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40 18L29 18C27.3431 18 26 19.3431 26 21L26 41C26 42.6569 27.3431 44 29 44L40 44C41.6569 44 43 42.6569 43 41L43 21C43 19.3431 41.6569 18 40 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36.25 22.5L32.75 22.5C32.6119 22.5 32.5 22.3881 32.5 22.25C32.5 22.1119 32.6119 22 32.75 22L36.25 22C36.3881 22 36.5 22.1119 36.5 22.25C36.5 22.3881 36.3881 22.5 36.25 22.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11 22C11.5523 22 12 21.5523 12 21C12 20.4477 11.5523 20 11 20C10.4477 20 10 20.4477 10 21C10 21.5523 10.4477 22 11 22Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}

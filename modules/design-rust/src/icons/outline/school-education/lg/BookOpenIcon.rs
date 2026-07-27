use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookOpenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookOpenIcon(props: BookOpenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 40.5V41L24 10V10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 41C31.0005 36.9995 37.9995 36.9995 45 41V10.0003C37.9995 5.99989 31.0005 5.99989 24 10.0003C16.9995 5.99989 10.0005 5.99989 3 10.0003V41C10.0005 36.9995 16.9995 36.9995 24 41Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M30 16.5C32.8362 15.1345 36.5662 15.06 39.5 16.2763",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 23.5832C32.8362 22.2178 36.5662 22.1432 39.5 23.3596",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 30.6665C32.8362 29.301 36.5662 29.2265 39.5 30.4428",
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

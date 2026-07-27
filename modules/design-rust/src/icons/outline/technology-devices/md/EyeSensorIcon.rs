use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EyeSensorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EyeSensorIcon(props: EyeSensorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 15C23.7355 15 28 22 28 22C28 22 23.7355 29 16 29C8.26448 29 4 22 4 22C4 22 8.26448 15 16 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 25C17.6569 25 19 23.6569 19 22C19 20.3431 17.6569 19 16 19C14.3431 19 13 20.3431 13 22C13 23.6569 14.3431 25 16 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25.8995 7.1005C23.366 4.567 19.866 3 16 3C12.134 3 8.63403 4.567 6.10052 7.1005",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22.364 10.636C20.7353 9.00736 18.4853 8 16 8C13.5147 8 11.2647 9.00736 9.63605 10.636",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SwissKnifeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SwissKnifeIcon(props: SwissKnifeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 18V9C21 5.68629 23.6863 3 27 3H28V25.5V24.1875",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 18V15.5L9.94028 15.4851C8.79997 15.2 8 14.1754 8 13V13C8 11.8246 8.79997 10.8 9.94028 10.5149L10 10.5V9C10 7.34315 8.65685 6 7 6H4V25.5V24.1429",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 29L12 27H16V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.5 29H24.5C26.433 29 28 27.433 28 25.5C28 23.567 26.433 22 24.5 22H7.5C5.567 22 4 23.567 4 25.5C4 27.433 5.567 29 7.5 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

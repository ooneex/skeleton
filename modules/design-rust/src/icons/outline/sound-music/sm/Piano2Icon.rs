use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Piano2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Piano2Icon(props: Piano2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 15V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M12 15V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 15V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 21L19 21C20.1046 21 21 20.1046 21 19L21 11.4903C21 10.0031 20.0484 8.68279 18.6375 8.21251L17.186 7.72866C15.7754 7.25846 14.5795 6.29916 13.8145 5.02415L13.6739 4.78991C12.6354 3.05906 10.7649 2 8.74643 2C5.57276 2 3 4.57276 3 7.74643L3 19C3 20.1046 3.89543 21 5 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 15H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

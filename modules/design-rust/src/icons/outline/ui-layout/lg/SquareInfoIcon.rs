use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareInfoIcon(props: SquareInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 35V22.5C24 21.1193 22.8807 20 21.5 20H19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 15C24.5523 15 25 14.5523 25 14C25 13.4477 24.5523 13 24 13C23.4477 13 23 13.4477 23 14C23 14.5523 23.4477 15 24 15Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M38 5H10C7.23858 5 5 7.23858 5 10V38C5 40.7614 7.23858 43 10 43H38C40.7614 43 43 40.7614 43 38V10C43 7.23858 40.7614 5 38 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

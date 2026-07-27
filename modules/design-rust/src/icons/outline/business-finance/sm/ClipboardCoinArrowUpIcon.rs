use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClipboardCoinArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClipboardCoinArrowUpIcon(props: ClipboardCoinArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 16H8C10.2091 16 12 14.2091 12 12V11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18.5 23C20.9853 23 23 20.9853 23 18.5C23 16.0147 20.9853 14 18.5 14C16.0147 14 14 16.0147 14 18.5C14 20.9853 16.0147 23 18.5 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18.5 18V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 11L12 8.5L14 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 3L6 3C4.89543 3 4 3.89543 4 5L4 20C4 21.1046 4.89543 22 6 22L10.5 22M16 3L18 3C19.1046 3 20 3.89543 20 5L20 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 5V2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2V5H8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

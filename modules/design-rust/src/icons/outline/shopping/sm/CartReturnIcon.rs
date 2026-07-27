use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartReturnIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartReturnIcon(props: CartReturnIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 19.5L13 17L15.5 14.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 23V23C20.6569 23 22 21.6569 22 20V20C22 18.3431 20.6569 17 19 17H13H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.821 6H22L20.565 13.1749M1 2H4L5.75469 14.2828C5.89545 15.2681 6.73929 16 7.73459 16H8.75561",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 22C6.55228 22 7 21.5523 7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
            }
        }
    }
}

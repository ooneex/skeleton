use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartMoneyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartMoneyIcon(props: CartMoneyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4.821 6H22L21.3348 9.32592M1 2H4L5.75469 14.2828C5.89545 15.2681 6.73929 16 7.73459 16H12",
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
            path {
                d: "M19 22V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 13V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 14L18 14C16.8954 14 16 14.8954 16 16V16C16 17.1046 16.8954 18 18 18H20C21.1046 18 22 18.8954 22 20V20C22 21.1046 21.1046 22 20 22H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

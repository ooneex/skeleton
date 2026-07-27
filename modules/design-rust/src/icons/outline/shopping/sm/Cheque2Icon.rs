use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cheque2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cheque2Icon(props: Cheque2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.5 7H2V21H19C20.6569 21 22 19.6569 22 18V5V5.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 16H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 12H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.5 7H20C21.1046 7 22 6.10457 22 5V5C22 3.89543 21.1046 3 20 3H15V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 11L7.5 11C6.67157 11 6 11.6716 6 12.5V12.5C6 13.3284 6.67157 14 7.5 14H8.5C9.32843 14 10 14.6716 10 15.5V15.5C10 16.3284 9.32843 17 8.5 17H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

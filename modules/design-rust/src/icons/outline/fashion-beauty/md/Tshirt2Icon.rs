use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tshirt2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tshirt2Icon(props: Tshirt2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.3889 4L21.7778 3H10.2222L6.61108 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 16H3V8.04325C3 6.24507 4.19992 4.6679 5.93294 4.1882L9.46995 3.20918L10.0705 4.72407C11.034 7.15423 13.3833 8.75003 15.9975 8.75003V8.75003C18.6142 8.75003 20.9652 7.1512 21.927 4.71766L22.5246 3.20532L26.0684 4.1875C27.8007 4.66764 29 6.2445 29 8.04218V16H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 13V29H24V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

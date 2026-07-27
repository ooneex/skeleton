use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Language2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Language2Icon(props: Language2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 29V27.0427H6.60851C7.98276 26.9839 9.12308 26.0141 9.33505 24.7239L10 20.5L11.5977 20.0435C12.553 19.7706 12.9838 18.6612 12.4631 17.8151L9.5 13L9.45991 12.3149C9.2024 7.91495 7.15203 5.30962 4 3.83144V4.00001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M31 23.5L31 12.5C31 11.6716 30.3284 11 29.5 11L18.5 11C17.6716 11 17 11.6716 17 12.5L17 21L15 23.5556L15 25L29.5 25C30.3284 25 31 24.3284 31 23.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 16H27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 20H22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

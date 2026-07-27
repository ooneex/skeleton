use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartArrowIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartArrowIcon(props: HeartArrowIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23.0001 0.99999L18.5001 5.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 1L23 3L21.5 2.5L21 1L23 1Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11.5 21C13.6071 20.0588 21 14.8428 21 10.0616C21 7.26635 18.7086 5 15.8852 5C14.0232 5 12.6324 6.15577 11.5 7.45271C10.3695 6.15388 8.9768 5 7.1148 5C4.2895 5 2 7.26635 2 10.0616C2 14.8428 9.3929 20.0588 11.5 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 13L4 20L4.31902 19.681",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M1 20H4.00004V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

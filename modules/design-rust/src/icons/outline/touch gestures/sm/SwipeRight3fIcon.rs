use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SwipeRight3fIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SwipeRight3fIcon(props: SwipeRight3fIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 5L21 5L20.5 5.00001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 8L21 5.00003L18 2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.5 21V16.5C14.5 15.1193 15.6193 14 17 14V14C18.3807 14 19.5 15.1193 19.5 16.5V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.5 21V16.5C4.5 15.1193 5.61929 14 7 14V14C8.38071 14 9.5 15.1193 9.5 16.5V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.5 21V14.5C9.5 13.1193 10.6193 12 12 12V12V12C13.3807 12 14.5 13.1193 14.5 14.5V21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

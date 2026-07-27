use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EmptyIcon(props: EmptyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 37.3697L10.5634 37.4335C7.12602 33.9953 5 29.2459 5 24C5 13.5066 13.5066 5 24 5C29.2798 5 34.0567 7.15359 37.5 10.6303L37.437 10.5669",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 44L44 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M40.5 14.5728C42.0907 17.3509 43 20.5693 43 24C43 34.4934 34.4934 43 24 43C20.5693 43 17.3509 42.0907 14.5728 40.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

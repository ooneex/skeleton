use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cursor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cursor2Icon(props: Cursor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.00012 7.99991L33 14L26.2463 20.5894L37.8286 32.1718C39.3907 33.7338 39.3907 36.2665 37.8286 37.8286V37.8286C36.2665 39.3907 33.7339 39.3907 32.1718 37.8286L20.5895 26.2462L13.9999 32.9999L8.00012 7.99991Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

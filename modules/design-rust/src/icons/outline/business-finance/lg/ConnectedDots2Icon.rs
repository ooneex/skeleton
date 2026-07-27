use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectedDots2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectedDots2Icon(props: ConnectedDots2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.7499 37H14.9067H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19.7348 13.9597L20 13.5L15.0781 22.0312",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M33.0781 22.6406L37.8185 31.1733L37.7533 31.0559",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 15C27.3137 15 30 12.3137 30 9C30 5.68629 27.3137 3 24 3C20.6863 3 18 5.68629 18 9C18 12.3137 20.6863 15 24 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M39 43C42.3137 43 45 40.3137 45 37C45 33.6863 42.3137 31 39 31C35.6863 31 33 33.6863 33 37C33 40.3137 35.6863 43 39 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 43C12.3137 43 15 40.3137 15 37C15 33.6863 12.3137 31 9 31C5.68629 31 3 33.6863 3 37C3 40.3137 5.68629 43 9 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

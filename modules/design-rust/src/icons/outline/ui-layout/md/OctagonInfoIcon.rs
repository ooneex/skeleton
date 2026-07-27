use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OctagonInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OctagonInfoIcon(props: OctagonInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.799 2H10.201L2 10.201V21.799L10.201 30H21.799L30 21.799V10.201L21.799 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 23V14.5C16 13.672 15.328 13 14.5 13H13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 9C16.2761 9 16.5 8.77614 16.5 8.5C16.5 8.22386 16.2761 8 16 8C15.7239 8 15.5 8.22386 15.5 8.5C15.5 8.77614 15.7239 9 16 9Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
        }
    }
}

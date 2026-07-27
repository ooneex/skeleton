use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HdmiIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HdmiIcon(props: HdmiIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6 9L6 2L18 2L18 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 9V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 9V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 9L4 9L4 14.2602C4 14.7376 4.17078 15.1992 4.48148 15.5617L6.51851 17.9383C6.82921 18.3008 7 18.7624 7 19.2398L7 22L17 22L17 19.2398C17 18.7624 17.1708 18.3008 17.4815 17.9383L19.5185 15.5617C19.8292 15.1992 20 14.7376 20 14.2602L20 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

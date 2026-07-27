use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RotateObjClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RotateObjClockwiseIcon(props: RotateObjClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 9L25 9C26.6569 9 28 10.3431 28 12L28 26C28 27.6569 26.6569 29 25 29L11 29C9.34315 29 8 27.6569 8 26L8 12C8 10.3431 9.34315 9 11 9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 1.5L15.5 5C14.9953 5 12.5235 5 10.0002 5C6.68649 5 4 7.68629 4 11V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

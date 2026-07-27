use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VibranceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VibranceIcon(props: VibranceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.9999 3.5L30 28H2L15.9999 3.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.3431 16 13 17.3431 13 19C13 20.6569 14.3431 22 16 22Z",
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

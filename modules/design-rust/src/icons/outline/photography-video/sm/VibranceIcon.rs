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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 3.5L22 20H2L12 3.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M12 15C12.4142 15 12.75 14.6642 12.75 14.25C12.75 13.8358 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.8358 11.25 14.25C11.25 14.6642 11.5858 15 12 15Z",
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

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VignetteIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VignetteIcon(props: VignetteIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 18L22 6C22 4.89543 21.1046 4 20 4L4 4C2.89543 4 2 4.89543 2 6L2 18C2 19.1046 2.89543 20 4 20L20 20C21.1046 20 22 19.1046 22 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 16C15.3137 16 18 14.2091 18 12C18 9.79086 15.3137 8 12 8C8.68629 8 6 9.79086 6 12C6 14.2091 8.68629 16 12 16Z",
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

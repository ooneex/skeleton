use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoPlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoPlayIcon(props: VideoPlayIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H16C17.1046 19 18 18.1046 18 17V15.5L22 17V7L18 8.5V7C18 5.89543 17.1046 5 16 5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 8.5L14 12L8 15.5V8.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}

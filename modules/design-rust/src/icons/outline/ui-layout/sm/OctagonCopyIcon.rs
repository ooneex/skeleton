use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OctagonCopyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OctagonCopyIcon(props: OctagonCopyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.8 5L15 9.18728V14.8L10.8 19H5.2L1 14.8V9.2L5.2 5H10.8Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16.5 5H18.8L23 9.18728V14.8L18.8 19H16.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

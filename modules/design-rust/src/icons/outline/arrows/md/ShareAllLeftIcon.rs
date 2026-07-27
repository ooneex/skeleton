use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareAllLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareAllLeftIcon(props: ShareAllLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20 5.90498L9 16L20 26.095V19.3649L22.3651 19.3649C26.5818 19.365 30 22.7832 30 26.9999V21.6349C30 16.6644 25.9706 12.635 21.0001 12.6349L20 12.6349V5.90498Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 5.90479L2 15.9998L13 26.0948",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

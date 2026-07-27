use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartsSuitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartsSuitIcon(props: HeartsSuitIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 43C28.6578 40.8824 45 29.1463 45 18.3887C45 12.0993 39.9348 7 33.6936 7C29.5776 7 26.5032 9.60047 24 12.5186C21.501 9.59624 18.4224 7 14.3064 7C8.061 7 3 12.0993 3 18.3887C3 29.1463 19.3422 40.8824 24 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

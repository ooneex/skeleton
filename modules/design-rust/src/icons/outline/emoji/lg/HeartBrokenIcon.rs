use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartBrokenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartBrokenIcon(props: HeartBrokenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.4007 8.15563C18.6481 6.86112 16.6446 6 14.3064 6C8.061 6 3 11.2409 3 17.7051C3 28.7615 19.3422 40.8235 24 43C28.6578 40.8235 45 28.7615 45 17.7051C45 11.2409 39.9348 6 33.6936 6C29.5776 6 26.5032 8.67271 24 11.6719L19 18L29 22L23 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

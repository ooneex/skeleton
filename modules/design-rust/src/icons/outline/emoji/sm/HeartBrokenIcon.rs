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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11.5 15L14 12L9.5 9.5L12 6.606C13.192 5.228 14.656 4 16.616 4C19.588 4 22 6.408 22 9.378C22 14.458 14.218 20 12 21C9.782 20 2 14.458 2 9.378C2 6.408 4.41 4 7.384 4C7.87232 4 8.32998 4.0761 8.76035 4.21173",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

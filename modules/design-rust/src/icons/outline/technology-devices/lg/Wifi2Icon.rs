use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Wifi2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Wifi2Icon(props: Wifi2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34 10.3499C16 15 32 33 14 37.6502",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M31 10H17C9.26801 10 3 16.268 3 24C3 31.732 9.26801 38 17 38H31C38.732 38 45 31.732 45 24C45 16.268 38.732 10 31 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

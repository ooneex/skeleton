use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LeafIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LeafIcon(props: LeafIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.8014 17.1145V17.1145C12.9041 21.5685 8.05682 25.0911 2.61695 27.4225L2.00004 27.6868",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.63027 25.483C12.2048 29.9148 19.3312 30.1961 23.5475 26.1113C32.2725 17.6586 27.9088 3 27.9088 3C27.9088 3 25.1907 5.75911 20.6764 6.42421C15.4716 7.19102 10.778 6.38437 6.98167 10.0623C2.76535 14.147 3.05574 21.0511 7.63027 25.483Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}

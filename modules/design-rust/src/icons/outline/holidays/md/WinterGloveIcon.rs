use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WinterGloveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WinterGloveIcon(props: WinterGloveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 24H16.6667H26",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 15.5V11C8 6.02944 12.0294 2 17 2C21.9706 2 26 6.02944 26 11V29H8V23.3986L2.7899 17.9884C1.79322 16.9535 1.80072 15.3134 2.80684 14.2877C3.79137 13.2839 5.38774 13.2217 6.44735 14.1459L8 15.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 12L21 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.0043 8.53838L19.0043 15.4666",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.9957 15.4666L18.9957 8.53836",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}

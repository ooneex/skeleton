use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FeatherIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FeatherIcon(props: FeatherIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,18l6.8212-2.0464c1.3265-3.4375,2.0916-7.7566,2.1788-12.9536C10.375,3.3125,3,12.3125,7.2247,24.7754c6.8912,2.3359,12.7198,1.1184,16.6102-3.5796l-3.8349-3.1958Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "17",
                y1: "15",
                x2: "3",
                y2: "29",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}

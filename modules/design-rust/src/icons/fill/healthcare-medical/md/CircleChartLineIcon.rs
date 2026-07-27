use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleChartLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleChartLineIcon(props: CircleChartLineIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m8.42,15l4.708-8.24,6,14,3.292-5.76h8.529c-.518-7.804-7.016-14-14.949-14S1.569,7.196,1.051,15h7.369Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m23.58,17l-4.708,8.24-6-14-3.292,5.76H1.051c.518,7.804,7.016,14,14.949,14s14.431-6.196,14.949-14h-7.369Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}

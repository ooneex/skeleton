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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m16.618,13l-2.618,5.236-4-8-1.382,2.764H1.051c.508,5.598,5.221,10,10.949,10s10.442-4.402,10.949-10h-6.331Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m7.382,11l2.618-5.236,4,8,1.382-2.764h7.568c-.508-5.598-5.221-10-10.949-10S1.558,5.402,1.051,11h6.331Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartPieIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartPieIcon(props: ChartPieIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m7.868,16.175c-.544-.373-.868-.989-.868-1.648V5.525C3.51,6.764,1,10.09,1,14c0,4.963,4.037,9,9,9,1.909,0,3.766-.635,5.282-1.733l-7.414-5.092Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m10,1h-1v13.526l11.16,7.665.565-.827c1.467-2.143,2.274-4.759,2.274-7.364,0-7.168-5.832-13-13-13Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}

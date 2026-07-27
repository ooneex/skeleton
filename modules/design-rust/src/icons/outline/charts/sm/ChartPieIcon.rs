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
                d: "m16.6,18.5c-1.4,2.1-3.9,3.5-6.6,3.5-4.4,0-8-3.6-8-8S5.6,6,10,6",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m19.9,20.8c1.3-1.9,2.1-4.3,2.1-6.8,0-6.6-5.4-12-12-12v12l9.9,6.8Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}

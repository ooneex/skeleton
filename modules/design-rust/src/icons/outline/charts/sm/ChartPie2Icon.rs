use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartPie2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartPie2Icon(props: ChartPie2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,5c4.971,0,9,4.029,9,9s-4.029,9-9,9-9-4.029-9-9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m10,1C5.029,1,1,5.029,1,10h9V1Z",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}

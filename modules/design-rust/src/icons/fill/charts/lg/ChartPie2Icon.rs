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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 21C2 10.5067 10.5067 2 21 2H22V22H2V21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M8.10401 25C8.03525 25.6573 8 26.3245 8 27C8 37.4934 16.5066 46 27 46C37.4934 46 46 37.4934 46 27C46 16.5066 37.4934 8 27 8C26.3245 8 25.6573 8.03525 25 8.10401V25H8.10401Z",
                fill: "currentColor",
            }
        }
    }
}

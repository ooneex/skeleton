use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartActivity2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartActivity2Icon(props: ChartActivity2IconProps) -> Element {
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
                d: "M29.4926 2.15002L38.2136 28.8261L41.0252 22.5H46V25.5H42.9748L37.7864 37.1739L29.5074 11.85L18.5074 45.85L9.78642 19.1739L6.97483 25.5H2V22.5H5.0252L10.2136 10.8261L18.4926 36.15L29.4926 2.15002Z",
                fill: "currentColor",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartLine2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartLine2Icon(props: ChartLine2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.6978 7.71633L14.9334 16.2539L9.06664 10.5395L1.69771 17.7164L0.302292 16.2836L9.0667 7.74764L14.9333 13.4619L22.3022 6.28369L23.6978 7.71633Z",
                fill: "currentColor",
            }
        }
    }
}

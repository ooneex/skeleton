use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsReduceXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsReduceXIcon(props: ArrowsReduceXIconProps) -> Element {
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
                d: "M-4.39783e-06 11L9 11L9 13L-5.15647e-06 13L-4.39783e-06 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 11L15.0001 11L15 13L16.5 13L24 13L24 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3.34311 16.2426L7.58575 12L3.34311 7.75737L4.75732 6.34315L10.4142 12L4.75732 17.6569L3.34311 16.2426Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20.6569 16.2426L16.4142 12L20.6569 7.75737L19.2427 6.34315L13.5858 12L19.2427 17.6569L20.6569 16.2426Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

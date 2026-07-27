use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandXIcon(props: ArrowsExpandXIconProps) -> Element {
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
                d: "M10 11L3 11L1.5 11L1.5 13L10 13L10 11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.9853 11L20.5001 11L22.4853 11L22.4853 13L13.9853 13L13.9853 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.15689 16.2426L2.91425 12L7.15689 7.75737L5.74268 6.34315L0.0858221 12L5.74268 17.6569L7.15689 16.2426Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.8285 16.2426L21.0711 12L16.8285 7.75737L18.2427 6.34315L23.8995 12L18.2427 17.6569L16.8285 16.2426Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

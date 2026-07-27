use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AxisZIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AxisZIcon(props: AxisZIconProps) -> Element {
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
                d: "M21 2V27H46V30H20.1213L6.56065 43.5607L4.43933 41.4393L18 27.8787V2H21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 27V44H21V41H7V27H4Z",
                fill: "currentColor",
            }
        }
    }
}

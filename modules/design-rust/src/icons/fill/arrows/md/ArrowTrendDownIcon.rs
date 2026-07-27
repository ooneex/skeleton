use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTrendDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTrendDownIcon(props: ArrowTrendDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.0002 8.58582L30.7073 22.2929L29.293 23.7071L17.0002 11.4142L9.00015 19.4142L0.0859375 10.5L1.50015 9.08582L9.00015 16.5858L17.0002 8.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 24H31V13H29V22H20V24Z",
                fill: "currentColor",
            }
        }
    }
}

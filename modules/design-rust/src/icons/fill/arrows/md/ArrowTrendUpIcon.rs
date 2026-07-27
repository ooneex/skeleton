use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTrendUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTrendUpIcon(props: ArrowTrendUpIconProps) -> Element {
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
                d: "M17.0002 23.4142L30.7073 9.70708L29.293 8.29287L17.0002 20.5858L9.00015 12.5858L0.0859375 21.5L1.50015 22.9142L9.00015 15.4142L17.0002 23.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 8H31V19H29V10H20V8Z",
                fill: "currentColor",
            }
        }
    }
}

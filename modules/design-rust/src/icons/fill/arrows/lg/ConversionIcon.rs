use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConversionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConversionIcon(props: ConversionIconProps) -> Element {
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
                d: "M27 3V17H4V20H45.4142L27 3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 45V31H44V28H2.58578L21 45Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

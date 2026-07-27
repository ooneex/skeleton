use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextScaleYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextScaleYIcon(props: TextScaleYIconProps) -> Element {
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
                d: "M8 5V20H6V5H8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 5H13V7H1V5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 2.5L20 21.5L18 21.5L18 2.5L20 2.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0858 4.99997L19 1.08576L22.9142 4.99997L21.5 6.41418L19 3.91418L16.5 6.41418L15.0858 4.99997Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0858 19L19 22.9142L22.9142 19L21.5 17.5858L19 20.0858L16.5 17.5858L15.0858 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

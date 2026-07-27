use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShowerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShowerIcon(props: ShowerIconProps) -> Element {
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
                d: "M25.5 1V7H22.5V1L25.5 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7.63371 15H40.3663C38.454 9.18367 32.3551 5 24 5C15.645 5 9.54597 9.18367 7.63371 15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5 46L19.5 42L16.5 42L16.5 46L19.5 46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.5 46L31.5 42L28.5 42L28.5 46L31.5 46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.5 32L16.5 36L19.5 36L19.5 32L16.5 32Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28.5 32L28.5 36L31.5 36L31.5 32L28.5 32Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.5 38L22.5 42L25.5 42L25.5 38L22.5 38Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.5 38L10.5 42L13.5 42L13.5 38L10.5 38Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34.5 38L34.5 42L37.5 42L37.5 38L34.5 38Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.5 28L22.5 32L25.5 32L25.5 28L22.5 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.5 28L10.5 32L13.5 32L13.5 28L10.5 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34.5 28L34.5 32L37.5 32L37.5 28L34.5 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 20C3 18.8954 3.89543 18 5 18H43C44.1046 18 45 18.8954 45 20V23C45 24.1046 44.1046 25 43 25H5C3.89543 25 3 24.1046 3 23V20Z",
                fill: "currentColor",
            }
        }
    }
}

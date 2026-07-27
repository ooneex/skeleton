use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OpenShelfDresserIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OpenShelfDresserIcon(props: OpenShelfDresserIconProps) -> Element {
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
                d: "M13 2V19H11V2H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 14H4V12H20V14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 19H4V17H20V19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 9H4V7H20V9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 22L3 5C3 3.34315 4.34315 2 6 2L18 2C19.6569 2 21 3.34315 21 5L21 22L19 22L19 5C19 4.44772 18.5523 4 18 4L6 4C5.44772 4 5 4.44771 5 5L5 22L3 22Z",
                fill: "currentColor",
            }
        }
    }
}

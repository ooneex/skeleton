use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FahrenheitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FahrenheitIcon(props: FahrenheitIconProps) -> Element {
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
                d: "M4 2C3.44772 2 3 2.44772 3 3C3 3.55228 3.44772 4 4 4C4.55228 4 5 3.55228 5 3C5 2.44772 4.55228 2 4 2ZM1 3C1 1.34315 2.34315 0 4 0C5.65685 0 7 1.34315 7 3C7 4.65685 5.65685 6 4 6C2.34315 6 1 4.65685 1 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 5H20V7H11V22H9V5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 12H17V14H9V12Z",
                fill: "currentColor",
            }
        }
    }
}

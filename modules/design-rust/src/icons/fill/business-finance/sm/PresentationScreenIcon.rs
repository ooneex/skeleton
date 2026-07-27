use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PresentationScreenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PresentationScreenIcon(props: PresentationScreenIconProps) -> Element {
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
                d: "M17.7226 23.8868L19.3867 22.7774L15.832 17.4453L14.1679 18.5547L17.7226 23.8868Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.27735 23.8868L4.61325 22.7774L8.16795 17.4453L9.83205 18.5547L6.27735 23.8868Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 17V22H11V17H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 0V4H11V0H13Z",
                fill: "currentColor",
            }
            path {
                d: "M5 2C3.34315 2 2 3.34315 2 5V15H22V5C22 3.34315 20.6569 2 19 2H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 17H24V19H0V17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.7226 30.8868L25.3867 29.7774L21.832 24.4453L20.1679 25.5547L23.7226 30.8868Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.27735 30.8868L6.61325 29.7774L10.168 24.4453L11.8321 25.5547L8.27735 30.8868Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 24V29H15V24H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2.21924 26H29.7808L30.7808 21H1.21924L2.21924 26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 7C27 5.89543 26.1046 5 25 5L7 5C5.89543 5 5 5.89543 5 7L5 19L3 19L3 7C3 4.79086 4.79086 3 7 3L25 3C27.2091 3 29 4.79086 29 7L29 19L27 19L27 7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 0V4H15V0H17Z",
                fill: "currentColor",
            }
        }
    }
}

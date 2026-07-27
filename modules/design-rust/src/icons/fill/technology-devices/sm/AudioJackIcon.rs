use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AudioJackIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AudioJackIcon(props: AudioJackIconProps) -> Element {
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
                d: "M17 5H24V7H17V5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 10C2 7.23858 4.23858 5 7 5H9V7H7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13H17.5C19.9853 13 22 15.0147 22 17.5C22 19.9853 19.9853 22 17.5 22H5V20H17.5C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15H7C4.23858 15 2 12.7614 2 10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 6C7 3.79086 8.79086 2 11 2H19V10H11C8.79086 10 7 8.20914 7 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Microphone2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Microphone2Icon(props: Microphone2IconProps) -> Element {
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
                d: "M17 6L17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11L7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 10L21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11L3 10L5 10L5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11L19 10L21 10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 18V23H11V18H13Z",
                fill: "currentColor",
            }
        }
    }
}

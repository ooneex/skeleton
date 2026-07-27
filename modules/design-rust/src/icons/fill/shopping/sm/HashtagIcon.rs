use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HashtagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HashtagIcon(props: HashtagIconProps) -> Element {
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
                d: "M2 15H21V17H2V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 7H22V9H3V7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.6373 1.15947L7.34065 23.1373L5.36277 22.8407L8.65946 0.862793L10.6373 1.15947Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.6373 1.15947L15.3406 23.1373L13.3628 22.8407L16.6595 0.862793L18.6373 1.15947Z",
                fill: "currentColor",
            }
        }
    }
}

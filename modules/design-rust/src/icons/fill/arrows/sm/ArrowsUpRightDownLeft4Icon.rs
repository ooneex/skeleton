use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsUpRightDownLeft4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsUpRightDownLeft4Icon(props: ArrowsUpRightDownLeft4IconProps) -> Element {
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
                d: "M18 16.0807L23.1008 12L18.0002 7.91939L18 16.0807Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 16.0807L0.899189 12L5.99981 7.91939L6 16.0807Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.9497 11L20 11L20 13L14.9497 13L14.9497 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.05029 11L3.51476 11L3.51476 13L9.05029 13L9.05029 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.91943 18L12.0001 23.1008L16.0807 18.0002L7.91943 18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.91943 6L12.0001 0.899189L16.0807 5.99981L7.91943 6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 14.9497L13 20L11 20L11 14.9497L13 14.9497Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 9.05017L13 3.51464L11 3.51464L11 9.05017L13 9.05017Z",
                fill: "currentColor",
            }
        }
    }
}

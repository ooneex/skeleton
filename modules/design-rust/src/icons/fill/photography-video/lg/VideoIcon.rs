use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VideoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VideoIcon(props: VideoIconProps) -> Element {
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
                d: "M9 4H30V12H27V7H9V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 30C12 28.8954 12.8954 28 14 28C15.1046 28 16 28.8954 16 30C16 31.1046 15.1046 32 14 32C12.8954 32 12 31.1046 12 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 30C19 28.8954 19.8954 28 21 28C22.1046 28 23 28.8954 23 30C23 31.1046 22.1046 32 21 32C19.8954 32 19 31.1046 19 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 16C2 12.6863 4.68629 10 8 10H31C34.3137 10 37 12.6863 37 16V36C37 39.3137 34.3137 42 31 42H8C4.68629 42 2 39.3137 2 36V16ZM28 23H7V37H28V23ZM7 19V16H13V19H7Z",
                fill: "currentColor",
            }
            path {
                d: "M40 36.3662L46 39.6995V12.3005L40 15.6338V36.3662Z",
                fill: "currentColor",
            }
        }
    }
}

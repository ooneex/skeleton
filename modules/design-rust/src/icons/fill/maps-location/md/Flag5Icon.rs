use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag5IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag5Icon(props: Flag5IconProps) -> Element {
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
                d: "M8 4H29.641L24.7406 13.5L29.641 23H8V4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 2V30H4V2H6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

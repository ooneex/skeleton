use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag4Icon(props: Flag4IconProps) -> Element {
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
                d: "M8 3.47681L31.1304 13.5L8 23.5232V3.47681Z",
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

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft3Icon(props: ShareLeft3IconProps) -> Element {
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
                d: "M12.0001 1.77313V7.99998C17.5229 7.99998 22.0001 12.4771 22.0001 18V22H21.0001C21.0001 18.6863 18.3138 16 14.0001 16H12.0001V22.2268L0.494873 12L12.0001 1.77313Z",
                fill: "currentColor",
            }
        }
    }
}

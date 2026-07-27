use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StarIcon(props: StarIconProps) -> Element {
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
                d: "M24 3L28.8937 18.695H45L32.174 28.372L37.2312 44L24 34.3481L10.7688 44L15.826 28.372L3 18.695H19.1063L24 3Z",
                fill: "currentColor",
            }
        }
    }
}

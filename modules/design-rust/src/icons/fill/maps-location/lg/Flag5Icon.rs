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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 6H45.7232L37.1518 21L45.7232 36H11V6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 2V46H5V2H8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Ruler2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Ruler2Icon(props: Ruler2IconProps) -> Element {
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
                d: "M7 24H17V0H7V24ZM9 21V19H13V21H9ZM9 5V3H13V5H9ZM9 9V7H11.0002V9H9ZM9 11V13H13V11H9ZM9 15H11V17H9V15Z",
                fill: "currentColor",
            }
        }
    }
}

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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 2H32L32 46H16V2ZM19 30V33H23V30H19ZM19 37V40H26V37H19ZM19 25.5V22.5H26V25.5H19ZM19 18H23V15H19V18ZM19 11L26 11V8H19V11Z",
                fill: "currentColor",
            }
        }
    }
}

use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Filter2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Filter2Icon(props: Filter2IconProps) -> Element {
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
                d: "M2.08618 2H45.9138L29 26.3136V46H19V26.3136L2.08618 2Z",
                fill: "currentColor",
            }
        }
    }
}

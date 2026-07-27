use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MouseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MouseIcon(props: MouseIconProps) -> Element {
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
                d: "M21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14V10C3 5.02943 7.02944 1 12 1C16.9706 1 21 5.02944 21 10L21 14ZM13 6H11V11H13V6Z",
                fill: "currentColor",
            }
        }
    }
}
